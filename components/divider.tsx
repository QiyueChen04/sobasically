import React from 'react'

function divider() {
  return (
    <div className="w-[40rem] h-10 relative">
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-100" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-5px w-100" />
    </div>
  )
}

export default divider
