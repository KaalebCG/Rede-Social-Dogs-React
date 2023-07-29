import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { UserStorage } from "./UserContext/UserContext";
import { ProtectedRoute } from "./Components/Helper/ProtectedRoute";
import { User } from "./Components/User/User";
import { Photo } from "./Components/Photo/Photo";
import { UserProfile } from "./Components/User/UserProfile";
import { NotFound } from "./Components/Helper/NotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="*" element={<NotFound />} />

            <Route path="perfil/:user" element={<UserProfile />} />

            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
