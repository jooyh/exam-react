import DetailContent from "../components/content/DetailContent"
import { connect } from "react-redux"

const stateToProps = function (state) {
  return { data: state.curContentData }
}

const dispatchToProps = function (dispatch) {
  return {
    goList: function () {
      dispatch({ type: "CONTENT_CHANGE", contentType: "list" })
    },
    updateContent: function (data) {
      dispatch({ type: "CONTENT_CHANGE", contentType: "update", curContentData: data })
    },
    deleteContent: function () {
      dispatch({ type: "CONTENT_CHANGE", contentType: "delete" })
    },
  }
}

export default connect(stateToProps, dispatchToProps)(DetailContent)
