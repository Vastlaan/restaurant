import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

function NavbarLinks({ styles, open }) {
  const [links, setLinks] = useState([
    {
      id: 0,
      path: "/",
      name: "home",
    },
    {
      id: 1,
      path: "/about/",
      name: "about",
    },
    {
      id: 2,
      path: "/menu",
      name: "menu",
    },
    {
      id: 3,
      path: "/contact",
      name: "contact",
    },
  ])

  //hardcoded height of <ul>
  const [height, setHeight] = useState({ height: "0rem" })

  useEffect(() => {
    //fuction to change the height
    const resizeHeight = () => {
      //if larger screen then set height to auto
      if (window.innerWidth >= 968) {
        setHeight({ height: "auto" })
      }
      //otherwise manipulate it depends on open state
      else {
        open ? setHeight({ height: "20rem" }) : setHeight({ height: "0rem" })
      }
    }
    //triggered whenever open state change.
    resizeHeight()
    //triggered whenever window is resized.
    window.addEventListener("resize", resizeHeight)
    //get rid of the event listener on unmount
    return () => window.removeEventListener("resize", resizeHeight)
  }, [open])

  return (
    <ul className={styles.links} style={height}>
      {links.map(item => {
        return (
          <li key={item.id}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavbarLinks
