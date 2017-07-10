import React from 'react'
import { connect } from 'react-redux'

const TimerClock = props => (
  <div className="time">
    {props.currentTime}
  </div>
)

function mapStateToProps(state) {
  return {
    currentTime: state.time.currentTime
  }
}

export default connect(mapStateToProps)(TimerClock)
