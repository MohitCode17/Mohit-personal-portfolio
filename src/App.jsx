import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import SingleProject from "./pages/SingleProject";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="project/:id" element={<SingleProject />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer theme="dark" position="bottom-right" />
    </>
  );
};

export default App;
