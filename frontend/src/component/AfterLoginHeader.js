// import React, { useState, useEffect } from "react";
// import { useNavigate,Link } from "react-router-dom";
// import yet from "../img/yettoexploreside1 1 (1).png";
// import profileicon from "../img/initial-options.png";
// import { auth, googleProvider } from "../firebase";
// import { signInWithPopup } from "firebase/auth";
// import axios from "axios";

// function AfterLoginHeader() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null);
//   const navigate = useNavigate();

//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const token = await result.user.getIdToken();

//       // Send token to backend for role assignment
//       const response = await axios.post(
//         "http://localhost:3001/api/authenticate",
//         {},
//         { headers: { Authorization: token } }
//       );

//       setUser(response.data); // Set user data
//       setRole(response.data.role); // Set user role
//       localStorage.setItem("authToken", token); // Save token for API requests
//       localStorage.setItem("userRole", response.data.role); // Save role in localStorage
//     } catch (error) {
//       console.error("Error during sign-in:", error);
//     }
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setRole(null);
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("userRole"); // Remove the role from localStorage
//     auth.signOut();
//     navigate("/"); // Redirect to home on logout
//   };

//   const navigateToAdminDashboard = () => {
//     if (role === "admin") {
//       navigate("/admin");
//     } else {
//       alert("You do not have access to the Admin Dashboard");
//     }
//   };

//   useEffect(() => {
//     // Check if the user is already authenticated after page refresh
//     const checkAuth = () => {
//       const token = localStorage.getItem("authToken");
//       const savedRole = localStorage.getItem("userRole");

//       if (token && savedRole) {
//         setRole(savedRole); // Set the role from localStorage
//         // Optionally fetch user details using token if needed
//         axios
//           .post(
//             "http://localhost:3001/api/authenticate",
//             {},
//             { headers: { Authorization: token } }
//           )
//           .then((response) => {
//             setUser(response.data); // Set user data
//           })
//           .catch((error) => {
//             console.error("Error fetching user data:", error);
//           });
//       }
//     };

//     checkAuth();

//     const unsubscribe = auth.onAuthStateChanged(async (user) => {
//       if (user) {
//         const token = await user.getIdToken();
//         const response = await axios.post(
//           "http://localhost:3001/api/authenticate",
//           {},
//           { headers: { Authorization: token } }
//         );
//         setUser(response.data); // Set user data
//         setRole(response.data.role); // Set role
//         localStorage.setItem("authToken", token); // Ensure the token is stored
//         localStorage.setItem("userRole", response.data.role); // Save role in localStorage
//       } else {
//         setUser(null);
//         setRole(null);
//         localStorage.removeItem("authToken");
//         localStorage.removeItem("userRole");
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     // If user doesn't have access to the admin section, force them to home
//     if (role && role !== "admin") {
//       navigate("/");
//     }
//   }, [role, navigate]);

//   return (
//     <header
//       className="bg-black bg-opacity-50 mx-auto text-white h-24 flex items-center justify-between px-8 mt-4 mx-4 py-4 rounded-[20px]"
//       style={{ width: "1410px", height: "98px" }}
//     >
//       <div className="flex items-center justify-between w-full">
//         <div className="flex items-center space-x-4">
//           <div className="text-green-400">
//             <img src={yet} alt="logo" />
//           </div>
//         </div>

//         <nav className="hidden md:flex space-x-6">
//           <a href="/properties" className="hover:text-gray-600">
//             Find a Property
//           </a>
//           <a href="/stories" className="hover:text-gray-600">
//             Share Stories
//           </a>
//           <a href="#" className="hover:text-gray-600">
//             Tour Packages
//           </a>
//           <a href="#" className="hover:text-gray-600">
//             Download Mobile App
//           </a>
//         </nav>

//         <div className="flex items-center space-x-12">
//           <button className="bg-[#484848] text-[#FAFAFA] text-m px-10 py-3 h-12 rounded-full font-semibold" >
//             <Link to="/hostpage">Become A Host</Link>
//           </button>
//           <div
//             className="relative profile-menu"
//             onClick={() => setIsDropdownOpen((prev) => !prev)}
//           >
//             <img src={user?.photoURL || profileicon} alt="profile icon" />

//             {isDropdownOpen && (
//               <div className="absolute top-full mb-2 right-0 w-48 bg-white text-black rounded-lg shadow-lg">
//                 {!user ? (
//                   <a
//                     href="#"
//                     onClick={handleGoogleSignIn}
//                     className="block px-4 py-2 hover:bg-gray-100"
//                   >
//                     Sign Up / Login with Google
//                   </a>
//                 ) : (
//                   <>
//                     <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                       Welcome, {user.name}
//                     </a>
//                     <a
//                       href="#"
//                       onClick={handleLogout}
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       Logout
//                     </a>
//                     {role === "admin" && (
//                       <a
//                         href="#"
//                         onClick={navigateToAdminDashboard}
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Admin Section
//                       </a>
//                     )}
//                   </>
//                 )}
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Help Center
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default AfterLoginHeader;
