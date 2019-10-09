import React, { PureComponent } from 'react'

import Profiler from './Profiler'

import './App.css'

export const PAGINAS = {
  INDEX: 'index',
  PROFILER: 'profiler'
}

const renderizarPagina = (paginaSelecionada, selecionarPagina) => {
  switch (paginaSelecionada) {
    case PAGINAS.PROFILER: {
      return (
        <Profiler />
      )
    }
    default: {
      return (
        <ul>
          <li><a href="#" onClick={() => selecionarPagina(PAGINAS.PROFILER)}>Profiler</a></li>
        </ul>
      )
    }
  }
}

class App extends PureComponent {
  state = {
    paginaSelecionada: PAGINAS.INDEX
  }

  selecionarPagina = paginaSelecionada => this.setState({ paginaSelecionada })

  render() {
    return (
      <div className="App">
        {this.state.paginaSelecionada !== PAGINAS.INDEX && (
          <div>
            <button onClick={() => this.selecionarPagina(PAGINAS.INDEX)}>VOLTAR</button>
          </div>
        )}
        {renderizarPagina(this.state.paginaSelecionada, this.selecionarPagina)}
      </div>
    )
  }
}

export default App
