// ------------------------------------
// Constants
// ------------------------------------
export const TEST = 'TEST'

export const test = () => ({
  type: TEST
})

// ------------------------------------
// Actions
// ------------------------------------

export const actions = {
  test
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [TEST]: (state, action) => ({
    ...state,
    testProperty: state.testProperty += 'asd'
  })
}
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  testProperty: ''
}

export default function homeViewReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
