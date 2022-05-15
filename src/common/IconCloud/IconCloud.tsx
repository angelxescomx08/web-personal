import React from 'react'
import styled from 'styled-components';
import { Cloud, renderSimpleIcon } from 'react-icon-cloud'
import { tecnologias } from '../../js/tecnologias';

const ContenedorCloud = styled(Cloud)`
`

export const IconCloud = ({setFiltro}) => {
    return (
        <ContenedorCloud options={{
            wheelZoom: false,
            minSpeed: 5,
            initial: [.2, 0]
        }}>
            {
                tecnologias.map(({icon,nombre}) => {
                    return renderSimpleIcon({
                        icon,
                        size: 150,
                        aProps: {
                            onClick: (e: any) => {
                                e.preventDefault();
                                setFiltro(nombre);
                            }
                        }
                    })
                })
            }
        </ContenedorCloud>
    )
}