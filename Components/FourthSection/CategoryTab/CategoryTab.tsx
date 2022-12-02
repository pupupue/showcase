import React from "react"


interface Props extends SFC {
  active?: boolean
  onClick?: () => void
}

const CategoryTab = ({ children, className = '', active, onClick }: Props) => {
  return (
    <div onClick={onClick}
      className={`${className} ${active ? 'underline text-lightGreen' : 'text-gray'} hover:text-lightGreen cursor-pointer decoration-lightGreen underline-offset-8 text-lg sm:text-2xl md:text-3xl font-medium font-poppins`}>
      {children}
    </div>
  )
}

export default CategoryTab
