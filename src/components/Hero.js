import Link from 'next/link'
import Data from '../Data/Hero.js'

export default function Hero() {
  return (
    // <div className="my-48 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-72 text-center">
    //   <h1 className="font-extrabold text-gray-900">
    //     <p className="text-xl sm:text-3xl md:text-4xl">Title </p>
    //     <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-4xl sm:text-6xl md:text-7xl">Modern eCommerce</p>
    //   </h1>
    //   <h2 className="mt-3 max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
    //     Build the eCommerce Revolution.
    //   </h2>
    //   <div className="mt-5 max-w-md mx-auto flex justify-center items-center md:mt-8">
    //     <a href="" className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-white bg-gray-900 hover:bg-gray-800">
    //       Shop Now
    //     </a>
    //     <a href="" className="inline-flex items-center font-semibold text-gray-900 hover:text-gray-800">
    //       Learn more
    //     </a>
    //   </div>
    // </div>
   <>
   
   
   <section className="mb-40">
  
  
    <div className="px-6 py-12 text-center md:px-12 lg:text-left">
      <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
        <div className="grid items-center lg:grid-cols-2">
          <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
            <div
              className="block rounded-lg  px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
              <h1 className="mt-2 mb-16 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
                {Data.Heading} <br /><span className="text-primary"></span>
              </h1>
              <button className="bg-[grey] hover:bg[blue] mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">{Data.Button}</button>
              <a className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40"
                data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</a>
            </div>
          </div>
          <div className="md:mb-12 lg:mb-0">
            <img src={Data.Image}
              className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
   
   
   </>








  )
}
