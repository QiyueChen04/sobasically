import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ThreeDCard from '../components/threedcard'

function Home() {
  return (
    <div className='grid grid-cols-1 justify-center items-center'>
      <div>
        <Navbar></Navbar>
      </div>

      <div className="grid place-items-center">
        <ThreeDCard></ThreeDCard>
      </div>

      <div>
        
      </div>

      <div>
      <Footer></Footer>
      </div>
      
    </div>
  );
}

export default Home