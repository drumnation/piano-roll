import { createSelector } from 'reselect'
import Player from '../api/ToneKeyboardHandler'

export const getNote = (state, props) => {
  const note = state.music.notesById[props.noteId]
  note.name = props.name
  return note
}

const makeGetNoteForPlayer = () => createSelector(
  [getNote],
  note => {
    Player.addNote(note)
    return note
  }
)

export default makeGetNoteForPlayer
