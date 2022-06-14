import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero">
      <h2>Welcome to my simple Blog</h2>
      <Link className="read_more" to={"/blog"}>
        Go to articles
      </Link>
    </div>
  );
}
