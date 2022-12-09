import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const characktersPageContext = React.createContext();
export const useCharacktersPage = () => useContext(characktersPageContext);

const CharacktersPageContextProvider = ({ children }) => {
  const navigate = useNavigate();

  // Charackters just for show them
  const [mainCharackter, setMainCharackter] = useState("/SmileCharackter1.png");
  const [charackterType, setCharackterType] = useState("smile");
  const [carouselCounter, setCarouselCaunter] = useState(2);

  // Charackters to play
  const [smileCharackter, setSmileCharackter] = useState(
    "/SmileCharackter1.png"
  );
  const [planeCharackter, setPlaneCharackter] = useState(
    "/PlaneCharackter1.png"
  );

  // functions to choose the charackters for playing
  const handleChooseSmileCharackter = (charackter) => {
    setMainCharackter(charackter);
    setSmileCharackter(charackter);
  };
  const handleChoosePlaneCharackter = (charackter) => {
    setMainCharackter(charackter);
    setPlaneCharackter(charackter);
  };

  // functions to show all charackters by their types
  const handleShowSmileCharackter = () => {
    setCharackterType("smile");
    setMainCharackter(smileCharackter);
    handleMarkChoosenType1();
    setCarouselCaunter(carouselCounter + 1);
  };
  const handleShowPlaneCharackter = () => {
    setCharackterType("plane");
    setMainCharackter(planeCharackter);
    handleMarkChoosenType2();
    setCarouselCaunter(carouselCounter + 1);
  };

  // function to show whick type is choosen now. It changing the border
  const handleMarkChoosenType1 = () => {
    const smile = document.querySelector(".ChPageSmileCharackter");
    smile.style.boxShadow = "0 0 15px 8px rgba(255,255,255, 1)";
    const plane = document.querySelector(".ChPagePlaneCharackter");
    plane.style.boxShadow = "";
  };

  const handleMarkChoosenType2 = () => {
    const smile = document.querySelector(".ChPageSmileCharackter");
    smile.style.boxShadow = "";
    const plane = document.querySelector(".ChPagePlaneCharackter");
    plane.style.boxShadow = "0 0 15px 10px rgba(255,255,255, 1)";
  };

  // carousel function
  const handleCarousel = () => {
    if (carouselCounter % 2 === 0) {
      handleShowSmileCharackter();
    } else {
      handleShowPlaneCharackter();
    }
  };

  // function to go back to the last page
  const handleGoBackLastPage = () => {
    setTimeout(() => {
      navigate(-1);
    }, 50);
  };
  return (
    <characktersPageContext.Provider
      value={{
        mainCharackter,
        charackterType,
        smileCharackter,
        planeCharackter,

        handleChooseSmileCharackter,
        handleChoosePlaneCharackter,
        handleShowSmileCharackter,
        handleShowPlaneCharackter,
        handleCarousel,
        handleGoBackLastPage,
        // handleMarkChoosenType,
      }}
    >
      {children}
    </characktersPageContext.Provider>
  );
};

export default CharacktersPageContextProvider;
