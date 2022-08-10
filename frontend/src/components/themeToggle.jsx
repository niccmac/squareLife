const ThemeToggle = (props) => {
  const changeTheme = () => {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  };
  const displayIcon = props.theme === "light" ? "dark" : "light";
  return (
    <div>
      <button onClick={changeTheme}>{displayIcon}</button>
    </div>
  );
};
export default ThemeToggle;
