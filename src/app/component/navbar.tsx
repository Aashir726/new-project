import Image from "next/image"
import Link from "next/link"

const Navbar=()=>{
    return(
        <div  className="  bg-[#A79277] z-20 sticky top-0">
                
  <header className="text-white  ">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <p className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Image src={require("../../../public/logo/download.png")} alt="logo" width={50} height={50}/>
        <span className="ml-3 text-2xl font-serif font-style:italic">Aashir Store</span>
      </p>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href={"#Home"} className="mr-5 hover:text-gray-900 ">Home</Link>
        <Link href={"#About"} className="mr-5 hover:text-gray-900">About</Link>
        <Link href={"#Supplies"} className="mr-5 hover:text-gray-900">Supplies</Link>
        <Link href={"#Contact"} className="mr-5 hover:text-gray-900">Contact</Link>
      </nav>
      <Link href={"#Supplies"}>
      <button className="inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0">
        Visits Store
        
        
      </button>
        </Link>
    </div>
  </header>


        </div>
    )
}
export default Navbar