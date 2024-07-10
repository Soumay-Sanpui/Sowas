import React from 'react'

const Badge = ({text, className}) => {
  return (
    <div className={`bg-primary text-center py-3 px-6 rounded-full text-bkg ${className}`}>
        <p>{text}</p>
    </div>
  )
}

export default Badge