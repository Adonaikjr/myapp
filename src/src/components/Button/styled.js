import styled from "styled-components"

export const Container = styled.button`
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    font-family: Poppins;
font-size: 22px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: center;

    :hover {
    box-shadow: 0 1rem 3rem 0 rgba(0,0,0,0.24),0 5rem 5rem 0 rgba(0,0,0,0.19);
    border-left: solid 10px;
}
`