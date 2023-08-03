import * as actionTypes from "../actions/type";
export const todosReducers =(state=[],action)=>{
    switch (action.type) {
        case actionTypes.ADDNEW_TODO:
            return [action.paylod,...state]
          
        case actionTypes.GETALL_TODO:
            return action.paylod
        
        case actionTypes.TOGGLE_TODO:
            return state.map(todo=>(
                todo._id ===action.paylod._id ? {...todo,done:!todo.done}:todo
            ))
        case actionTypes.UPDATE_TODO:
            return state.map(todo=>(
                todo._id ===action.paylod._id ? {...todo,data:action.paylod.data}:todo
            ))
        case actionTypes.DELETE_TODO:
            return state.filter(todo=> todo._id !== action.paylod._id)
    
        default:
            return state;
    }

}