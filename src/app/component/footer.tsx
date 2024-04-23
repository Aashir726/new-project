import Image from "next/image"
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import {FaInstagram } from "react-icons/fa"
const Footer = ()=> {
    return(
        <div>
  <footer className="text-gray-600 body-font">
    <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <Image src={require("../../../public/logo/download.png")} alt="logo" width={100} height={100}/>
        <span className="ml-3 text-xl">Aashir Store</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2024 
        <a
          href="https://twitter.com/knyttneve"
          className="text-gray-600 ml-1"
          rel="noopener noreferrer"
          target="_blank"
        >
          @Karachi-Pakistan
        </a>
      </p>
      <span className="inline-flex sm:ml-auto text-2xl sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link
        target="_blank"
         href="https://web.facebook.com/aashir.shabbir.1/" className="text-gray-400">
        <FaFacebookSquare className="text-2xl hover:opacity-25" />
        </Link>
        <a className="ml-3 text-gray-500">
     
            <Link target="_blank"
            href="https://web.whatsapp.com/" className="text-gray-400">
                <IoLogoWhatsapp className=" text-2xl hover:opacity-25" />
            </Link>
            
        </a>
        <a className="ml-3 text-gray-500">
         <Link target="_blank" 
            href="https://www.instagram.com/accounts/login/" className="text-gray-400">
              <FaInstagram  className="text-2xl hover:opacity-25"/>
            </Link>
        </a>
        <a className="ml-3 text-gray-500">
        
        </a>
      </span>
    </div>
  </footer>
)

        </div>
    )
} 
export default Footer