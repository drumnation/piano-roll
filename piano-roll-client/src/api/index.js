export function fetchSongs() {
  return fetch('http://localhost:3000/api/v1/songs')
    .then( resp => resp.json() )
}
export function fetchSong(songID) {
  return fetch(`http://localhost:3000/api/v1/songs/${songID}`)
    .then( resp => resp.json() )
}
export function createSong(songJson) {
  console.log(songJson)
  return fetch('http://localhost:3000/api/v1/songs', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({song: songJson})
  }).then( resp => resp.json() )
}
