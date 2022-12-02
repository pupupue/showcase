import React from "react"
import Image from 'next/image'



const SecondSection = () => {
  return (
    <div className='flex flex-row mt-20 pb-20 h-auto w-full md:container md:mx-auto md:overflow-visible px-5 md:px-0'>
      <div className="flex flex-row h-2/3 w-full ">
        <div className="w-1/3 xl:block hidden">
          <div style={{ width: '100%', height: '100%', position: 'relative', }}>
            <Image
              alt='Mountains'
              src='/images/plant-1.png'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>
        <div className="xl:w-2/3 w-full">
          <div className="text-5xl leading-none lg:leading-tight xl:leading-snug 2xl:leading-relaxed font-poppins font-medium">Why to use our <span className="text-darkGreen font-poppins font-bold">Product?</span>
          </div>
          <div className=" lg:text-xl xl:text-2xl gap-2 flex flex-col mt-8 text-gray text-lg md:text-2xl font-poppins w-full ">
            <p className="leading-relaxed md:leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aspernatur necessitatibus odit dolor et qui veritatis perspiciatis optio molestias nulla adipisci unde, recusandae fugiat delectus tenetur eaque, soluta officia nam. Ut sequi explicabo labore illum ipsum ducimus maiores reiciendis ad expedita alias. Officiis eaque debitis laborum aut reprehenderit, dolorem rerum.</p>
            <p className="leading-relaxed md:leading-relaxed"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deserunt qui autem, accusantium porro nemo distinctio quisquam ut voluptatum nulla nihil cupiditate. Voluptatibus nobis nostrum deleniti iste. In sint eum ab magni a. Hic atque animi provident unde suscipit, eveniet repellendus architecto quae cum sequi.</p>

          </div>
          <div className="mt-8 h-14 w-48 border-2 border-lightGreen bg-transparent rounded-xl flex justify-center items-center font-poppins font-bold text-lightGreen text-xl cursor-pointer hover:bg-lightGreen hover:text-white hover:bg-gradient-to-tr hover:from-darkGreen hover:to-lightGreen">
            View More
          </div>
        </div>

      </div>




    </div>








  )
}

export default SecondSection
