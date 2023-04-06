import React from 'react'

const GoogleButton = (props) => {
  return (
    <>
        <button style={{padding:"10px", border:"1px solid grey", borderRadius:"5px", outline:"none"}}>{props.text}</button>
    </>
  )
}

export default GoogleButton