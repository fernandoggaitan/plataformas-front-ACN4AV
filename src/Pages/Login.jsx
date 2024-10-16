import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom";

export default function Login() {

    const {login} = useAuth();

    const navigate = useNavigate();

    const handlerLogin = (e) => {
        e.preventDefault();
        login();
        navigate("/dashboard");
    }

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" onClick={handlerLogin} className="btn btn-primary">Submit</button>            
        </form>
    )

}