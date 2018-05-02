import React, { PureComponent } from 'react'

class FunctionalSetState extends PureComponent {
    state = {
        contador1: 0,
        contador2: 0
    }

    onClickHandlerContador1 = () => {
        this.setState({ contador1: this.state.contador1 + 1 })
        this.setState({ contador1: this.state.contador1 + 1 })
        this.setState({ contador1: this.state.contador1 + 1 })
        this.setState({ contador1: this.state.contador1 + 1 })
    }

    onClickHandlerContador2 = () => {
        this.setState(state => ({ contador2: state.contador2 + 1}))
        this.setState(state => ({ contador2: state.contador2 + 1}))
        this.setState(state => ({ contador2: state.contador2 + 1}))
        this.setState(state => ({ contador2: state.contador2 + 1}))
    }

    render() {
        return (
            <div>
                <div>
                    Contador 1: {this.state.contador1}<br />
                    <button onClick={this.onClickHandlerContador1}>Click me</button>
                </div>

                <div>
                    Contador 2: {this.state.contador2}<br />
                    <button onClick={this.onClickHandlerContador2}>Click me</button>
                </div>
            </div>
        )
    }
}

export default FunctionalSetState