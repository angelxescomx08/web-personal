import styled from "styled-components";

const Proyecto = styled.article`
    width: 33.33%;
    overflow: hidden;
`

const Imagen = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const ProyectCard = () =>{
    return(
        <Proyecto>
            <Imagen src="https://www.workmeter.com/wp-content/uploads/2015/09/gestion-de-proyectos-que-es-scaled.jpg" alt=""/>
        </Proyecto>
    )
}