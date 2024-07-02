import React from 'react'

import styled from 'styled-components'

const ModeloConteudo = styled.div `
    background: #3b424c;
    border-radius: 16px;
    margin-bottom: 16px;
    padding: 16px;
`

const ConteudoTopo = styled.div `
    display: flex;
    gap: 16px;
`

const ConteudoFoto = styled.div `
    border-radius: 100%;
    height: 96px;
    width: 96px;
    background: #fff;
`

const ConteudoNome = styled.div `
    align-self: center;
    color: #2ca8f2;
    font-weight: bold;
    font-size: 24pt;
`

const ConteudoDescricao = styled.div`
    margin-top: 16px;
    text-align: justify;
    color: whitesmoke;
`

const Campo = ({nome, descricao }) => {
  return (
    <ModeloConteudo>
        <ConteudoTopo>
            <ConteudoFoto/>
            <ConteudoNome>@{nome}</ConteudoNome>
        </ConteudoTopo>

        <ConteudoDescricao>
            {descricao}
        </ConteudoDescricao>

    </ModeloConteudo>
  )
}

export default Campo
