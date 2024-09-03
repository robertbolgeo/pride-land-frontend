import { FaFacebookF, FaYoutube, FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
 return (
    
  <footer className="w-full px-4 py-16 sm:py-20 md:px-8 md:py-24 bg-primary text-secondary">
   <div className="max-w[1200px] mx-auto grid w-full grid-cols-1 gap-8 text-base sm:grid-cols-2 md:grid-cols-5">
    <div className="flex flex-col gap-4 md:col-span-2">
     <h1 className="font-semibold text-secondary">PRIDE FARM</h1>
     <p>©2024 PRIDE LANDS ltd. All rights reserved</p>
    </div>
    <div className="flex flex-col gap-4">
     <p className="text-base font-bold sm:text-lg">Support</p>
     <a
      href="/contactus"
      target="_blank"
      className="cursor-pointer duration-150 hover:text-tertiary">
      Contact Us
     </a>
    </div>
    <div className="flex flex-col gap-4">
     <p className="text-base font-bold sm:text-lg">About us</p>
     <a
      href="/aboutus"
      target="_blank"
      className="cursor-pointer duration-150 hover:text-tertiary">
      Find out more about our mission
     </a>
    </div>
    <div className="flex flex-col gap-4">
     <p className="text-base font-bold sm:text-lg">Follow Us</p>
     <a
      href="https://www.facebook.com/prideland4u"
      className="cursor-pointer duration-150 hover:text-tertiary">
      <FaFacebookF />
      Facebook
     </a>
     <a
      href=""
      target="_blank"
      className="cursor-pointer duration-150 hover:text-tertiary">
      <FaSquareInstagram />
      Instagram
     </a>
     <a
      href="https://www.youtube.com/channel/UCInYpCvSPY0ezO-gDb7R75Q"
      target="_blank"
      className="cursor-pointer duration-150 hover:text-blue-300">
      <FaYoutube />
      YouTube
     </a>
    </div>
   </div>
  </footer>
 );
}
