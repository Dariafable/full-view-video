import React from 'react'
import bergVideo from '../assets/bergVideo.mp4'

const Main = () => {
  return (
    <div className='main'>
        <div className='overlay'></div>
        <video src={bergVideo} autoPlay loop muted />
        <div className='content'>
            <h1>Welcome</h1>
            <p>To this page</p>
        </div>
    </div>
  )
}

export default Main