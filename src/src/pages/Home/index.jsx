import { BiShareAlt, BiSearch,  } from "react-icons/bi";
//import { IoLogoApple  } from "react-icons/io";
import { Header } from "../../components/Header";
import { Container, About, AboutText, BoxA, BoxContentA, BoxB, BoxContentB} from "./styled";
//import { Cards } from "../../components/Cards";
//import inicio from '../../img/rocketmovies/inicio.png'
//import home from '../../img/rocketmovies/home.png'
//import profile from '../../img/rocketmovies/pro.png'
import React from "react";
import { Animations} from "../../components/Animations";
import { MacHeader } from "../../components/MacHeader";
import { FcFolder } from 'react-icons/fc'
import { Link } from "react-router-dom";
import styled from "styled-components";


export class Home extends React.Component{

    render(){

const Text = styled.p`
    a{
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
    }
`
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
                        <a href="https://testrocketmovies.netlify.app">
                        <FcFolder size={70}/>
                        RocketMovies 
                        </a>
                    </Text>
                </BoxB>
            </About>
        </Container>
    )
   }
}

