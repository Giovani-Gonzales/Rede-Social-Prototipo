import React from 'react'

import styled from 'styled-components'

const ModeloCampo = styled.div `
    background: #303741;
    border-radius: 16px;
    padding: 16px;
`

const Campo = (props) => {
  return (
    <ModeloCampo>
        {props.children}
    </ModeloCampo>
  )
}

export default Campo
