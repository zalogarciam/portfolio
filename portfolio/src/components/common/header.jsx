import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import List from "./list";
import { BsList, BsXCircle } from "react-icons/bs";

const Header = ({ elements, paths }) => {
  const header = useRef();
  const nav = useRef();
  const sidebar = useRef();
  const menu = useRef();

  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "");

  const handleClickShowMenu = () => {
    header.current.classList.add("header--move-left");
    sidebar.current.classList.add("sidebar--show");
    menu.current.classList.add("icon--hide");
    menu.current.classList.remove("icon--display");
  };

  const handleClickHideMenu = () => {
    header.current.classList.remove("header--move-left");
    sidebar.current.classList.remove("sidebar--show");
    menu.current.classList.add("icon--display");
    menu.current.classList.remove("icon--hide");
  };

  const handleChangeSelectTheme = (e) => {
    document.documentElement.className = e.target.value;
    localStorage.setItem("theme", e.target.value);
    setTheme(e.target.value);
  };

  return (
    <header className="header" ref={header}>
      <nav className="nav" ref={nav}>
        <div className="container d-flex d-flex--space-between">
          <Link to="/">
            <img src={logo} alt="Logo" className="nav__logo" />
          </Link>
          <div
            className="sidebar sidebar--close"
            ref={sidebar}
            onClick={handleClickHideMenu}
          >
            <List
              className="list list--sidebar list--right-sidebar d-flex d-flex--center d-flex--direction gap-md"
              handleClickList={(e) => e.stopPropagation()}
              handleClickNavLink={handleClickHideMenu}
              elements={elements}
              paths={paths}
            />
            <button className="icon icon--close" onClick={handleClickHideMenu}>
              <BsXCircle />
            </button>
          </div>
          <div className="d-flex d-flex--center gap-md">
            <select
              className="select select--theme icon--border"
              onChange={handleChangeSelectTheme}
              value={theme}
            >
              <option value="code">💻</option>
              <option value="dark">🌚</option>
              <option value="light">🌞</option>
            </select>
            <button
              ref={menu}
              className="icon icon--menu icon--display"
              onClick={handleClickShowMenu}
            >
              <BsList />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
