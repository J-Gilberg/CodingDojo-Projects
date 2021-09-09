import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router";

const Planet = (props) => {

    const { item } = useParams();
    const { id } = useParams();
    const [data, setData] = useState("");
    const url = `https://swapi.dev/api/${item}/${id}/`

    useEffect(() => {
        axios.get(url)
            .then(response => { setData(response.data) })
            .catch(err => {console.log(err)})
    }, [url]);

    return (
        <div className="App">
            {item === "planets"
                && <div className="info">
                    <h1>{data.name}</h1>
                    <h2><b>Climate:</b> {data.climate}</h2>
                    <h2><b>Terrain:</b> {data.terrain}</h2>
                    <h2><b>Surface Water:</b> {data.surface_water}</h2>
                    <h2><b>Population:</b> {data.population}</h2>
                </div>
            }
            {item === "people"
                && <div className="info">
                    <h1>{data.name}</h1>
                    <h2><b>Height:</b> {data.height}</h2>
                    <h2><b>Mass:</b> {data.mass}</h2>
                    <h2><b>Hair Color:</b> {data.hair_color}</h2>
                    <h2><b>Skin Color:</b> {data.skin_color}</h2>
                </div>
            }
        </div>
    )
}

export default Planet;