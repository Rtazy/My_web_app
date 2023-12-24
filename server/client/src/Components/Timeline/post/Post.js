/*import "./post.css";
//import axios from "axios";
import React from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCommentIcon from '@mui/icons-material/AddComment';



function Post({ username, image, likes}){
    return (
        <div className="post">
        <div className="pheader">
        <img src={username} className="profile_pic" alt="profile"/>
            
        <button > <div className="b1">{username}</div> </button>
        <button><div  className="b2"><MoreHorizIcon/></div></button>
       
        </div>
        <div className="pimage">
           <img src={image} className="img" alt="content"/> 
        </div>
        <div className="pfooter">      <div  className="b3"><button><FavoriteIcon size={'1.5rem'}/></button></div> 
        <div  className="b4"><button><AddCommentIcon size={'1.5rem'}/></button></div> 
        <div> liked by {likes}</div>
        </div> </div>
  
    );
}

export default Post;*/
import "./post.css";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import img from "./img.jpg";
function Post({ username, post_image, likes}) {
return (
<div className="post">
<div className="postTop"> <img src={img} className="profile"
/> <span className="username"> {username}</span><span
className="date"></span></div>
<div className="image"> <img src={post_image} /></div>
<div className="bottom">
<div class="postIcons">
<FcLike size={'1.5rem'}/>
<FaRegComment size={'1.5rem'} />
</div>
Liked by {likes}
</div>
</div>
);
}
export default Post;
