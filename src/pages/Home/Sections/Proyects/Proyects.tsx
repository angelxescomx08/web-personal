import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from "react-cool-inview";

import { IconCloud } from '../../../../common/IconCloud/IconCloud';
import { ProyectCard } from '../../../../common/ProyectCard/ProyectCard';
import { Title } from '../../../../common/Title/Title';
import { proyectos } from '../../../../js/proyectos';
import { tecnologias } from '../../../../js/tecnologias';

const ProyectsSection = styled.section`
    padding: 10em 2em;
    @media (max-width: 600px) {
        padding: 2em .2em;
    }
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
    margin: 1em 0em;
    background-color: #606165;
    border-radius: 5px;
    box-shadow: 5px 5px 0.5em #060606;
    @media (max-width: 600px) {
        width: 100%;
    }
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

export const Proyects = () => {
    const [filtro,setFiltro] = useState('Javascript');
    const [animacionClase,setAnimacionClase] = useState('animate__animated animate__fadeIn')
    const { observe, inView } = useInView({
        unobserveOnEnter: true,
        threshold: .2
    });

    useEffect(()=>{
        setAnimacionClase('');
        const timer = setTimeout(()=>{
            setAnimacionClase('animate__animated animate__fadeIn');
        },10)
        return ()=>{
            clearTimeout(timer);
        } 
    },[filtro])

    return (
        <ProyectsSection ref={observe} className={inView ? 'animate__animated animate__fadeIn animate__slow' : 'oculto'}>
            <Title>Proyectos</Title>
            <Contenedor className={animacionClase}>
                <IconCloud setFiltro={setFiltro}/>
                <ContenedorEstadisticas>
                    <Estadistica>Proyectos: <Valor>{proyectos.length}</Valor></Estadistica>
                    <Estadistica>Lenguajes usados: <Valor>15</Valor></Estadistica>
                    <Estadistica>Framework/Bibliotecas usadas: <Valor>{tecnologias.length}</Valor></Estadistica>
                    <Estadistica>Desplegados en internet: <Valor>8</Valor></Estadistica>
                    <hr/>
                    <Estadistica>Tecnología: <Valor>{filtro}</Valor></Estadistica>
                    <Estadistica>Proyectos encontrados: <Valor>8</Valor></Estadistica>
                </ContenedorEstadisticas>
            </Contenedor>
            <ContenedorProyectos className={animacionClase}>
                {proyectos.map(proyecto =>{
                    if(proyecto.tecnologias.includes(filtro)){
                        return <ProyectCard 
                        key={proyecto['id-esp']} 
                        img={proyecto.img}/>
                    }
                    return null
                } )}
            </ContenedorProyectos>
        </ProyectsSection>
    )
}