import React, { useState } from "react";

const Task = (props) =>{
    console.log(props.task.complete);
    const [key] =useState(props.task.key);

    const deleteTask = (event) =>{
        event.preventDefault();
        console.log(key);
        props.deleteTask(key);
    }

    return (
        <div className="singleTask">
            <form onSubmit={deleteTask} className="singleTask ">
                <h1 style={props.task.complete
                    ? {textDecoration: "line-through"} 
                    : {textDecoration: "none"}}>
                    {props.task.taskDesc} 
                </h1>
                <div className="checkBoxBox">
                <label htmlFor="cb">Completed?</label>
                <input name="cb" onChange = {()=>props.completedTask(key)}
                    checked = {props.task.complete}
                    type="checkbox"/>
                </div>
                <input type="submit" value="Delete" className="btn btn-dark"/>
            </form>
        </div>
    )

}
export default Task;