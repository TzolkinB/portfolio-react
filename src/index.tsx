import React from "react"
import { createRoot } from "react-dom/client"
import "mdb-react-ui-kit/dist/css/mdb.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./assets/css/new.css"

import Home from "./components/Home"
import AppBar from "./components/shared/AppBar"
import Footer from "./components/shared/Footer"

function App() {
  return (
    <>
      <AppBar />
      <Home />
      <Footer />
    </>
  )
}

const container = document.getElementById("portfolio-app")
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
