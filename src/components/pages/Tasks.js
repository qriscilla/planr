import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default class Tasks extends Component {
    render() {
        return (
            <>
                {/* Map out each task as a draggable */}
                {this.props.tasks.map((task, taskIndex) =>
                    <Draggable key={task.id} draggableId={`${task.id}`} index={taskIndex}>
                        {provided =>
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className='home_draggable' >

                                {task.title}

                                {provided.placeholder}

                            </div>
                        }
                    </Draggable>
                )}
            </>
        );
    }
}