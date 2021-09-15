import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { PromiseProvider } from 'mongoose';
export default (props) => {

    const history = useHistory();

    const onClickHandler = (e) => {
        e.preventDefault();
        console.log(e.target._id)
        history.push(`/products/${e.target.id}`);
    }

    return (
        <div className="list">
            <h1>All Products</h1>
            {
                props.productList.map((product, i) => {
                    return (
                        <div>
                            <a onClick={onClickHandler} id={product._id}>{product.title}</a>
                            <button onClick={()=>props.setDaProductID("edit",product._id)}>Edit</button>
                            <button onClick={()=>props.setDaProductID("delete",product._id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}