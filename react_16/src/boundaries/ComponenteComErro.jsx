import React, { PureComponent } from 'react'

class ComponenteComErro extends PureComponent {
    state = { clicou: false }

    render() {
        if (this.state.clicou) {
            throw new Error('Deu ruim')
        }

        return (
            <button onClick={() => this.setState(() => ({ clicou: true }))}>Click me</button>
        )
    }
}

export default ComponenteComErro