import React, { useEffect, useState } from "react";
import AuthorForm from "../components/AuthorForm";
import { useParams, useHistory } from "react-router";
import axios from 'axios';

export default (props) => {

    const history = useHistory();
    const [author, setAuthor] = useState({});
    const { _id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res => setAuthor(res.data))
            .catch(err => console.log(err))
            
    }, [])

    const getFormInputs = (author) => {
        axios.patch(`http://localhost:8000/api/authors/${_id}/edit`, author)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        history.push('/');
    }

    return (
        <div className='mainContainer'>
            Edit Screen
            woohoo!!
            <AuthorForm author={author} getFormInputs={getFormInputs} />
        </div>

    )
}