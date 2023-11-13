import React from "react"
import '../stylesheets/Boton001.css'

function Boton001({ texto, esBotonClick, eventoClick }) {
  return (
    <button
      className={esBotonClick ? 'boton-click' : 'boton-reiniciar'}
      onClick={eventoClick} >
      {texto}
    </button>
  )
}

export default Boton001