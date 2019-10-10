import React, { PureComponent, lazy, Suspense } from 'react'

import pogu from './pogu.jpg'

import './App.css'

const Profiler = lazy(() => import(/* webpackChunkName: "profiler" */ './Profiler'))
const Lazy = lazy(() => import(/* webpackChunkName: "lazy" */ './Lazy'))
const Context = lazy(() => import(/* webpackChunkName: "context" */ './Context'))

export const PAGINAS = {
  INDEX: 'index',
  PROFILER: 'profiler',
  MEMO: 'memo',
  LAZY: 'lazy',
  CONTEXT_TYPE: 'context_type',
  NADA: 'nada',
  HOOKS: 'hooks'
}

const renderizarPagina = (paginaSelecionada, selecionarPagina) => {
  switch (paginaSelecionada) {
    case PAGINAS.MEMO:
    case PAGINAS.PROFILER: {
      return (
        <Suspense fallback={<div>Carregando...</div>}>
          <Profiler />
        </Suspense>
      )
    }
    case PAGINAS.LAZY: {
      return (
        <Suspense fallback={<div>Carregando...</div>}>
          <Lazy />
        </Suspense>
      )
    }
    case PAGINAS.CONTEXT_TYPE: {
      return (
        <Suspense fallback={<div>Carregando...</div>}>
          <Context />
        </Suspense>
      )
    }
    case PAGINAS.NADA: {
      return (
        <div style={{ fontSize: '72px', fontWeight: 800 }}>
          Nada de interessante
        </div>
      )
    }
    case PAGINAS.HOOKS: {
      return (
        <>
          <div style={{ fontSize: '72px', fontWeight: 800 }}>
            Hooks
          </div>
          <img src={pogu} />
          <div style={{ color: 'grey', fontSize: '22px' }}>
            E documentação traduzida para outras linguagens... <br />
            <a href='https://pt-br.reactjs.org/' target='__blank'>pt-br</a>
          </div>
        </>
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
            <li><a href="#" onClick={() => selecionarPagina(PAGINAS.LAZY)}>Lazy e Suspense</a></li>
            <li><a href="#" onClick={() => selecionarPagina(PAGINAS.CONTEXT_TYPE)}>contextType</a></li>
          </ul>
          <h2>React 16.7</h2>
          <ul>
            <li><a href="#" onClick={() => selecionarPagina(PAGINAS.NADA)}>16.7</a></li>
          </ul>
          <h2>React 16.8</h2>
          <ul>
            <li><a href="#" onClick={() => selecionarPagina(PAGINAS.HOOKS)}>16.8</a></li>
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
