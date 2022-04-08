import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ThreeDots } from 'react-loader-spinner';

import { ImgLogo, ImgIcon, Title, Benefits, Footer, Loading } from "./style";

import TokenContext from "../../context/TokenContext";
import UserContext from './../../context/UserContext';

import Profile from './../../assets/fa-solid_user-circle.svg'

export default function Home({userData}) {
    const { userToken } = useContext(TokenContext);
    /* const { userData } = useContext(TokenContext); */
    console.log(userData);
    return (
        <>
            <div>
                <ImgLogo src={userData.membership.image} alt="logo" />
                <ImgIcon src={Profile} alt="profile icon" />
            </div>
            <Title>Olá, {userData.name}</Title>
            <Benefits>
            {userData.membership.perks ? 
                        userData.membership.perks.map((perk, index) => (
                            <a key={index} href={perk.link}>
                            <div>{perk.title}</div>
                            </a>
                        ))
                    : <Loading><ThreeDots color="#FFFFFF" height={25} align='center' /></Loading>}
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