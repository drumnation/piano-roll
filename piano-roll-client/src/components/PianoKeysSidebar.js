import React from 'react'
import _ from 'lodash'

import Key from './Key'
import { sevenOctavePiano } from '../concerns/keyboard'

function PianoKeysSidebar(props) {
  const pianoOctave = sevenOctavePiano.map((pianoKey, i) => (
    <Key
      key={_.uniqueId('key_')}
      name={pianoKey}
      white={pianoKey.search('#') === -1}
    />
  ))
  return (
    <div id="nav-piano">
      <ul>
        {pianoOctave}
      </ul>
    </div>
  )
}

export default PianoKeysSidebar
