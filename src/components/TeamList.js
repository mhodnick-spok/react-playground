import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import teamClicked from './../actions/teamClicked'

class TeamList extends Component {
    render() {
        const teams = this.props.teams;
        const teamClick = this.props.teamClick;
        const teamItems = teams.map((team) =>
            <li key={team.id} onClick={() => teamClick(team)}>{team.name}</li>
        );

        return <div><ul>{teamItems}</ul></div>
    }
}

TeamList.propTypes = {
  teams: PropTypes.array.isRequired,
  teamClick: PropTypes.func.isRequired
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    teams: state.teams
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    teamClick: (team) => dispatch(teamClicked(team))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamList)