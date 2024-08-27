import './App.css'
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import HeroCarousel from './components/HeroCarousel'
import Navbar from './components/Navbar'
import Slogan from './components/Slogan';

export interface HeroCarouselProps {
  images: {src: string, alt: string}[]
}

function App() {

  const images = [{src:"../src/assets/chickens.jpg", alt:"chickens"}, {src:"../src/assets/volunteers.jpg", alt:"Volunteers"}, {src:"../src/assets/eggs.jpg", alt:"Eggs"}, {src:"../src/assets/vegetable.jpg", alt:"farm work"}, {src:"../src/assets/shiitake.jpg", alt:"mountain work"}];

  return (
    <div className="bg-gradient-to-br from-green-300 to-white font-sans">
    <Navbar></Navbar>
    <div className="w-full m-auto"></div>
    <HeroCarousel images={images}></HeroCarousel>
    <Slogan></Slogan>
  <section id="cards" className={"min-h-80 flex flex-col px-4"}>
   <div className="flex flex-col flex-1 max-w-[1400] mx-auto w-full"></div>
     <h1 className="text-3xl font-bold underline text-red-400 p-48">
    Cards Component Goes Here
  </h1>
  </section>
  <section id="map" className={"min-h-80 flex flex-col"}>
   <div className="flex flex-col flex-1 max-w-[1400] mx-auto w-full"></div>
     <img src="./src/assets/map.png" alt="map" className="mx-auto lg:mx-24 lg:flex w-[80%] rounded-lg drop-shadow-xl"></img>
  </section>
  <section id="blogs" className={"min-h-80 flex flex-col px-4"}>
   <div className="flex flex-col flex-1 max-w-[1400] mx-auto w-full"></div>
    <Blogs></Blogs>
  </section>
    <section id="kuchikomi" className={"min-h-80 flex flex-col px-4"}>
   <div className="flex flex-col flex-1 max-w-[1400] mx-auto w-full"></div>
     <h1 className="text-3xl font-bold underline text-red-400 p-48">
    Customer Reviews
  </h1>
  </section>
  <Footer></Footer>
    </div>
  )
}

export default App
