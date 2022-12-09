import React from "react";
import { useCharacktersPage } from "../contexts/CharacktersPageContext";
// import { useStereoMadness } from "../contexts/StereoMadness";

const StereoMadnessPage = () => {
  const { smileCharackter, planeCharackter, mainCharackter } =
    useCharacktersPage();

  // const {} = useStereoMadness();
  return (
    <>
      <div className="SM_container">
        <div className="SM_smileCharackter">
          <img
            src={smileCharackter}
            className="smileMainCharackter"
            alt="error"
          />
        </div>
        <div className="SM_planeCharackter">
          <img
            src={planeCharackter}
            className="planeMainCharackter"
            alt="error"
          />
        </div>
      </div>
    </>
  );
};

export default StereoMadnessPage;
