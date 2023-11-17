import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeBtn({ darkMode, toggleDarkMode }) {
  return (
    <div className="util-group">
      <button onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
}
