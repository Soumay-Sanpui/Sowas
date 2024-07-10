import React from 'react'
import Badge from '../Badge'
import BlgCrd from '../BlgCrd'

const BlogSection = () => {
  return (
    <div className='text-white pl-[10vw]'>
        <div className='flex text-[2vw] font-semibold items-center gap-[2vw]'>
            <h2>UNLOCK</h2>
            <Badge text={"EXCLUSIVE"}/>
        </div>
        <h2 className='text-[2vw] font-semibold'>CONTENT, SUBSCRIBE TO OUR </h2>
        <div className='flex text-[3vw] font-semibold items-center gap-[2vw] justify-between'>
            <h2>BLOG TODAY!</h2>
            <div>
                <Badge text={"Read Full Blog"} className={"text-[1vw]"}/>
            </div>
        </div>
        <div className='flex flex-wrap gap-7'>
            {
                Array.from({length: 4}).map((index)=>(
                    <BlgCrd />
                ))
            }
        </div>
    </div>
  )
}

export default BlogSection