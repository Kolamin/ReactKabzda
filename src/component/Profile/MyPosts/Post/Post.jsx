import s from "./Post.module.css";
import React from "react";

const Post = (props) => {
    return(
    <div className={s.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNplTWk2suGea3AcNZ-nzKJVrLX9mL0SGOmA&usqp=CAU"/>
        {props.message}
        <div>
            <span>like</span>
        </div>
    </div>
    )
}

export default Post;