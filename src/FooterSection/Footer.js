import React from 'react'
import Location from './Location'
import FooterText from './FooterText'

const Footer = () => {
  return (
    <div style={{backgroundColor:"#ecefef", margin:"100px 0px 0px 0px", padding:"10px 0px 5px 0px"}}>
      <Location/>
      <FooterText/>
    </div>
  )
}

export default Footer