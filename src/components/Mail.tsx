import React from 'react'

const Mail = () => {
    return (
        <div className='flex items-center text-textColor gap-5  fixed bottom-40 -right-32 rotate-90'>
           <div data-aos ='fade-down-left' data-aos-duration ='800'>
            <a href='mailto:cse.sidverma@gmail.com' className='font-mono text-sm hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out'>
                cse.sidverma@gmail.com
            </a>
            </div>
            <hr className='border-1 rounded-full border-textColor w-40' />
        </div>

    )
}

export default Mail
