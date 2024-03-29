import React from 'react'

function heading({
    heading,
}:{
    heading:string;
}) {
  return (
    <div className='place-self-start text-whilte text-2xl font-bold pt-6'>
        {heading}
    </div>
  )
}

export default heading
