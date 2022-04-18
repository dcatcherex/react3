import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Navbar/NavBar";
import { Navbar_Ecom } from "./components/Navbar/NavBar_Ecom";
import { Aboutus } from "./routes/Aboutus";
import { Activity } from "./routes/Activity";
import { Ecommerce } from "./routes/Ecommerce";
import { Blog } from "./routes/Blog";
import { Home } from "./routes/Home";
import { Page404 } from "./routes/Page404";
import { Footer } from "./components/Footer/Footer";
import Roadmap from "./routes/Roadmap";
import styles from "./App.css";
import { NavBar2 } from "./components/Navbar/NavBar2";

export default function App() {
  return (
    <div>
      {/* <NavBar /> */}
      {/* <Navbar_Ecom /> */}
      <NavBar2 />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>

      <Footer />
    </div>
  );
}
