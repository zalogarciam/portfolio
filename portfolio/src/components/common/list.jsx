import { NavLink } from "react-router-dom";

const List = ({
  className = "",
  handleClickList = () => {},
  handleClickNavLink = () => {},
}) => {
  console.log(className);
  return (
    <ul className={`list ${className}`} onClick={handleClickList}>
      <li>
        <NavLink
          to="/portfolio/"
          className={({ isActive }) =>
            isActive ? "list--link list--link--active" : "list__link"
          }
          onClick={handleClickNavLink}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/portfolio/about/"
          className={({ isActive }) =>
            isActive ? "list--link list--link--active" : "list__link"
          }
          onClick={handleClickNavLink}
        >
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/portfolio/experience"
          className={({ isActive }) =>
            isActive ? "list--link list--link--active" : "list__link"
          }
          onClick={handleClickNavLink}
        >
          Experience
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/portfolio/projects"
          className={({ isActive }) =>
            isActive ? "list--link list--link--active" : "list__link"
          }
          onClick={handleClickNavLink}
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/portfolio/contact"
          className={({ isActive }) =>
            isActive ? "list--link list--link--active" : "list__link"
          }
          onClick={handleClickNavLink}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default List;
