import React from 'react'
import { connect } from 'react-redux'

const PlayHead = props => {
  const playheadStyle = {width: props.currentTime * 200}
  return (
    <div className="play-head" style={playheadStyle}>{props.currentTime}</div>
  )
}

const mapStateToProps = state => ({currentTime: state.time.currentTime})

export default connect(mapStateToProps)(PlayHead)
