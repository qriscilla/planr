import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import { DragDropContext } from 'react-beautiful-dnd';
import Buckets from './Buckets';
import Footer from '../layout/Footer';

export default class Plan extends Component {
    onDragEnd = () => {
        console.log('Dragged something somewhere!');
    };

    render() {
        return (
            <>
                <Navbar />

                <div className='home'>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Buckets {...this.props} />
                    </DragDropContext>                    
                </div>

                <Footer />
            </>
        );
    }
}