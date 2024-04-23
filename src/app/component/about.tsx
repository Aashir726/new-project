import Image from "next/image"

const About=()=>{
    return(
        <div id="About">


  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
        <div className="w-full sm:p-4 px-4 mb-6">
          <h1 className="title-font font-medium text-2xl mb-2 text-gray-900">
            We are happy to Announce we are delivering our best 
          </h1>
          <div className="leading-relaxed text-xl">
          Our main imports are mens Shirts ,Hoddies, Children Toys and much more we can announce our family reached around millions .Thank you for your support.
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 className="title-font font-medium text-3xl text-gray-900">
            10M
          </h2>
          <p className="leading-relaxed">Users</p>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 className="title-font font-medium text-3xl text-gray-900">
            3M
          </h2>
          <p className="leading-relaxed">Subscribes</p>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 className="title-font font-medium text-3xl text-gray-900">35k</h2>
          <p className="leading-relaxed">Downloads</p>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 className="title-font font-medium text-3xl text-gray-900">1000+</h2>
          <p className="leading-relaxed">Products</p>
        </div>
      </div>
      <div className="lg:w-1/2 sm:w-1/3 px-24 mr-5 rounded-lg overflow-hidden mt-6 sm:mt-0">
        <Image alt="Logo"
          className="object-cover object-center w-full h-full"
          src={require("../../../public/logo/download.png")}
          width={800}
          height={600}
          />
        
      </div>
    </div>
  </section>


        </div>
    )
}
export default About