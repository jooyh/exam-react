import WriteContent from "../components/content/WriteContent"
import { connect } from "react-redux"
import store from "../store/store"

const stateToProps = function (state) {
  return { data: state.curContentData }
}

const dispatchToProps = function (dispatch) {
  return {
    submit: function (_data) {
      dispatch({ type: "UPDATE_DATA", data: _data })
    },
    concel: function () {
      dispatch({ type: "CONTENT_CHANGE", contentType: "list" })
    },
  }
}

export default connect(stateToProps, dispatchToProps)(WriteContent)
