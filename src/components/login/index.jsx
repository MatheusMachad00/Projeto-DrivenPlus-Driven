import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import { LoginScreen } from "./style"

import Logo from './../../assets/Driven_white 1.svg'
import TokenContext from "../../context/TokenContext";
/* import UserContext from "../../context/UserContext"; */


export default function Login({setUserData}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const {userToken, setUserToken} = useContext(TokenContext);
    /* const {userData, setUserData} = useContext(UserContext); */
    const navigate = useNavigate();

    function login(event){
        event.preventDefault();
        setLoading(true);

        const LINK_API = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/login';
        const request = axios.post(LINK_API,{ email, password });
        request.then(response => {
            const { data } = response;
            /* console.log(data); */
            setUserToken(data.token);
            setUserData(data);
            /* setUserData(data.membership);
            console.log(userData); */
            
            if(data.membership !== null){
                navigate("/home")
            }else{navigate("/subscriptions")};
        })
        request.catch(err => {
            console.log(err.response);
            setLoading(false);
            alert("E-mail ou senha incorretos. Tente novamente.");
        });
    }




    return (
        <LoginScreen>
                <img src={Logo} alt="Logo" />
                <form onSubmit={login}>
                    <input
                        type="email"
                        disabled={loading ? true : false}
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <input
                        type="password"
                        disabled={loading ? true : false}
                        placeholder="senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                        
                    <button type="submit">
                        {loading ? (
                            <ThreeDots color="#FFFFFF" height={13} align='center' />
                        ) : (
                            'Entrar'
                        )}
                    </button>
                </form>
                <Link to={"/sign-up"}>
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </LoginScreen>
    );
}