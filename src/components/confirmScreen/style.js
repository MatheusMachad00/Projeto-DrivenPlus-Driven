import styled from 'styled-components'

export const Warning = styled.div`
background-color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
width: 248px;
height: 210px;
border-radius: 12px;
padding: 32px 22px 11px 22px;

div{
    display: flex;
    justify-content: space-evenly;
    
    width: 248px;
    margin-top: 36px;
}

p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #000000;
}

button{
    width: 95px;
    height: 52px;
    border-radius: 8px;
    border: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;
}

.noButton{
    background-color: #CECECE;
}

.yesButton{
    background: #FF4791;
}
`

export const PopUp = styled.div`
position: absolute;
left: 64px;
top: 229px;
`

export const CloseButton = styled.img`
position: absolute;
right: 6.5%;
top: 4%;
`

export const BodyBackground = styled.section`
background:rgba(0,0,0,0.7);
position: absolute;
    height: 100vh;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
`