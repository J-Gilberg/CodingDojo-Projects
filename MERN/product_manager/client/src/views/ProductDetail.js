import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
export default () => {

    const [product, setProduct] = useState({})
    const { _id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => setProduct(res.data.results))
    }, [product]);

    return (
        <div>
            <h1>Buy this now!!</h1>
            <h2>Title: {product.title}</h2>
            <h2>Price: {product.price}</h2>
            <h2>Description: {product.desc}</h2>

            <a onClick={(e) => {history.push(`/`)}}>Go Back</a>
        </div>
    )

}