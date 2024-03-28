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
        <div className="grid">
          <ThreeDCard/>
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