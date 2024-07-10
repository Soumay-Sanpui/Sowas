import React from 'react'
import HmBadge from '../HmBadge'

const HomeSection = () => {
  return (
    <div className='text-white pl-[7vw]'>
        <div className='flex'>
            <div className='text-sm flex flex-col gap-[3vw] w-[35vw]'>
                {/* content card 1*/}
                <div className='flex flex-col gap-[2vw]'>
                    <h3 className='uppercase font-semibold text-[2vw] leading-8'>innovating solutions<br/>for success.</h3>
                    <p className='text-txt'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demd by the charms of pleasure of the moment through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish</p>
                </div>
                {/* content card 2*/}
                <div className='flex flex-col gap-[2vw]'>
                    <h3 className='uppercase font-semibold text-[2vw] leading-8'>Your Partner in Digital<br/> Excellence.</h3>
                    <p className='text-txt'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demd by the charms of pleasure of the moment through weakness of will, which is the same as saying through shrinking from toil and pain.These cases are perfectly simple and easy to distinguish</p>
                </div>
            </div>
            {/* card */}
            <div className='p-8 w-[43vw] bg-primary text-black rounded-xl flex flex-col gap-[3vw] h-max'>
                    <h3 className='uppercase font-bold text-[2vw]'>driving growth through innovation.</h3> 
                    <p>
                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demd by the charms of pleasure of the moment through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish
                    </p>
                    <div>
                        <button className='px-5 py-3 rounded-md border border-black'>Read More</button>
                    </div>
            </div>
        </div>
        <div className='flex justify-start items-center gap-8'>
            {/* card */}
            <div className='bg-bx w-[37vw] h-[18vw] rounded-xl'></div>
            <div className='flex flex-col gap-6'>
                <h4 className='uppercase text-[4xl] font-semibold'>dislike men who are so<br /> beguiled and demoralized by</h4>
                {/* badges */}
                <div className='flex flex-col items-stretch justify-evenly gap-2'>
                    {/* row 1 */}
                    <div className='flex items-center justify-center gap-4'>
                        <HmBadge text={"Section One"}/>
                        <HmBadge text={"Our Section One"}/>
                        <HmBadge text={"Section"}/>
                    </div>
                    {/* row 2 */}
                    <div className='flex items-center justify-center gap-4'>
                        <HmBadge text={"Section One"}/>
                        <HmBadge text={"Section"}/>
                        <HmBadge text={"Our Section One"}/>
                    </div>
                    {/* row 3 */}
                    <div className='flex items-center justify-center gap-4'>
                        <HmBadge text={"Our Section One"}/>
                        <HmBadge text={"Section One"}/>
                        <HmBadge text={"Section"}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection