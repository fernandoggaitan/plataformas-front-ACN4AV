import { Link } from "react-router-dom"

import { useAuth } from "../contexts/AuthContext"

import { useNavigate } from "react-router-dom";

export default function Menu() {

    const {is_logueado, logout} = useAuth();

    const navigate = useNavigate();

    const handlerLogout = (e) => {
        e.preventDefault();
        logout();
        navigate("/login");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"> Inicio </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/candidatos"> Candita/os </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Personas random
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/personas"> Toda/os </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/personas/female"> Chicas </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/personas/male"> Chicos </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto"> Contacto </Link>
                        </li>
                        {
                            (is_logueado) 
                            ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/dashboard"> Dashboard </Link>
                                    </li>
                                        <li className="nav-item">
                                        <a className="nav-link" href="" onClick={handlerLogout}> Cerrar sesión </a>
                                    </li>
                                </>
                            :
                            <li className="nav-item">
                                <Link className="nav-link" to="/login"> Login </Link>
                            </li>
                        }                                            
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}