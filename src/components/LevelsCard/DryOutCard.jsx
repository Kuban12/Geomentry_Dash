import React from "react";
import ProgressModes from "../../components/ProgressModes";
import { useNavigate } from "react-router-dom";
import { useLevelsPage } from "../../contexts/LevelsPageContext";

const DryOutCard = () => {
  const { handleShowModalComingSoon } = useLevelsPage();
  return (
    <>
      <div className="secondLevel">
        <div className="dryOutContainer">
          <div
            className="dryOutCard"
            onClick={() => handleShowModalComingSoon()}
          >
            <p className="levelNumber">2</p>
            <div className="imgAndTitle">
              <img src="/DryOutRate.png" className="levelImg" alt="error" />
              <h2 className="dryOutTitle">DRY OUT</h2>
            </div>
            <div className="raitingStars">
              <img
                className="starPermantly"
                src="https://play-lh.googleusercontent.com/jBRPR7BtpYrGtdpyO7O6UsxT_MlPC1Ep5scNeV4Ffeyk1Sm-ZQ5Td0TscsbI7Loxo_M"
                alt=""
              />
              <img
                className="starPermantly"
                src="https://play-lh.googleusercontent.com/jBRPR7BtpYrGtdpyO7O6UsxT_MlPC1Ep5scNeV4Ffeyk1Sm-ZQ5Td0TscsbI7Loxo_M"
                alt=""
              />
              <img
                className="starPermantly"
                src="https://play-lh.googleusercontent.com/jBRPR7BtpYrGtdpyO7O6UsxT_MlPC1Ep5scNeV4Ffeyk1Sm-ZQ5Td0TscsbI7Loxo_M"
                alt=""
              />
            </div>
          </div>
          <div className="modesContainer">
            <h2 className="NormalMode">NORMAL MODE</h2>
            <ProgressModes />
            <h2 className="PracticeMode"> PRACTICE MODE</h2>
            <ProgressModes />
          </div>
        </div>
      </div>
    </>
  );
};

export default DryOutCard;
