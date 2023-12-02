import { Routes, Route } from "react-router-dom";

import { MainPage } from "../pages/Main";
import { ListPage } from "../pages/List";
import { DetailPage } from "../pages/Detail";

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<MainPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/list/:id" element={<DetailPage />} />
    </Routes>
  );
};

export default Router;
