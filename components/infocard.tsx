import React from 'react'

function infocard() {
  return (
    <div>
      <div className="card w-90 bg-primary text-primary-content rounded-xl">
        <div className="card-body">
          <div className='w-10'>
            <img src={'/logo.png'} alt='SoBasically Logo'/>
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
                {/* <button className="btn btn-primary join-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    Subscribe
                </button>  */}
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default infocard
