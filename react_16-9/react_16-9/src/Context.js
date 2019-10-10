import React from 'react'

import ContextConsumer from './ContextConsumer'

import meuContexto from './meuContexto'

const Context = () => (
    <meuContexto.Provider value={{ valor: 12345 }}>
        <ContextConsumer />
    </meuContexto.Provider>
)

export default Context