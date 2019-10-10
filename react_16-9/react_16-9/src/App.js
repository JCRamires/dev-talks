import React, { PureComponent } from 'react'

import Profiler from './Profiler'

import './App.css'

export const PAGINAS = {
  INDEX: 'index',
  PROFILER: 'profiler',
  MEMO: 'memo'
}

const renderizarPagina = (paginaSelecionada, selecionarPagina) => {
  switch (paginaSelecionada) {
    case PAGINAS.MEMO:
    case PAGINAS.PROFILER: {
      return (
        <Profiler />
      )
    }
    default: {
      return (
        <>
          <h1>Atualizações</h1>
          <h2>React 16.5</h2>
          <ul>
            <li><a href="#" onClick={() => selecionarPagina(PAGINAS.PROFILER)}>Profiler</a></li>
          </ul>
          <h2>React 16.6</h2>
          <ul>
            <li><a href="#" onClick={() => selecionarPagina(PAGINAS.MEMO)}>Memo</a></li>
          </ul>
        </>
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
