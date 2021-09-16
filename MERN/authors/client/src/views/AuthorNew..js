import React, { useState } from "react";
import AuthorForm from "../components/AuthorForm";
import { useHistory } from "react-router";
import axios from 'axios';

export default (props) => {

    const [author, setAuthor] = useState({name: ''})
    const history = useHistory();

    const getFormInputs = (author) => {
        axios.post('http://localhost:8000/api/authors/new', author)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        history.push('/');
    }

    return (
        <div className='mainContainer'>
            Add New Screen
            woohoo!!
            <AuthorForm author = {author} getFormInputs={getFormInputs} />
        </div>

    )
    }