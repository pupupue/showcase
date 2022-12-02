import React from "react"
import Image from 'next/image'

interface Props extends SFC { }

const IndoorSection = ({ children, className = '' }: Props) => {
  return (
    <div className="md:px-0 md:container md:mx-auto w-full h-full md:overflow-visible py-10">
      <div className="w-full grid grid-cols-2 sm:flex sm:flex-row justify-between gap-8">
        <div className="bg-white rounded-3xl h-48 lg:h-64 w-full shadow-lg">
          <div className="w-full h-full p-2">
            <Image src={'/images/chart-3.png'} height={1000} width={1000} style={{ objectFit: 'contain', height: '100%', width: 'auto' }} alt='Chart image' />
          </div>
        </div>
        <div className="bg-white rounded-3xl h-48 lg:h-64 w-full shadow-lg">
          <div className="w-full h-full p-2">
            <Image src={'/images/chart-2.png'} height={1000} width={1000} style={{ objectFit: 'contain', height: '100%', width: 'auto' }} alt='Chart image' />
          </div>
        </div>
        <div className="bg-white rounded-3xl h-48 lg:h-64 w-full shadow-lg">
          <div className="w-full h-full p-2">
            <Image src={'/images/chart-1.png'} height={1000} width={1000} style={{ objectFit: 'contain', height: '100%', width: 'auto' }} alt='Chart image' />
          </div>
        </div>
        <div className="bg-white rounded-3xl h-48 lg:h-64 w-full shadow-lg">
          <div className="w-full h-full p-2">
            <Image src={'/images/chart-2.png'} height={1000} width={1000} style={{ objectFit: 'contain', height: '100%', width: 'auto' }} alt='Chart image' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndoorSection
