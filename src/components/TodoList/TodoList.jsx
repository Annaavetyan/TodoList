import React from "react";

const TodoList = (props)=> {

    let todoItem = props.posts.map((post)=>{

        return (

            <div className= "todoItem">
                <span className= "todoTitle">{post.name}</span>
                <span>{post.endDate}</span>
            </div>
        )
    })
    return (
        <div className= "todoList">
            {todoItem}
        </div>
    )
}

export default TodoList;