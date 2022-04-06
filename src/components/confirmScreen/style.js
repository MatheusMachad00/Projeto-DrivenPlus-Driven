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
position: absolute;
border-radius: 12px;
padding: 32px 22px 11px 22px;

div{
    display: flex;
    justify-content: space-evenly;
    
    width: 248px;
    margin-top: 36px;
}

button{
    width: 95px;
    height: 52px;
    border-radius: 8px;
    border: none;
    background-color: red;

}
`