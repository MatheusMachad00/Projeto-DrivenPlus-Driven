import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";

import { Warning } from "./style";

import close from "./../../assets/fa-solid_window-close.svg"


export default function ConfirmScreen() {
    return (
        <div>
            <img src={close} alt="botão de fechar" />
            <Warning>
                <p>Tem certeza que deseja assinar o plano</p>
                <p>Driven Plus (R$ 39,99)?</p>
                <div>
                    <button className="noButton">Não</button>
                    <button className="yesButton">Sim</button>
                </div>
            </Warning>
        </div>
    );
}