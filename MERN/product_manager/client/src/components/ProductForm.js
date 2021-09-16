import React, { useEffect, useState } from 'react'
export default (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.doSomethingWithProduct({
                title: title
                ,price: price
                ,desc: desc
            })
    }

    useEffect(()=>{
        console.log('use effect is running in the form')
        setTitle(props.product.title);
        setPrice(props.product.price);
        setDesc(props.product.desc);
    },[props.product])

    return (
        <form onSubmit={onSubmitHandler} className="container">
            <label>Title</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} /><br />
            <label>Price</label>
            <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} /><br />
            <label>Description</label>
            <input type="text" onChange={(e) => setDesc(e.target.value)} value={desc} /><br />
            <input type="submit" value='Create' />
        </form>
    )
}