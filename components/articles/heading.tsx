import React from 'react'

function heading({
    heading,
}:{
    heading:string;
}) {
  return (
    <div className='text-whilte text-2xl font-bold pt-8 pb-2.5'>
        {heading}
    </div>
  )
}

export default heading
