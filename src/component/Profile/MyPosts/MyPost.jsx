import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPost = () => {
    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <div><textarea></textarea></div>
            <div>
                <button>Add</button>
            </div>
        </div>
        <div className={s.posts}>
            <Post message='Hi, how are yuo?' likescount='0'/>
            <Post message="It's my first post" likescount='23'/>

        </div>
    </div>
}

export default MyPost;