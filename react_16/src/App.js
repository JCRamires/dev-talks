import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'

import Home from './Home.jsx'
import Fragments from './fragments/Fragments.jsx'

const App = () => (
  <Fragment>
    <div>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </div>

    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/fragments' component={Fragments} />
    </div>
  </Fragment>
)

export default App