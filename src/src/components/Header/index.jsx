import { Button } from "../Button";
import { Container, Imagebox, ContentIcons, LinksButton } from "./styled";
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io'
import { Link } from "react-router-dom";
import profile from '../../img/profile.webp'

export function Header(){

    return(
    <Container>
        <Imagebox>
            <img src={ profile } alt="profile" />
        <ContentIcons>
            <a href="http://linkedin.com/in/adonaikjr"><IoLogoLinkedin size={30} color='#0b5e86 '/></a>
            <a href="http://github.com/adonaikjr"><IoLogoGithub size={30} color='#171515' /></a>
        </ContentIcons>
        </Imagebox>


        <Link to='/'>
        <Button title='Home'/> 
        </Link>  
        
        <Link to='/project'>
            <Button title='Projetos'/>
        </Link>

        <Link to='/'>
            <Button title='Labs'/>
        </Link>

        <Link to='/'>
            <Button title='Contact'/>
        </Link>

    </Container>
    )
}