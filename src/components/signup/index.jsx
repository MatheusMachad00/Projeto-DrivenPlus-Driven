import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import { SignScreen } from "./style"

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("")
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function submitData(event){
        event.preventDefault();
        setLoading(true);

        const LINK_API = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up";
        const request = axios.post(LINK_API, { email, name, cpf, password });
        request.then(response => {
            const { data } = response;
            navigate("/");
            console.log(data);
            alert("Cadastrado com sucesso!")
        });
        request.catch(err => {
            console.log(err.response);
            setLoading(false);
            alert("E-mail ou CPF já cadastrado. Tente novamente.");
        });
    }


    return (
        <SignScreen>
            <form onSubmit={submitData}>
                <input
                    type="text"
                    disabled={loading ? true : false}
                    placeholder="nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

                <input
                    type="text"
                    disabled={loading ? true : false}
                    placeholder="CPF"
                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                    title="Digite um CPF no formato: xxx.xxx.xxx-xx"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)} />

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
                        'Cadastrar'
                    )}
                </button>
            </form>
            <Link to={"/"}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </SignScreen>
    );
}
