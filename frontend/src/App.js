import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Leaderboards from "./pages/Leaderboards";
import Rewards from "./pages/Rewards";
import Settings from "./pages/Settings";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="leaderboards" element={<Leaderboards />} />
            <Route path="rewards" element={<Rewards />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
