import { connect } from "react-redux"
import Content from "../components/content/Content"

const stateToProps = function (state) {
  return {
    contentType: state.contentType,
    curMenuId: state.curMenuId,
  }
}
const dispatchToProps = function (dispatch) {
  return {}
}
export default connect(stateToProps, dispatchToProps)(Content)
