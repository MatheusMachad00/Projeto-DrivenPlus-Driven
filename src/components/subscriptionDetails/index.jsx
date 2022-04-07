import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { SubDetails, Detail, BoxBenefits, Clipboard, Cash, Logo, Form, Loading } from "./style.js"
import { ThreeDots } from 'react-loader-spinner';


import TokenContext from "../../context/TokenContext";
import clipboard from "./../../assets/fluent_clipboard-task-list-rtl-20-regular.svg"
import cash from "./../../assets/fa-solid_money-bill-wave.svg"
import ConfirmScreen from "../confirmScreen/index.jsx";


export default function SubscriptionDetails({ subID }) {
    const { userToken } = useContext(TokenContext);
    const [subType, setSubType] = useState({});
    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [securityNumber, setSecurityNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [popUpScreen, setPopUpScreen] = useState(false);


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
            /* console.log(data); */
            setSubType({ ...data });
        });
        request.catch(err => console.log(err.response));
    }, []);

    function signPlan(event){
        const config = {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        };
        event.preventDefault();
        const LINK_POST = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions"
        const request = axios.post(LINK_POST,{
            membershipId: {subID},
            cardName,
            cardNumber,
            securityNumber,
            expirationDate}, config);
        request.then(response => {
            const {data} = response;
            console.log(data);
        });
        request.catch(err => console.log(err.response));
    }

    function popUp(event){
        event.preventDefault();
        if (popUpScreen) setPopUpScreen(false);
        if (!popUpScreen) setPopUpScreen(true);
        /* console.log(cardName);
        console.log(cardNumber);
        console.log(securityNumber);
        console.log(expirationDate); */
    }

    function confirm (event){
        event.preventDefault();
        popUp();
        signPlan()
    }

    return (
        <>
        {popUpScreen && <ConfirmScreen closePopUp={(popUpScreen) => confirm()} />}
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
                /* required */
                onChange={e => setCardName(e.target.value)}
                value={cardName}/>

                <input 
                type="text" 
                placeholder="Digitos do cartão"
                /* required */
                onChange={e => setCardNumber(e.target.value)}
                value={cardNumber}/>

            <div>
                    <input 
                    className="cvv" 
                    type="number" 
                    placeholder="Código de segurança" 
                    /* required */
                    onChange={e => setSecurityNumber(e.target.value)}
                    value={securityNumber}/>

                    <input 
                    type="text" 
                    placeholder="Validade" 
                    /* required */
                    onChange={e => setExpirationDate(e.target.value)}
                    value={expirationDate}/>
                </div>
                <button type="submit" >ASSINAR</button>
            </Form>
        </SubDetails >
        </>
    );
}

/* 

adicionar espaço a cada 4 digitos

let dummyTxt='1234567890123456';

let joy=dummyTxt.match(/.{1,4}/g);
console.log(joy.join(' '));

adicionar barra a cada 2 digitos

let dummyTxt='1203';

let joy=dummyTxt.match(/.{1,2}/g);
console.log(joy.join('/'));
*/