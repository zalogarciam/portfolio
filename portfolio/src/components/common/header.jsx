import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import List from "./list";
import { BsCart, BsList, BsXCircle } from "react-icons/bs";

const Header = () => {
  const header = useRef();
  const nav = useRef();
  const mobileModal = useRef();

  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "");

  const handleClickShowMenu = () => {
    // header.current.classList.add('header--move-left');
    // mobileModal.current.classList.add('modal--show');
  };

  const handleClickHideMenu = () => {
    // header.current.classList.remove('header--move-left');
    // mobileModal.current.classList.remove('modal--show');
  };

  const handleChangeSelectTheme = (e) => {
    // document.documentElement.className = e.target.value;
    // localStorage.setItem('theme', e.target.value);
    // setTheme(e.target.value);
  };

  return (
    <header className="header" ref={header}>
      <nav className="nav" ref={nav}>
        <div className="container f-elements f-elements--header">
          {/* <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="nav__logo"
              width="256"
              height="256"
            />
          </Link> */}
          <div
            className="modal modal--mobile"
            ref={mobileModal}
            onClick={handleClickHideMenu}
          >
            <List
              // className="list list--mobile-modal list--right-mobile-modal f-elements f-elements--responsive f-elements--center gap-md"
              className="d-flex d-flex--center gap-md"
              // handleClickList={(e) => e.stopPropagation()}
              // handleClickNavLink={handleClickHideMenu}
            />
            {/* <button className="icon icon--close" onClick={handleClickHideMenu}>
              <BsXCircle />
            </button> */}
          </div>
          {/* <div className="f-elements f-elements--center gap-2xs">
            <select
              className="select select--theme"
              onChange={handleChangeSelectTheme}
              value={theme}
            >
              <option value="system">💻</option>
              <option value="dark">🌚</option>
              <option value="light">🌞</option>
            </select>
            <button className="icon icon--sm">
              <BsCart />
            </button>
            <button className="icon icon--menu" onClick={handleClickShowMenu}>
              <BsList />
            </button>
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
