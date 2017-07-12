import React, { Component } from 'react'
import TeamList from './TeamList'

class App extends Component {
    render() {
        return <div>
            <p>hello</p>
            <div><TeamList teams={this.state.teams} /></div>
        </div>
    }
}

export default App