import React, { Component } from 'react'
import TeamList from './TeamList'
import TeamDetails from './TeamDetails'
import Stats from './Stats'

class App extends Component {
    render() {
        return <div>
            <div><Stats /></div>
            <hr />
            <div><TeamList /></div>
            <hr />
            <div><TeamDetails /></div>
        </div>
    }
}

export default App