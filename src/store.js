import React from "react"

export const initialState = {
  lang: "nl", // nl en
}

export const reducer = (state, action) => {
 
  switch (action.type) {
    case "changeLang":
      return {
        ...state,
        lang: action.payload,
      }
    default:
      return {
        ...state,
        lang: "nl",
      }
  }
}

export const Context = React.createContext()
