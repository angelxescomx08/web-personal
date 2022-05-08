import styled from 'styled-components';
import Keyboard, { Cursor } from 'react-mk';

interface props {
    texto: string;
    margenIzquierdo ?: string;
}

interface estilos{
    margenIzq ?: string;
}

const Card = styled.div<estilos>`
    width: 200px;
    height: 93px;
    padding: 10px;
    background-color: #131417;
    color: #fff;
    border-radius: 5px;
    box-shadow: 5px 5px .5em #131417;
    margin: 10px;
    margin-left: ${({margenIzq})=>margenIzq ? margenIzq : '0px'};
`

const Texto = styled(Keyboard)`
`

export const TypeCard = (props: props) => {
    return (
        <Card margenIzq={props.margenIzquierdo ? props.margenIzquierdo : ''}>
            <Texto sentenceDelayPerCharRange={[0, 0]}>
                {props.texto}
            </Texto>
            <Cursor />
        </Card>
    )
}