import { BiShareAlt, BiSearch,  } from "react-icons/bi";
import { IoLogoApple  } from "react-icons/io";
import { Header } from "../../components/Header";
import { Container, About, AboutText, BoxA, BoxContentA, BoxB, BoxContentB} from "./styled";
import { Cards } from "../../components/Cards";
import inicio from '../../img/rocketmovies/inicio.png'
import home from '../../img/rocketmovies/home.png'
import profile from '../../img/rocketmovies/pro.png'
import React from "react";
import { Animations} from "../../components/Animations";
import { MacHeader } from "../../components/MacHeader";

export class Home extends React.Component{
    render(){
    return(
        <Container>
            <Header/>
            <About>
                <BoxA>
                    <AboutText>Projetos</AboutText>
                    <BoxContentA>
                        <BiShareAlt color='#90E0EF' size={30} /> 
                        <BiSearch color='#90E0EF' size={30}/>
                    </BoxContentA>
                </BoxA>
                <BoxB>
                    <BoxContentB>
                        <MacHeader/>
                    </BoxContentB>
                </BoxB>
            </About>
            <Animations/>
        </Container>
    )
   }
}

