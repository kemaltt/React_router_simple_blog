import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <h3>My Life</h3>
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
