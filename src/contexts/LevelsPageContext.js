import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
export const levelsPageContext = React.createContext();
export const useLevelsPage = () => useContext(levelsPageContext);

// here we can write reducer helpers
const LevelsPageContextProvider = ({ children }) => {
  // set here states and all of functions
  const navigate = useNavigate();

  const handleGoBackLastPage = () => {
    setTimeout(() => {
      navigate(-1);
    }, 80);
  };

  const handleDownloadSound = () => {
    setTimeout(() => {
      window.open("https://youtu.be/JhKyKEDxo8Q", "_blank");
    }, 100);
  };

  const handleNavigateToWebSite = () => {
    setTimeout(() => {
      window.open(
        "https://play.google.com/store/apps/details?id=com.robtopx.geometryjump&hl=en_US&gl=US",
        "_blank"
      );
    }, 100);
  };

  const handleShowModalComingSoon = () => {
    let modalBack = document.querySelector(".comingSoonModalBack");
    let modal = document.querySelector(".modalContainer");
    setTimeout(() => {
      modalBack.style.visibility = "visible";
      modal.style.visibility = "visible";
    }, 100);
  };
  const handleHideModalComingSoon = () => {
    let modalBack = document.querySelector(".comingSoonModalBack");
    let modal = document.querySelector(".modalContainer");
    setTimeout(() => {
      modalBack.style.visibility = "hidden";
      modal.style.visibility = "hidden";
    }, 100);
  };

  return (
    <levelsPageContext.Provider
      value={{
        // write what you want to present to your childrens
        handleGoBackLastPage,
        handleDownloadSound,
        handleNavigateToWebSite,
        handleShowModalComingSoon,
        handleHideModalComingSoon,
      }}
    >
      {children}
    </levelsPageContext.Provider>
  );
};

export default LevelsPageContextProvider;
