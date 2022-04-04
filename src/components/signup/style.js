import styled from 'styled-components'

export const SignScreen = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 147px;

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
input{
    margin-bottom: 16px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 8px;
    width: 303px;
    height: 45px;
    font-family: 'Roboto', sans-serif;
}
input::placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    color: #7E7E7E;
}
button{
    width: 303px;
    height: 45px;
    background: #FF4791;
    border-radius: 8px;
    color: #FFFFFF;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
}
p{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #FFFFFF;
    margin-top: 25px;
}
`