import { NavLink } from "react-router-dom";

const List = ({
  className = "",
  handleClickList = () => {},
  handleClickNavLink = () => {},
  elements,
  paths,
}) => {
  return (
    <ul className={`list ${className}`} onClick={handleClickList}>
      {elements.map((element, index) => {
        return (
          <li className="list__element" key={element}>
            <NavLink
              to={"/portfolio/" + paths[index]}
              className={({ isActive }) =>
                isActive ? "list__link list__link--active" : "list__link"
              }
              onClick={handleClickNavLink}
            >
              {element}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
