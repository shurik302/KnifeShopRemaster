import React from 'react'

function NewsHTML({imageCard,nameState,dataState}) {
  return (
    <div>
        <img src={imageCard}></img>
        <p>{nameState}</p>
        <p>{dataState}</p>
    </div>
  )
}

export default NewsHTML