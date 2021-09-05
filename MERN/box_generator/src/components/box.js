import React from "react";

const Box = (props) =>{
    return(
        <div className="boxes">
            <div style={{
                backgroundColor: props.box.color,
                width: `${props.box.width}px`,
                height: `${props.box.height}px`}}>
            </div>
        </div>
    )
}

export default Box;