import styled from "styled-components";

export const Container = styled.div`
    height: 2rem;
    width: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;
//background: ${({theme}) => theme.COLORS.BACKGROUND_700};
background-color: #000;
flex-wrap: wrap;
`
export const Text = styled.p`
color: white;
`