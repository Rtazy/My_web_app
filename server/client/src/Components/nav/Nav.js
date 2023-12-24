import "./nav.css";
//import { FaHome } from "react-icons/fa";
//import { CiSearch } from "react-icons/ci";
//import { RiCompassDiscoverLine } from "react-icons/ri";
import Logo from "./Logo.png";
//import { IconName } from "react-icons/ai";
//import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from "axios";
import React, {useState} from "react";
import Dialog from "@material-ui/core/Dialog";
//import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
//import TextField from "@material-ui/core/TextField";
//import { FormControl } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';



function Nav(){

    const [formData, setFormData] = useState({
        // Initialize form data state
        post_image: '',
        Post_owner: '',
        Title: '',
        Caption:'',

       
      });
    
       
          const handleChange = (e) => {
            // Update the form data state when input changes
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            });
          };
        
          const handleSubmit = async (e) => {
            e.preventDefault();
        
            try {
              // Make a POST request using Axios
              console.log(formData);
              const response = await axios.post('http://localhost:3001/createPost', formData);
    
        
              // Handle the response as needed
              console.log('Response:', response.data);
            } catch (error) {
              // Handle errors
              console.error('Error:', error);
            }
          };
        
            
          const [open, setOpen] = React.useState(false);
     
          const handleClickToOpen = () => {
              setOpen(true);
          };
       
          const handleToClose = () => {
              setOpen(false);
          };
    
    return(
    <div classname="nav">
        <img src={Logo} classname="logo" alt="ig"/>
        <div classname="navbuttons">
            <button>
                <HomeIcon/>
                <span>Home</span>
            </button>
            <br/>
            <button>
            < SearchIcon/>
                <span>Search</span>
            </button>
            <br/>
            <button>
                
            < ExploreIcon/>
                <span>Discover</span>
            </button>
            <button className="btn" onClick={handleClickToOpen}>
            <span>Create a new Post</span>
            </button>

        </div>
        <Dialog open={open} onClose={handleToClose}>
<DialogTitle>{"Submit the link of the image"}</DialogTitle>
<DialogContent>
<form autoComplete="off" onSubmit={handleSubmit} >
<input
name="post_image"
value={formData.postUrl}
onChange={handleChange}
/><br />
<input
name="Post_owner"
value={formData.postUrl}
onChange={handleChange}
/><br />
<input
name="Title"
value={formData.postUrl}
onChange={handleChange}
/><br />
<input
name="Caption"
value={formData.postUrl}
onChange={handleChange}
/>
<br />
<Button type="submit" onClick={handleToClose}>Submit</Button>
</form>
</DialogContent>
<DialogActions>
<Button onClick={handleToClose}
color="primary" autoFocus>
Close
</Button>
</DialogActions>
</Dialog>

</div>);

}

export default Nav;

