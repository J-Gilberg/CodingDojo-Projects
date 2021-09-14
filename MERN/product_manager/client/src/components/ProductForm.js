import React, { useState } from 'react'
import axios from 'axios';
export default () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', {
            title
            , price
            , desc
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))

        setTitle('');
        setPrice('');
        setDesc('');
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br />
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </p>
            <p>
                <label>Price</label><br />
                <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} />
            </p>
            <p>
                <label>Description</label><br />
                <input type="text" onChange={(e) => setDesc(e.target.value)} value={desc} />
            </p>
            <input type="submit" value='Create' />
        </form>
    )
}