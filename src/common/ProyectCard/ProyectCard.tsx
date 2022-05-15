import styled from "styled-components";

const Proyecto = styled.article`
    width: 25%;
    overflow: hidden;
    display: flex;
    align-items: center;
    @media (max-width: 600px) {
        width: 50%;
    }
`

const Imagen = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const ProyectCard = ({img}) =>{
    return(
        <Proyecto>
            <Imagen 
                src={img} 
                alt=""/>
        </Proyecto>
    )
}