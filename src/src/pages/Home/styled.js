import styled from "styled-components";

export const Container = styled.div`
    border: solid red;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const About = styled.div`
//border: solid red;
border-radius: 8px;
box-shadow: 0rem 1rem 10rem;
//background: ${({theme})=> theme.COLORS.BACKGROUND_900};
background-image: linear-gradient(to bottom right,
    ${({theme})=> theme.COLORS.BACKGROUND_800}, 
    ${({theme})=> theme.COLORS.BACKGROUND_700},
    ${({theme})=> theme.COLORS.BACKGROUND_600},
    ${({theme})=> theme.COLORS.BACKGROUND_500});
height: 60%;
width: 50%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`
export const AboutText = styled.p`
color: ${({theme}) => theme.COLORS.BACKGROUND_600};
display:flex;
border-bottom: solid ${({theme}) => theme.COLORS.BACKGROUND_500};
font-family: Roboto;
font-size: 42px;
font-weight: 700;
line-height: 50px;
margin-left: 12px;
`

export const BoxA = styled.div`

    display: flex;
    justify-content: space-between;
`
export const BoxContentA = styled.div`
width: 5rem;
display: flex;
justify-content: space-between;
align-items: center;
margin-right: 12px;
`



export const BoxB = styled.div`
//border: solid;
    margin-top: 12px;
    height: 90%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`