import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";

// untuk pake sintak JS di jsx pake {}
// u/icon pake ant desig icon npm, bisa juga pake if truly

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:productName" element={<Detail />} />
    </Routes>
  );
}

export default App;
