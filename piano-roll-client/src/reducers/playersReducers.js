import { createReducer } from './reducerUtilities'

const loading = state => ({
  ...state,
  loading: state.loading + 1
})
const finishedLoading = state => ({
  ...state,
  loading: state.loading - 1
})

const players = createReducer({loading: 0},{
  'players.LOADING': loading,
  'players.FINISHED_LOADING': finishedLoading
})

export default players
