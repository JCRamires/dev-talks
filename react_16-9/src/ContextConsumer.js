import React, { PureComponent } from 'react'

import meuContexto from './meuContexto'

class ContextConsumer extends PureComponent {
    // static contextType = meuContexto

    render() {
        return (
            <meuContexto.Consumer>
                {contexto => (
                    <span>Valor: {contexto.valor}</span>
                )}
            </meuContexto.Consumer>
        )
    }

    // componentDidMount() {
    //     const contexto = this.context
    //     console.log(contexto)
    // }
}

export default ContextConsumer