import React from 'react'

function par({
  paragraph,
}: {
  paragraph: string;
}) {
  return (
    <div className='place-self-center text-lg bg-primary'>
      {paragraph}
    </div>
  )
}

export default par
