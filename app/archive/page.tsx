import React from 'react'

import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

import ArticleList from '../../components/articlelist'

function page() {
  return (
    <div className='grid grid-cols-1 align-items-center'>
      <Navbar></Navbar>      

      <div className='grid grid-cols-1 w-3/5 h-full place-self-center py-7 pb-10'>
        <div className='place-self-center'>
          <ArticleList></ArticleList>
        </div>
        <div className='place-self-center'>
          <p className='text-lg'>
            More is coming...
          </p>
        </div>
      </div>
      
      <Footer></Footer>
    </div>
  )
}

export default page
