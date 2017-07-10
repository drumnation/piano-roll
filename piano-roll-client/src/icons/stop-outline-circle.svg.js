import React from 'react'
import { connect } from 'react-redux'

const StopOutlineCircle = props => {
  return (
    <svg viewBox="0 0 420 420">
      <path d="M210 21c104 0 189 85 189 189s-85 189-189 189S21 314 21 210 106 21 210 21M210 0C94 0 0 94 0 210s94 210 210 210 210-94 210-210S326 0 210 0L210 0z"/>
      <path d="M276 109H144c-19 0-35 16-35 35v132c0 19 16 35 35 35h132c19 0 35-16 35-35V144C311 125 295 109 276 109zM290 269c0 12-9 21-21 21H151c-12 0-21-9-21-21V151c0-12 9-21 21-21h118c12 0 21 9 21 21V269z"/>
    </svg>
  )
}

export default connect()(StopOutlineCircle)
