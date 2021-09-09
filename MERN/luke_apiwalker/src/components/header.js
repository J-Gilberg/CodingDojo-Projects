import React from 'react';
import {useHistory} from "react-router-dom";

const Header = (props) => {

    const history = useHistory();

    const getItem = (e) => {
        e.preventDefault();
        let item = e.target[0].value;
        let num = e.target[1].value;
        let destination = `/${item}/${num}`;
        history.push(destination);
    }
    return (
        <div className="App">
            <form onSubmit={getItem} className="form-group">
                <label htmlFor="itemSelect">Search for:</label>
                <select name="itemSelect" className="form-control">
                    <option value="planets">planets</option>
                    <option value="people">people</option>
                </select>
                <label htmlFor="idNumber">ID:</label>
                <input type="number" name="idNumber" className="form-control"/>
                <input type="submit" value="Search" className="btn btn-dark"/>
            </form>
        </div>
    )
}

export default Header;