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
          <TextGenerator message='Coming Soon'size='text-6xl' delay={0.5}/>
        </div>

        <div className='grid grid-cols-1 w-3/5 justify-items-center text-center'>
          <TextGenerator message='While our custom website is being completed, feel free to read our articles on Substack.'size='text-xl' delay={1}/>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default page
