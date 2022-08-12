import { Header } from "../../components/Header";
import { Container, About, AboutText, BoxA, BoxContentA, BoxB, BoxContentB, Text} from "./styled";
import { Animations } from "../../components/Animations";
import { BiShareAlt, BiSearch,  } from "react-icons/bi";
import { MacHeader } from "../../components/MacHeader";
import { FcFolder } from 'react-icons/fc'
export function Project(){
    return(
        <Container>
        <Header/>
        <Animations/>
        <About>
            <BoxA>
                <AboutText>Projects</AboutText>
                <BoxContentA>
                    <BiShareAlt color='#90E0EF' size={30} /> 
                    <BiSearch color='#90E0EF' size={30}/>
                </BoxContentA>
            </BoxA>
            <BoxB>
                <MacHeader/>
                <Text>
                    <a href="https://testrocketmovies.netlify.app" target='blank'>
                    <FcFolder size={70}/>
                    Rocket Movies BETA
                    </a>
                    <a  href="https://explorer-food-beta.netlify.app" target="blank" rel="noopener noreferrer">
                    <FcFolder size={70}/>
                        Food Explorer BETA
                    </a>
                    <a target='blank' href="https://my-filmes-beta.netlify.app/">
                    <FcFolder size={70}/>
                        My Filmes+api
                    </a>

                    <a href="https://rocket-nft-beta.netlify.app/" target="blank" rel="noopener noreferrer">
                    <FcFolder size={70}/>
                        Rocket Nft BETA
                    </a>

                    <a href="https://adonaikjr.github.io/Perfil-Redes-Sociais/" target="_blank" rel="noopener noreferrer">
                    <FcFolder size={70}/>
                        Redes
                    </a>

                    <a href="https://clone-instagram-beta.netlify.app/" target="blank" rel="noopener noreferrer">
                    <FcFolder size={70}/>
                        Clone instagram
                    </a>

                </Text>
            </BoxB>
        </About>
    </Container>
    )
}