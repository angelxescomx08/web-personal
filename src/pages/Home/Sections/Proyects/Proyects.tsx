import { useState } from 'react';
import styled from 'styled-components';
import { useInView } from "react-cool-inview";

import { IconCloud } from '../../../../common/IconCloud/IconCloud';
import { ProyectCard } from '../../../../common/ProyectCard/ProyectCard';
import { Title } from '../../../../common/Title/Title';

const ProyectsSection = styled.section`
    padding: 10em 2em;
`

const Contenedor = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 1200px) {
        flex-wrap: wrap;
    }
`

const ContenedorProyectos = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    width: 100%;
    @media (max-width: 1200px) {
        width: 100%;
    }
`

const ContenedorEstadisticas = styled.article`
    width: 50%;
    margin: 1em;
    background-color: #606165;
    border-radius: 5px;
    box-shadow: 5px 5px 0.5em #060606;
`

const Estadistica = styled.p`
    color: #fff;
    font-family: 'Nunito', sans-serif;
    margin: 0;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0.5em 1em;
`

const Valor = styled.span`
    font-weight: normal;
`

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

export const Proyects = () => {
    const [filtro,setFiltro] = useState('Todos');
    const { observe, inView } = useInView({
        unobserveOnEnter: true,
        threshold: .3
    });
    return (
        <ProyectsSection ref={observe} className={inView ? 'animate__animated animate__fadeIn animate__slow' : 'oculto'}>
            <Title>Proyectos</Title>
            <Contenedor>
                <IconCloud />
                <ContenedorEstadisticas>
                    <Estadistica>Proyectos: <Valor>30</Valor></Estadistica>
                    <Estadistica>Lenguajes usados: <Valor>15</Valor></Estadistica>
                    <Estadistica>Framework/Bibliotecas usadas: <Valor>55</Valor></Estadistica>
                    <Estadistica>Desplegados en internet: <Valor>8</Valor></Estadistica>
                    <hr/>
                    <Estadistica>Valor selecionado: <Valor>{filtro}</Valor></Estadistica>
                    <Estadistica>Proyectos encontrados: <Valor>8</Valor></Estadistica>
                </ContenedorEstadisticas>
            </Contenedor>
            <ContenedorProyectos>
                {arr.map(proyecto => <ProyectCard 
                    key={proyecto} />)}
            </ContenedorProyectos>
        </ProyectsSection>
    )
}