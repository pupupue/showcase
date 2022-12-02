import React from "react"


interface Props extends SFC { }

const ContentWrapper = ({ children, className = '' }: Props) => {
  return (
    <div className="w-full h-full">

      {children}
    </div>
  )
}

export default ContentWrapper
