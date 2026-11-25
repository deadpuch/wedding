
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Invitation from "./pages/Invitation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invitation" element={<Invitation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
