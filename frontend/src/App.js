import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Reservations from "./pages/Reservations";
import Stories from "./pages/Stories";
import HostPage from "./pages/HostPage";
import Account from "./pages/Account";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import HostProperties from "./pages/HostProperties";
import HostAccount from "./pages/HostAccount";
import HostAccountEdit from "./pages/HostAccountEdit";
import Header from "./component/Header";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "../src/component/ProtectedRoute"; // Import ProtectedRoute
import { AuthProvider } from "../src/context/AuthContext"; // Import AuthProvider
import EightFirst from "./pages/EightFirst";
import EightSecond from "./pages/EightSecond";
import FullDash from "./pages/FullDash";
import Footer from "./component/Footer";
import Details from "./pages/Details";
import Wishlists from "./pages/Wishlists";

import HostReservation from "./pages/HostReservation" 

import HostTransactions from "./pages/HostTransactions" 
import AddProperty from "./component/AddProperty.js"; 
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Header */}

        <Header />

        {/* Routes */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/reservation" element={<Reservations />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/host" element={<HostPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/host/properties" element={<HostProperties />} />
          <Route path="/host/account" element={<HostAccount />} />
          <Route path="/host/account/edit" element={<HostAccountEdit />} />
          <Route path="/details" element={<Details />} />
          
          <Route path="/wishlists" element={<Wishlists />} />
          
          <Route path="/addproperty" element={<AddProperty />} />
          
          <Route path="/hostreservation" element={<HostReservation />} />
          <Route path="/hosttransactions" element={<HostTransactions />} />
          


          {/* Protected Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/page1"
            element={
              <ProtectedRoute>
                <EightFirst />
              </ProtectedRoute>
            }
          />
          <Route
            path="/page2"
            element={
              <ProtectedRoute>
                <EightSecond />
              </ProtectedRoute>
            }
          />
          <Route
            path="/page3"
            element={
              <ProtectedRoute>
                <FullDash />
              </ProtectedRoute>
            }
          />
        </Routes>

        {/* Footer */}
        <div style={{ marginTop: "80px" }}>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
