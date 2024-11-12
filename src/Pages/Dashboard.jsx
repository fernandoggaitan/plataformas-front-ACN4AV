import { useAuth } from "../contexts/AuthContext"
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function Dashboard(){

    const {token} = useAuth();
    
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        getWelcome();
    }, []);

    const getWelcome = async() => {

        try{
            const response = await axios.get("http://localhost:8888/welcome", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setMensaje(response.data.message);

        }catch(error){
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Intente más tarde",
            });
        }

    }

    return (
        <h1> {mensaje} </h1>
    )

}