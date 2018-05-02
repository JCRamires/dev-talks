import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <div>
        <ul>
            <li><Link to='/fragments'>Fragments</Link></li>
            <li><Link to='/boundaries'>Boundaries</Link></li>
            <li><Link to='/portals'>Portals</Link></li>
        </ul>
    </div>
)

export default Home