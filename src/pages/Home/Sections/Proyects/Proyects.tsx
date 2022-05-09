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
    align-items: flex-start;
    @media (max-width: 1200px) {
        flex-wrap: wrap;
    }
`

const ContenedorProyectos = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    width: 60%;
    @media (max-width: 1200px) {
        width: 100%;
    }
`

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

export const Proyects = () => {
    const { observe, inView } = useInView({
        unobserveOnEnter: true,
        threshold: .6
    });
    return (
        <ProyectsSection ref={observe} className={inView? 'animate__animated animate__fadeIn animate__slow':'oculto'}>
            <Title>Proyectos</Title>
            <Contenedor>
                <IconCloud />
                <ContenedorProyectos>
                    {arr.map(proyecto => <ProyectCard />)}
                </ContenedorProyectos>
            </Contenedor>
        </ProyectsSection>
    )
}