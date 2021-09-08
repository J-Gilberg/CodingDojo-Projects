import React from "react";
import { useParams } from "react-router";

const Number = (props) => {
    const { num } = useParams();
    const thatANumber= (n) => {
        return isNaN(n)
            ? `Oh No!!! That is no number: ${n}`
            : `Woah!!! The number is: ${n}`
    }
    return(
        <p>{thatANumber(num)}</p>
    )

}

export default Number;