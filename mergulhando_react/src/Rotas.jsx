import React from 'react'

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Inicio from './pages/Inicio'
import Postagem from './pages/Postagem'

const Rotas = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<Inicio/>}/>
                <Route index path='/postagem/:nome/:descricao' element={ <Postagem/> }/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Rotas
