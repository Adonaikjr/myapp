import { BiShareAlt, BiSearch } from "react-icons/bi";
import { Header } from "../../components/Header";
import { Container, About, AboutText, BoxA, BoxContentA, BoxB} from "./styled";
import { Cards } from "../../components/Cards";

import React from "react";

export class Home extends React.Component{
    render(){
    return(
        <Container>
            <Header/>
            <About>
                <BoxA>
                    <AboutText>Work</AboutText>
                    <BoxContentA>
                        <BiShareAlt color='#90E0EF' size={30} /> 
                        <BiSearch color='#90E0EF' size={30}/>
                    </BoxContentA>
                </BoxA>
                <BoxB>
                    <Cards project='projeto0' />
                    <Cards project='projeto1' />
                    <Cards project='projeto2' />
                    <Cards project='projeto3' />
                    <Cards project='projeto4' />
                </BoxB>
            </About>
        </Container>
    )
   }
}

