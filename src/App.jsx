import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Arrow from "./Pages/Arrow";

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Arrow />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
