import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCollection from "./pages/AddCollection";
import AddItem from "./pages/AddItem";
import AdminPage from "./pages/AdminPage";
import CollectionPage from "./pages/CollectionPage";
import Home from "./pages/Home";
import ItemPage from "./pages/ItemPage";
import EE from "./pages/EE";
import Login from "./pages/Login";
import MyCollections from "./pages/MyCollections";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/mycollections" element={<MyCollections />} />
          <Route path="/addcollection" element={<AddCollection />} />
          <Route path="/collectionpage" element={<CollectionPage />} />
          <Route path="/additem" element={<AddItem />} />
          <Route path="/itempage" element={<ItemPage />} />
          <Route path="/egg" element={<EE />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
