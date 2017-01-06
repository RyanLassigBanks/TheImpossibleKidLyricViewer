import React from 'react'
import TrackButton from './TrackButton.js'

export default function(props) {
   let tracks = props.trackList.map(track => (
      <li key={track}>
         <TrackButton song={track} clickHandler={props.clickHandler} />
      </li>
   ))
   return <ul> {tracks} </ul>
}
