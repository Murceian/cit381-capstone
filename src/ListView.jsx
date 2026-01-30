function ListView({ entries }) {
  return (
    <div>
      <h2>List View</h2>
      {entries.length === 0 ? (
        <p>No entries yet. Create one to get started!</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {entries.map((entry) => (
            <li
              key={entry.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "12px",
                marginBottom: "12px",
                backgroundColor: "#f9f9f9"
              }}
            >
              <h3 style={{ margin: "0 0 8px 0" }}>{entry.title}</h3>
              <p style={{ margin: "0 0 8px 0", color: "#666" }}>{entry.description}</p>
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "#e3f2fd",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "0.9em",
                  color: "#1976d2"
                }}
              >
                {entry.category}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListView;
