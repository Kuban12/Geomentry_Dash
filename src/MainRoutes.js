import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import LevelsPage from "./pages/LevelsPage";
import StereoMadnessPage from "./pages/StereoMadnessPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/characters",
      element: <CharactersPage />,
      id: 2,
    },
    {
      link: "/levels",
      element: <LevelsPage />,
      id: 3,
    },
    {
      link: "/stereoMadness",
      element: <StereoMadnessPage />,
      id: 4,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
