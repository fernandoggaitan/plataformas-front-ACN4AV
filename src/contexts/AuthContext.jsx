import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider( {children} ){

    const [is_logueado, setIsLogueado] = useState(false);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        doRefreshToken();
    }, []);

    const doRefreshToken = async() => {

        if(localStorage.getItem("token")){

            try{

                const response = await axios.get("http://localhost:8888/refresh-token", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
    
                if(response.data.success){
                    setIsLogueado(true);
                    setToken(response.data.accessToken);
                }

            }catch(error){
                console.log(error);
            }finally{
                setLoading(false);
            }

        }else{
            setLoading(false);
        }

    }

    const login = ( {accessToken, refreshToken} ) => {
        setIsLogueado(true);
        setToken(accessToken);
        localStorage.setItem("token", refreshToken);
    }

    const logout = () => {
        setIsLogueado(false);
        setToken(null);
        localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={ {is_logueado, token, login, logout} }>
            {
                (loading)
                ?
                    <div> Cargando... </div>
                :
                    children
            }
        </AuthContext.Provider>
    )

}

export function useAuth(){
    return useContext(AuthContext);
}