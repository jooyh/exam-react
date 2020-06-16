import React, { Component } from "react"

export default class Nav extends Component {
  render() {
    const menuList = this.props.menuList
    var menuEl = []
    var activeId
    for (var i in menuList) {
      var subMenuEl = []
      for (var j in menuList[i].subMenuList) {
        var subMenu = menuList[i].subMenuList[j]
        if (this.props.curMenuId === subMenu.menuId && menuList[i].menuId === subMenu.parMenuId) {
          activeId = menuList[i].menuId
        }
        subMenuEl.push(
          <li
            key={"subMenu" + j}
            className={subMenu.menuId === this.props.curMenuId ? "active" : ""}
          >
            <a
              href={"/" + i}
              data-id={subMenu.menuId}
              onClick={function (e) {
                e.preventDefault()
                this.props.menuSelect(e.target.dataset.id)
              }.bind(this)}
            >
              {subMenu.menuNm}
            </a>
          </li>
        )
      }
      menuEl.push(
        <li
          key={"menu" + i}
          className={menuList[i].menuId === activeId ? "active" : ""}
          onClick={function (e) {
            e.target.parentNode.classList.toggle("active")
          }}
        >
          <strong>{menuList[i].menuNm}</strong>
          <ul>{subMenuEl}</ul>
        </li>
      )
    }

    return (
      <div className="left-navi">
        <ul className="lst">{menuEl}</ul>
      </div>
    )
  }
}
