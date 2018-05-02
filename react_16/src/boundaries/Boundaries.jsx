import React, { Component } from 'react'

import erro from './erro.jpg'

import ComponenteComErro from './ComponenteComErro.jsx'

class Boundaries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            deuRuim: false
        }
    }

    componentDidCatch(erro, info) {
        console.log(erro, info)
        this.setState({ deuRuim: true })
    }

    render() {
        return (
            <div>
                { this.state.deuRuim ? (
                    <img src={erro} alt='Erro' />
                ) : (
                    <ComponenteComErro />
                )}
            </div>
        )
    }
}

export default Boundaries