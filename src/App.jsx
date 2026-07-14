import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Saudacao from './components/Saudacao'
import Perfil from './components/Perfil'
import Contador from './components/Contador'

import Interruptor from './components/Interruptor' // 1. Importe o Interruptor

function App() {
  return (
    <div className="App">
      <Saudacao />

      <div className="Perfil">
        <Perfil nome="Maria" />
        <Perfil nome="João" />
      </div>

      <Contador />
      <Interruptor />

    </div>
  );
}

export default App;