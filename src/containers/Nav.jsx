import Nav from "../components/Nav"
import { connect } from "react-redux"

function dispatchToProps() {
  return {}
}
function stateToProps(state) {
  return { menuList: state.menuList, nowMenu: state.nowMenu }
}

export default connect(stateToProps, dispatchToProps)(Nav)
