import React from 'react'
import { connect } from 'react-redux'

const PauseOutlineCircle = props => {
	return (
		<svg viewBox="0 0 420 420">
				<path d="M210 21c104 0 189 85 189 189s-85 189-189 189S21 314 21 210 106 21 210 21M210 0C94 0 0 94 0 210s94 210 210 210 210-94 210-210S326 0 210 0L210 0z"/>
				<path d="M259 109c-19 0-35 16-35 35v132c0 19 16 35 35 35s35-16 35-35V144C294 125 278 109 259 109zM273 276c0 8-6 14-14 14s-14-6-14-14V144c0-8 6-14 14-14s14 6 14 14V276z"/>
				<path d="M161 109c-19 0-35 16-35 35v132c0 19 16 35 35 35s35-16 35-35V144C196 125 180 109 161 109zM175 276c0 8-6 14-14 14s-14-6-14-14V144c0-8 6-14 14-14s14 6 14 14V276z"/>
		</svg>
	)
}

export default connect()(PauseOutlineCircle)
