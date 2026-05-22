import { useSelector } from "react-redux";

const useExperience = () => {
  return useSelector((state) => state.experience);
};
export default useExperience;
