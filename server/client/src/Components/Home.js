import "./home.css";
import Nav from "./nav/Nav.js";
import Timeline from "./Timeline/Timeline.js";


function Home(){
return(
    <div className="home">
<div className="left_nav_wrapper">
   <Nav />
</div>
<div className="timeline_wrapper">
<Timeline />
</div>
</div>);
}

export default Home;