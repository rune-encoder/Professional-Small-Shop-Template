import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Header(props) {
  return (
    <>
      <header>
        <Link to="/" className="logo">
          <img src={logo} alt="Small Shop Logo" />
        </Link>
        {props.children}
      </header>
    </>
  );
}
