import styled from "styled-components";

export const Container = styled.header`

    height: 60%;
    width: 20rem;
    margin-right: 5rem;
display: flex;
flex-direction: column;
//background: ${({theme}) => theme.COLORS.BACKGROUND_900};
background-color: transparent;
button{
    border: none;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    opacity: 0.4;
    height: 10rem;
    flex-wrap: wrap;
    background-color: transparent;
}
img{
    border-radius: 100%;
    border: solid ${({theme}) => theme.COLORS.BACKGROUND_600};
}
`

export const Imagebox = styled.div`
img{
    margin-top: 12px;
    margin-bottom: 12px;
    width: 10rem;
}
display: flex;
justify-content: center;

`