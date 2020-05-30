import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

class Home extends Component {
    state = {
        tasks: [
            {name: 'Finish planr. UI',category:"wip"},
            {name: 'Find an apt in Chicago', category:"wip"},
            {name: 'Read Pachinko', category:"complete"}
          ]
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name === id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }

    render() {
        var tasks = {
            wip: [],
            inProgress: [],
            complete: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <li style={{marginTop:'30px',marginLeft: '20px',listStyleType:'none'}}>
                    <span key={t.name} 
                        onDragStart = {(e) => this.onDragStart(e, t.name)}
                        draggable
                        className="home_draggable"
                        style = {{backgroundColor: t.bgcolor}}
                    >
                        {t.name}
                    </span>                    
                </li>
            );
        });

        return (
            <div>

                <Navbar />

                <div className='home'>

                    <section className="home_buckets">

                        <div 
                            className="home_bucket"
                            onDragOver={(e)=>this.onDragOver(e)}
                            onDrop={(e)=>{this.onDrop(e, "wip")}}
                        >

                            <div className='home_title'>TO DO</div>
                            {tasks.wip}
                        </div>

                        <div 
                            className="home_bucket"
                            onDragOver={(e)=>this.onDragOver(e)}
                            onDrop={(e)=>this.onDrop(e, "complete")}
                        >

                            <div className='home_title'>IN PROGRESS</div>
                            {tasks.complete}
                        </div>

                        <div 
                            className="home_bucket"
                            onDragOver={(e)=>this.onDragOver(e)}
                            onDrop={(e)=>this.onDrop(e, "complete")}
                        >
                            <div className='home_title'>IN PROGRESS</div>
                            {tasks.complete}
                        </div>

                        <div 
                            className="home_bucket"
                            onDragOver={(e)=>this.onDragOver(e)}
                            onDrop={(e)=>this.onDrop(e, "complete")}
                        >
                            <div className='home_title'>IN PROGRESS</div>
                            {tasks.complete}
                        </div>

                        <div 
                            className="home_bucket"
                            onDragOver={(e)=>this.onDragOver(e)}
                            onDrop={(e)=>this.onDrop(e, "complete")}
                        >
                            <div className='home_title'>IN PROGRESS</div>
                            {tasks.complete}
                        </div>
                                            
                    </section>
                   
                </div>

                <Footer />

            </div>
        );
    }
}

export default Home;