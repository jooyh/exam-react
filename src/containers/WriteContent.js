import WriteContent from "../components/content/WriteContent"
import { connect } from "react-redux"

const stateToProps = function (state) {
  return { data: state.curContentData }
}

const dispatchToProps = function (dispatch) {
  return {
    submit: function (data) {
      console.log("SUBMIT", data)
      dispatch({ type: "CONTENT_CHANGE", contentType: "list" })
    },
    concel: function () {
      dispatch({ type: "CONTENT_CHANGE", contentType: "list" })
    },
  }
}

export default connect(stateToProps, dispatchToProps)(WriteContent)
