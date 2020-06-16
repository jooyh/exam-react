import Header from "../components/header/Header"
import { connect } from "react-redux"

function stateToProps(state) {
  return {
    userInfo: state.userInfo,
  }
}

export default connect(stateToProps)(Header)
