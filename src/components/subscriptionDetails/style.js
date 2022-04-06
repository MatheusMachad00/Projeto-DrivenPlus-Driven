import styled from 'styled-components'

export const SubDetails = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* text-align: center; */

h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    color: #FFFFFF;
    /* padding-left: 20px; */
    margin-bottom: 22px;
}
`

export const Logo = styled.img`
    width: 140px;
    height: 95px;
    margin-top: 87px;
    margin-bottom: 12px;
`

export const Detail = styled.div`
display: flex;
align-items: center;
margin-bottom: 10px;
/* background-color: rebeccapurple; */

h2{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    margin-left: 5px;
}
`

export const BoxBenefits = styled.div`
display: flex;
flex-direction: column;
width: 300px;
/* height: 50px; */
margin-bottom: 30px;

p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
}

div{
    
}
`

export const Clipboard = styled.img`
width: 26px;
height: 28px;
margin-left: -5px;
`

export const Cash = styled.img`
width: 21px;
height: 22px;
`

export const Benefits = styled.div`
display: flex;
flex-direction: column;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

input{
    background: #FFFFFF;
    border-radius: 8px;
    height: 52px;
    width: 299px;
    margin-bottom: 8px;
    border: none;
}

div input{
    width: 145px;
}

.cvv{
    margin-right: 9px;
}

button{
    width: 299px;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
    border: none;
}
`

export const Loading = styled.div`
display: flex;
justify-content: center;
align-items: center;
`