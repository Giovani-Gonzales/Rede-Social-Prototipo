import React from 'react'
import styled from 'styled-components'

const ModeloTitulo = styled.div `
    color: #2da9f3;
    font-size: 32pt;
    padding:32px 0;
    text-align: center;
`

const Titulo = ({nome}) => {
  return <ModeloTitulo>{nome}</ModeloTitulo>
}

export default Titulo
