import { useParams, Link } from "react-router-dom";
import React from "react";

function DetailsView({ items = [] }) {
  const { id } = useParams();
  const item = items.find((it) => String(it.id) === String(id));

  if (!item) {
    return (
      <div>
        <h2>Details View</h2>
        <p>Item with id <strong>{id}</strong> not found.</p>
        <p style={{ marginTop: "12px" }}>
          <Link to="/music">Back to list</Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>Details — {item.title}</h2>
      <p> ID: {item.id}</p>

      <div style={{ marginTop: 12, whiteSpace: "pre-wrap" }}>
        {item.description ? (
          <p>{item.description}</p>
        ) : (
          <p style={{ fontStyle: "italic", color: "#666" }}>(no description)</p>
        )}
      </div>

      <p style={{ marginTop: "12px" }}>
        <Link to="/music">Back to list</Link>
      </p>
    </div>
  );
}

export default DetailsView;
