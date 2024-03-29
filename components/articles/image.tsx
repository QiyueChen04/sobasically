import React from 'react'
import Image from 'next/image'

function image({
  img,
}:{
  img: string;
}) {
  return (
    <div className='place-self-center py-3'>
      <Image src={img} alt="article image" height="1000" width="300"></Image>
    </div>
  )
}

export default image
