"use client";

import {createContext, useState, useContext} from 'react'

// Se incorpora el archivo 'theme.js' que es el que tiene los estilos de acuerdo si la pagina esta en 
// modo oscuro o modo claro
import themes from './themes';

// Se crean los contextos respectivo para el manejo de la aplicacion
export const GlobalContext = createContext()
export const GlobalUpdateContext = createContext()

export const GlobalProvider = ({ children }) => {

  // Se crea un 'useState' para manejar el theme de la aplicacion
  const [selectedTheme, setSelectedTheme] = useState(0)
  const theme = themes[selectedTheme]

  return (
    <GlobalContext.Provider value={{ theme }}>
      <GlobalUpdateContext.Provider value={setglobalUpdate}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  )
}