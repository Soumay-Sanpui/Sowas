import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-primary text-bkg p-10 flex w-screen'>
        <div className='w-[25vw] flex flex-col gap-6'>
            <h4 className='font-semibold'>YOUR LOGO</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        </div>
        <div className='w-[20vw] flex flex-col gap-6'>
            <h4 className='font-semibold'>LINKS</h4>
            <div className='flex flex-col gap-2'>
                {
                    ["Home","About Us", "Our Services", "Our Team"].map((link,index)=>(
                        <p key={index}>{link}</p>
                    ))
                }
            </div>
        </div>
        <div  className='w-[20vw] flex flex-col gap-6'>
            <h4 className='font-semibold'>ADDRESS</h4>
            <div className='w-[20vw] flex flex-col gap-2'>
                {
                    ["2972 Westheimer Rd. Santa Ana,Illinois 937949", "info.ngangkat@gmail.com", "(1234)-111-33333 123-654-444555"].map((add,index)=>(
                        <p key={index}>{add}</p>
                    ))
                }
            </div>
        </div>
        <div className='w-[20vw] flex flex-col gap-6'>
            <h4 className='font-semibold'>NEWSLETTER</h4>
            <div  className='w-[20vw] flex flex-col gap-2'>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                <input className='border text-bkg border-bkg p-2 rounded-md bg-transparent' placeholder='Enter your mail....'/>
            </div>
        </div>
    </footer>
  )
}

export default Footer