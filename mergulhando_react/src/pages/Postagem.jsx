import { useParams } from 'react-router-dom'
import Titulo from '../components/Titulo'
import Campo from '../components/Campo'
import Conteudo from '../components/Conteudo'

const Postagem = () => {
  const {nome, descricao} = useParams()
  return (
    <div>
        <Titulo nome='Mergulhando no React'/>

        <Campo>
          <Conteudo nome={`${nome}`} descricao={ descricao }/>
        </Campo>
    </div>
  )
}

export default Postagem
