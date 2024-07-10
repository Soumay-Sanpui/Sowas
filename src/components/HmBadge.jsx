import React from 'react'

const HmBadge = ({text, className}) => {
  return (
    <div className={`bg-[#232528] cursor-pointer w-max rounded-full hover:bg-primary hover:text-bkg border border-primary py-2 px-10 ${className}`}>
        {text}
    </div>
  )
}

export default HmBadge