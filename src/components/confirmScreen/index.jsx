import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";

import { Warning, PopUp, CloseButton, BodyBackground } from "./style";

import close from "./../../assets/fa-solid_window-close.svg"


export default function ConfirmScreen({closePopUp, signPlan}) {
    return (
        <BodyBackground>
            <CloseButton onClick={() => closePopUp()} src={close} alt="botão de fechar" />
            <PopUp>
                <Warning>
                    <p>Tem certeza que deseja assinar o plano</p>
                    <p>Driven Plus (R$ 39,99)?</p>
                    <div>
                        <button onClick={() => closePopUp()} className="noButton">Não</button>
                        <button onClick={() => signPlan()} className="yesButton">Sim</button>
                    </div>
                </Warning>
            </PopUp>
        </BodyBackground>
    );
}