import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Rewards from "./pages/Rewards";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="rewards" element={<Rewards />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
