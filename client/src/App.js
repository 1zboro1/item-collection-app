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
import CollectionsAdminPrivilege from "./pages/CollectionsAdminPrivilege";
import EditSingleCollection from "./pages/EditSingleCollection";

function App() {
  const userToken = localStorage.getItem("appToken");
  const adminToken = localStorage.getItem("admin");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {adminToken === "admin" && userToken && (
            <Route path="/adminpage" element={<AdminPage />} />
          )}
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
          {adminToken === "admin" && userToken && (
            <Route
              path="/collectionAdminPrivilege"
              element={<CollectionsAdminPrivilege />}
            />
          )}
          {userToken && (
            <Route
              path="/editSingleCollection"
              element={<EditSingleCollection />}
            />
          )}
          <Route path="/" exact element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
