import React from 'react'
import Navbar from './components/Navbar'
import Main  from './components/Main'
import Card from './components/Card'
import Data from './data'

import './App.css'

// import image from './image1.png'
// import imagee from './image2.png'
// import imageee from './image3.png'


const App = () => {
  const cards = Data.map(items => {
    return (
      <Card
      key = {items.id}
      items = {items}

      // {...items}

      
      // img= {items.coverImg}
      // rating={items.stats.rating}
      // reviewCount={items.stats.reviewCount}
      // location={items.location}
      // title={items.title}
      // price={items.price}
      // openSpots={items.openSpots}
      />

    )
  })

  return (
    <div>
      <Navbar/>
      <Main/>
      <section className='cards-list'>
      {cards}

      </section>

    
    </div>
  )
}

export default App