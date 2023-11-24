import './App.css'
import styled from 'styled-components'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Inicio from './components/inicio'
import Sobre from './components/sobre'
import Projetos from './components/projetos'



function App() {
  
  return (
    <>
    <BrowserRouter>

    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
      </ul>
    </nav>
    <nav>
      <ul>
        <li>
          <Link to="/sobre" >Sobre</Link>
        </li>
      </ul>
    </nav>
    <nav>
      <ul>
        <li>
          <Link to="/projetos" >Projetos</Link>
        </li>
      </ul>
    </nav>
    

      <Routes>
        <Route path="/" element={ <Inicio/> }/>
        <Route path="/sobre" element={<Sobre/> }/>
        <Route path="/projetos" element={ <Projetos/> }/>
      </Routes>
        
    </BrowserRouter>
    </>
  )
}

export default App
