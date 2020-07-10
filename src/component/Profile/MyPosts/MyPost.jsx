import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPost = () => {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add</button>
        </div>
        <div>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>
}

export default MyPost;