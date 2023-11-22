import { Link, useLocation } from "react-router-dom";
import NavLinks from "./UI/NavLinks";

import { BsSearch } from "react-icons/bs";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { id: 1, path: "/Home", text: "Home" },
    { id: 2, path: "/About", text: "About" },
    { id: 3, path: "/Shop", text: "Shop" },
    { id: 4, path: "/Contact", text: "Contact" },
  ];

  const isLinkDisabled = (link) => {
    if (location.pathname === "/" && link.path === "/Home") {
      return true;
    }

    return link.path === location.pathname;
  };

  return (
    <>
      <div className="nav-group">
        <nav>
          <NavLinks links={links} isLinkDisabled={isLinkDisabled} />
        </nav>
        <div className="nav-utils">
          <BsSearch className="search-icon" />
          <Link
            to="/Cart"
            className={isLinkDisabled({ path: "/Cart" }) ? "active" : ""}
          >
            <LiaShoppingCartSolid className="cart-icon" />
          </Link>
          <RxHamburgerMenu className="sliding-menu-icon" />
        </div>
      </div>
      <aside className="sliding-menu-content">
        <NavLinks links={links} isLinkDisabled={isLinkDisabled} />
      </aside>
    </>
  );
}
