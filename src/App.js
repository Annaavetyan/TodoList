import React from 'react'
import './App.css';

import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import {connect} from "react-redux";
import {changeInputBox, createNewPost} from "./components/redux/TodoReducer";




class AppContainer extends React.Component {

    render() {
       return (
           <div className="App">
               <TodoForm {...this.props}/>
               <TodoList {...this.props}/>
           </div>
       )
    }
}
let mapStateToProps = (state)=> {
    return {
        posts: state.todoPage.posts,
        name:state.todoPage.name,
        endDate:state.todoPage.endDate,
        inputBox:state.todoPage.inputBox,
    }
}


export default connect(mapStateToProps,{createNewPost,changeInputBox})(AppContainer);
