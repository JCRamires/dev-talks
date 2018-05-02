import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'

const portalRoot = document.getElementById('portal-root')

class PortalRoot extends PureComponent {
    elemento = document.createElement('div')

    componentDidMount() {
        portalRoot.appendChild(this.elemento)
    }

    componentWillUnmount() {
        portalRoot.removeChild(this.elemento)
    }

    render() {
        return createPortal(
            this.props.children,
            this.elemento
        )
    }
}

const ComponenteFilho = () => (
    <button>Botão filho</button>
)

class Portals extends PureComponent {
    render() {
        return (
            <div onClick={() => alert('clicou no componente filho')}>
                Componente Pai
                <PortalRoot>
                    <ComponenteFilho />
                </PortalRoot>
            </div>
        )
    }
}

export default Portals