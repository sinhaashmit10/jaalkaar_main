import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event)=> {
        event.preventDefault();
    }


  return (
    <div className='text-center px-4 sm: px-[5vw] md: px-[7vw] lg: px-[2vw]'>
        <p className='text-2xl font-medium text-gray-700'>Subscribe now to stay updated on our latest collections and exclusive offers!</p>
        <p className='text-gray-400 mt-3'>Be the first to know about new arrivals, special deals, and more—delivered right to your inbox!</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
            <button className='bg-black text-white text-xs px-10 py-4' type='submit'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetterBox