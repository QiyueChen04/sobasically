import React from 'react'

import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function page() {
  return (
    <div className='grid grid-cols-1 align-items-center gap-20'>
      <Navbar/>

      <div className='grid grid-cols-1 w-3/5 h-full place-self-center py-20'>

        <img src={'/logo.png'} alt='SoBasically Logo' className='place-self-center py-1'/>

        <div className='text-white text-6xl font-bold place-self-center py-2'>
          Coming Soon!
        </div>
        
        <div className='text-white text-xl place-self-center text-center py-2'>
          Meanwhile, you can take a look at <a href={'../thequantitytheoryofmoney'} className="underline text-blue-400 hover:text-blue-500">our latest article</a> on the quantum 
          theory of money or read more of our articles on <a href={'https://sobasically.substack.com/'} className="underline text-blue-400 hover:text-blue-500">Substack</a>.
        </div>

      </div>

      <Footer/>

    </div>
  )
}

export default page
