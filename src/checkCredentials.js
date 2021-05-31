import React from "react";
import ReactDOM from "react-dom";
import LoginParagraph from "./index";
let Root = document.getElementById("root");

function RenderMess(mess) {
  let p = <p style={{ fontWeight: "bold", color: "red" }}>{mess}</p>;
  ReactDOM.render(p, LoginParagraph);
}

function ClearCache() {
  localStorage.clear();
  window.location.reload();
}

function CheckCredentials(user, pass) {
  function RenderRightUser(data) {
    const RightUserData = (
      <div id="authorizedName">
        <p>
          {data.user.firstName} {data.user.lastName}
        </p>
        <button id="logoutButton" onClick={ClearCache}>
          LOGOUT
        </button>
      </div>
    );
    ReactDOM.render(RightUserData, Root);
    localStorage.setItem("token", data.token);
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
  }

  const payload = { username: String(user), password: String(pass) };
  fetch("https://api.getcountapp.com/api/v1/authenticate", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((response) =>
    response.json().then((fetchedData) => {
      fetchedData.errorMessage
        ? RenderMess(fetchedData.errorMessage)
        : RenderRightUser(fetchedData);
    })
  );
}
export default CheckCredentials;
