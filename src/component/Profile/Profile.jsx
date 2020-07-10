import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPost";

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img
                src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
        </div>
        <div>
            ava + description
        </div>
        <div>
           <MyPosts />
        </div>
    </div>
}

export default Profile;