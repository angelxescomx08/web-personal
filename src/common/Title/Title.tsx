import styled from "styled-components";

const Titulo = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    color: #fff;
    font-family: 'Roboto', sans-serif;
`

export const Title = (props) =>{
    return (
        <Titulo>
            {props.children}
        </Titulo>
    )
}