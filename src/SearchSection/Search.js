import React from 'react'
import GoogleButton from './GoogleButton'
import GoogleLogo from './GoogleLogo'
import LanguageLink from './LanguageLink'
import SearchBar from './SearchBar'


const Search = () => {
  return (
    <>
      <div style={{width:"600px", display: "flex", flexDirection:"column", justifyContent:"center", padding:"40px", marginLeft: "250px"}}>
        <div style={{ height: "60px", marginLeft:"120px" }}>
          <GoogleLogo/>
        </div>
        <div>
          <SearchBar/>
        </div>
        <div style={{display: "flex", gap: "10px", marginLeft:"150px"}}>
          <GoogleButton text={"Google Search"}/>
          <GoogleButton text={"I'm feeling Lucky"}/>
        </div>
        <div style={{display: "flex", gap: "10px", marginLeft:"90px"}}>
            <LanguageLink text={"Google offered in: "}/>
            <LanguageLink language={"Hausa"}/>
            <LanguageLink language={"Igbo"}/>
            <LanguageLink language={"Ede Yoruba"}/>
            <LanguageLink language={"Nigerian Pidgin"}/>
        </div>
      </div>
    </>
  )
}

export default Search