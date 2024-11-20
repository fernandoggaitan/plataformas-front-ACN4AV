import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Login() {

    const {login} = useAuth();

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");

    const handlerLogin = async(e) => {
        e.preventDefault();

        try{
            const response = await axios.post("http://localhost:8888/login", {
                email,
                contrasena
            });

            if(response.data.success){

                Swal.fire({
                    icon: "success",
                    title: "Inicio exitoso",
                    text: response.data.message,
                });

                login(response.data);
                navigate("/dashboard");

            }else{
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: response.data.message,
                });
            }

        }catch(error){
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Intente más tarde",
            });
        }

    }

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>                
                <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setContrasena(e.target.value)} />
            </div>
            <button type="submit" onClick={handlerLogin} className="btn btn-primary">Submit</button>            
        </form>
    )

}