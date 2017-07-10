import React from 'react'
import classSet from 'react-classset'
import { connect } from 'react-redux'

import { setTrack } from '../actions/songActions'

function TracksHeader(props) {
  let tracks
  if(props.tracks.allIds) {
    tracks = props.tracks.allIds.map( (trackId,i) => {
      const classes = classSet({
        'active': props.tracks.id === trackId
      })
      const track = props.tracks.byId[trackId]
      const instrument = props.instrumentsById[track.instrument]
      return (
        <li key={`${track.name}-${i}-${track.instrument}`} onClick={ e => props.setTrack(track.id) }>
          <span className={classes}><img src={`https://raw.githubusercontent.com/andruo11/midi-pictures/master/${('000' + track.instrument).substr(-3)}.jpg`} alt={instrument.name} />{track.name}</span>
        </li>
      )
    })
  } else {
    tracks = null
  }
  return (
    <div className="tracks-header clearfix">
      <ul>
        {tracks}
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    tracks: state.music.tracks,
    instrumentsById: state.music.instrumentsById
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setTrack: trackId => dispatch(setTrack(trackId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TracksHeader)
