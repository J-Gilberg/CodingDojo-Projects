import React, { useState } from "react";
import { useParams } from "react-router";

const Hello = () => {
    const {textColor} = useParams();
    const {backColor} = useParams();

    return(
        <p style={{color: textColor, backgroundColor: backColor}}>
        
        Wavy Bro!!</p>
    )

}
export default Hello;