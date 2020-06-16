import { connect } from "react-redux"
import Title from "../components/content/Title"

const stateToProps = function (state) {
  var _menuInfo
  for (var i in state.menuList) {
    for (var j in state.menuList[i].subMenuList) {
      if (state.curMenuId === state.menuList[i].subMenuList[j].menuId) {
        _menuInfo = state.menuList[i].subMenuList[j]
      }
    }
  }
  return { menuInfo: _menuInfo }
}

export default connect(stateToProps, null)(Title)
