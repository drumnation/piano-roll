import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'


const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware // lets us dispatch() functions
    )
  )
)

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))
registerServiceWorker()
