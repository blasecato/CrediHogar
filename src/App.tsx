//import viteLogo from "/vite.svg";

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
// import Layout from "./app/components/Organims/layout";

function App() {
  return (
    // <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Navigate to="/home" replace />} />
    </Routes>
    //  </Layout>
  );
}

export default App;
