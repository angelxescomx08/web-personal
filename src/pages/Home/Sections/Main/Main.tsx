import styled from "styled-components";
import { TypeCard } from "../../../../common/TypeCard/TypeCard";

import FotoPerfil from '../../../../img/foto.webp';

const MainSection = styled.section`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
    padding: 10em 2em;
`

const ContenedorSaludo = styled.article`
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
`

const Saludo = styled.h3`
    margin: 0;
    font-size: 1.2rem;
    color: #1A857F;
    font-family: 'Nunito', sans-serif;
`

const Nombre = styled.h1`
    margin: 0;
    color: #fff;
    font-size: 3rem;
    font-family: 'Roboto', sans-serif;
`

const Descripcion = styled.p`
    margin: 0;
    color: #e6e3e3;
    font-size: 1.2rem;
    max-width: 450px;
    text-align: justify;
    font-family: 'Nunito', sans-serif;
`

const ContenedorFoto = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding: 20px;
    background-color: #606165;
    border-radius: 5px;
    box-shadow: 5px 5px 0.5em #060606;
`

const Foto = styled.img`
    width: 250px;
    border-radius: 5px;
`

const ContenedorTypesCards = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
`

export const Main = () => {

    return (
        <MainSection>
            <ContenedorSaludo>
                <Saludo className="animate__animated animate__fadeInUp animate__faster">Hola soy</Saludo>
                <Nombre className="animate__animated animate__fadeInUp animate__faster animate__delay-1s" >José Ángel Hdz Rda</Nombre>
                <Descripcion className="animate__animated animate__fadeInUp animate__faster animate__delay-2s">
                    Soy un estudiante de ingeniería en sistemas computacionales del Instituto Politécnico Nacional,
                    de la Escuela Superior de Cómputo. Estoy cursando mi último semestre, soy un apasianado
                    del desarrollo web y de las aplicaciones móviles.
                </Descripcion>
            </ContenedorSaludo>
            <ContenedorFoto>
                <Foto src={FotoPerfil} alt="" />
                <ContenedorTypesCards>
                    <TypeCard 
                        texto="You can be the greatest, You can be the best" 
                        margenIzquierdo="30px"/>
                    <TypeCard 
                        texto="You can be the greatest, You can be the best" 
                        margenIzquierdo="70px"/>
                    <TypeCard 
                        texto="You can be the greatest, You can be the best" 
                        margenIzquierdo="50px"/>
                </ContenedorTypesCards>
            </ContenedorFoto>
        </MainSection>
    )
}