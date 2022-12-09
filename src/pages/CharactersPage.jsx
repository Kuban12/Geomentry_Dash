import React, { useEffect } from "react";
import CornersDecorations from "../components/PagesComponents/CornersDecorations";
import { useCharacktersPage } from "../contexts/CharacktersPageContext";

const CharactersPage = () => {
  const {
    mainCharackter,
    charackterType,

    handleChooseSmileCharackter,
    handleChoosePlaneCharackter,
    handleShowSmileCharackter,
    handleShowPlaneCharackter,
    handleCarousel,
    handleGoBackLastPage,
  } = useCharacktersPage();

  useEffect(() => {
    handleShowSmileCharackter();
  }, []);
  return (
    <>
      <div className="CharacktersPageMainContainer">
        <img src={mainCharackter} className="ChPageMainCharackter" alt="" />
        <hr className="ChPageHr" />
        <div className="ChPageCharackterTypeContainer">
          <img
            src="/SmileCharackter1.png"
            className="ChPageSmileCharackter"
            alt="error"
            onClick={handleShowSmileCharackter}
          />
          <img
            src="/PlaneCharackter1.png"
            className="ChPagePlaneCharackter"
            alt="error"
            onClick={handleShowPlaneCharackter}
          />
        </div>

        <div className="ChPageAllChrackters">
          {charackterType === "smile" ? (
            <div className="ChPageSlileCharackters">
              <img
                src="/SmileCharackter1.png"
                className="ChPageCharackter"
                alt="error"
                onClick={() =>
                  handleChooseSmileCharackter("/SmileCharackter1.png")
                }
              />
              <img
                src="/SmileCharackter2.png"
                className="ChPageCharackter"
                alt="error"
                onClick={() =>
                  handleChooseSmileCharackter("/SmileCharackter2.png")
                }
              />
              <img
                src="/SmileCharackter3.png"
                className="ChPageCharackter"
                alt="error"
                onClick={() =>
                  handleChooseSmileCharackter("/SmileCharackter3.png")
                }
              />
              <img
                src="/SmileCharackter4.png"
                className="ChPageCharackter"
                alt="error"
                onClick={() =>
                  handleChooseSmileCharackter("/SmileCharackter4.png")
                }
              />
              <img
                src="/SmileCharackter5.png"
                className="ChPageCharackter"
                alt="error"
                onClick={() =>
                  handleChooseSmileCharackter("/SmileCharackter5.png")
                }
              />
              <img
                src="/SmileCharackter6.png"
                className="ChPageCharackter"
                alt="error"
                onClick={() =>
                  handleChooseSmileCharackter("/SmileCharackter6.png")
                }
              />
              <img
                src="/SmileCharackter7.png"
                className="ChPageCharackter"
                alt="error"
                onClick={() =>
                  handleChooseSmileCharackter("/SmileCharackter7.png")
                }
              />
            </div>
          ) : (
            <div className="ChPagePlaneCharackters">
              <img
                src="/PlaneCharackter1.png"
                className="ChPagePlane1"
                alt="error"
                onClick={() =>
                  handleChoosePlaneCharackter("/PlaneCharackter1.png")
                }
              />
              <img
                src="/PlaneCharackter2.png"
                className="ChPagePlane1"
                alt="error"
                onClick={() =>
                  handleChoosePlaneCharackter("/PlaneCharackter2.png")
                }
              />
              <img
                src="/PlaneCharackter3.png"
                className="ChPagePlane1"
                alt="error"
                onClick={() =>
                  handleChoosePlaneCharackter("/PlaneCharackter3.png")
                }
              />
              <img
                src="/PlaneCharackter4.png"
                className="ChPagePlane1"
                alt="error"
                onClick={() =>
                  handleChoosePlaneCharackter("/PlaneCharackter4.png")
                }
              />
              <img
                src="/PlaneCharackter5.png"
                className="ChPagePlane1"
                alt="error"
                onClick={() =>
                  handleChoosePlaneCharackter("/PlaneCharackter5.png")
                }
              />
              <img
                src="/PlaneCharackter6.png"
                className="ChPagePlane1"
                alt="error"
                onClick={() =>
                  handleChoosePlaneCharackter("/PlaneCharackter6.png")
                }
              />
              <img
                src="/PlaneCharackter7.png"
                className="ChPagePlane1"
                alt="error"
                onClick={() =>
                  handleChoosePlaneCharackter("/PlaneCharackter7.png")
                }
              />
            </div>
          )}
        </div>

        <div className="prevCharackters" onClick={() => handleCarousel()}></div>
        <div className="nextCharackters" onClick={() => handleCarousel()}></div>

        <div className="ChPageTriangleCont">
          <div
            className="ChPageTriangle"
            onClick={() => handleGoBackLastPage()}
          ></div>
          <div className="ChPageTriangle2"></div>
        </div>

        <CornersDecorations />
      </div>
    </>
  );
};

export default CharactersPage;
