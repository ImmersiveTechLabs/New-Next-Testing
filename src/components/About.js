import React from 'react'

import Data from "../Data/About"
import "tailwindcss/tailwind.css"

export default function About() {
    const style = {
        backgroundColor: Data.background,
        }
    return (
        <>
          <section className=" dark:bg-gray-900" style={style}>
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg ">
            
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">{Data.title}</h2>
            <p className="mb-4">{Data.content}</p>
            <p>{Data.extracontent}</p>
            
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src={Data.image1} />
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src={Data.image2} alt="office content 2" />
            </div>
            </div>
          </section>
        </>
    )
}
