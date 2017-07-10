import { createReducer } from './reducerUtilities'

const initialState = {
  byId: {},
  allIds: []
}

const receiveFetchSong = (state, action) => {
  let { tracks, song } = action.song
  const allIds = song.tracks
  const id = allIds[0]
  return {
    byId: tracks,
    allIds,
    id
  }
}
const setTrack = (state, action) => ({
  ...state,
  id: action.trackId
})

const tracks = createReducer(initialState, {
    'song.RECEIVE_FETCH_SONG': receiveFetchSong,
    'tracks.SET_TRACK': setTrack
})

export default tracks
