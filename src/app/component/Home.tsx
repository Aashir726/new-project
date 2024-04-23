"use client"
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
const Hero = () => {
    return(
        <div id="Home">
            
  <section className="text-gray-600 body-font mb-36 mt-28">
    <div className="container mx-auto flex px-2 py-10 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font text-4xl   mb-4 font-medium text-gray-900">
          We are Ready to serve you different activity
          <br className="hidden lg:inline-block" />
          <Typewriter
  options={{
    strings: ["Shopping","Entertainment","Enjoyment","FoodCourt"],
    autoStart: true,
    loop: true,
  }}
/>
        </h1>
        <p className="mb-8 leading-relaxed text-2xl">
          
Welcome to our clothing store, where fashion meets comfort and style intertwines with quality. Step into a world where every garment tells a story, where each thread is woven with care and attention to detail. Our store is more than just a place to shop; it's a destination where you can explore the latest trends, discover timeless classics, and express your unique sense of style.
        </p>
        <div className="flex justify-center">
          <Link href={"#Contact"}>
          <button className="inline-flex text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">
            Contact
          </button>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        
        <Image 
          className="object-cover object-center rounded"
          alt="Chairman "
          src={require("../../../public/logo/images.png")}
          width={800}
          height={1000}
        />
      </div>
    </div>
  </section>


        </div>
    )
}
export default Hero