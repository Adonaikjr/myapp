import { Button } from "../Button";
import { Container, Imagebox, ContentIcons } from "./styled";
import perfil from '../../img/profile.png'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io'
import { Link } from "react-router-dom";
export function Header(){
    return(
    <Container>
        <Imagebox>
        <img src={ perfil } />
        <ContentIcons>
            <a href="http://linkedin.com/in/adonaikjr"><IoLogoLinkedin size={30} color='#0b5e86 '/></a>
            <a href="http://github.com/adonaikjr"><IoLogoGithub size={30} color='#171515' /></a>
        </ContentIcons>
        </Imagebox>
        <Button title='About'/>
        <Button title='Projetos'/>
        <Button title='Labs'/>
        <Button title='Contact'/>
    </Container>
    )
}