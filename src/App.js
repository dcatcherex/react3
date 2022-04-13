import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
// import { Navbar_Ecom } from "./components/Navbar_Ecom"
import { Aboutus } from "./routes/Aboutus";
import { Activity } from "./routes/Activity";
import { Ecommerce } from "./routes/Ecommerce";
import { Blog } from "./routes/Blog";
import { Home } from "./routes/Home";
import { Page404 } from "./routes/Page404";



export default function App() {
  return (
    <div>
      <Navbar />
      {/* <Navbar_Ecom /> */}

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="*" element={<Page404 />} />

      </Routes>
    </div>
  );
}