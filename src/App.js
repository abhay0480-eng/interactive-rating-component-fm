import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function App() {

  const rating = [1,2,3,4,5]
  const [activeRating,setActiveRating] = useState()
  const navigate = useNavigate();

  const submit = (rating) => {
    rating ? navigate(`/thankyou/${rating}`) : setActiveRating(0)
  }

  console.log(activeRating)
  return (
    <div className='flex flex-col h-screen justify-center bg-black px-5 lg:px-auto'>
     <div className='bg-[#23262c] lg:h-1/2 lg:w-1/4 rounded-2xl shadow-2xl mx-auto p-7'>
        <div className='flex'>
          <img src='./images/icon-star.svg' alt='icon-star' className='w-10'/>
        </div>
        <h1 className='text-[28px] text-white mt-7 mb-5'>How did we do?</h1>
        <p className='text-[#969FAD] text-[15px] mb-5'> Please let us know how we did with your support request. All feedback is appreciated 
          to help us improve our offering!</p>
        <div className='flex justify-evenly mb-5 text-white'>

        {rating.map((item)=>{
          return  <button key={item} onClick={()=>setActiveRating(item)} className={`${activeRating===item?"bg-[#7C8798]":"bg-[#262E38]"} hover:bg-[#FC7614] rounded-full w-10 h-10 lg:w-14 lg:h-14 flex justify-center items-center shadow-2xl`}>{item}</button>
        })}
        </div>
        <button className='bg-[#FC7614] rounded-3xl w-full py-3 hover:bg-white hover:text-[#FC7614] text-white' onClick={()=>submit(activeRating)}>Submit</button>
        {activeRating===0 && <p className='text-[#FC7614] text-[12px] my-2'> Please Select Rating !!</p>}

     </div>
    </div>
  );
}

export default App;
