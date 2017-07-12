import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { randomize } from './../actions/actions'

class TeamDetails extends Component {
    render() {
        const team = this.props.team;
        const randomizeClick = this.props.randomizeClick;

        if (!team) return <div>No team selected</div>

        const playerItems = team.players.map((player) =>
            <li key={player.id} onClick={() => randomizeClick(player)}>{player.name}</li>
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

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    randomizeClick: (player) => dispatch(randomize(player))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TeamDetails)