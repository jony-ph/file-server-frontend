import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { useState } from "react";

import Home from "./pages/home";
// import Login from "./pages/login";
import Files from "./pages/files";
import Settings from "./pages/settings";

import NavigationBar from "./components/Navbar";

import "./App.css";
import Store from "./store/store";

function App() {
  // const [navbarFlag, setNavbarFlag] = useState(true);

  return (
    <BrowserRouter>
      {/* <NavigationBar navbarFlag={navbarFlag} /> */}
      <NavigationBar />
      <Store>
        <Routes>
          {/* <Route path="/login" element={<Login handle={setNavbarFlag} />} /> */}
          <Route path="/files/*" element={<Files />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/preview/*" />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Store>
    </BrowserRouter>
  );
}

export default App;
