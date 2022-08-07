import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: column;
height: 70%;
flex-wrap: wrap;
.container {

margin-left: 24px;
margin-top: 12px;
}

.ball {
  width: 50px;
  height: 10px;
  margin: 10px auto;
  border-radius: 50px;
}

.ball:nth-child(1) {
  background: ${({theme}) => theme.COLORS.BACKGROUND_900};
  -webkit-animation: right 1s infinite ease-in-out;
  -moz-animation: right 1s infinite ease-in-out;
  animation: right 1s infinite ease-in-out;
}

.ball:nth-child(2) {
  background: ${({theme}) => theme.COLORS.BACKGROUND_800};
  -webkit-animation: left 1.1s infinite ease-in-out;
  -moz-animation: left 1.1s infinite ease-in-out;
  animation: left 1.1s infinite ease-in-out;
}

.ball:nth-child(3) {
  background: ${({theme}) => theme.COLORS.BACKGROUND_700};
  -webkit-animation: right 1.05s infinite ease-in-out;
  -moz-animation: right 1.05s infinite ease-in-out;
  animation: right 1.05s infinite ease-in-out;
}

.ball:nth-child(4) {
  background: ${({theme}) => theme.COLORS.BACKGROUND_600};
  -webkit-animation: left 1.15s infinite ease-in-out;
  -moz-animation: left 1.15s infinite ease-in-out;
  animation: left 1.15s infinite ease-in-out;
}

.ball:nth-child(5) {
  background: ${({theme}) => theme.COLORS.BACKGROUND_500};
  -webkit-animation: right 1.1s infinite ease-in-out;
  -moz-animation: right 1.1s infinite ease-in-out;
  animation: right 1.1s infinite ease-in-out;
}

.ball:nth-child(6) {
  background: ${({theme}) => theme.COLORS.BACKGROUND_400};
  -webkit-animation: left 1.05s infinite ease-in-out;
  -moz-animation: left 1.05s infinite ease-in-out;
  animation: left 1.05s infinite ease-in-out;
}

.ball:nth-child(7) {
  background: #ffffff;
  -webkit-animation: right 1s infinite ease-in-out;
  -moz-animation: right 1s infinite ease-in-out;
  animation: right 1s infinite ease-in-out;
}

@-webkit-keyframes right {
  0% {
    -webkit-transform: translate(-15px);
  }
  50% {
    -webkit-transform: translate(15px);
  }
  100% {
    -webkit-transform: translate(-15px);
  }
}

@-webkit-keyframes left {
  0% {
    -webkit-transform: translate(15px);
  }
  50% {
    -webkit-transform: translate(-15px);
  }
  100% {
    -webkit-transform: translate(15px);
  }
}

@-moz-keyframes right {
  0% {
    -moz-transform: translate(-15px);
  }
  50% {
    -moz-transform: translate(15px);
  }
  100% {
    -moz-transform: translate(-15px);
  }
}

@-moz-keyframes left {
  0% {
    -moz-transform: translate(15px);
  }
  50% {
    -moz-transform: translate(-15px);
  }
  100% {
    -moz-transform: translate(15px);
  }
}

@keyframes right {
  0% {
    transform: translate(-15px);
  }
  50% {
    transform: translate(15px);
  }
  100% {
    transform: translate(-15px);
  }
}

@keyframes left {
  0% {
    transform: translate(15px);
  }
  50% {
    transform: translate(-15px);
  }
  100% {
    transform: translate(15px);
  }
}
`