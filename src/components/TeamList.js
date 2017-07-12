import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class TeamList extends Component {
    render() {
        const teams = this.props.teams;
        const teamItems = teams.map((team) =>
            <li>{team.name}</li>
        );

        return <div><ul>{teamItems}</ul></div>
    }
}

TeamList.propTypes = {
  teams: PropTypes.array.isRequired
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
    // onIncreaseClick: () => dispatch(increaseAction)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamList)