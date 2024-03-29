import React from 'react'

import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Divider from '../../components/divider'

import Header from '../../components/articles/header'
import Par from '../../components/articles/par'

function pages() {
  return (
    <div className='grid grid-cols-1 align-items-center'>
      
      <Navbar/>

      <div className='grid grid-cols-1 w-3/5 h-full place-self-center py-7'>
        <Header title='The Quantity Theory of Money' subtitle='Examining the money supply and inflation' date='Sep 02, 2023'/>

        <Divider/>

        <Par paragraph='
        It’s widely accepted that the amount of money in circulation will impact the economy’s price level, but there is substantial disagreement over how strong this relationship is. If, for example, the amount of money doubles, will that double the economy’s price level? While the past several months of tightening monetary policy and a subsequent decrease in inflation may lead one to answer "yes," it’s important to consider the several additional factors that impact prices: demographic changes, geopolitics, aggregate supply, etc. This debate over the importance of the various causes of inflation leads us to one of the oldest theories in economics: the quantity theory of money.
        '>
        </Par>

        


      </div>


      <Footer/>

    </div>
  )
}

export default pages
