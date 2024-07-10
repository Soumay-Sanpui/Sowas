import React from 'react'

const ServiceSection = () => {
  return (
    <div className='text-white pl-[8vw] w-screen'>
        {/* top section */}
        <div className='flex items-center justify-end gap-[6vw]'>
            <div className='uppercase'>
                <p className='text-[3vw] font-thin'>our story:</p>
                <h4 className='text-[3vw] font-semibold'>empower<span className='text-primary'> with<br />software</span> & saas</h4>
            </div>
            {/* side card */}
            <div className='bg-bx w-[50vw] h-[20vw] rounded-l-full'></div>
        </div>
        {/* cards section */}
        <div className='text-sm flex flex-wrap justify-end pr-24 gap-[2vw] '>
            {
                Array.from({length: 6}).map((index)=>(
                    <div className='bg-[#232528] p-3 flex flex-col items-start justify-center hover:bg-primary hover:text-black cursor-pointer gap-[2vw] w-[25vw] rounded-xl'>
                        <div>
                            <img src='/crdimg.png'/>
                        </div>
                        <h3 className='leading-7 uppercase text-[2vw] font-semibold'>empowering  business<br />everywhere</h3>
                        <p>
                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demd by the charms of pleasure of the moment
                        </p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ServiceSection