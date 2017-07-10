import { createReducer } from './reducerUtilities'

const receiveFetchSong = (state, action) => action.song.notes

const notesById = createReducer({}, {
  'song.RECEIVE_FETCH_SONG': receiveFetchSong
})


export default notesById
