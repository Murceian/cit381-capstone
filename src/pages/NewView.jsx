import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function NewView({ onAddItem }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Navigate to="/music" />;
  }

  return (
    <div>
      <h2>New View</h2>
      <p>This view previews "forms in a routed app." It does not work yet.</p>

      <div>
        <label>
          Title: |  
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Type something..."
          />|
        </label>
      </div>

      <label className="field">
          <span>Description</span>
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
          />
        </label>

      <button
        onClick={() => {
          const id = onAddItem(title, description);
          if (!id) return;
          setTitle("");
          setDescription("");
          setRedirect(true);
  
        }}
      >
        Save
      </button>
    </div>
  );
}

// Submit button
// State updates with each character change

export default NewView;
