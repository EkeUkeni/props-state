import React from 'react'
import LanguageLink from '../SearchSection/LanguageLink'

const FooterText = () => {
  return (
    <>
      <div style={{display:"flex", gap:"10px", color:"grey"}}>
        <div style={{display:"flex", justifyContent:'flex-start', gap:"25px", marginRight:"150px"}}>
          <LanguageLink text={"About"}/>
          <LanguageLink text={"Advertising"}/>
          <LanguageLink text={"Business"}/>
          <LanguageLink text={"How Search Works"}/>
        </div>
        <div>
          <LanguageLink text={"Carbon Neutral since 2007"}/>
        </div>
        <div style={{display:"flex", justifyContent:"flex-end", gap:"25px", marginLeft:"300px"}}>
        <LanguageLink text={"Privacy"}/>
        <LanguageLink text={"Terms"}/>
        <LanguageLink text={"Settings"}/>
        </div>
      </div>
    </>
  )
}

export default FooterText