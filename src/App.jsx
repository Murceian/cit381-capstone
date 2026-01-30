import { useState } from "react";
import NewEntryView from "./NewEntryView.jsx";
import ListView from "./ListView.jsx";

const CATEGORIES = ["School", "Work", "Personal", "Health", "Other"];

function App() {
  const [view, setView] = useState("new");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [entries, setEntries] = useState([]);

  const handleAddEntry = (entry) => {
    setEntries([...entries, { id: Date.now(), ...entry }]);
  };

  return (
    <div>
      <h1>Capstone Starter</h1>
      <div>
        <button onClick={() => setView("new")}>New Entry</button>
        <button onClick={() => setView("list")}>List</button>
      </div>
      {view === "new" && (
        <NewEntryView 
          category={category} 
          setCategory={setCategory}
          onAddEntry={handleAddEntry}
        />
      )}
      {view === "list" && (
        <ListView entries={entries} />
      )}
    </div>
  );
}
export default App;
