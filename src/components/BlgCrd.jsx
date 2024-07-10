import React from 'react'

const BlgCrd = () => {
  return (
    <div className='p-4 bg-[#232528] w-[30vw] h-[50vw] rounded-xl flex flex-col gap-6 cursor-pointer hover:bg-primary hover:text-bkg'>
        <div className='bg-[#C4C4C4] w-full h-[20vw] rounded-xl'></div>
        <div>
            <h4>Monday, 12 March 2025</h4>
            <h3 className='uppercase text-white text-semibold'>Innovating Solutions for<br />Success.</h3>
        </div>
        <div>
            <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demd by the charms of pleasure of the moment through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish pleasure of the moment through weakness of will, which is the same as saying through</p>
        </div>
        <div>
            <button className='border border-bkg px-7 py-3 bg-primary text-bkg rounded-full font-semibold'>Read More</button>
        </div>
    </div>
  )
}

export default BlgCrd