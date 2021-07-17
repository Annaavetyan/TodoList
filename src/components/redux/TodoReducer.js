
import React from "react";
const CREATE_NEW_POST = "CREATE_NEW_POST";
const CHANGE_INPUT_BOX= "CHANGE_INPUT_BOX";

let initialState = {
    posts:[],
}

const TodoReducer = (state = initialState,action)=> {
    if (action.type === CREATE_NEW_POST){
        debugger
        return {
            ...state,
            posts: [...state.posts,{name:action.name,endDate:action.endDate}]
        }
    } else if (action.type === CHANGE_INPUT_BOX) {
        return  {
            ...state,
            inputBox:action.inputBox,
        }
    }

    return state
}

export const createNewPost = (endDate,name)=> {
    return {
        type:CREATE_NEW_POST,
        name,
        endDate,
    }
}

export const changeInputBox = (inputBox)=> {
    return {
        type:CHANGE_INPUT_BOX,
        inputBox,
    }
}

export default TodoReducer;