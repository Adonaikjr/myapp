import { Button } from "../Button";
import { Container, Imagebox } from "./styled";

export function Header(){
    return(
    <Container>
        <Imagebox>
        <img src="https://avatars.githubusercontent.com/u/90911791?s=400&amp;u=80fbe68576b0f81084306af0faf17b24c563827f&amp;v=4"/>
        </Imagebox>
        <Button title='About'/>
        <Button title='Works'/>
        <Button title='Labs'/>
        <Button title='Contact'/>
    </Container>
    )
}