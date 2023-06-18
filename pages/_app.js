import "@/styles/globals.css";
import "../styles/app.scss";
import React from "react";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
