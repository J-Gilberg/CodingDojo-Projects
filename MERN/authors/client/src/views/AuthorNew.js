import React, { useState, useEffect } from "react";
import AuthorForm from "../components/AuthorForm";
import { useHistory } from "react-router";
import axios from 'axios';

export default (props) => {

    const [author, setAuthor] = useState({ name: '' })
    const [error, setError] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    const history = useHistory();

    const getFormInputs = (data) => {
        setAuthor(data);
        setIsLoaded(true);
    }

    useEffect(()=>{
        if(isLoaded){
            console.log("author");
            console.log(author);
            console.log(isLoaded);
            axios.post('http://localhost:8000/api/authors/new', author)
            .then(res => {
                console.log("results");
                console.log(res.data);
                if (res.data.results) {
                    history.push('/');
                } else {
                    console.log(res.data.err.errors.name)
                    setError(res.data.err.errors.name);
                }
            })
            .catch(err => console.log(err.data))
        }
    },[isLoaded, author])

    return (
        <div className='mainContainer'>
            Add New Screen
            woohoo!!
            <AuthorForm author={author} getFormInputs={getFormInputs} />
            <span>{error.message}</span>
        </div>

    )
}