import { connect } from "react-redux"
import Nav from "../components/nav/Nav"

const stateToProps = function (state) {
  return { menuList: state.menuList, curMenuId: state.curMenuId }
}
const dispatchToProps = function (dispatch) {
  return {
    menuSelect: function (selectedMenuId) {
      dispatch({ type: "PAGE_CHANGE", curMenuId: Number(selectedMenuId) })
    },
  }
}
export default connect(stateToProps, dispatchToProps)(Nav)
