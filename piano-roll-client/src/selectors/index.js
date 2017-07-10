import { createSelector } from 'reselect'
import Player from '../api/ToneKeyboardHandler'

const getNotes = state => state.music.notesById
const getInstruments = state => state.music.instrumentsById
const getTracks = state => state.music.tracks.byId
const getTrackId = state => state.music.tracks.id

const getTrack = createSelector(
  [getTracks, getTrackId],
  (tracks, trackId) => tracks[trackId]
)

const getInstrument = createSelector(
  [getInstruments, getTrack],
  (instruments, track) => {
    if(track) {
      return instruments[track.instrument]
    }
  }
)

export const getTrackNotes = createSelector(
  [getNotes, getTrack],
  (notes, track) => {
    if(track) {
      return track.notes.map( noteId => notes[noteId] )
    }
  }
)

export const getInstrumentName = createSelector(
  [getInstrument],
  instrument => {
    if(instrument) {
      const name = instrument.name.replace(/ /g,"_").replace(/[()]/g,"")
      return name
    }
    return 'clarinet'
  }
)
