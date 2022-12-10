import React, { useRef } from 'react'
import './styles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent<EventTarget>) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    // console.log(inputRef)
    return (
        <form className='input' onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur();
        }}>
            <input className='input__box'
                ref={inputRef}
                type='input'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder='Enter a task' />
            <button className='input_submit' type='submit'>GO</button>
        </form>
    )
}

export default InputField;