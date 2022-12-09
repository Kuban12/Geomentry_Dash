import { useNavigate } from "react-router-dom";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import AudioPlayer from "../components/AudioPlayer";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const HomePage = () => {
  const navigate = useNavigate();

  //for modal dialog

  const handleNavigareToLevens = () => {
    setTimeout(() => {
      navigate("/levels");
    }, 80);
  };

  const handleNavigareToCharacters = () => {
    setTimeout(() => {
      navigate("/characters");
    }, 80);
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleShowFullVersModal = () => {
    setTimeout(() => {
      setOpen(true);
    }, 80);
  };

  return (
    <>
      <div className="homePageAboveMainScrol">
        <div className="slide-truck-first">
          <div className="gridContainerColor homePageGridContainer">
            <div className=" gridColor homePageGrid_1"></div>
            <div className=" gridColor homePageGrid_2"></div>
            <div className=" gridColor homePageGrid_3"></div>
            <div className=" gridColor homePageGrid_4"></div>
          </div>
          <div className="gridContainerColor homePageGridContainer">
            <div className=" gridColor homePageGrid_5"></div>
            <div className=" gridColor homePageGrid_6"></div>
            <div className=" gridColor homePageGrid_7"></div>
            <div className=" gridColor homePageGrid_8"></div>
            <div className=" gridColor homePageGrid_9"></div>
            <div className=" gridColor homePageGrid_10"></div>
            <div className=" gridColor homePageGrid_11"></div>
          </div>
          <div className="gridContainerColor homePageGridContainer">
            <div className=" gridColor homePageGrid_12"></div>
            <div className=" gridColor homePageGrid_13"></div>
            <div className=" gridColor homePageGrid_14"></div>
            <div className=" gridColor homePageGrid_15"></div>
            <div className=" gridColor homePageGrid_16"></div>
          </div>
          <div className="gridContainerColor homePageGridContainer">
            <div className=" gridColor homePageGrid_17"></div>
            <div className=" gridColor homePageGrid_18"></div>
            <div className=" gridColor homePageGrid_19"></div>
            <div className=" gridColor homePageGrid_4"></div>
          </div>
          <div className="gridContainerColor homePageGridContainer">
            <div className=" gridColor homePageGrid_1"></div>
            <div className=" gridColor homePageGrid_2"></div>
            <div className=" gridColor homePageGrid_3"></div>
            <div className=" gridColor homePageGrid_4"></div>
          </div>
          <div className="gridContainerColor homePageGridContainer">
            <div className=" gridColor homePageGrid_1"></div>
            <div className=" gridColor homePageGrid_2"></div>
            <div className=" gridColor homePageGrid_3"></div>
            <div className=" gridColor homePageGrid_4"></div>
          </div>
        </div>
      </div>

      <div className="homePageAboveMain">
        <div className="homePageTitleCont">
          <h1 className="homePageTitle">GEOMETRY DASH</h1>
          <h2 className="homePageSubTitle">LITE</h2>
        </div>
        <div className="homePageButtonsCont">
          <div
            className="homePageCharacterButton"
            onClick={handleNavigareToCharacters}
          >
            <div className="playStartGrid_1"></div>
            <div className="playStartGrid_2"></div>
            <div className="playStartGrid_21"></div>
            <div className="playStartGrid_3"></div>
            <div className="playStartGrid_4"></div>
            <div className="playStartGrid_5"></div>
            <div className="playStartGrid_6"></div>
            <div className="playStartGridCharacterIcon"></div>
            <div className="playStartGridCharacterEye1"></div>
            <div className="playStartGridCharacterEye2"></div>
            <div className="playStartGridCharacterMouth"></div>
          </div>
          <div
            className="homePagePlayStartButton"
            onClick={handleNavigareToLevens}
          >
            <div className="playStartGrid_1"></div>
            <div className="playStartGrid_2"></div>
            <div className="playStartGrid_21"></div>
            <div className="playStartGrid_3"></div>
            <div className="playStartGrid_4"></div>
            <div className="playStartGrid_5"></div>
            <div className="playStartGrid_6"></div>
            <div className="playStartTriangle"></div>
            <div className="playStartTriangle2"></div>
          </div>

          <div>
            <div
              className="homePageFullVersionButton"
              onClick={handleShowFullVersModal}
            >
              <div className="playStartGrid_1"></div>
              <div className="playStartGrid_2"></div>
              <div className="playStartGrid_21"></div>
              <div className="playStartGrid_3"></div>
              <div className="playStartGrid_4"></div>
              <div className="playStartGrid_5"></div>
              <div className="playStartGrid_6"></div>
              <h2 className="homePageFullVersTitle">FULL VERSION</h2>
            </div>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Use Google's location service?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Let Google help apps determine location. This means sending
                  anonymous location data to Google, even when no apps are
                  running.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose}>Agree</Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>

      <div className="homePageUnderMain">
        <div className="homePageUnderPageShadow">
          <hr className="homepageHr" />
        </div>
        <div className="slide-truck">
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
        </div>
      </div>
      <embed src="./audio/Stereo_Madness.mp3" />

      {/* <AudioPlayer /> */}
    </>
  );
};

export default HomePage;
