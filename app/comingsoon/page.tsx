import React from 'react'

import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import TextGenerator from '../../components/textgenerator'

function page() {
  return (
    <div>
      <Navbar/>
      <div className='grid grid-cols-1 justify-items-center'>
        <div className='grid grid-cols-1 w-3/5 justify-items-center text-center'>
          <TextGenerator message='Coming Soon'/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page
