import styled from 'styled-components'

export const MainChunk = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    color: #FFFFFF;
    margin-top: 29px;
    margin-bottom: 24px;
}

div{
    width: 290px;
    height: 180px;
    border: 3px solid #7E7E7E;
    box-sizing: border-box;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
}

img{
    width: 139px;
    height: 95px;
}

p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #FFFFFF;
    margin-left: 20px;
}
`