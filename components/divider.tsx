import React from 'react'

function divider() {
  return (
    <div className="w-[50rem] h-10 relative place-self-center">
      {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] w-4/5 blur-sm" /> */}
      <div className="inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-100" />
      {/* <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[8px] w-1/4 blur-sm" /> */}
      <div className="inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-5px w-100" />
    </div>
  )
}

export default divider
