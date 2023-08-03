import axios from 'axios';
import { ADDNEW_TODO } from './type';
import { GETALL_TODO,TOGGLE_TODO,UPDATE_TODO,DELETE_TODO,TOGGLE_TAB } from './type';
const API_URL = 'https://myserver-rajesh7690.onrender.com';
export const addnewTodo = (data)=>async (dispatch) =>{
    try {
        
        const response = await axios.post(`${API_URL}/todos`,{data})
        
        dispatch({type:ADDNEW_TODO,paylod:response.data})
    } catch (error) {
        console.log('error while callimg addnewTodo',error.message);
    }
}

export const getAllTodos = ()=>async (dispatch) =>{
    try {
        
        const getres = await axios.get(`${API_URL}/todos`)
        //console.log(getres)
        dispatch({type:GETALL_TODO,paylod:getres.data})
    } catch (error) {
        console.log('error while callimg getAllTodos',error.message);
    }
}

export const toggleTodo = (id)=>async (dispatch) =>{
    try {
        
        const togres = await axios.get(`${API_URL}/todos/${id}`)
        //console.log(getres)
        dispatch({type:TOGGLE_TODO,paylod:togres.data})
    } catch (error) {
        console.log('error while callimg toggleTodos',error.message);
    }
}

export const updateTodo = (id,text)=>async (dispatch) =>{
    try {
        
        const togres = await axios.put(`${API_URL}/todos/${id}`,{text})
        
        dispatch({type:UPDATE_TODO,paylod:togres.data})
    } catch (error) {
        console.log('error while callimg updateTodos',error.message);
    }
}

export const deleteTodo = (id)=>async (dispatch) =>{
    try {
        
        const togres = await axios.delete(`${API_URL}/todos/${id}`)
        
        dispatch({type:DELETE_TODO,paylod:togres.data})
    } catch (error) {
        console.log('error while callimg deleteTodos',error.message);
    }
}

export const toggleTab = (tab)=> async (dispatch) =>{
    dispatch({type : TOGGLE_TAB , selected : tab})
}