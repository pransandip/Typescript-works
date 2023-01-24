import React, { FC, useEffect, useRef, useState } from 'react'
import { Todo } from '../models/models';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { Draggable } from 'react-beautiful-dnd';

interface Props {
    index: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todos: FC<Props> = ({ index, todo, todos, setTodos }) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])


    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault()
        setTodos(todos.map(item => item.id === id ? { ...item, todo: editTodo } : item))
        setEdit(false)
    }

    const handleDelete = (id: number) => {
        setTodos(todos?.filter(item => item.id !== id))
    }

    const handleDone = (id: number) => {
        setTodos(todos?.map(item => item.id === id ? { ...item, isDone: !item.isDone } : item))
    }


    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {(provided) => (
                <form
                    className='todos__single'
                    onSubmit={(e) => handleEdit(e, todo.id)}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {edit ? (
                        <input
                            ref={inputRef}
                            className='todos__single--text'
                            value={editTodo}
                            onChange={(e) => setEditTodo(e.target.value)} />
                    ) : (
                        todo.isDone ?
                            <s className="todos__single--text">{todo.todo}</s> :
                            <span className="todos__single--text">{todo.todo}</span>
                    )}
                    <div>
                        <span className="icon" onClick={() => {
                            if (!edit && !todo.isDone) {
                                setEdit(!edit)
                            }
                        }}>
                            <AiFillEdit />
                        </span>
                        <span className="icon" onClick={() => handleDelete(todo.id)}>
                            <AiFillDelete />
                        </span>
                        <span className="icon" onClick={() => handleDone(todo.id)}>
                            <MdDone />
                        </span>
                    </div>
                </form >
            )}
        </Draggable>
    )
}

export default Todos;