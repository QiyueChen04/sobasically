import React from 'react'

import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

import Par from '../../components/articles/par'
import Heading from '../../components/articles/heading'      
import Logo from '../../components/logo'

function page() {
  return (
    <div className='grid grid-cols-1 align-items-center'>
      <Navbar></Navbar>      

      <div className='grid grid-cols-1 w-3/5 h-full place-self-center py-7'>

        <div className='place-self-center'>
          <Logo></Logo>
        </div>

        <Heading heading='Why subscribe?'></Heading>

        <Par paragraph={
          <p>
            Kickoff your Saturdays with a brief and unbiased economics article where we explore everything related to the dismal science. From fundamentals such as Smith's theory of trade to more nuanced topics such as the usefulness of GDP, we got you covered.
          </p>
        }/>

        <Heading heading='Bite-sized and simple:'></Heading>

        <Par paragraph={
          <p>
            It’s in our name. Websites often go on and on trying to explain even the most basic of ideas. Referencing this other theory and that other economist, using foreign (and often unnecessary) financial terms, and being written in such a mundane way - we don’t do that here. Chipping away at anything and everything that overcomplicates the subject, we approach economics the way Steve Jobs approached industrial design: simplicity being the ultimate sophistication.
          </p>
        }/>

        <Heading heading='Unbiased:'></Heading>

        <Par paragraph={
          <p>
            We’re not going to ignore the obvious. Economics and politics often get merged with one another so finding non-partisan info might not be as easy as you think. We don’t adhere to any single economic school of thought, nor are we registered with any political parties. We give multiple perspectives on the topic whenever we can, thereby allowing you to get a full picture on the issue.
          </p>
        }/>

        <Heading heading='Econ IRL:'></Heading>

        <Par paragraph={
          <p>
            In addition to a sublime economics piece, you will also enjoy a quick summary of a robust economics paper, one that is immersed in empirical data and put together by professional economists. With this feature, we deliver both theory and real-world findings each week, adding an extra bit of horse-power to the engine of your economics car.
          </p>
        }/>

        <Heading heading='Stay connected'></Heading>

        <Par paragraph={
          <p>
            Follow us on <a href='https://www.instagram.com/sooo.basically/' className='underline text-blue-400 hover:text-blue-500'>Instagram</a> or <a href='https://twitter.com/So_Basicallyyy' className='underline text-blue-400 hover:text-blue-500'>Twitter</a>.
          </p>
        }/>

        <Heading heading='Stay up-to-date'></Heading>

        <Par paragraph={
          <p>
            You won’t have to worry about missing anything. Every new edition of the newsletter goes directly your inbox.
          </p>
        }/>
        

      </div>
      
      <Footer></Footer>
    </div>
  )
}

export default page
