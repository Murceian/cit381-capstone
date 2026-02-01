import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Home from "./pages/HomeView.jsx";
import MusicView from "./pages/MusicView.jsx";
import NewView from "./pages/NewView.jsx";
import DetailsView from "./pages/DetailsView.jsx";
import AboutView from "./pages/AboutView.jsx";
import React from "react";

const initialItems = [
  { id: 1, title: "Music", description: "A selection of demo tracks." },
  { id: 2, title: "More Music", description: "Additional demo tracks." },
  { id: 3, title: "Even More Music", description: "Experimental pieces." },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const onAddItem = (title, description = "") => {
    const clean = title.trim();
    if (!clean) return;

    // compute id deterministically so we can return it synchronously
    const nextId = items.reduce((max, item) => Math.max(max, item.id), 0) + 1;

    setItems((prevItems) => [
      ...prevItems,
      { id: nextId, title: clean, description: description || "" },
    ]);

    return nextId;
  };


  return (
    <div style={{ padding: "24px" }}>
      <h1> Capstone Portfolio </h1> 
      <p style={{ marginTop: "-40px", marginBottom: "0px" }}>
        The Start of my portfolio/market
      </p>

      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<MusicView items={items} />} />
        <Route path="/new" element={<NewView onAddItem={onAddItem} />} />
        <Route path="/details/:id" element={<DetailsView items={items} />} />
        <Route path="/about" element={<AboutView />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
