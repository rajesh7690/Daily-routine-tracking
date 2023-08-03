import { useState } from "react"
import {useDispatch} from 'react-redux'
import { addnewTodo } from "../redux/actions"
const TodoForm = () => {

    const[text,setText]=useState("")
    const dispatch = useDispatch();



    const onFormSubmit = (e) =>{
        e.preventDefault();
        dispatch(addnewTodo(text));
        setText("")
    }

    const onInputChange=(e) =>{
        setText(e.target.value)
    }

    return(
        <form className="form" onSubmit={onFormSubmit}>
            <input 
                className="input"  
                placeholder="Add Work"
                onChange={onInputChange}
                value={text}
             />
        </form>

    )
}
export default TodoForm;