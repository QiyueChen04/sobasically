import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ThreeDCard from '../components/threedcard'
import ArticleList from '../components/articlelist'
import InfoCard from '../components/infocard'
import Divider from '../components/divider'

import Link from 'next/link'

function Home() {
  return (
    <div>
      <Navbar/>

      <div className='grid grid-cols-1 justify-items-center pb-10'>
        
        <div>
          <Link href={'../thequantitytheoryofmoney'}>
            <ThreeDCard/>
          </Link>
        </div>
 
        <Divider/>

        <div className="grid grid-cols-3 w-3/5 justify-between">
          <div className='col-span-2 px-1'>
            <ArticleList/>
          </div>

          <div className='col-span-1 px-1'>
            <InfoCard/>
          </div>

          <div className='place-self-start'>
            <Link href={'../archive'}>
              <button className="btn btn-xs rounded-xl sm:btn-sm md:btn-md lg:btn-lg">
                See more 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className='fill-current'><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer/>

    </div>
  );
}

export default Home