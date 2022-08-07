import { IoLogoApple, IoLogoWindows } from "react-icons/io";
import { Container, Text } from "./styled";

export function MacHeader(){
    return(
        <Container>
            <IoLogoApple size={24} color='#fff' />
            <Text>Code</Text>
            <Text>Tecnologias</Text>
            <Text>Projetos</Text>
            <IoLogoWindows size={24} color='#FFF' />
        </Container>
    )
}