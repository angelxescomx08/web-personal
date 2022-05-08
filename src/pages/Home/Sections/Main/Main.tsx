import styled from "styled-components";

import FotoPerfil from '../../../../img/foto.webp';

const MainSection = styled.section`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
`

const ContenedorSaludo = styled.article`
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
`

const Saludo = styled.h3`
    margin: 0;
    font-size: 14px;
    color: #1A857F;
    font-family: 'Nunito', sans-serif;
`

const Nombre = styled.h1`
    margin: 0;
    color: #fff;
    font-size: 26px;
    font-family: 'Roboto', sans-serif;
`

const Descripcion = styled.p`
    margin: 0;
    color: #e6e3e3;
    font-size: 14px;
    max-width: 450px;
    text-align: justify;
    font-family: 'Nunito', sans-serif;
`

const ContenedorFoto = styled.div`
`

const Foto = styled.img`
    width: 200px;
    border-radius: 5px;
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
            <ContenedorFoto>
                <Foto src={FotoPerfil} alt=""/>
            </ContenedorFoto>
        </MainSection>
    )
}