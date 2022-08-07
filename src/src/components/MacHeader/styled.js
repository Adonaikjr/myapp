import styled from "styled-components";

export const Container = styled.div`
    height: 2rem;
    width: 100%;
margin: 12px;
    display: flex;
    justify-content: space-around;
    align-items: center;
background: ${({theme}) => theme.COLORS.BACKGROUND_700};
border-radius: 5px;
`
export const Text = styled.p`
color: white;
`