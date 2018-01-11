import { Component } from 'react'

import albums from './albums'

import './App.css'

export default class App extends Component {
  state = {
    requests: [
      { albumId: 13, trackId: 1, score: 20 },
      { albumId: 13, trackId: 3, score: 30 },
      { albumId: 12, trackId: 1, score: 40 },
      { albumId: 12, trackId: 6, score: 10 }
    ]
  };

  render () {
    const { requests } = this.state

    return (
      <div className='App'>
        <h1>신청의 3월 도우미</h1>
        <div>
          <h2>내 신청</h2>
          <ul>
            {requests.map(request => {
              const track = getTrack(request)
              return (
                <li>
                  {track.name}, {request.score}
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <h2>전체 노래</h2>
          <ul>
            {albums.map(album => (
              <li>
                <ul>
                  <h3>{album.name}</h3>
                  {album.tracks.map(track => (
                    <li>
                      {track.name}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const getTrack = request => {
  try {
    const album = albums.find(album => album.id === request.albumId)
    const track = album.tracks[request.trackId - 1]
    return track
  } catch (err) {
    return {
      name: '...',
      score: '0'
    }
  }
}
