export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

// export function reduceReducers(...reducers) {
//   return (previous, current) =>
//     reducers.reduce(
//       (p, r) => r(p, current),
//       previous
//     );
// }
