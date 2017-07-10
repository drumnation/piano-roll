import React, { Component } from 'react'
import { connect } from 'react-redux'
import MidiConvert from 'midiconvert'

import { fetchSingleSong } from '../actions/fetchSongActions'
import { fetchCreateSong } from '../actions/createSongActions'

class SongSelector extends Component {
  state = {
    selected: 'default'
  }

  handleChange = e => {
    const songID = e.target.value
    this.setState({
      selected: songID
    })
    this.props.fetchSingleSong(songID)
  }

  handleAdd = e => {
    let reader = new FileReader();
    let file = e.target.files[0];


    reader.onloadend = () => {
      const base64 = reader.result.slice(reader.result.search(/,/) + 1)
      var jsonSong = MidiConvert.parse(atob(base64))
      this.props.createSong(JSON.parse(JSON.stringify(jsonSong)))
    }

    reader.readAsDataURL(file)
  }

  render() {
    const options = this.props.songs.map( song => (
      <option key={`song_${song.id}`} value={song.id}>
        {song.title}
      </option>
    ))
    return (
      <div className="song-selector clearfix">
        <select value={this.state.selected} onChange={this.handleChange}>
          <option value='default' disabled>Select a song from the list</option>
          {options}
        </select>
        <form>
          <input name="midi-file"
            type="file"
            accept=".midi,.mid"
            placeholder="Add a New Song"
            className="file-input"
            onChange={this.handleAdd} />
        </form>
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    songs: state.music.allSongs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSingleSong: id => dispatch(fetchSingleSong(id)),
    createSong: song => dispatch(fetchCreateSong(song))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongSelector)
