import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import FastordersList from "./Components/FastordersList";
import Fastordersform from "./Components/Fastordersform";
import Fastordersdetails from "./Components/Fastordersdetails";

function App() {
  const [view, setView] = useState("list");
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <div>
      <Navbar setView={setView} />
      {view === "list" && (
        <FastordersList setView={setView} setSelectedOrder={setSelectedOrder} />
      )}
      {view === "create" && <Fastordersform setView={setView} />}
      {view === "edit" && <Fastordersform setView={setView} order={selectedOrder} />}
      {view === "details" && (
        <Fastordersdetails order={selectedOrder} setView={setView} />
      )}
    </div>
  );
}

export default App;

