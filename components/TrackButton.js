import React from 'react'

export default function(props) {
   return (
      <button onClick={props.clickHandler}>
         {props.song}
      </button>
   )
}
