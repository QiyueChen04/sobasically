import React from 'react'
import Logo from '../components/logo'

function infocard() {
  return (
    <div>
      <div className="card w-90 bg-primary text-primary-content rounded-xl">
        <div className="card-body">
          <div className='w-10'>
            <Logo/>
          </div>
          <h2 className="card-title">SoBasically</h2>
          <p className='text-xs'>Kickoff your Saturdays with a brief and unbiased economics article where we explore everything related to the dismal science</p>
          <form>
            <label className="label">
              <span className="label-text">Enter Email to Subscribe</span>
            </label> 
            <fieldset className="form-control w-80">
              <div className="join">
                <input type="text" placeholder="username@site.com" className="input input-bordered join-item text-sm" /> 
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default infocard
