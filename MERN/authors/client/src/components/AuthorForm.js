import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"

export default (props) => {

    const [author, setAuthor] = useState('');
    const history = useHistory();

    useEffect(()=>{
        setAuthor(props.author);
    }, [props.author]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.getFormInputs(author);
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Author Name</label><br />
                <input type="text" onChange={(e) =>{e.preventDefault(); setAuthor({name: e.target.value});}} value={author.name} />
                <input type="submit" value='create' />
            </form>
            <button onClick={()=>history.push('/')}>Cancel</button>
        </div>
    )
}