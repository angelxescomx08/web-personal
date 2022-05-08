import styled from "styled-components";

const MainSection = styled.section``

const ContenedorSaludo = styled.article`
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
`

const Saludo = styled.h3`
    margin: 0;
    font-size: 14px;
    color: #1A857F;
`

const Nombre = styled.h1`
    margin: 0;
    color: #fff;
    font-size: 26px;
`

const Descripcion = styled.p`
    margin: 0;
    color: #e6e3e3;
    font-size: 14px;
    max-width: 450px;
    text-align: justify;
`

export const Main = ()=>{
    return (
        <MainSection>
            <ContenedorSaludo>
        	    <Saludo>Hola soy</Saludo>
                <Nombre>José Ángel Hdz Rda</Nombre>
                <Descripcion>
                    Soy un estudiante de ingeniería en sistemas computacionales del Instituto Politécnico Nacional, 
                    de la Escuela Superior de Cómputo. Estoy cursando mi último semestre, soy un apasianado 
                    del desarrollo web y de las apliaciones móviles.
                </Descripcion>
            </ContenedorSaludo>
        </MainSection>
    )
}