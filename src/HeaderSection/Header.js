import React from 'react'
import AppsLauncher from './AppsLauncher'
import MenuItem from './MenuItem'
import Avatar from './Avatar'
//import '../styles/header.css'

const Header = () => {
  return (
    <div>
        <div style={{display: "flex", justifyContent:"flex-end", alignItems:"center", gap:"20px"}}>
          <MenuItem title={"Gmail"}/>
          <MenuItem title={"Images"}/>
          <AppsLauncher/>
          <Avatar/>
        </div>
    </div>
  )
}

export default Header