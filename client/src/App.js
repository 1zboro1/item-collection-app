import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCollection from "./pages/AddCollection";
import AddItem from "./pages/AddItem";
import AdminPage from "./pages/AdminPage";
import CollectionPage from "./pages/CollectionPage";
import Home from "./pages/Home";
import ItemPage from "./pages/ItemPage";
import Login from "./pages/Login";
import MyCollections from "./pages/MyCollections";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const userToken = localStorage.getItem("appToken");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminpage" element={<AdminPage />} />
          {userToken && (
            <Route path="/mycollections" element={<MyCollections />} />
          )}
          {userToken && (
            <Route path="/addcollection" element={<AddCollection />} />
          )}
          {userToken && (
            <Route path="/collectionpage" element={<CollectionPage />} />
          )}
          {userToken && <Route path="/additem" element={<AddItem />} />}
          <Route path="/itempage" element={<ItemPage />} />
          <Route path="/" exact element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
