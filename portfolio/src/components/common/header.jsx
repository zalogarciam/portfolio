import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import List from "./list";
import { BsList, BsXCircle } from "react-icons/bs";
import ThemeSelector from "./themeSelector";

const Header = ({ elements, paths }) => {
  const header = useRef();
  const nav = useRef();
  const sidebar = useRef();
  const menu = useRef();

  const documentScroll = () => {
    // if (window.location.pathname.includes('productos') === false) {
    // header.current?.classList.toggle("header--scroll", window.scrollY > 0);
    // nav.current?.classList.toggle("nav--scroll", window.scrollY > 0);
    // }
  };

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

  document.addEventListener("scroll", documentScroll);

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
            <ThemeSelector />
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
