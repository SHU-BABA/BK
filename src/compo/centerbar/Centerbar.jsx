import React from 'react'
import PostAddIcon from '@mui/icons-material/PostAdd';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddReactionIcon from '@mui/icons-material/AddReaction';
export default function Centerbar() {
  return (<div>
    <div className='border-[3px] border-gray-900 relative w-[120%] left-[-70%] pb-[5%] text-blue-900 shadow-[0_35px_60px_-15px_rgba(0,0,0,0)] mt-[5%]  rounded-[10px]'>
      <div className='grid grid-cols-2 '>
    <lable className=' rounded-t-[10px] py-1 mb-1'><img src="asset/jk.jpg" className=" rounded-[50%] w-[4rem] h-[4rem]  text-center border-[1px] border-red-100 mt-1 "></img>
    </lable>
<input type="text" placeholder='HI Group of leader' className='relative left-[-60%] border-none h-[50%] mt-[10%]'/>
</div>
 <hr className='broder-[2px] border-gray-700'></hr>
    <div className='grid grid-cols-2 ml-[10%] gap-7'>
      <ul className='grid grid-cols-[2fr_1fr_1fr] mt-5 w-[120%]'>
        <li className='hover:text-gray-600 text-bold hover:font-bold'><PostAddIcon className='hover:text-red'/>post&vedio</li>
        <li className='hover:text-gray-600 text-bold hover:font-bold'><LocalOfferIcon/>tag</li>
        <li className='hover:text-gray-600 text-bold hover:font-bold'><AddReactionIcon/>feeling</li>
     </ul>
     <button className='relative left-[60%] bg-green-900 w-[30%] mt-5 text-white rounded-[5px] shadow-[0_1px_2px_1px_rgba(30,30,30,1)] border  border-green-500 hover:text-gray-300 text-bold hover:font-bold'>share</button>
    </div>
    </div>
    <div className='border relative w-[120%] left-[-70%] pb-[5%] text-blue-900 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.0)] mt-[5%] min-h-[200%] rounded-md'></div>
    </div>
    
  )
}
