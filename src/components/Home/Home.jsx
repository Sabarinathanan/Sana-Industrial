import About from '../About/About';
import Cards from '../Application-cards/Cards';
import Carousel from '../Carousel/Carousel';
import Contact from '../Contact/Contact';
import Finishes from '../Finishes-Card/Finishes';
import Navbar from '../Navbar/Navbar';
import Process from '../Process-Method/Process';




function Home() {
  return (
    <div className="App">
      <>
        <Navbar/>
        <Carousel/>
        <About/>
        <Finishes/>
        <Process/>
        <Cards/>
        <Contact/>
      </>
    </div>
  );
}

export default Home;
