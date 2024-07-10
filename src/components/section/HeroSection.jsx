import React from 'react'
import Badge from '../Badge'

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center gap-[4vw]'>
            {/* card */}
            <div className='bg-bx w-[45vw] h-[25vw] rounded-xl p-4'>
                <div className='p-4 bg-black rounded-full text-white w-max text-sm '>
                    <p className='uppercase'>Leading the Way with Software & SaaS.</p>
                </div>
            </div>
            <div className='flex flex-col gap-[3vw] items-end justify-center'>
                {/* icons */}
                <div className=''>
                    <img className='w-[15vw]' src='/scl.png'/>
                </div>
                {/* sm box fr */}
                <div className='bg-bx rounded-xl w-[30vw] h-[20vw]'></div>
            </div>
        </div>
        <div className='w-full px-[7vw] py-5 flex text-white items-center justify-between '>
            {/* box */}
            <div className='bg-bx/50 flex items-center justify-center w-[23vw] h-[18vw] rounded-xl'>
                <svg width="107" height="107" viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="53.5" cy="53.5" r="53.5" fill="#E2FF31"/>
                    <path d="M71.3268 51.3232C73.3268 52.4779 73.3268 55.3646 71.3268 56.5193L46.2047 71.0236C44.2047 72.1783 41.7047 70.7349 41.7047 68.4255L41.7047 39.417C41.7047 37.1076 44.2047 35.6643 46.2047 36.819L71.3268 51.3232Z" fill="#1C1E21"/>
                </svg>
            </div>
            {/* content */}
            <div className='uppercase flex flex-col items-start justify-center'>
                <div><p className='font-light text-[4vw]'>Revolutionize your</p></div>
                <div><p className='font-semibold text-[4vw]'>bussiness with</p></div>
                <div className='font-semibold text-[4vw] flex items-center justify-center gap-4'>
                    <p>software &</p>
                    <div>
                        <Badge text={"saas"} className={"w-[15vw]"}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection