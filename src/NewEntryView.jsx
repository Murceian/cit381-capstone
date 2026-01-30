import { useState } from "react";

const CATEGORIES = ["School", "Work", "Personal", "Health", "Other"];

function NewEntryView({ category, setCategory, onAddEntry }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    if (!description.trim()) {
      setError("Description is required");
      return;
    }

    onAddEntry({
      title: title.trim(),
      description: description.trim(),
      category
    });

    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <div>
      <h2>New Entry View</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <div style={{ marginBottom: "12px" }}>
          <label>
            Category:{" "}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              style={{ display: "block", width: "100%", marginTop: "4px", padding: "6px" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              rows="5"
              style={{ display: "block", width: "100%", marginTop: "4px", padding: "6px", fontFamily: "inherit" }}
            />
          </label>
        </div>

        {error && (
          <div style={{ color: "red", marginBottom: "12px" }}>
            {error}
          </div>
        )}

        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
}

export default NewEntryView;
