import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddCollection from "./pages/AddCollection";
import AddItem from "./pages/AddItem";
import AdminPage from "./pages/AdminPage";
import CollectionPage from "./pages/CollectionPage";
import Home from "./pages/Home";
import ItemPage from "./pages/ItemPage";
import Login from "./pages/Login";
import MyCollections from "./pages/MyCollections";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/adminpage">Admin Page</Link>
          </li>
          <li>
            <Link to="/mycollections">My Collection</Link>
          </li>
          <li>
            <Link to="/addcollection">Add Collection</Link>
          </li>
          <li>
            <Link to="/collectionpage">Collection Page</Link>
          </li>
          <li>
            <Link to="/additem">Add Item</Link>
          </li>
          <li>
            <Link to="/itempage">Item Page</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/mycollections" element={<MyCollections />} />
          <Route path="/addcollection" element={<AddCollection />} />
          <Route path="/collectionpage" element={<CollectionPage />} />
          <Route path="/additem" element={<AddItem />} />
          <Route path="/itempage" element={<ItemPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
