import React from 'react'

const LanguageLink = (props) => {
  return (
    <div>
        <p>{props.text}</p>
        <a href="link">{props.language}</a>
    </div>
  )
}

export default LanguageLink