import './App.css'
import HeroCarousel from './components/HeroCarousel'
import Navbar from './components/Navbar'

export interface HeroCarouselProps {
  images: {src: string, alt: string}[]
}

function App() {

  const images = [{src:"../src/assets/chickens.jpg", alt:"chickens"}, {src:"../src/assets/volunteers.jpg", alt:"Volunteers"}, {src:"../src/assets/eggs.jpg", alt:"Eggs"}, {src:"../src/assets/vegetable.jpg", alt:"farm work"}, {src:"../src/assets/shiitake.jpg", alt:"mountain work"}];

  return (
    <>
    <Navbar></Navbar>
    <div className="w-full m-auto"></div>
    <HeroCarousel images={images}></HeroCarousel>
     <h1 className="text-3xl font-bold underline text-red-400">
    Hello world!
  </h1>
    </>
  )
}

export default App
