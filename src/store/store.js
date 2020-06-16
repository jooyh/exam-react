import { createStore, compose, applyMiddleware } from "redux"

export default createStore(function (state, action) {
  if (state === undefined) {
    return {
      userInfo: { userNm: "주영현", userId: "jooyh" },
      menuList: [
        {
          menuId: 10,
          menuNm: "검색",
          parMenuId: null,
          subMenuList: [
            { menuId: 11, menuNm: "통합검색", parMenuId: 10 },
            { menuId: 12, menuNm: "쇼핑검색", parMenuId: 10 },
            { menuId: 13, menuNm: "사전검색", parMenuId: 10 },
            { menuId: 14, menuNm: "블로그검색", parMenuId: 10 },
          ],
        },
        {
          menuId: 20,
          menuNm: "설정",
          parMenuId: null,
          subMenuList: [{ menuId: 21, menuNm: "검색설정", parMenuId: 20 }],
        },
      ],
      curMenuId: 12,
      contentType: "list",
      contentData: {
        dataList: [
          {
            id: 1,
            frDate: "2020.05.20",
            toDate: "2020.09.05",
            title: "테스트1",
            os: "and",
            writer: "주영현",
            regDate: "2020.05.20",
            desc: `Call Beauty가 오픈 했습니다. 많은 이용바랍니다.
            첨부 1. Call Beauty SHOP관리자 App 이용방법
            첨부 2. Call Beauty App 이용방법`,
          },
          {
            id: 2,
            frDate: "2020.05.20",
            toDate: "2020.09.05",
            title: "테스트2",
            os: "all",
            writer: "주영현",
            regDate: "2020.05.20",
            desc: `Call Beauty가 오픈 했습니다. 많은 이용바랍니다.
            첨부 1. Call Beauty SHOP관리자 App 이용방법
            첨부 2. Call Beauty App 이용방법`,
          },
          {
            id: 3,
            frDate: "2020.05.20",
            toDate: "2020.09.05",
            title: "테스트3",
            os: "ios",
            writer: "주영현",
            regDate: "2020.05.20",
            desc: `Call Beauty가 오픈 했습니다. 많은 이용바랍니다.
            첨부 1. Call Beauty SHOP관리자 App 이용방법
            첨부 2. Call Beauty App 이용방법`,
          },
          {
            id: 4,
            frDate: "2020.05.20",
            toDate: "2020.09.05",
            title: "테스트4",
            os: "and",
            writer: "주영현",
            regDate: "2020.05.20",
            desc: `Call Beauty가 오픈 했습니다. 많은 이용바랍니다.
            첨부 1. Call Beauty SHOP관리자 App 이용방법
            첨부 2. Call Beauty App 이용방법`,
          },
        ],
        dataHeader: ["ID", "기간", "제목", "OS", "등록일"],
      },
    }
  }

  if (action.type === "PAGE_CHANGE") {
    return { ...state, curMenuId: action.curMenuId, contentType: "list" }
  }

  if (action.type === "CONTENT_CHANGE") {
    return { ...state, contentType: action.contentType, curContentData: action.curContentData }
  }

  if (action.type === "UPDATE_DATA") {
    console.log("TEST", action)
    var dataList = state.contentData.dataList.concat()
    for (var i in dataList) {
      if (dataList[i].id === action.data.id) {
        dataList[i] = action.data
      }
    }
    return { ...state, contentType: "detail", curContentData: action.data }
  }

  return state
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
