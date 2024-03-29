import React from 'react'

import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

import Header from '../../components/articles/header'
import Par from '../../components/articles/par'
import Heading from '../../components/articles/heading'      

function pages() {
  return (
    <div className='grid grid-cols-1 align-items-center'>
      
      <Navbar/>

      <div className='grid grid-cols-1 w-3/5 h-full place-self-center py-7'>
        <Header title='The Quantity Theory of Money' subtitle='Examining the money supply and inflation' date='Sep 02, 2023'/>


        <Par paragraph={
          <p>
            It’s widely accepted that the amount of money in circulation will impact the economy’s price level, but there is substantial disagreement over how strong this relationship is. If, for example, the amount of money doubles, will that double the economy’s price level? While the past several months of tightening monetary policy and a subsequent decrease in inflation may lead one to answer "yes," it’s important to consider the several additional factors that impact prices: demographic changes, geopolitics, aggregate supply, etc. This debate over the importance of the various causes of inflation leads us to one of the oldest theories in economics: the quantity theory of money.
          </p>
        }
        >
        </Par>

        <Heading heading="The foundations"></Heading>
        
        <Par paragraph={
          <p>
            Dating back to the 16th-century writings of Nicolaus Copernicus (yes, the guy who came up with the sun-centric model of the universe), this deceptively simple concept emphasizes the relationship between inflation and the money supply. To be exact, it posits a direct relationship between the quantity of money in an economy and the general price level. However, the mathematical representation wasn’t formulated until the early 20th century by American economist Irving Fisher and his <strong>equation of exchange</strong>:
          </p>
        }>
        </Par>


      </div>


      <Footer/>

    </div>
  )
}

export default pages
