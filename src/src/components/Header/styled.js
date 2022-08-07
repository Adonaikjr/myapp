import styled from "styled-components";

export const Container = styled.header`
    margin-right: -3px;
    height: 70%;
    width: 18rem;
    border-radius:5px;
display: flex;
flex-direction: column;

//background: ${({theme}) => theme.COLORS.BACKGROUND_900};
background-color: transparent;
button{
    border: none;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    opacity: 0.4;
    margin-right: 2px;
    height: 10rem;
    flex-wrap: wrap;

}

`

export const Imagebox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img{
//border: solid ${({theme}) => theme.COLORS.BACKGROUND_800};
    padding-bottom: 20px;
    width: 10rem;
    animation: pulse 0.7s infinite;
  margin: 0 auto;
  display: table;
  margin-top: 50px;
  animation-direction: alternate;
  -webkit-animation-name: pulse;
  animation-name: pulse;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    -webkit-filter: brightness(100%);
  }
  100% {
    -webkit-transform: scale(1.1);
    -webkit-filter: brightness(200%);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    filter: brightness(100%);
  }
  100% {
    transform: scale(1.1);
    filter: brightness(110%);
  }

}
background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};



`

export const ContentIcons = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
    
`