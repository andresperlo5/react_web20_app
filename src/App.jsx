import "./App.css"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import { BrowserRouter as Router, Routes, Route } from "react-router"

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
