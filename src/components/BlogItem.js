import React from "react";
import { Link } from "react-router-dom";

export default function BlogItem(props) {
  // console.log(props);

  return (
    <div className="blog_card">
      <img src={props.img} alt="" />
      <div className="blog_card_text">
        <h3>{props.title}</h3>
        <Link
          className="read_more"
          to={`/item/${props.id}`}
          state={props.blogData}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
