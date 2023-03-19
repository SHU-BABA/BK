import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';

import{Link, NavLink} from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Topbar(){
    return(<div className="topbar bg-blue-700 grid grid-cols-3  pl-[5%] text-center">
        <div className="leftbar "><h1 className="text-white  max-w-[20%] text-[150%] ">OOnline</h1></div>
        <div className="rightbar py-1 relative left-[-20rem]">
            <label className='relative  left-[5%] text-center pt-[30px]'><SearchIcon/></label>
            <input type="text" name="" id="" placeholder=" search for friend post and js"  className='bg-slate-200 pl-[10%] border-[2px] border-gray-600 min-w-[90%]  rounded-[10px] '/></div>
        <div className="centerbar grid grid-cols-3 text-center">
            <Link to="/" className="py-1">Homepage</Link>
            <Link to="/timeline" className="py-1">TimeLine</Link>
            <Link to="/profile " className=" relative left-[50%]   w-[30%] rounded-[50%] " ><img src="asset/jk.jpg" className="rounded-[50%]  text-center border-[1px] border-red-100 mt-1 h-[30px] w-[30px] "></img></Link>
        </div>
    </div>)
}
export default Topbar;