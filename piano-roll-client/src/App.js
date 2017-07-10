import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { fetchAllSongs } from './actions/fetchSongsActions'

import './App.css';
import NoteSlot from './components/NoteSlot'
import PianoKeysSidebar from './components/PianoKeysSidebar'
import TimeBar from './components/TimeBar'
import TracksHeader from './components/TracksHeader'
import SongSelector from './components/SongSelector'
import PlayHead from './components/PlayHead'
import { sevenOctavePiano } from './concerns/keyboard'

class App extends Component {
  componentDidMount() {
    this.props.fetchAllSongs()
  }

  render() {
    return (
      <div className="App">
        <SongSelector/>
        <TracksHeader/>
        <div className="notes">
          <PianoKeysSidebar/>
          <div className="note-slots">
            <PlayHead/>
            {sevenOctavePiano.map((pianoKey, i) => {
              return (
                <NoteSlot
                  key={_.uniqueId('note_slot_')}
                  pianoKey={pianoKey}
                  dark={pianoKey.search('#') !== -1}
                  pitch={108 - i}
                />
              )
            })}
            <TimeBar/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    song: state.music.song
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllSongs: () => dispatch(fetchAllSongs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
