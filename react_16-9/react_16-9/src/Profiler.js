import React, { PureComponent } from 'react'
import { unstable_trace as trace } from 'scheduler/tracing'

import ListaTarefas from './ListaTarefas'

class Profiler extends PureComponent {
    state = {
        valorInput: '',
        tarefas: []
    }

    onChangeInput = event => trace('onChangeInput', performance.now(), () => this.setState({ valorInput: event.currentTarget.value }) )

    adicionarTarefa = () => trace('Adicionou tarefa', performance.now(), () => this.setState(state => ({ tarefas: [...state.tarefas, state.valorInput], valorInput: '' })))

    render() {
        return (
            <>
                <h1>Tarefas</h1>
                <div>
                    <input value={this.state.valorInput} onChange={this.onChangeInput} placeholder="Tarefa" />
                    <button onClick={this.adicionarTarefa}>Adicionar</button>
                </div>
                <ListaTarefas tarefas={this.state.tarefas} />
            </>
        )
    }
}

export default Profiler