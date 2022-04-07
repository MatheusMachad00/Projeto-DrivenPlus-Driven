import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";

import { ImgLogo, ImgIcon, Title, Benefits, Footer } from "./style";

import Logo from './../../assets/Group1.svg'
import Profile from './../../assets/fa-solid_user-circle.svg'

export default function Home() {
    return (
        <>
            <div>
                <ImgLogo src={Logo} alt="logo" />
                <ImgIcon src={Profile} alt="profile icon" />
            </div>
            <Title>Olá. Fulano</Title>
            <Benefits>
                <div>Solicitar brindes</div>
                <div>Solicitar brindes</div>
                <div>Solicitar brindes</div>
                <div>Solicitar brindes</div>
            </Benefits>
            <Footer>
                <Link to={"/subscriptions"}>
                    <div>Mudar plano</div>
                </Link >
                <div className="cancel">Cancelar plano</div>
            </Footer>
        </>
    );
}