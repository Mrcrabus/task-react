import {Route, Routes} from "react-router-dom";
import Home from "../pages/home/home.tsx";

const BaseRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />

    </Routes>
  );
};

export default BaseRoutes;