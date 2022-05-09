import React from 'react'
import styled from 'styled-components';
import { Cloud } from 'react-icon-cloud'
import { proyectos } from '../../js/proyectos';

const ContenedorIcon = styled.a`
`

const Icon = styled.img`
`

export const IconCloud = () => {
    return (
        <Cloud options={{
            wheelZoom:false,
            minSpeed: 5
            }}>
            {
                proyectos.map((proyecto)=><ContenedorIcon key={proyecto}>
                    <Icon 
                        height="200"
                        width="200" 
                        src={proyecto} />
                </ContenedorIcon>)
            }
        </Cloud>
    )
}