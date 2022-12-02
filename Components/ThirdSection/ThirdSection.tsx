import React from "react"
import styles from '../../styles/Home.module.css'
import cardContent from "./CardContent";

const ThirdSection = () => {
  return (
    <div className="w-full h-auto px-5 md:px-0">
      <div className={` ${styles.dashedFrameBg} w-full h-full relative md:container md:mx-auto md:overflow-visible `}>
        <div className="w-full h-full grid grid-cols-2 gap-8 px-10 sm:px-3 md:px-3 sm:flex sm:flex-row sm:justify-evenly py-6 lg:py-10 my-10">
          {cardContent.map((current) =>
            <div key={current.id} className="bg-white w-full md:w-1/6 md:h-32 lg:h-44 xl:h-52 rounded-2xl flex justify-center items-center flex-col drop-shadow-lg">
              <div className="h-auto w-full flex justify-center"><current.icon className="h-8 w-8 md:w-10 md:h-10 lg:h-14 lg:w-14 xl:h-20 xl:w-20 text-darkGreen" /></div>
              <div className="font-poppins font-semibold md:text-3xl lg:text-4xl xl:text-5xl text-lightGreen">{current.number}</div>
              <div className="font-poppins text-sm lg:text-xl xl:text-2xl font-medium">{current.title}</div>
            </div>
          )}
        </div>
      </div>
    </div >
  )
}

export default ThirdSection
