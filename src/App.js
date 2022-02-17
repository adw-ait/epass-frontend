import React from "react";
import { Route, Routes } from "react-router-dom";
import ViewLocation from "./pages/Locations/ViewLocation/ViewLocation";
import RequestEpass from "./pages/RegisterEpass/RequestEpass";

function App() {
  return (
    <>
      <Routes>
        <Route path="/request-epass" element={<RequestEpass />} />
        <Route path="/locations" element={<ViewLocation />} />
      </Routes>
    </>
  );
}

export default App;
