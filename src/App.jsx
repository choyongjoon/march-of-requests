import { Component } from 'react'

import albums from './albums'

import './App.css'

const maxRequests = 10

export default class App extends Component {
  state = {
    requests: [
      { albumId: 13, trackId: 1, score: 20 },
      { albumId: 13, trackId: 3, score: 30 },
      { albumId: 12, trackId: 1, score: 40 },
      { albumId: 12, trackId: 6, score: 10 }
    ]
  }

  onToggleRequest = i => () => {
    const { requests } = this.state
    const newRequests = [...requests]
    newRequests.splice(i, 1)
    this.setState({ requests: newRequests })
  }

  onChangeScore = i => e => {
    const { requests } = this.state
    const newRequests = [...requests]
    newRequests[i].score = e.target.value
    this.setState({ requests: newRequests })
  }

  onToggleTrack = (albumId, trackId) => e => {
    const { requests } = this.state
    if (e.target.checked) {
      const request = {
        albumId,
        trackId,
        score: 0
      }
      this.setState({ requests: [...requests, request] })
    } else {
      const index = requests.findIndex(
        request => request.albumId === albumId && request.trackId === trackId
      )
      this.onToggleRequest(index)()
    }
  }

  render () {
    const { requests } = this.state
    const isRequestsFull = requests.length === maxRequests

    return (
      <div className='App'>
        <h1 className='title'>신청의 3월 도우미</h1>
        <p className='description'>
          줄리아 하트의 팬이 만든 비공식 페이지입니다.
        </p>
        <div className='request-container'>
          <h2>내 신청</h2>
          <ul className='request-list'>
            {requests.map((request, i) => {
              const track = getTrack(request)
              return (
                <li
                  className='request'
                  key={`${request.albumId}-${request.trackId}`}
                >
                  <input
                    className='request-checkbox'
                    type='checkbox'
                    checked
                    onChange={this.onToggleRequest(i)}
                  />
                  <label className='track-title'>{track.title}</label>
                  <input
                    className='request-score-input'
                    type='number'
                    value={request.score}
                    onChange={this.onChangeScore(i)}
                  />
                </li>
              )
            })}
          </ul>
        </div>
        <div className='track-container'>
          <h2>전체 노래</h2>
          <ul className='album-list'>
            {albums.map(album => (
              <li className='album' key={album.id}>
                <h3 className='album-title'>{album.title}</h3>
                <p className='album-date'>{album.date.toLocaleDateString()}</p>
                <ul className='track-list'>
                  {album.tracks.map((track, i) => {
                    const checked = getChecked(album.id, i + 1, requests)
                    return (
                      <li className='track' key={track.title}>
                        <input
                          className='track-checkbox'
                          type='checkbox'
                          checked={checked}
                          onChange={this.onToggleTrack(album.id, i + 1)}
                          disabled={!checked && isRequestsFull}
                        />
                        <label className='track-title'>{track.title}</label>
                      </li>
                    )
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const getChecked = (albumId, trackId, requests) => {
  return !!requests.find(
    request => request.albumId === albumId && request.trackId === trackId
  )
}

const getTrack = request => {
  try {
    const album = albums.find(album => album.id === request.albumId)
    const track = album.tracks[request.trackId - 1]
    return track
  } catch (err) {
    return {
      title: '...',
      score: '0'
    }
  }
}
