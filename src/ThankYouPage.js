import React from 'react'
import { useParams } from 'react-router-dom';

const ThankYouPage = () => {

    const { id } = useParams();
  return (
    <div className='flex flex-col h-screen justify-center bg-black px-5 lg:px-0'>
    <div className='bg-[#23262c] lg:h-1/2 lg:w-1/4 rounded-2xl shadow-2xl mx-auto p-7'>
       <div className='flex justify-center'>
        <img src='/images/illustration-thank-you.svg' alt='' className='w-[150px]'/>
       </div>
       <p className='text-[15px] py-3 text-center bg-[#262E38] rounded-3xl text-[#FC7614] mt-7 mb-5'>{`You selected ${id} out of 5`}</p>
       <h1 className='text-[28px] font-bold text-center text-white'>Thank you!</h1>
       <p className='text-[#969FAD] text-center text-[15px] my-5'> We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
   </div>
  )
}

export default ThankYouPage