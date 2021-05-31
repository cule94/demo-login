const Login = function () {
  return (
    <div className="LoginForm">
      <article>
        <h1>Login</h1>
        <p className="loginParagraph">Login to access your data.</p>
      </article>
      <article>
        <input type="email" name="Username" id="tryUser"></input>
      </article>
      <article>
        <input type="password" name="Password" id="tryPass"></input>
      </article>
      <article>
        <button id="loginButton">Login</button>
      </article>
    </div>
  );
};

export default Login;
