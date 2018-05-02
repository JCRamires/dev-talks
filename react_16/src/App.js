import React from 'react'
import { Link, Route } from 'react-router-dom'

import Home from './Home.jsx'
import Fragments from './fragments/Fragments.jsx'
import Boundaries from './boundaries/Boundaries.jsx'
import Portals from './portals/Portals.jsx'
import FunctionalSetState from './FunctionalSetState.jsx'

const App = () => (
  <div style={{ padding: '30px'}}>
    <div>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </div>

    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/fragments' component={Fragments} />
      <Route exact path='/boundaries' component={Boundaries} />
      <Route exact path='/portals' component={Portals} />
      <Route exact path='/functionalsetstate' component={FunctionalSetState} />
    </div>
  </div>
)

export default App