import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState, useContext, Fragment } from "react";
import axios from "axios";
import { SubDetails, Detail, BoxBenefits, Clipboard, Cash, Logo, Form } from "./style.js"


import TokenContext from "../../context/TokenContext";
import clipboard from "./../../assets/fluent_clipboard-task-list-rtl-20-regular.svg"
import cash from "./../../assets/fa-solid_money-bill-wave.svg"


export default function SubscriptionDetails({ subID }) {
    const { userToken } = useContext(TokenContext);
    const [subType, setSubType] = useState({});


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


    return (
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
                    <p>1. Brindes exclusivos </p>
                    <p>2. Materiais bônus de web</p>
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

            <Form>
                <input type="text" placeholder="Nome impresso no cartão" />
                <input type="text" placeholder="Digitos do cartão" />
                <div>
                    <input className="cvv" type="number" placeholder="Código de segurança" />
                    <input type="text" placeholder="Validade" />
                </div>
                <button>ASSINAR</button>
            </Form>
        </SubDetails >
    );
}


/* {subType.perks.map((perk,index) =>(
            <p key={index}>{perk.id}. {perk.title}</p>
        ))} */

/*  {!subType.perks  ? nada : map} */