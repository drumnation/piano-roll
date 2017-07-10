import { createReducer } from './reducerUtilities'

const receiveFetchSong = (state, action) => {
  let { instruments } = action.song
  return instruments
}

const instruments = createReducer({}, {'song.RECEIVE_FETCH_SONG': receiveFetchSong})

export default instruments
