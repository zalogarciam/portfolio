import { useSelector } from "react-redux";

const useAboutMe = () => {
  return useSelector((state) => state.aboutMe);
};
export default useAboutMe;
