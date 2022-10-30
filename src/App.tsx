import { ToastContainer } from "react-toastify";
import "./App.css";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Cards from "./components/Cards";
import AddCard from "./components/AddCard";
import EditCard from "./components/EditCard";
import BizRegister from "./components/BizRegister";
import About from "./components/About";
// import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="dark" />

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bizregister" element={<BizRegister />} />

          <Route path="/home" element={<Home />} />
          <Route path="/cards">
            <Route index element={<Cards />} />
            <Route path="add" element={<AddCard />} />
            {/* Editing product by its ID */}
            <Route path="edit/:id" element={<EditCard />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
