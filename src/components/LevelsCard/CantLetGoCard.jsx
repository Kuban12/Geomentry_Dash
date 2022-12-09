import React from "react";
import ProgressModes from "../../components/ProgressModes";
import { useNavigate } from "react-router-dom";
import { display } from "@mui/system";
import { useLevelsPage } from "../../contexts/LevelsPageContext";

const CantLetGoCard = () => {
  const navigate = useNavigate();
  const { handleShowModalComingSoon } = useLevelsPage();

  return (
    <>
      <div className="thirdLevel">
        <div className="cantLetGoContainer">
          <div
            className="cantLetGoCard"
            onClick={() => handleShowModalComingSoon()}
          >
            <p className="levelNumber">3</p>
            <div className="imgAndTitle">
              <img src="/CantLetGoRate.png" className="levelImg" alt="error" />
              <h2 className="cantLetGoTitle">CANT LET GO</h2>
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

export default CantLetGoCard;
