import react, { useState } from 'react'
import './App.css'
import trendingBoxLogo from './imagenes/Logo.png'
import Boton001 from './componentes/Boton001.jsx'
import Contador from './componentes/Contador.jsx'

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const eventoClick = () => {
    setNumClicks(numClicks + 1)
  }

  const reiniciarContador = () => {
    setNumClicks(0)
  }

  return (
    <div>
      <img className='trendingbox-logo' src={trendingBoxLogo} />
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks} />
        <Boton001
          texto='Click'
          esBotonClick={true}
          eventoClick={eventoClick} />
        <Boton001
          texto='Reiniciar'
          esBotonClick={false}
          eventoClick={reiniciarContador} />
      </div>
    </div>
  )
}

export default App
