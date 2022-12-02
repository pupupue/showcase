import React, { useState } from "react"
import Image from 'next/image'
import CardCarousel from "../Carousel/CardCarousel";
import AllSection from "./CategoryTab/AllSection";
import GardenSection from "./CategoryTab/GarderSection";
import OutdoorSection from "./CategoryTab/OutdoorSection";
import IndoorSection from "./CategoryTab/IndoorSection";
import CategoryTab from "./CategoryTab/CategoryTab";

enum CategorySections {
  AllSection = 'AllSection',
  IndoorSection = 'IndoorSection',
  OutdoorSection = 'OutdoorSection',
  GardenSection = 'GardenSection'
}


const FourthSection = () => {
  const [section, setSection] = useState<keyof typeof CategorySections>(CategorySections.AllSection)
  return (
    <div className="w-full h-auto bg-lightDarker pt-10 pb-5 my-10 px-5 md:px-0">
      <div className="w-full flex justify-center font-poppins text-4xl font-medium gap-3 ">Popular <span className="text-lightGreen">Plants</span></div>
      <div className="w-full flex flex-row justify-center gap-8 mt-5 mg:mt-5 lg:mt-10">
        <CategoryTab className="cursor-pointer"
          onClick={() => setSection(CategorySections.AllSection)}
          active={section === CategorySections.AllSection}>
          All
        </CategoryTab>
        <CategoryTab className="cursor-pointer"
          onClick={() => setSection(CategorySections.IndoorSection)}
          active={section === CategorySections.IndoorSection}>
          Indoor
        </CategoryTab>
        <CategoryTab className="cursor-pointer"
          onClick={() => setSection(CategorySections.OutdoorSection)}
          active={section === CategorySections.OutdoorSection}>
          Outdoor
        </CategoryTab>
        <CategoryTab className="cursor-pointer"
          onClick={() => setSection(CategorySections.GardenSection)}
          active={section === CategorySections.GardenSection}>
          Garden
        </CategoryTab>
      </div>
      <div>
        {
          {
            AllSection: <AllSection />,
            IndoorSection: <IndoorSection />,
            OutdoorSection: <OutdoorSection />,
            GardenSection: <GardenSection />
          }[section]
        }
      </div>
    </div>
  )
}

export default FourthSection
