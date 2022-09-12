const Header = (props) => {
  const { changeTheme, webTheme } = props;
  return (
    <header>
      <div className="head">
        <h1>Where in the world?</h1>
        <div className="theme" onClick={changeTheme}>
          <img
            src={
              webTheme === "darkMode"
                ? `./images/sun-white.svg`
                : `./images/moon-black.svg`
            }
            alt=""
          />
          <span>{webTheme === "darkMode" ? "Light Mode" : "Dark Mode"}</span>
        </div>
      </div>
    </header>
  );
};
export default Header;
