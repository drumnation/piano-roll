import _ from 'lodash'

function replicateOctaveKeyPattern(keyPatternArray, numTimes) {
  let arrays = _.reverse(_.times(numTimes, i => keyPatternArray.map( key => key+i)))
  arrays = _.flatten(arrays).slice(11, -9)
  return arrays
}

const oneOctaveKeyPattern = ['B', 'A#', 'A', 'G#', 'G', 'F#', 'F', 'E', 'D#', 'D', 'C#', 'C' ]
const sevenOctavePiano = replicateOctaveKeyPattern(oneOctaveKeyPattern, 9)

const wideKeys = ['D[0-9]', 'A[0-9]', 'G[0-9]']

export { sevenOctavePiano, wideKeys }
