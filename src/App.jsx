import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import PokeInput from './components/PokeInput'
import PoKeDetail from './components/PoKeDetail'
import PokeDex from './components/PokeDex'
import ProtectedRoutes from './components/ProtectedRoutes'


function App() {
  

  return (
    <HashRouter>
      <div className='App'>
      <Routes>

        <Route path='/' element={<PokeInput/>} />


        <Route element={<ProtectedRoutes/>} >

          <Route path='/pokedex' element={<PokeDex/>} />
          <Route path='/pokedex/:id' element={<PoKeDetail/>} />

        </Route>

       </Routes>
      </div>
    </HashRouter>
  )
}

export default App
