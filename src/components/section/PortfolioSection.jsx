import React from 'react'
import Badge from "../Badge"

const PortfolioSection = () => {
  return (
    <div className='text-white flex pl-[10vw] ml-[4vw] gap-8'>
        {/* left */}
        <div className='flex flex-col gap-4'>
            <div className='w-[25vw] flex flex-col gap-6'>
                <h4 className='uppercase text-[2vw] font-semibold'>innovating solutions<br/>for success.</h4>
                <p className='text-txt text-sm'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demd by the charms of pleasure of the moment through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish</p>
            </div>
            <div className='w-[25vw] flex flex-col gap-6'>
                <h4 className='uppercase text-[2vw] font-semibold'>innovating solutions<br/>for success.</h4>
                <p className='text-txt text-sm'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demd by the charms of pleasure of the moment through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish</p>
            </div>
            <div>
                {/* box */}
                <div className='bg-bx w-[20vw] h-[20vw] rounded-lg'></div>
            </div>
        </div>
        {/* right */}
        <div className='flex flex-col gap-8'>
            {/* top */}
            <div className='flex gap-8'>
                {/* left */}
                <div className='flex flex-col gap-6'>
                    <div className='w-[25vw] flex flex-col gap-6'>
                        <h4 className='uppercase text-[2vw] font-semibold'>innovating solutions<br/>for success.</h4>
                        <p className='text-txt text-sm'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demd by the charms of pleasure of the moment through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish</p>
                    </div>
                    {/* box */}
                    <div className='w-[20vw] h-[20vw] rounded-lg bg-bx'></div>
                </div>
                {/* right */}
                <div>
                    <div className='w-[20vw] h-[20vw] rounded-lg bg-bx'></div>
                </div>
            </div>
            {/* bottom */}
            <div className='flex items-center justify-center'>
                <div>
                    <h3 className='uppercase text-[3vw] font-semibold'>Nam libero tempore, <br/>cum soluta nobis est</h3>
                    <div className='flex items-start justify-start'>
                        <h3 className='uppercase text-[3vw]'>eligendi optio</h3>
                        <Badge text="More Portfolio"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PortfolioSection