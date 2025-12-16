import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/default-layout";
import Home from "../pages/home";

const DefaultRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default DefaultRoutes;
