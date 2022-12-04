import React, { FC } from 'react'
import { Todo } from '../models/models';
import Todos from './Todos';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className='todos'>
            {todos?.map((item) => (
                <Todos
                    todo={item}
                    todos={todos}
                    setTodos={setTodos}
                    key={item.id}
                />
            ))}
        </div>
    )
}

export default TodoList;