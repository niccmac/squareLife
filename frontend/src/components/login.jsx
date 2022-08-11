const Login = (color) => {
  const theme = color.color;
  const thisStyle = {
    backgroundColor: theme.pageBackground,
    color: theme.titleColor,
    borderColor: theme.tagLineColor,
    borderWidth: 1
  };
  return (
    <div className="login" style={thisStyle}>
      <p>Login</p>
    </div>
  );
};
export default Login;
