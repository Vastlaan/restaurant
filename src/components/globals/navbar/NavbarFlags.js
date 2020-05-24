import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import Nl from "../../../images/Netherlands.png"
import En from "../../../images/England.png"

const languageName = {
  en: En,
  nl: Nl,
}

export default function NavbarFlags({ styles }) {
  return (
    <div className={styles.flags}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a key={language} onClick={() => changeLocale(language)}>
              <img className={styles.flag} src={languageName[language]} />
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

//  {
//    store.lang === "nl" ? (
//      <div onClick={() => dispatch({ type: "changeLang", payload: "en" })}>
//        <img src={En} alt="english flag" />
//      </div>
//    ) : (
//      <div onClick={() => dispatch({ type: "changeLang", payload: "nl" })}>
//        <img src={Nl} alt="netherlands flag" />
//      </div>
//    )
//  }
