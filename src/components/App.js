import React, { Component } from 'react'
import TeamList from './TeamList'
import TeamDetails from './TeamDetails'

class App extends Component {
    render() {
        return <div>
            <p>hello</p>
            <div><TeamList /></div>
            <hr/>
            <div><TeamDetails /></div>
        </div>
    }
}

export default App