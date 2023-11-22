import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      <header>
        <Link to="/" className="logo">
        <h1>ᚱuᚢe Eᚢcᛟdeᚱ</h1>
        </Link>
        {props.children}
      </header>
    </>
  );
}
