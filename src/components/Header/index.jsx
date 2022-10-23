import React from "react";

const Header = ({ veganOption, setVeganOption }) => {
  return (
    <header>
      <div className="pizza" />
      <h1>Build your own pizza</h1>
      <div>
        Vegan options:
        <button
          className={veganOption ? "on" : "off"}
          onClick={() => setVeganOption(!veganOption)}
        >
          {veganOption ? "✓" : "x"}
        </button>
      </div>
    </header>
  );
};

export default Header;
