import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class TeamDetails extends Component {
    render() {
        const team = this.props.team;
        if (!team) return <div>No team selected</div>

        const playerItems = team.players.map((player) =>
            <li key={player.id}>{player.name}</li>
        );


        return <div><h3>Details</h3>
            <ul>{playerItems}</ul>
        </div>
    }
}

TeamDetails.propTypes = {
    team: PropTypes.object
}

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        team: state.selectedTeam
    }
}

export default connect(
    mapStateToProps
)(TeamDetails)