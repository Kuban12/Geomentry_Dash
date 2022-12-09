import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
export const stereoMadnessContext = React.createContext();
export const useStereoMadness = () => useContext(stereoMadnessContext);

const StereoMadnessContextProvider = ({ children }) => {
  const navigate = useNavigate();

  return (
    <stereoMadnessContext.Provider value={{}}>
      {children}
    </stereoMadnessContext.Provider>
  );
};

export default StereoMadnessContextProvider;
