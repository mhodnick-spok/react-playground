import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getStats } from './../reducers/reducer'

class Stats extends Component {
    render() {
        const stats = this.props.stats;
        return <div><h3>stats</h3>
            <p>RW: {stats.RW}</p>
            <p>LW: {stats.LW}</p>
            <p>C: {stats.C}</p>
            <p>D: {stats.D}</p>
            <p>G: {stats.G}</p>
        </div>
    }
}

Stats.propTypes = {
    stats: PropTypes.object.isRequired
}

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        stats: getStats(state)
    }
}

export default connect(
    mapStateToProps
)(Stats)