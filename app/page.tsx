import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ThreeDCard from '../components/threedcard'
import ArticleList from '../components/articlelist'
import InfoCard from '../components/infocard'

function Home() {
  return (
    <div>
      <Navbar/>

      <div className='grid grid-cols-1 justify-items-center'>
        
        <div >
          <ThreeDCard/>
        </div>

        <div className="w-[40rem] h-10 relative">
          {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] w-4/5 blur-sm" /> */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-100" />
          {/* <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[8px] w-1/4 blur-sm" /> */}
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-5px w-100" />
        </div>

        <div className="grid grid-cols-3 w-3/5 justify-between">
          <div className='col-span-2 px-1'>
            <ArticleList/>
          </div>
          <div className='col-span-1 px-1'>
            <InfoCard/>
          </div>
        </div>

      </div>

      <Footer/>
    </div>
  );
}

export default Home