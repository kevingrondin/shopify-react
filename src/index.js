import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ShopProvider } from "./hook/useShop";
import { ChakraProvider } from '@chakra-ui/react'

const g = "color:#00000;font-weight:bold;font-size:18px;";
const hello =
  "%c 👋 Hello, \n\n ✔️ Consulting. \n ✔️ Développement. \n 🤙 linkedin.com/in/kevin-grondin/";
console.info(hello, g);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ShopProvider>
        <App />
      </ShopProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
