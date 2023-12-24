
/*import "./Timeline.css";
import Post from "./post/Post.js";
import axios from "axios";
import React from "react";
import {useState} from 'react';
//import { Dialog } from '@mui/material';
function Timeline() {
const [posts, setPosts] = useState([]);

React.useEffect(() => {
axios.get("http://localhost:3001/getPost").then((response) => {
setPosts(response.data);
});
}, []);
return (
<div className="Timeline" >
<div className="posts">
{posts.map((post) => (
<Post
image={post.post_image}
user_name={post.username}
/>
))}
</div>

</div>
);
}
export default Timeline;
*/


import "./Timeline.css";
import Post from "./post/Post";
import axios from "axios";
import React from "react";
import {useState} from 'react';
import { Dialog } from '@mui/material';
function Timeline() {
const [posts, setPosts] = useState([]);


React.useEffect(() => {
axios.get("http://localhost:3001/getPost").then((response) => {
setPosts(response.data);
});
}, []);
return (
<div className="Timeline" >
<div className="posts">
{posts.map((post) => (
<Post
image={post.post_image}
user_name={post.username}
/>
))}
</div>

</div>
);
}
export default Timeline;
