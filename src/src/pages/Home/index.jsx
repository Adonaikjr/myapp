import { BiShareAlt, BiSearch,  } from "react-icons/bi";
//import { IoLogoApple  } from "react-icons/io";
import { Header } from "../../components/Header";
import { Container, About, AboutText, BoxA, BoxContentA, BoxB, BoxContentB, Text} from "./styled";
//import { Cards } from "../../components/Cards";
//import inicio from '../../img/rocketmovies/inicio.png'
//import home from '../../img/rocketmovies/home.png'
//import profile from '../../img/rocketmovies/pro.png'
import React from "react";
import { Animations} from "../../components/Animations";
import { MacHeader } from "../../components/MacHeader";
import { FcFolder } from 'react-icons/fc'
import { Link } from "react-router-dom";



export function Home() {

    return(
        <Container>
            <Header/>
            <Animations/>
            <About>
                <BoxA>
                    <AboutText>Home</AboutText>
                    <BoxContentA>
                        <BiShareAlt color='#90E0EF' size={30} /> 
                        <BiSearch color='#90E0EF' size={30}/>
                    </BoxContentA>
                </BoxA>
                <BoxB>
                    <MacHeader/>
                    <Text>
                        <Link to='/project'>
                        <FcFolder size={70}/>
                        Projetos
                        </Link>
                    </Text>
                </BoxB>
            </About>
        </Container>
    )
   }


