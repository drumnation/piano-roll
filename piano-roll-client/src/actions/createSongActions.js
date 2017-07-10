import { createSong } from '../api'

export function fetchCreateSong(song) {
  return function(dispatch) {
    dispatch(requestCreateSong())

    createSong(song)
      .then( data => {
        if(data.error) {
          dispatch(receiveCreateSongError(data.error))
        } else {
          dispatch(receiveCreateSong(data))
        }
      })
  }
}

function requestCreateSong() {
  return {
    type: 'fetchSongs.REQUEST_CREATE_SONG'
  }
}

function receiveCreateSongError( error ) {
  return {
    type: 'fetchSongs.RECEIVE_CREATE_SONG_ERROR',
    status: 'error',
    receivedAt: Date.now(),
    error
  }
}

function receiveCreateSong( song ) {
  return {
    type: 'song.RECEIVE_CREATE_SONG',
    status: 'success',
    receivedAt: Date.now(),
    song
  }
}
