import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import Login from "./Login";
import CheckCredentials from "./checkCredentials";
const Root = document.getElementById("root");

let state = localStorage.getItem("token");

if (state) {
  CheckCredentials(
    localStorage.getItem("username"),
    localStorage.getItem("password")
  );
}
ReactDOM.render(Login(), Root);
const LoginParagraph = document.querySelector(".loginParagraph");
const tryUser = document.getElementById("tryUser");
const tryPass = document.getElementById("tryPass");

function InvalidInput() {
  ReactDOM.render(
    <p style={{ fontWeight: "bold", color: "red" }}>Invalid input!</p>,
    LoginParagraph
  );
}

const LoginButton = document.getElementById("loginButton");
LoginButton.addEventListener("click", function () {
  String(tryUser.value).includes("@") &&
  tryUser.value.length > 0 &&
  tryPass.value.length > 0
    ? CheckCredentials(tryUser.value, tryPass.value)
    : InvalidInput();
});

export default LoginParagraph;
