import { useState } from 'react'
import './App.css'
import CalculatorCase from './components/CalculatorCase.jsx'

function App() {
  const [actualPage, setActualPage] = useState('simple')

  const renderPage = () => {
    switch (actualPage) {
      case 'simple':
        return (
          <CalculatorCase/>
        )
      case 'scientific':
        return <h1>Calculadora científica</h1>

      case 'pokemon':
        return <h1>Calculadora de debilidades Pokemon</h1>

      default:
        return <h1>Calculadora simple</h1>
    }
  }

  return (
    <div className="App">
      <nav>
        <ul>
          <li
            className={actualPage === 'simple' ? 'active' : ''}
            onClick={() => setActualPage('simple')}
          >
            Calculadora simple
          </li>

          <li
            className={actualPage === 'scientific' ? 'active' : ''}
            onClick={() => setActualPage('scientific')}
          >
            Calculadora científica
          </li>

          <li
            className={actualPage === 'pokemon' ? 'active' : ''}
            onClick={() => setActualPage('pokemon')}
          >
            Calculadora Pokemon
          </li>
        </ul>
      </nav>

      <main>
        {renderPage()}
      </main>
    </div>
  )
}

export default App