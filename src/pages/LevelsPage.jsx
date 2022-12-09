import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import StereoMadnessCard from "../components/LevelsCard/StereoMadnessCard";
import DryOutCard from "../components/LevelsCard/DryOutCard";
import CantLetGoCard from "../components/LevelsCard/CantLetGoCard";
import { useLevelsPage } from "../contexts/LevelsPageContext";

const LevelsPage = () => {
  const {
    handleGoBackLastPage,
    handleDownloadSound,
    handleNavigateToWebSite,
    handleHideModalComingSoon,
  } = useLevelsPage();

  return (
    <>
      <div className="levelsPageContainer">
        <Carousel interval={null} className="carouselCont">
          <Carousel.Item className="carouselItem">
            <StereoMadnessCard />
          </Carousel.Item>
          <Carousel.Item>
            <DryOutCard />
          </Carousel.Item>
          <Carousel.Item>
            <CantLetGoCard />
          </Carousel.Item>
        </Carousel>

        <div className="levelsPageNavGridMain">
          <div className="lP_NavGrid_1"></div>
          <div className="lP_NavGrid_2"></div>
          <div className="lP_NavGrid_3"></div>
          <div className="lP_NavGrid_2"></div>
          <div className="lP_NavGrid_1"></div>
        </div>
        <div className="downloadSoundTitle">
          <h2 onClick={handleDownloadSound}>DOWNLOAD THE SOUNDTRACKS</h2>
        </div>
        <div className="bottomSide">
          <hr className="levelsPageHr" />
          <div className="levelsPageBottomSideCond">
            <div className="bottomSideElem"></div>
            <div className="bottomSideElem"></div>
            <div className="bottomSideElem"></div>
            <div className="bottomSideElem"></div>
            <div className="bottomSideElem"></div>
            <div className="bottomSideElem"></div>
          </div>
        </div>
        <div className="bottomSideDecor">
          <div className="bottomSideDecorCont1">
            <div className="bottomSideDecorElem1"></div>
            <div className="bottomSideDecorElem2"></div>
            <div className="bottomSideDecorSubCont1">
              <div className="bottomSideDecorElem3"></div>
              <div className="bottomSideDecorElem2"></div>
              <div className="bottomSideDecorElem1"></div>
            </div>
          </div>
          <div className="bottomSideDecorCont2">
            <div className="bottomSideDecorElem1"></div>
            <div className="bottomSideDecorElem2"></div>
            <div className="bottomSideDecorSubCont2">
              <div className="bottomSideDecorElem3"></div>
              <div className="bottomSideDecorElem2"></div>
              <div className="bottomSideDecorElem1"></div>
            </div>
          </div>
        </div>

        <div className="levelPageTriangleCont" onClick={handleGoBackLastPage}>
          <div className="levelPageTriangle"></div>
          <div className="levelPageTriangle2"></div>
        </div>

        <div
          className="comingSoonModalBack"
          onClick={() => handleHideModalComingSoon()}
        ></div>
        <div className="modalContainer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/659/659891.png"
            alt=""
            className="comingSoonCancelButton"
            onClick={() => handleHideModalComingSoon()}
          />
          <h2 className="comingSoonTitle"> COMING SOON...</h2>
          <div
            className="comingSoonButton"
            onClick={() => handleNavigateToWebSite()}
          >
            <div className="playStartGrid_1"></div>
            <div className="playStartGrid_2"></div>
            <div className="playStartGrid_21"></div>
            <div className="playStartGrid_3"></div>
            <div className="playStartGrid_4"></div>
            <div className="playStartGrid_5"></div>
            <div className="playStartGrid_6"></div>
            <h2 className="homePageFullVersTitle">FREE LEVELS</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default LevelsPage;
