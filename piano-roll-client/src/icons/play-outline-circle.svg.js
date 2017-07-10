import React from 'react'
import { connect } from 'react-redux'

const PlayOutlineCircle = props => {
	return (
		<svg viewBox="0 0 420 420">
			<path d="M210 21c104 0 189 85 189 189s-85 189-189 189S21 314 21 210 106 21 210 21M210 0C94 0 0 94 0 210s94 210 210 210 210-94 210-210S326 0 210 0L210 0z"/>
			<path d="M294 187l-112-74C163 101 147 109 147 133V287c0 23 16 32 35 19L294 233C313 221 313 200 294 187zM279 218l-99 65c-6 4-12 1-12-6V143c0-8 5-11 12-6l99 65C285 207 285 214 279 218z"/>
		</svg>
	)
}

export default connect()(PlayOutlineCircle)
