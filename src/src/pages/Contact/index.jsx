import { Container, About, AboutText, BoxA, BoxContentA, BoxB, BoxContentB, Text} from "./styled";
import { FcFolder } from 'react-icons/fc'
import { Link } from "react-router-dom";
import { BiShareAlt, BiSearch,  } from "react-icons/bi";
import { Header } from "../../components/Header";
import { Animations} from "../../components/Animations";
import { MacHeader } from "../../components/MacHeader";



export function Contact(){
    return(
        <Container>
            <Header/>
            <Animations/>
            <About>
                <BoxA>
                    <AboutText>Contact</AboutText>
                    <BoxContentA>
                        <BiShareAlt color='#90E0EF' size={30} /> 
                        <BiSearch color='#90E0EF' size={30}/>
                    </BoxContentA>
                </BoxA>
                <BoxB>
                    <MacHeader/>
                    <Text>
                        
                    </Text>
                </BoxB>
            </About>
        </Container>
    )
}