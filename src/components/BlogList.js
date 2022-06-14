// import React, { useState } from "react";
import blogData from "../blogData";
import BlogItem from "./BlogItem";

export default function BlogList() {
  //   const [blogData, setBlogData] = useState(blogData);

  return (
    <div className="blog_container">
      {blogData.map((el) => (
        <BlogItem
          key={el.id}
          img={el.img_url}
          title={el.title}
          id={el.id}
          blogData={blogData}
        />
      ))}
    </div>
  );
}
