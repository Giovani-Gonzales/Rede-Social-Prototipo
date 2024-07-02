import React from 'react'

import Titulo from '../components/Titulo'
import Campo from '../components/Campo'
import Conteudo from '../components/Conteudo'

const loremIpsum = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, veritatis tempora. Dolores quibusdam eum reiciendis cupiditate necessitatibus animi omnis sint? Quasi aliquam cumque earum obcaecati itaque omnis eligendi nemo ut?'


const Rotas = () => {
  return (
    <div>

        <Titulo nome='Mergulhando no React'/>
        
      <Campo>
        <Conteudo nome='giovani' descricao={loremIpsum}/>
      </Campo>
    </div>
  )
}

export default Rotas
