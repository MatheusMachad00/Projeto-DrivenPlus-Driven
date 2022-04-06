import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState, useContext, Fragment  } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import { MainChunk } from "./style"

import TokenContext from "../../context/TokenContext";



export default function Subscriptions({setSubID}) {
    const { userToken } = useContext(TokenContext);
    const [types, setTypes] = useState([]);
    const navigate = useNavigate();
    const { IDSubscription } = useParams();

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
            setTypes([...data]);
        });
        request.catch(err => console.log(err.response));
    }, []);

    /* function subscriptionSelected(id){
        setSubID(id);
        navigate(`/subscriptions/${id}`);
    } */

    return (
        <MainChunk>
            <h1>Escolha seu Plano</h1>
            {types.map((type) => (
                <Fragment key={type.id}>
                <Link to={`/subscriptions/${type.id}`}>
                    <div onClick={() => setSubID(type.id)}>
                        <img src={type.image} alt={type.id} />
                        <p>R${type.price}</p>
                    </div>
                </Link>
                </Fragment>
            ))};
        </MainChunk>
    );
}