import styled from "styled-components";
import fundomac from '../../img/fundoios.webp'
export const Container = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;

    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
export const About = styled.div`
border:  outset 1px ${({theme})=> theme.COLORS.BACKGROUND_700};

box-shadow: 0rem 1rem 10rem;
//background: ${({theme})=> theme.COLORS.BACKGROUND_900};
background-image: linear-gradient(to bottom right,
    ${({theme})=> theme.COLORS.BACKGROUND_800}, 
    ${({theme})=> theme.COLORS.BACKGROUND_700},
    ${({theme})=> theme.COLORS.BACKGROUND_600},
    ${({theme})=> theme.COLORS.BACKGROUND_500});
height: 70%;
width: 50rem;
//border-bottom: solid 10px ${({theme}) => theme.COLORS.BACKGROUND_800};
//border-right: solid 3px ${({theme}) => theme.COLORS.BACKGROUND_700};
//border-top: solid 3px ${({theme}) => theme.COLORS.BACKGROUND_800};
//display: flex;
//flex-direction: column;
//justify-content: space-around;
border-radius: 5px;
flex-wrap: wrap;
align-items: center;
`
export const AboutText = styled.p`
color: ${({theme}) => theme.COLORS.BACKGROUND_600};
//display:flex;
margin-top: 12px;
border-bottom: solid ${({theme}) => theme.COLORS.BACKGROUND_500};
font-family: Roboto;
font-size: 32px;
font-weight: 700;
line-height: 50px;
margin-left: 12px;
`

export const BoxA = styled.div`
width: 100%;
justify-content: space-between;
   // border:solid;
    display: flex;

`
export const BoxContentA = styled.div`
width: 5rem;
display: flex;
justify-content: space-between;
align-items: center;
margin-right: 12px;
margin-top:12px;
//border: solid;
`



export const BoxB = styled.div`
//border: solid;

    margin-top: 12px;
    height: 80%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    background-image: url( ${fundomac} );
    background-repeat: no-repeat;
    background-size: cover;
`

export const BoxContentB = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: space-around;
flex-wrap: wrap;



`

