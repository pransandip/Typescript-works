import React, { FC } from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../models/models';
import Todos from './Todos';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
    return (
        <div className="container">
            <Droppable droppableId="TodosList">
                {(provided, snapshot) => (
                    <div
                        className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ""}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <span className="todos__heading">Active Tasks</span>
                        {todos?.map((item, index) => (
                            <Todos
                                index={index}
                                todo={item}
                                todos={todos}
                                setTodos={setTodos}
                                key={item.id}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <Droppable droppableId="TodosRemove">
                {(provided, snapshot) => (
                    <div
                        className={`todos remove ${snapshot.isDraggingOver ? 'dragactive' : ""}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <span className="todos__heading">Completed Tasks</span>
                        {completedTodos?.map((item, index) => (
                            <Todos
                                index={index}
                                todo={item}
                                todos={completedTodos}
                                setTodos={setCompletedTodos}
                                key={item.id}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}

            </Droppable>
        </div>
    )
}

export default TodoList;