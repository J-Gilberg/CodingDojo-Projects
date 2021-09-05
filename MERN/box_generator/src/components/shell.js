import React from "react";

const Shell = (props) =>{

    const colorHandler = (event) =>{
        event.preventDefault();
        if(colorCheck(event.target[0].value)){
        props.onNewBox({[event.target[0].name]: event.target[0].value, 
            [event.target[1].name]: event.target[1].value, 
            [event.target[2].name]: event.target[2].value})
        }
        clearForm();
    }

    const clearForm =  () =>{
        document.getElementById("inputForm").reset();

    }

    const colorCheck = (inputColor) =>{
        var testStyle = new Option().style;
        testStyle.color = inputColor;
        return  testStyle.color === inputColor;
    }

    return(
        <div className="content">
            <form onSubmit={colorHandler} className="content" id="inputForm">
                <input type="text" name="color" />
                <input type="number" name="height" />
                <input type="number" name="width" />
                <input type="submit"/>
            </form>
        </div>
    )

    
}
export default Shell;