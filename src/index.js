import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello PizzaShop</h1>;
}

///react v-18
const root = ReactDOM.createRoot(document.getElementById("root"));

///strictmode does double render and find if theres bugs or not// not groundbreaking but using it is fine/////
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
