import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Toaster } from "react-hot-toast";
import "./background.css";
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlide";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Newproduct from "./pages/Newproduct";
import Signup from "./pages/Signup";
import AllMenu from "./pages/AllMenu";
import Cart from "./pages/Cart";
import UserProfile from "./pages/UserProfile";
import EmpDash from "./pages/EmpDash";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product`);
      const resData = await res.json();
      dispatch(setDataProduct(resData));
    })();
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="main pt-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
