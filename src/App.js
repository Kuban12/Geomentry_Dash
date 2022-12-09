import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";

// contexts
import LevelsPageContextProvider from "./contexts/LevelsPageContext";
import CharacktersPageContextProvider from "./contexts/CharacktersPageContext";

// styles
import "./styles/homePage.css";
import "./styles/LevelsPage.css";
import "./styles/characktersPage.css";
import "./styles/stereoMadnessPage.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <CharacktersPageContextProvider>
          <LevelsPageContextProvider>
            <MainRoutes />
          </LevelsPageContextProvider>
        </CharacktersPageContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
