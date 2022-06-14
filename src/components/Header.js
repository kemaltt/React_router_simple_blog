import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <h2>My Life</h2>
        <ul>
          <li>
            <Link className="nav_link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav_link" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="nav_link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
