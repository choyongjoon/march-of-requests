import { Component } from 'react'

import albums from './albums'

import './App.css'

const maxRequests = 10
const maxScore = 100

export default class App extends Component {
  state = {
    requests: [],
    sumScore: 0
  }

  onToggleRequest = i => () => {
    const { requests, sumScore } = this.state
    const newRequests = [...requests]
    const newSumScore = sumScore - newRequests[i].score
    newRequests.splice(i, 1)
    this.setState({ requests: newRequests, sumScore: newSumScore })
  }

  onChangeScore = i => e => {
    const { requests, sumScore } = this.state
    const newRequests = [...requests]
    let newScore = parseInt(e.target.value)
    let prevScore = parseInt(newRequests[i].score)
    if (isNaN(prevScore)) prevScore = 0
    let newSumScore = sumScore - prevScore
    if (isNaN(newScore)) {
      newRequests[i].score = e.target.value
    } else {
      newSumScore = sumScore - prevScore + newScore
      newRequests[i].score = newScore
    }
    this.setState({ requests: newRequests, sumScore: newSumScore })
  }

  onBlurScore = i => e => {
    const { requests, sumScore } = this.state
    let newRequests = [...requests]
    let newScore = parseInt(e.target.value)
    let newSumScore = sumScore
    if (isNaN(newScore)) {
      newRequests[i].score = 0
    } else {
      if (newScore < 0) {
        newSumScore = newSumScore - newScore
        newScore = 0
      } else if (newSumScore > maxScore) {
        newScore = newScore - (newSumScore - maxScore)
        newSumScore = maxScore
      }
      newRequests[i].score = newScore
    }
    newRequests = newRequests.sort((a, b) => b.score - a.score)
    this.setState({ requests: newRequests, sumScore: newSumScore })
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
    const { requests, sumScore } = this.state
    const isRequestsFull = requests.length === maxRequests
    const dummyRequests = Array.apply(null, Array(maxRequests - requests.length))

    return (
      <div className='App'>
        <div className='header'>
          <h1 className='title'>신청의 3월 도우미</h1>
          <p className='description'>
            줄리아 하트의 팬이 만든 비공식 페이지입니다.
          </p>
        </div>
        <div className='request-container'>
          <h2>내 신청</h2>
          <div className='reamining-score'>
            남은 점수: {maxScore - sumScore}
          </div>
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
                    type='text'
                    value={request.score}
                    onChange={this.onChangeScore(i)}
                    onBlur={this.onBlurScore(i)}
                  />
                </li>
              )
            })}
            {dummyRequests.map((dummyRequest, i) => (
              <li
                className='request'
                key={`dummy-${i}`}
              />
            ))}
          </ul>
        </div>
        <div className='track-container'>
          <h2>전체 노래</h2>
          <ul className='album-list'>
            {albums.map(album => (
              <li className='album' key={album.id}>
                <div className='album-header'>
                  <img className='album-cover' src={album.coverUrl} />
                  <h3 className='album-title'>{album.title}</h3>
                  <div className='album-date'>{album.date.toLocaleDateString()}</div>
                </div>
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
