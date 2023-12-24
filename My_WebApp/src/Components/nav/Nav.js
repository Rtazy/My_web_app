import "./nav.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import Logo from "./Logo.png";



function Nav(){
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

        </div>

</div>);
}

export default Nav;