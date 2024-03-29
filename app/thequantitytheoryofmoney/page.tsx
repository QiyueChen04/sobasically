import React from 'react'

import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Header from '../../components/articles/header'

function pages() {
  return (
    <div className='grid grid-cols-1 align-items-center'>
      
      <Navbar/>

      <div className='grid grid-cols-1 w-3/5 h-full place-self-center pt-7'>
        <Header title='The Quantity Theory of Money' subtitle='Examining the money supply and inflation' date='Sep 02, 2023'/>
      </div>

      <Footer/>

    </div>
  )
}

export default pages
