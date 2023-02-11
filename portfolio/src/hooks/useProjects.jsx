import { useSelector } from "react-redux";

const useProjects = () => {
  return useSelector((state) => state.projects);
};
export default useProjects;
