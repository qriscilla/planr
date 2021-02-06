import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Tasks from './Tasks';

export default class Buckets extends Component {
    render() {
        return (
            <div className='home_buckets'>

                {/* Map out each bucket as a droppable */}
                {this.props.buckets.map(bucket => 
                    <Droppable  key={bucket.id} droppableId={`${bucket.id}`}>
                        {provided =>
                            <div 
                                ref={provided.innerRef} 
                                {...provided.droppableProps} 
                                className='home_bucket' >

                                <div className='home_title'>{bucket.title}</div>

                                <Tasks tasks={bucket.tasks} />

                                {provided.placeholder}

                            </div>
                        }
                    </Droppable>
                )} 

            </div> 
        );
    }
}