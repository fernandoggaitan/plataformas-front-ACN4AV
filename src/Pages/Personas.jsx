import { useState, useEffect } from "react"
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Personas(){

    const [lista, setLista] = useState([]);
    const {gender} = useParams();

    useEffect(() => {
        getLista();
    }, [gender]);

    const getLista = async() => {
        let url = "https://randomuser.me/api/?results=10";
        if(gender != undefined){
            url += `&gender=${gender}`;
        }
        try{
            const response = await axios.get(url);
            setLista(response.data.results);
        }catch(error){
            console.log(error);
            alert("Ha surgido un error");
        }
    }

    return (
        <>
            <h1> Personas random </h1>
            <ul>
                {
                    lista.map((item) => (
                        <li key={item.login.uuid} className="mb-3">
                            <h2> {item.name.first} {item.name.last} </h2>
                            <img src={item.picture.medium} alt="" />
                        </li>
                    ))
                }
            </ul>
        </>
    )

}