import React, { PureComponent, lazy, Suspense } from 'react'

const Mensagem = lazy(() => import('./Mensagem'))

class Lazy extends PureComponent {
    state = {
        exibirMensagem: false
    }
    render() {
        return (
            <>
                <h1>Lazy loading e Suspense</h1>
                {this.state.exibirMensagem ? (
                    <>
                        <button onClick={() => this.setState({ exibirMensagem: false })}>
                            Resetar
                        </button>
                        <Suspense fallback={<div>Carregando...</div>}>
                            <Mensagem />
                        </Suspense>
                    </>
                ) : (
                    <button onClick={() => this.setState({ exibirMensagem: true })}>
                        Exibir
                    </button>
                )}
            </>
        )
    }
}

export default Lazy