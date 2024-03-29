import React from 'react'

function par({
  paragraph,
}: {
  paragraph: JSX.Element;
}) {
  return (
    <div className='place-self-center text-lg'>
      {paragraph}
    </div>
  )
}

export default par
