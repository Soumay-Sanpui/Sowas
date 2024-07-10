import React from 'react'

const CTASection = () => {
  return (
    <div className='w-screen h-screen p-10'>
        <div className='rounded-2xl w-[90vw] p-[3vw] flex flex-col items-center justify-center uppercase bg-primary'>
            <h2 className='text-[4vw] font-thin'>stay ahead</h2>
            <h2 className='text-[4vw] font-semibold'>subscribe for the latest</h2>
            <h2 className='text-[4vw] font-semibold'>updates!</h2>
            <button className='border border-bkg p-3 rounded-md'>subscribe now</button>
        </div>
    </div>
  )
}

export default CTASection