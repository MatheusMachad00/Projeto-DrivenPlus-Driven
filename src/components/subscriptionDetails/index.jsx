import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { SubDetails, Detail, BoxBenefits, Clipboard, Cash, Logo, Form, Loading } from "./style.js"
import { ThreeDots } from 'react-loader-spinner';


import TokenContext from "../../context/TokenContext";
import clipboard from "./../../assets/fluent_clipboard-task-list-rtl-20-regular.svg"
import cash from "./../../assets/fa-solid_money-bill-wave.svg"
import ConfirmScreen from "../confirmScreen/index.jsx";

/* import UserContext from './../../context/UserContext'; */


export default function SubscriptionDetails({ subID }) {
    const { userToken } = useContext(TokenContext);
    const [subType, setSubType] = useState({});
    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [securityNumber, setSecurityNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [popUpScreen, setPopUpScreen] = useState(false);
    /* const {userData, setUserData} = useContext(UserContext); */
    const navigate = useNavigate();

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        };

        const LINK_API = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${subID}`;
        const request = axios.get(LINK_API, config);
        request.then(response => {
            const { data } = response;
            setSubType({ ...data });
        });
        request.catch(err => console.log(err.response));
    }, []);

    function signPlan(){
        const config = {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        };
        const LINK_POST = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions"
        const request = axios.post(LINK_POST,{
            membershipId: subID,
            cardName,
            cardNumber,
            securityNumber,
            expirationDate}, config);

        request.then(response => {
            const {data} = response;
            /* console.log(data); */
            /* setUserData(data); */
            alert("Plano assinado com sucesso! Faça login novamente para aproveitar.")
            navigate("/");
        });
        request.catch(err => console.log(err.response, subID, typeof subID));
    }

    function popUp(event){
        event.preventDefault();
        if (popUpScreen) setPopUpScreen(false);
        if (!popUpScreen) setPopUpScreen(true);
    }


    return (
        <>
        {popUpScreen && <ConfirmScreen 
        closePopUp={(popUpScreen) => setPopUpScreen(popUpScreen)} 
        confrim={signPlan}/>}
        <SubDetails>
            <div>
                <Logo src={subType.image} alt={subType.name} />
                <h1>{subType.name}</h1>
            </div>

            <BoxBenefits>
                <Detail>
                    <Clipboard src={clipboard} alt="clipboard" />
                    <h2>Benefícios: </h2>
                </Detail>
                <div>
                    {subType.perks ? 
                        subType.perks.map((perk, index) => (
                            <p key={index}>{index+1}. {perk.title}</p>
                        ))
                    : <Loading><ThreeDots color="#FFFFFF" height={25} align='center' /></Loading>}
                </div>
            </BoxBenefits>
            <BoxBenefits>
                <div>
                    <Detail>
                        <Cash src={cash} alt="cash" />
                        <h2>Preço: </h2>
                    </Detail>
                    <p>R$ {subType.price} cobrados mensalmente</p>
                </div>
            </BoxBenefits>

            <Form onSubmit={popUp}> 
                <input 
                type="text" 
                placeholder="Nome impresso no cartão" 
                required
                onChange={e => setCardName(e.target.value)}
                value={cardName}/>

                <input 
                type="text" 
                placeholder="Digitos do cartão"
                maxLength="16"
                required
                onChange={e => setCardNumber(e.target.value)}
                value={cardNumber}/>

            <div>
                    <input 
                    className="cvv" 
                    type="number" 
                    placeholder="Código de segurança"
                    maxLength="3" 
                    required
                    onChange={e => setSecurityNumber(e.target.value)}
                    value={securityNumber}/>

                    <input 
                    type="text" 
                    placeholder="Validade" 
                    required
                    onChange={e => setExpirationDate(e.target.value)}
                    value={expirationDate}/>
                </div>
                <button type="submit" >ASSINAR</button>
            </Form>
        </SubDetails >
        </>
    );
}