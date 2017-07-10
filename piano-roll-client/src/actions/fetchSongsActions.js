import { fetchSongs } from '../api'

export function fetchAllSongs() {
  return function(dispatch) {
    dispatch(requestFetchSongs())

    fetchSongs()
      .then( data => {
        if(data.error) {
          dispatch(receiveFetchSongsError(data.error))
        } else {
          dispatch(receiveFetchSongs(data))
        }
      })
  }
}

function requestFetchSongs() {
  return {
    type: 'fetchSongs.REQUEST_FETCH_SONGS'
  }
}

function receiveFetchSongsError( error ) {
  return {
    type: 'fetchSongs.RECEIVE_FETCH_SONGS_ERROR',
    status: 'error',
    receivedAt: Date.now(),
    error
  }
}

function receiveFetchSongs( songs ) {
  return {
    type: 'song.RECEIVE_FETCH_SONGS',
    status: 'success',
    receivedAt: Date.now(),
    songs
  }
}
