import React from 'react'

function card(props) {
  
  return (
    <div>
        <p id="allteams">{props.teams}</p>
         {/* <p>Project: {props.cards.project}</p>
        <p>Bootcamp: {props.cards.bootcamp}</p>  */}
    </div>
  )
}

export default card