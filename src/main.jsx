// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from "./App.jsx";
// import { BrowserRouter, Router, RouterProvider } from 'react-router'
// import AuthProvider from "./context/AuthProvider.jsx";
// import router from './routes/router.jsx';
// import Login from './pages/Login.jsx';


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider> <RouterProvider router = {router}></RouterProvider></AuthProvider>
   
//      </StrictMode>
// );
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import router from "./routes/router.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
