import React, { Component } from "react"

class Nav extends Component {
  shouldComponentUpdate(newProps, newState) {
    return newProps.nowMenu !== this.props.nowMenu
  }

  render() {
    var menuList = this.props.menuList
    var nowMenu = this.props.nowMenu
    var clickCb = this.props.onclickMenu
    console.log("NAV RENDERING...", nowMenu)
    var menuEl = []
    for (var i in menuList) {
      menuEl.push(
        <li
          key={i}
          onClick={function (e) {
            e.target.parentNode.classList.toggle("active")
          }}
          className={menuList[i].menuId === nowMenu.parMenuId ? "active" : ""}
        >
          <strong>{menuList[i].menuNm}</strong>
          <MenuItem
            onclickMenu={clickCb}
            childMenuList={menuList[i].childMenuItem}
            nowMenu={nowMenu}
          ></MenuItem>
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

class MenuItem extends Component {
  render() {
    var menuList = this.props.childMenuList
    var nowMenu = this.props.nowMenu
    var clickCb = this.props.onclickMenu
    var menuEl = []

    for (var i in menuList) {
      menuEl.push(
        <li key={"sub" + i} className={menuList[i].menuId === nowMenu.menuId ? "active" : ""}>
          <a
            href="#"
            data-id={menuList[i].menuId}
            onClick={function (e) {
              e.preventDefault()
              e.stopPropagation()
              clickCb(e.target.dataset.id)
            }}
          >
            {menuList[i].menuNm}
          </a>
        </li>
      )
    }
    return <ul className="lst">{menuEl}</ul>
  }
}

export default Nav
