import Image from "next/image"
import pic1 from "../../../public/items/ee.jpg"
import pic2 from "../../../public/items/images.jpg"
import pic3 from "../../../public/items/track suit.jpg"


const Supplies = () => {
  return (
    <div>


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-2 bg-gray-200 rounded overflow-hidden">
              <div className="w-40 h-full bg-gray-500" />

            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Here is Our Store
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-xl sm:pl-10 pl-0">
                A delight Simple And easy quick store for you Guys order now or call and get your delivery at your Door step.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap bg-gray-300 p-10 sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-2 w-1/2 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="img"
                  className="object-cover object-center hover:opacity-25 cursor-pointer "
                  src={pic1}
                  width={700}
                  height={300}
                />
              </div>
              <h2 className="text-xl font-medium underline title-font text-gray-900 mt-5">
                Black Plain Shirt
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Custimize Black shirt. Search your design and we will make it foryou at your T-shirts all colors avaliable to place your order Click below.
              </p>
              <button className="flex items-center bg-gray-300 p-1 mt-5 hover:bg-gray-700 text-white rounded">Order now

                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>

              </button>
            </div>
            <div className="p-2 md:w-1/2 sm:mb-0 mb-3  ">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="img2"
                  className="object-cover object-center hover:opacity-50 "
                  src={pic2}
                  width={700}
                  height={300}
                />
              </div>
              <h2 className="text-xl underline font-medium title-font text-gray-900 mt-5">
                Blue Chinnos
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Denim Strechable Blue jeans. Sizes Avaliable New stock inventory.Made in Pakistan.
              </p>
              <button className="flex bg-gray-300 items-center mt-3 p-1 hover:bg-gray-700 text-white rounded">Order now
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

            </div>

            <div className=" p-2 md:w-1/2 sm:mb-0 mb-6 mt-48">
              <div className="rounded-lg h-64 hover:opacity-25 overflow-hidden">
                <Image
                  alt="img3"
                  className="object-cover object-center "
                  src={pic3}
                  width={700}
                  height={300}
                />
              </div>

              <h2 className="text-xl font-medium underline title-font text-gray-900 mt-5">
                Track suites
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Quality tracksuits are durable and able to withstand frequent washing and wear, making them suitable for long-term use.Furthermore, their durability ensures they can withstand frequent use and washing, making them reliable companions for long-term wear
              </p>
              <button className="order flex items-center bg-gray-300 hover:bg-gray-600 text-white rounded p-1 mt-3">
                Order now
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>

              </button>




            </div>



            <div className=" p-2 md:w-1/2 sm:mb-0 mb-6 mt-48">
              <div className="rounded-lg h-64 hover:opacity-25 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center "
                  src={require("../../../public/items/kids.jpg")}
                  width={700}
                  height={300}
                />
              </div>

              <h2 className="text-xl font-medium underline title-font text-gray-900 mt-5">
                Kids Toys
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Kids' toys come in a diverse array, each offering unique benefits for a child's development and entertainment. From classic options like building blocks and dolls to modern electronic gadgets and educational kits, the world of children's toys is vast and dynamic
              </p>
              <button className="order flex items-center bg-gray-300 hover:bg-gray-600 text-white rounded p-1 mt-3">

                Order now
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>






            </div>


          </div>

        </div>



      </section >




    </div >
  )
}
export default Supplies