import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';
export default (props) => {

    const history = useHistory();
    const [authorList, setAuthorList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/all')
            .then(res => setAuthorList(res.data.results))
            .catch(err => console.log(err))
    }, [authorList])

    const handleDelete = (authorId) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}/delete`)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        setAuthorList(authorList.filter(author => author._id !== authorId));

    }

    return (
        <div className="App mainContainer">
            <h1>Favorite Authors</h1>
            <a href="/authors/new" onClick={() => { history.push('/authors/new') }}>Add an author</a>
            <h2>We Have Quotes by:</h2>
            <table>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
                <tbody>
                {
                    authorList.map((author) => {
                        return (
                        <tr key={author._id}>
                            <td>{author.name}</td>
                            <td>
                                <button onClick={() => history.push(`/authors/${author._id}`)}>Edit</button>|
                                <button onClick={() => handleDelete(author._id)}>Delete</button>
                            </td>
                        </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>

    )
}