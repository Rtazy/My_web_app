import "./post.css";
import image from "./image.png";
import img from "./img.jpg";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCommentIcon from '@mui/icons-material/AddComment';



function Post(){
    return (
        <div>
        <div className="pheader">
        <img src={image} className="profile_pic" alt="usr"/>
            
        <button > <div className="b1">User1</div> </button>
        <button><div  className="b2"><MoreHorizIcon/></div></button>
       
        </div>
        <div className="pimage">
           <img src={img} className="img" alt="img"/>
            
        
        
        </div>
        <div className="pfooter">      <div  className="b3"><button><FavoriteIcon/></button></div> 
        <div  className="b4"><button><AddCommentIcon/></button></div> 
        </div> </div>
    );
}

export default Post;