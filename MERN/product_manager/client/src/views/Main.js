import React, { useEffect, useState, useRef } from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList';
import axios from 'axios';
export default (props) => {

    const [product, setProduct] = useState({});
    const [_id, set_id] = useState('');
    const [saveDataFlag, setSaveDataFlag] = useState(false);
    const [loadDataFlag, setLoadDataFlag] = useState(false);
    const [deleteDataFlag, setDeleteDataFlag] = useState(false);
    const [productList, setProductList] = useState([]);
    const [errors, setErrors] =useState({});

    const doSomethingWithProduct = (product) => {
        console.log(`got the product ${product}`);
        console.log(_id);
        setProduct(product);
        setSaveDataFlag(true);
    }

    const setDaProductID = (type,_id) =>{
        console.log(`type: ${type} _id:${_id}`);
        if(type === 'delete'){
            set_id(_id);
            setDeleteDataFlag(true);
        }
        if(type === 'edit'){
            set_id(_id);
            setLoadDataFlag(true);
        }
    }

    const clearForm = () =>{
        setLoadDataFlag(false);
        set_id('');
        setProduct({title: ''
        ,price: ''
        ,desc: ''
        })
    }

    useEffect(() => {
        if (saveDataFlag && loadDataFlag) {
            axios.patch(`http://localhost:8000/api/products/${_id}/edit`, product)
                .then(res => console.log(res))
                .catch(err => console.log(err))
            setSaveDataFlag(false);
            setLoadDataFlag(false);
            setProduct({title: ''
            ,price: ''
            ,desc: ''
            })
        } else if (saveDataFlag) {
            axios.post('http://localhost:8000/api/products/new', product)
                .then(res => { console.log(res)})
                .catch(err => console.log(err))
            setSaveDataFlag(false);
            setProduct({title: ''
            ,price: ''
            ,desc: ''
            })
        }else if (loadDataFlag) {
            axios.get(`http://localhost:8000/api/products/${_id}`)
                .then(res => {
                    setProduct(res.data.results);
                    console.log(res.data.results)
                })
                .catch(err => console.log(err))
        }

        if (deleteDataFlag) {
            axios.delete(`http://localhost:8000/api/products/${_id}/delete`)
                .then(res => console.log(res))
                .catch(err => console.log(err))
            setDeleteDataFlag(false);
        }
    }, [saveDataFlag, loadDataFlag, deleteDataFlag, _id]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/all")
            .then(res => setProductList(res.data.results))
    }, [productList, deleteDataFlag,saveDataFlag]);


    // {
    //     title: product.title
    //     ,price: product.price
    //     ,desc: product.desc
    // }

    return (
        <div className="container">
            <h1>Welcome to the grocery store where everything is under $300</h1>
            <h2>Oh ya! this is the product manager for that store</h2>
            <button onClick={clearForm}>Clear Form</button>
            <ProductForm doSomethingWithProduct={doSomethingWithProduct} product = {product}/>
            <div className="line"></div>
            <ProductList setDaProductID={setDaProductID} productList ={productList}/>
        </div>
    )
}