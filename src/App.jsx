import { Routes, Route, Link, Outlet } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css"
import DataDetail from "./components/DataDetail";

// from   
function Layout() {
  return (
    <div className="header">
      <nav>
        <Link to="/"> Home </Link>

        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </nav>
      <Outlet />
    </div>
  );
}
// to
// https://github.com/samarth44600/vite-react-app
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* flexbox */}
        <Route index element={<Home />} />
        {/* grid */}
        <Route path="about" element={<About />} />
        <Route path=":id" element={<DataDetail />} />
        {/*table  */}
        <Route path="contact" element={<Contact name={"Tech AI"} location={"New "} classes={"CSIT"} />} />
      </Route>
    </Routes>
  );
}
