import React from 'react'
import styled from 'styled-components';
import { Cloud } from 'react-icon-cloud'
import { proyectos } from '../../js/proyectos';

const ContenedorCloud = styled(Cloud)`
`

const ContenedorIcon = styled.a`
`

const Icon = styled.img`
`

export const IconCloud = () => {
    return (
        <ContenedorCloud options={{
            wheelZoom:false,
            minSpeed: 5,
            initial: [.2,0]
            }}>
            {
                proyectos.map((proyecto)=><ContenedorIcon key={proyecto} href="#!">
                    <Icon 
                        height="200"
                        width="200" 
                        src={proyecto} />
                </ContenedorIcon>)
            }
        </ContenedorCloud>
    )
}