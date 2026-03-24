import "./App.css";
import Footer from "./components/footer/Footer";
import NavbarC from "./components/navbar/NavbarC";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import AdminProductsPage from "./pages/AdminProductsPage";
import AdminUsersPage from "./pages/AdminUsersPage";
import AdminCreateProductPage from "./pages/AdminCreateProductPage";

const App = () => {
  return (
    <>
      <NavbarC />
      <Router>
        <Routes>
          <Route path="/home-user" element={<UserPage />} />
          <Route
            path="/admin-products/create"
            element={<AdminCreateProductPage />}
          />
          <Route path="/admin-products" element={<AdminProductsPage />} />
          <Route path="/admin-users" element={<AdminUsersPage />} />
          <Route path="/home-admin" element={<AdminPage />} />
          <Route path="/product-details" element={<ProductDetailPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
