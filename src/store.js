import { createStore } from "redux"

export default createStore(function (state, action) {
  if (state === undefined) {
    return { number: 0 }
  }
  if (action.type === "GET_DATA") {
    return { ...state, contentData: action.contentData }
  }
  return state
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
