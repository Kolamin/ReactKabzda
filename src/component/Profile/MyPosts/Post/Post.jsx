import s from "./Post.module.css";
import React from "react";

const Post = () => {
    return(
    <div className={s.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNplTWk2suGea3AcNZ-nzKJVrLX9mL0SGOmA&usqp=CAU"/>
        post 1
        <div>
            <span>like</span>
        </div>
    </div>
    )
}

export default Post;