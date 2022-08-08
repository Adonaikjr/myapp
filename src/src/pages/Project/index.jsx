import { Header } from "../../components/Header";
import { Container,About, AboutText, BoxA, BoxContentA } from "./styled";
import { Animations } from "../../components/Animations";
import { BiShareAlt, BiSearch,  } from "react-icons/bi";
import { MacHeader } from "../../components/MacHeader";
export function Project(){
    return(
        <Container>
            <Header/>
            <Animations/>
            <About>
                <BoxA>
                    <AboutText>Projetos</AboutText>
                    <BoxContentA>
                        <BiShareAlt color='#90E0EF' size={30} /> 
                        <BiSearch color='#90E0EF' size={30}/>
                    </BoxContentA>
                    <MacHeader/>
                </BoxA>
            </About>
        </Container>
    )
}