import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Books from "./components/books/Books";
import Edit from "./components/books/Edit";
import Add from "./components/books/Add";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books/add" element={<Add />} />
        <Route path="/books/edit/:bookId" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
