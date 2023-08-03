import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { toggleTodo ,updateTodo,deleteTodo} from '../redux/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
const Todo = ({todo}) =>{
    const [editing,setEditing] = useState(false)
    const [text,setText]=useState(todo.data)

    const dispatch = useDispatch()
    const onFormSubmit=(e) =>{
        e.preventDefault();
        setEditing(prev=>!prev);
        
        dispatch(updateTodo(todo._id,text))
    }
    return(
        <li 
            className='task'
            onClick={()=>dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo.done?'line-through':'',
                color:  todo.done ? '#ff0000':''
            }}
        >
            <span style={{display: editing ? 'none' : '' }}>{todo.data} </span>
            <form
                onSubmit={onFormSubmit} 
                style={{display: editing ? 'inline' : 'none' }}
            >
                <input 
                    type="text" 
                    value={text}
                    className='edit-todo'
                    onChange={(e)=> setText(e.target.value)}
                />
            </form>

            <span className='icon' onClick={()=>dispatch(deleteTodo(todo._id)) }>
                <FontAwesomeIcon icon={faTrash} />
            </span>
            <span className='icon' onClick={()=> setEditing(prev=>!prev)}>
                <FontAwesomeIcon icon={faPen} />
            </span>
        </li>
    )
}

export default Todo;