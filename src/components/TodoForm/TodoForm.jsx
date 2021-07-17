import React from "react";
import plusIcon from "./../../assets/images/plus.svg";
import FormikContainer from "../FormContainer/FormikContainer";

const  TodoForm = (props)=> {

    return (
        <div className="container">
                <span onClick={()=>{props.changeInputBox(true)}} className={"mb-20 d-inline-block"}>
                    <img src={plusIcon} alt=""/>
                </span>
            {   props.inputBox?(
                <div>
                    <FormikContainer {...props}/>
                </div>
            ):""
            }
        </div>
    )
}

export default TodoForm;