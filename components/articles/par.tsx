import React from 'react'

function par({
  paragraph,
}: {
  paragraph: JSX.Element;
}) {
  return (
    <div className='place-self-start text-lg py-3'>
      {paragraph}
    </div>
  )
}

export default par
