import { createSelector } from 'reselect'

import { getTrackNotes } from './'

export const getPitch = (state, props) => props.pitch

const makeGetNotesByPitch = () => {
  return createSelector(
    [getTrackNotes, getPitch],
    (notes, pitch) => {
      if(notes) {
        return notes.filter( note => note.pitch === pitch )
      }
    }
  )
}

export default makeGetNotesByPitch
