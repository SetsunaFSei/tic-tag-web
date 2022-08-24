import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ClaimListScreen from "../claim/ClaimListScreen";
import LoginScreen from "../login/LoginScreen";
import ProductListScreen from "../product/ProductListScreen";


export default function Drawer() {
  const navigate = useNavigate();

  // const routes = [
  //   {
  //     path: "/",
  //     exact: true,
  //     sidebar: () => <div>home!</div>,
  //     main: () => <h2>Home</h2>,
  //   },
  //   {
  //     path: "/bubblegum",
  //     sidebar: () => <div>bubblegum!</div>,
  //     main: () => <h2>Bubblegum</h2>,
  //   },
  //   {
  //     path: "/shoelaces",
  //     sidebar: () => <div>shoelaces!</div>,
  //     main: () => <h2>Shoelaces</h2>,
  //   },
  // ];
  function onLogOutPress(e) {
    // localStorage.setItem("isLogin", true);
    // <Navigate to="/" replace state={{ path: location.pathname }} />
    return navigate("/login");
  }
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0",
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/claim">Cdralaim</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <div onClick={onLogOutPress}>Logout</div>
            </li>
          </ul>
        
        </div>
      </div>
    </>
  );
}
