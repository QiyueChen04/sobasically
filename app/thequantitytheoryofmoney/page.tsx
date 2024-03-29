import React from 'react'

import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

import Header from '../../components/articles/header'
import Par from '../../components/articles/par'
import Heading from '../../components/articles/heading'      
import Img from '../../components/articles/image'

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
        }/>

        <Heading heading="The foundations"></Heading>
        
        <Par paragraph={
          <p>
            Dating back to the 16th-century writings of Nicolaus Copernicus (yes, the guy who came up with the sun-centric model of the universe), this deceptively simple concept emphasizes the relationship between inflation and the money supply. To be exact, it posits a direct relationship between the quantity of money in an economy and the general price level. However, the mathematical representation wasn’t formulated until the early 20th century by American economist Irving Fisher and his <strong>equation of exchange</strong>:
          </p>
        }/>

        <Img img='/qtm_mv=py.jpeg'></Img>

        <Par paragraph={
          <p>
            M is the amount of money, V is the <strong>velocity of money </strong>(the rate at which money is used to purchase new goods and services), P is the price level, and Y is real GDP – hence the direct relationship between the money supply and prices. There are a few things to keep in mind here before going forward. First off, PY (the price level multiplied by the real GDP) is in fact the nominal GDP. This also means that the money supply multiplied by the velocity of money yields the nominal GDP – money velocity encompasses only activities that contribute to GDP, and so multiplying that number with how much money there is (specifically, money used to purchase new goods and services) equals the nominal GDP.
          </p>
        }/>

        <Par paragraph={
          <p>
            Secondly, if we assume the velocity of money and the real GDP as constants, this means the relationship between M, money, and P, prices, is not only direct but also proportional. So, yes, assuming a constant velocity of money and real GDP, a doubling in the amount of money will double the economy’s price level. This may seem like a trivial point at first, but it highlights an important macroeconomic concept that countries like Zimbabwe, Hungary, and Weimar Germany failed to understand: if the government keeps producing more and more money, that doesn’t mean increased production, just higher prices.           
          </p>
        }/>

        <Par paragraph={
          <p>
            Going back to the equation of exchange, here’s an example to make it more intuitive: let’s assume the money supply totals $100, the real GDP is $1000, and the price level is 3 (this is usually measured through an index, i.e., the Consumer Price Index).
          </p>
        }/>

        <Img img='/qtm_3eqn.png'></Img>


        <Par paragraph={
          <p>
            This basically means that, given the variables above, your average dollar is going to "circulate" (trade hands) 30 times per year. Because GDP is simply the value of all goods and services produced in a certain time frame, this means that those 30 exchanges had a total nominal value of $3000. To illustrate this idea further, let’s set up an even simpler situation: the money supply is $1, the GDP is $1000, and the price level is 1. The velocity of money in this case would be 1000, as the money supply of $1 would have to be used to purchase new things 1000 times to create a GDP of $1000. 
          </p>
        }/>


        <Heading heading="An alternative approach"></Heading>

        <Par paragraph={
          <p>
            The equation of exchange is, as you may have guessed, a rather simplistic framework for analyzing what is an infinitely complicated correlation. And as economics has gradually grown into a statistical science over the years, researchers have refined the mathematics behind the quantity theory of money so that it can be more useful for understanding real-world economic phenomena. One such revision is like so:
          </p>
        }/>

        <Img img='/qtm_M*Vt.png'></Img>

        <Par paragraph={
          <p>
            Let’s break this down. 
          </p>
        }/>

        <Par paragraph={
          <ol className='list-decimal list-inside'>
            <li><strong>Money supply (M)</strong>: the total quantity of money in the economy</li>
            <li><strong>Velocity of money (V_T)</strong>: the rate at which money is used to purchase new goods and services within a given time period, T</li>
            <li><strong>Summation operator</strong>: adds up the product of the price level (p_i) and the quantity of goods and services produced (q_i) for each time period “i” from 1 to n. The product of these values yields the nominal GDP, and with the sum operator, we can get the nominal GDP across different time periods (hence the “i”)</li>
            <li><strong>Transpose operator (T)</strong>: converts row vectors into column vectors and vice versa like so:</li>
          </ol>
        }/>
        
        <Img img='/qtm_transpose.png'></Img>

        <Par paragraph={
          <p>
            In this context, we’re dealing with 2 vectors: p (representing the price levels for each time period) and q (representing the quantities of goods and services produced for each time period). As previously stated, for any given time period, we need to take the product of the price level and the quantities of goods and services; to perform this operation across entire vectors, we must take their dot product. To be clear, because we’re dealing with simple row vectors, the transpose operator isn’t a necessary step; it simply adds assurance that the data works in both row and column format. Consider the following example:
          </p>
        }/>

        <Par paragraph={
          <p>
            Price level vector (p):
          </p>
        }/>



      </div>


      <Footer/>

    </div>
  )
}

export default pages
