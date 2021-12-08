import React, { useState } from "react";
import Store from "./Components/Store";
import LogIn from "./Components/LogIn";
import SinUp from "./Components/SinUp";
import NavBar from "./Components/NavBar";
import Parv from "./Components/Parv";
import Cart from "./Components/Cart";
import { Route } from "react-router-dom";
//////
export default function App() {
  const [token, setToken] = useState("");

  return (
    <div>
      <NavBar token={token} setToken={setToken} />
      <Route
        exact
        path="/Store"
        render={() => {
          return <Store token={token} />;
        }}
      />
       <Route
        exact
        path="/cart/:id"
        render={() => {
          return <Cart token={token} />;
        }}
      />
      <Route
        exact
        path="/LogIn"
        render={() => {
          return <LogIn setToken={setToken} />;
        }}
      />
      <Route exact path="/SinUp" component={SinUp} />
      <Route
        exact
        path="/product/:id"
        render={() => {
          return <Parv token={token} />;
        }}
      />

    </div>
  );
}
