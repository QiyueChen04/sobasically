import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ThreeDCard from '../components/threedcard'
import ArticleList from '../components/articlelist'

function Home() {
  return (
    <div className='grid grid-cols-1 justify-center items-center'>
      <div>
        <Navbar></Navbar>
      </div>

      <div className="grid place-items-center">
        <ThreeDCard></ThreeDCard>
      </div>

      <div className="grid place-items-center">
        <ArticleList></ArticleList>
      </div>

      <div>
      <Footer></Footer>
      </div>
      
    </div>
  );
}

export default Home