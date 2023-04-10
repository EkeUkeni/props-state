import {useState} from 'react'

const SearchBar = ( ) => {

    const [inputValue, setInputValue] = useState("")// chnages what is in the input field
    const [display, setDisplay] = useState("")// Displays the value
  
    const handleChange = (event)=>{
      const inputName = event.target.value
      setInputValue(inputName)
    }

    const handleKeyDown = (event)=>{
      //console.log(event.key)
      if(event.key === "Enter"){
        setDisplay(inputValue)
      }
    }
  return (
    <>
      <div>
        <input  style={{position:"relative", border:"1px solid grey", width:"600px", padding:"15px", margin:"80px 0px 20px 0px",outline:"none", borderRadius: "50px"}} type="text" placeholder="search" value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown}/>
        <p>{display}</p>
        <div style={{position:"absolute", right:"360px", top:"230px",display:"flex", gap:"10px"}}>
          <img src='https://w7.pngwing.com/pngs/974/464/png-transparent-google-voice-search-logo-google-voice-search-web-search-engine-google-now-google-microphone-search-engine-optimization-logo-thumbnail.png' alt='Google microphone Icon' style={{height: "25px"}}/>
          <img src='https://www.pngplay.com/wp-content/uploads/13/Google-Logo-Transparent-PNG.png' alt='Google meet Icon' style={{height: "25px"}}/>
        </div>
      </div>
    </>
  )
}

export default SearchBar