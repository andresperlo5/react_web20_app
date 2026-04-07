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
import FavPage from "./pages/FavPage";
import CartPage from "./pages/CartPage";
import PrivateRoute from "./components/privateroute/PrivateRoute";

const App = () => {
  return (
    <>
      <Router>
        <NavbarC />
        <Routes>
          <Route
            path="/home-user"
            element={
              <PrivateRoute rolRuta="usuario">
                <UserPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/user-fav"
            element={
              <PrivateRoute rolRuta="usuario">
                <FavPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/user-cart"
            element={
              <PrivateRoute rolRuta="usuario">
                <CartPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-products/createEdit/:idProduct"
            element={
              <PrivateRoute rolRuta="admin">
                <AdminCreateProductPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-products"
            element={
              <PrivateRoute rolRuta="admin">
                <AdminProductsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-users"
            element={
              <PrivateRoute rolRuta="admin">
                <AdminUsersPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/home-admin"
            element={
              <PrivateRoute rolRuta="admin">
                <AdminPage />
              </PrivateRoute>
            }
          />
          {/*   <Route path="/product-details" element={<ProductDetailPage />} /> */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/product-detail/:idProduct"
            element={<ProductDetailPage />}
          />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
