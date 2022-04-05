import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import { MainChunk } from "./style"

import Type1 from './../../assets/Group1.svg'
import Type2 from './../../assets/Group2.svg'
import Type3 from './../../assets/Group3.svg'
import TokenContext from "../../context/TokenContext";



export default function Subscriptions() {
    const {userToken} = useContext(TokenContext);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        };

        const LINK_API = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships";
        const request = axios.get(LINK_API, config);
        request.then(response => {
            const { data } = response;
            setTypes(data);
        });
        request.catch(err => console.log(err.response));
    }, []);


    return (
        <MainChunk>
            <h1>Escolha seu Plano</h1>
            {types.map((types) =>(
                <div key={types.id}>
                    <img src={types.image} alt={types.id} />
                    <p>R${types.price}</p>
                </div>
            ))};
        </MainChunk>
    );
}