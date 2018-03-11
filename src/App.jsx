import { Component } from 'react'

import albums from './albums'
import tracks from './tracks'

import orders2015 from './orders2015'
import orders2018, { firstOrders2018 } from './orders2018'

import '../node_modules/normalize.css/normalize.css'
import './App.css'

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='header'>
          <h1 className='title'>신청의 3월</h1>
          <p className='description'>
            줄리아 하트의 팬이 만든 비공식 페이지입니다.
          </p>
        </div>
        <div className='content'>
          <Orders
            title={'1회 (2015)'}
            orders={orders2015}
            sourceUrl={'https://www.facebook.com/JH.Loves.You/posts/776759489067053'}
          />
          <Orders
            title={'2회 (2018) 1차'}
            orders={firstOrders2018}
            sourceUrl={'https://www.facebook.com/JH.Loves.You/photos/a.532657326810605.1073741829.384380764971596/1545591192183875/?type=3&theater'}
            prevOrders={orders2015}
          />
          <Orders
            title={'2회 (2018) 2차'}
            orders={orders2018}
            sourceUrl={'https://www.facebook.com/JH.Loves.You/photos/a.532657326810605.1073741829.384380764971596/1584207464988914/?type=3&theater'}
            prevOrders={orders2015}
          />
        </div>
      </div>
    )
  }
}

class Orders extends Component {
  render () {
    const { title, orders, sourceUrl, prevOrders } = this.props

    return (
      <div className='orders'>
        <h3 className='orders_title'>
          <a
            href={sourceUrl}
            target='_blank'
          >
            {title}
          </a>
        </h3>
        <ul>
          {orders.map((x, index) => {
            const { title } = x

            let updown = ''
            if (title && prevOrders) {
              const prevIndex = prevOrders.findIndex(order => order.title === title)
              if (prevIndex >= 0) {
                const offset = index - prevIndex
                if (offset > 0) updown = `▽ ${offset}`
                else if (offset < 0) updown = `▴ ${-offset}`
                else updown = '-'
              } else {
                updown = 'new'
              }
            }

            const track = tracks.find(track => track.title === title)
            const album = albums.find(album => album.id === (track && track.albumId))
            const coverUrl = album && album.coverUrl

            let moreClass = ''
            if ((index + 1) === 20) moreClass = 'order--bold'
            else if ((index + 1) % 10 === 0) moreClass = 'order--semi-bold'

            return (
              <li key={title} className={`order ${moreClass}`}>
                <div className='order_number'>
                  {index + 1}
                </div>
                <div className='order_title'>
                  {title}
                </div>
                {prevOrders && (
                  <div className='order_updown'>
                    {updown}
                  </div>
                )}
                {coverUrl && <img src={coverUrl} className='order_image' />}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
