import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPost = () => {

    let posts = [
        {id: 1, message: 'Hi, how are yuo?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <div><textarea></textarea></div>
            <div>
                <button>Add</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPost;