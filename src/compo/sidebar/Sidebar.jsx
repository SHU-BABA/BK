 import React from 'react'
 import FeedbackIcon from '@mui/icons-material/Feedback';
 import ChatIcon from '@mui/icons-material/Chat';
 import VideoChatIcon from '@mui/icons-material/VideoChat';
 import WorkIcon from '@mui/icons-material/Work';
 import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
 import AdjustTwoToneIcon from '@mui/icons-material/AdjustTwoTone';

 export default function Sidebar() {
   return (
     <span>
      
       <div className='border w-[25%] pl-[5%] py-[5%] text-blue-900 shadow-[0_15px_30px_-15px_rgba(2,2,2,.5)] rounded-md font-mono border-gray-900'>
        <ul>
            <li className='mb-[10%] hover:text-gray-600 text-bold hover:font-bold'><a href="#"><FeedbackIcon/> feed</a></li>
            <li className='mb-[10%] hover:text-gray-600 text-bold hover:font-bold'><a href="#"><ChatIcon/> chat</a></li>
            <li className='mb-[10%] hover:text-gray-600 text-bold hover:font-bold'><a href="#"><VideoChatIcon/>video</a></li>
            <li className='mb-[10%] hover:text-gray-600 text-bold hover:font-bold'><a href="#"><WorkIcon/> job</a></li>
            <li className='mb-[10%] hover:text-gray-600 text-bold hover:font-bold'><a href="#"><EmojiEventsIcon/>Event</a></li>
            <li className='mb-[10%] hover:text-gray-600 text-bold hover:font-bold'><a href="#"><AdjustTwoToneIcon/> Course</a></li>
        </ul>

       </div>
       
     </span>
   )
 }
 