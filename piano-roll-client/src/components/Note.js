import React from 'react'
import { connect } from 'react-redux'

import makeGetNoteForPlayer from '../selectors/notesSelectors'

const Note = props => {
  const noteStyle = {
    left: `${Math.round(props.note.start_time * 200) + 4}px`,
    width: `${Math.round(props.note.duration * 200)}px`
  }
  return (
    <div className="note" style={noteStyle}>
      <span>
        {props.name}
      </span>
    </div>
  )
}


const makeMapStateToProps = () => {
  const getNoteForPlayer = makeGetNoteForPlayer()
  return (state, ownProps) => ({
    note: getNoteForPlayer(state, ownProps)
  })
}

export default connect(makeMapStateToProps)(Note)
