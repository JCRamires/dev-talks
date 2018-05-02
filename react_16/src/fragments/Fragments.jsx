import React from 'react'

import Errado from './Errado.jsx'
import Certo from './Certo.jsx'

const Fragments = () => (
    <div>
        <ul>
            <Errado />
        </ul>
        
        <hr />

        <ul>
            <Certo />
        </ul>
    </div>
)

export default Fragments