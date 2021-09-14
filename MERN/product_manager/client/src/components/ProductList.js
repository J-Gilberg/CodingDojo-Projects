import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
export default () => {

    const [productList, setProductList] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/all")
            .then(res => setProductList(res.data.results))
    }, [productList]);

    const onClickHandler = (e) => {
        e.preventDefault();
        console.log(e.target._id)
        history.push(`/products/${e.target.id}`);
    }

    return (
        <div>
            <h1>All Products</h1>
            {
                productList.map((product, i) => {
                    return (
                        <div>
                            <a onClick={onClickHandler} id={product._id}>{product.title}</a>
                        </div>
                    )
                })
            }
        </div>
    )
}