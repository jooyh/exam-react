import ListContent from "../components/content/ListContent"
import { connect } from "react-redux"

const stateToProps = function (state) {
  return {
    data: state.contentData.dataList,
    dataHeader: state.contentData.dataHeader,
  }
}

const dispatchToProps = function (dispatch) {
  return {
    goDetail: function (data) {
      dispatch({ type: "CONTENT_CHANGE", contentType: "detail", curContentData: data })
    },
  }
}

export default connect(stateToProps, dispatchToProps)(ListContent)
