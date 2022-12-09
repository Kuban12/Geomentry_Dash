import React from "react";
import ProgressModes from "../../components/ProgressModes";
import { useNavigate } from "react-router-dom";

const StereoMadnessCard = () => {
  const navigate = useNavigate();
  const handleNavigareToStereoMadnessLevel = () => {
    setTimeout(() => {
      navigate("/stereoMadness");
    }, 80);
  };
  return (
    <>
      <div className="stereoMadnessContainer">
        <div
          className="stereoMadnessCard"
          onClick={handleNavigareToStereoMadnessLevel}
        >
          <p className="levelNumber">1</p>
          <div className="imgAndTitle">
            <img
              src="/SrereoMadnessRate.png"
              className="levelImg"
              alt="error"
            />
            <h2 className="stereoMadnessTitle">STEREO MADNESS</h2>
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
    </>
  );
};

export default StereoMadnessCard;
