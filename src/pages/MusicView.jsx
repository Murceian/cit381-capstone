import React from "react";
import { Link } from "react-router-dom";

function MusicView({ items = [] }) {
  if (!items || items.length === 0) {
    return (
      <div>
        <h2>List View</h2>
        <p>
          No items yet — <Link to="/new">add one</Link>.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2> Music Library</h2>
      <p> A collection of musical works I wish to Showcase</p>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} — <Link to={`/details/${item.id}`}>View details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default MusicView;
