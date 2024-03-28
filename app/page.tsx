import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ThreeDCard from '../components/threedcard'

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='grid grid-cols-1 justfy-center'>
        <div className="artboard artboard-horizontal phone-5 flex place-content-center self-center">
          {/* <ThreeDCard></ThreeDCard>  */}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home