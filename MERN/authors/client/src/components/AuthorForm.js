import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"

export default (props) => {

    const [name, setName] = useState('');
    const history = useHistory();

    useEffect(()=>{
        setName(props.author.name);
    }, [props.author]);

    const onSubmitHandler = () => {
        props.getFormInputs({name: name});
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Author Name</label><br />
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                <input type="submit" value='create' />
            </form>
            <button onClick={()=>history.push('/')}>Cancel</button>
        </div>
    )
}