import './home.css'
import Topbar from "../../topbar/Topbar";
import Sidebar from "../../sidebar/Sidebar"
import Rightbar from "../../rightbar/Rightbar"
import Flower from '../../follower/Flower';
import Centerbar from '../../centerbar/Centerbar';
function Home(){
    return(
        <div className=""><div><Topbar/></div>
      <div className=' grid grid-cols-3'>
        <Sidebar/>
        <Centerbar/>
       <Rightbar/>
       <Flower/>
       </div>
        </div>
    )
}
export default Home;