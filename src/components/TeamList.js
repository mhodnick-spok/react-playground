import React, { Component } from 'react'

class TeamList extends Component {
    render() {
        const teams = this.props.teams;
        const teamItems = teams.map((team) =>
            <li>{team.name}</li>
        );

        return <div><ul>{teamItems}</ul></div>
    }
}

export default TeamList