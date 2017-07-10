import { createReducer } from './reducerUtilities'

const initialState = {
  allSongs: [],
  areFetching: false
}

const requestFetchSongs = state => ({
  ...state,
  areFetching: true
})

const receiveFetchSongsError = (state, action) => {
  const { type: errorType, ...allErrorProps } = action
  return {
    ...state,
    areFetching: false,
    ...allErrorProps
  }
}

const receiveFetchSongs = (state, action) => {
  const { type: successType, songs, ...allSuccessProps } = action
  return {
    ...state,
    areFetching: false,
    ...allSuccessProps
  }
}

const fetchSongs = createReducer(initialState, {
  'fetchSongs.REQUEST_FETCH_SONGS': requestFetchSongs,
  'fetchSongs.RECEIVE_FETCH_SONGS_ERROR': receiveFetchSongsError,
  'songs.RECEIVE_FETCH_SONGS': receiveFetchSongs
})

export default fetchSongs
