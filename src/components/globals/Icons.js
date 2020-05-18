import React, { useState } from "react"

import { FaTwitter, FaInstagram, FaFacebookSquare } from "react-icons/fa"

function Icons({ styles }) {
  const [icons, setIcons] = useState([
    {
      id: "0",
      icon: <FaFacebookSquare style={{ color: "blue" }} />,
      path: "https://www.facebook.com",
    },
    {
      id: "1",
      icon: <FaInstagram style={{ color: "pink" }} />,
      path: "https://www.instagram.com",
    },
    {
      id: "2",
      icon: <FaTwitter style={{ color: "skyblue" }} />,
      path: "https://www.twitter.com",
    },
  ])
  return (
    <div className={styles.icons}>
      {icons.map(item => {
        return (
          <a key={item.id} href={item.path}>
            {item.icon}
          </a>
        )
      })}
    </div>
  )
}

export default Icons
