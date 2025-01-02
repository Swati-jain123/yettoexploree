import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import yet from "../img/yettoexploreside1 1 (1).png";
import profileicon from "../img/initial-options.png";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();

      const response = await axios.post(
        "http://localhost:3001/api/authenticate",
        {},
        { headers: { Authorization: token } }
      );

      setUser(response.data);
      setRole(response.data.role);
      localStorage.setItem("authToken", token);
      localStorage.setItem("userRole", response.data.role);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setRole(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");
    auth.signOut();
    navigate("/");
  };

  const navigateToAdminDashboard = () => {
    if (role === "admin") {
      navigate("/admin");
    } else {
      alert("You do not have access to the Admin Dashboard");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const savedRole = localStorage.getItem("userRole");

    if (token && savedRole) {
      setRole(savedRole);
      axios
        .post(
          "http://localhost:3001/api/authenticate",
          {},
          { headers: { Authorization: token } }
        )
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        const response = await axios.post(
          "http://localhost:3001/api/authenticate",
          {},
          { headers: { Authorization: token } }
        );
        setUser(response.data);
        setRole(response.data.role);
        localStorage.setItem("authToken", token);
        localStorage.setItem("userRole", response.data.role);
      } else {
        setUser(null);
        setRole(null);
        localStorage.removeItem("authToken");
        localStorage.removeItem("userRole");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <header
      className={`bg-black bg-opacity-50 mx-auto text-white h-24 flex items-center justify-between px-8 mt-4 ml-4 mr-4 py-4 rounded-[20px] ${
        location.pathname === "/" || location.pathname === "/host"
          ? "absolute inset-x-0 top-0 z-50"
          : "top-0 z-50 mb-[20px]"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-4">
          <div className="text-green-400">
            <Link to="/">
              <img src={yet} alt="logo" />
            </Link>
          </div>
        </div>

        <nav className="hidden lg:flex space-x-6">
          <Link to="/properties" className="hover:text-gray-600">
            Find a Property
          </Link>
          <Link to="/stories" className="hover:text-gray-600">
            Share Stories
          </Link>
          <a href="#" className="hover:text-gray-600">
            Tour Packages
          </a>
          <a href="#" className="hover:text-gray-600">
            Download Mobile App
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center ml-auto">
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img src={profileicon} alt="menu icon" className="ml-6" />
          </button>
        </div>

        <div className="flex items-center space-x-12">
          <div className="hidden lg:block">
            {!user ? (
              <button className="bg-white text-black text-sm px-4 py-3 h-12 rounded-full font-semibold">
                List Your Property
              </button>
            ) : (
              <button
                className="bg-[#484848] text-[#FAFAFA] text-m px-10 ml-3 py-3 h-auto rounded-full font-semibold"
                onClick={() => navigate("/host")}
              >
                Become A Host
              </button>
            )}
          </div>

          <div
            className="relative profile-menu hidden lg:block"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <img src={user?.photoURL || profileicon} alt="profile icon" />
            {isDropdownOpen && (
              <div className="absolute top-16 right-0 w-48 bg-white text-black rounded-lg shadow-lg z-50">
                {!user ? (
                  <a
                    href="#"
                    onClick={handleGoogleSignIn}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Sign Up / Login with Google
                  </a>
                ) : (
                  <>
                    <span className="block px-4 py-2 hover:bg-gray-100">
                      Welcome, {user.name}
                    </span>
                    <Link
                      to="/messages"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Messages
                    </Link>
                    <Link
                      to="/notifications"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Notifications
                    </Link>
                    <Link
                      to="/reservation"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Reservation
                    </Link>
                    <Link
                      to="/account"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Account
                    </Link>
                    <Link
                      to="/wishlists"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Wishlists
                    </Link>
                    <a
                      href="#"
                      onClick={handleLogout}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </a>
                    {role === "admin" && (
                      <a
                        href="#"
                        onClick={navigateToAdminDashboard}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Admin Section
                      </a>
                    )}
                  </>
                )}
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Help Center
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 bg-white text-black h-full shadow-lg z-30 md:w-1/2 ">
          <div className="flex flex-col">
            <button
              className="text-right px-4 py-2 text-xl"
              onClick={() => setIsMobileMenuOpen(false)} // Close the menu
            >
              &times;
            </button>
            {!user ? (
              <a
                href="#"
                onClick={handleGoogleSignIn}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Sign Up / Login with Google
              </a>
            ) : (
              <>
                <span className="block px-4 py-2 hover:bg-gray-100">
                  Welcome, {user.name}
                </span>
                {role === "admin" && (
                  <a
                    href="#"
                    onClick={navigateToAdminDashboard}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Admin Section
                  </a>
                )}
                <Link
                  to="/messages"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Messages
                </Link>
                <Link
                  to="/notifications"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Notifications
                </Link>
                <Link
                  to="/reservation"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Reservation
                </Link>
                <Link
                  to="/account"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Account
                </Link>
                <Link
                  to="/wishlists"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Wishlists
                </Link>
              </>
            )}
            <a href="/properties" className="block px-4 py-2 hover:bg-gray-100">
              Find Your Property
            </a>

            <a href="/stories" className="block px-4 py-2 hover:bg-gray-100">
              Share Stories
            </a>

            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Tour Packages
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Download Mobile App
            </a>
            {!user ? (
              <a href="" className="block px-4 py-2 hover:bg-gray-100">
                List Your Property
              </a>
            ) : (
              <a href="/host" className="block px-4 py-2 hover:bg-gray-100">
                Become A Host
              </a>
            )}
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Help Center
            </a>
            {user && (
              <a
                href="#"
                onClick={handleLogout}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
