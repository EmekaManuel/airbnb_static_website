import React from 'react'
import main from './main.png'

const Main = () => {
  return (
    <hero>
    <div className='main-image'>
        <img src={main} alt="main_image" className='img-main' />
    </div>
    <div className='main-content'>
        <h2 className='title-1'>Online Experience</h2>
        <p className='caps-1'>Join unique and interactive activities led by one-of-a-kind hosts - all without leaving home</p>
    </div>
    </hero>
  )
}

export default Main