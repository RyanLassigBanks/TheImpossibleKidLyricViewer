import React from 'react'
import fetchJsonp from 'fetch-jsonp'
import Lyrics from './Lyrics.js'
import TrackList from './TrackList'
import apiKey from './secrets.js'

class Home extends React.Component {
   constructor(props) {
      super(props)

      this.state = {
         lyrics : ''
      }

      this.tracks = [
         'Mystery Fish',
         'Rings',
         'Lotta Years',
         'Dorks',
         'Rabies',
         'Supercell',
         'Blood Sandwich',
         'Get Out of the Car',
         'Shrunk',
         'Kirby',
         'TUFF',
         'Lazy Eye',
         'Defender',
         'Water Tower',
         'Molecules',
      ]
   }

   getLyrics(event) {
      let song = event.target.textContent

      if (window.sessionStorage.getItem(song)) {
         this.setState({
            'lyrics' : window.sessionStorage.getItem(song)
         })
      } else {
         let url = 'https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?' +
            'format=jsonp&' +
            `q_track=${encodeURIComponent(song)}&` +
            'q_artist=aesop%20rock&' +
            `apikey=${apiKey}`

         fetchJsonp(url)
            .then(res => res.json())
            .then((json) => {
               window.sessionStorage.setItem(song, json.message.body.lyrics.lyrics_body)
               this.setState({
                  lyrics : json.message.body.lyrics.lyrics_body
               })
            })
      }
   }

   render() {
      return (
         <div>
            <h1>The Impossible Kid</h1>
            <TrackList trackList={this.tracks} clickHandler={this.getLyrics.bind(this)} />
            <Lyrics lyrics={this.state.lyrics} />
         </div>
      )
   }
}

export { Home }
