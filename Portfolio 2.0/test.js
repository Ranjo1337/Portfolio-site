let windowSetting = localStorage.getItem("windowSetting");
if (windowSetting == "full") {
  document.querySelector(".content-container").classList.add("green-clicked");
}

function greenClicked() {
  document
    .querySelector(".content-container")
    .classList.toggle("green-clicked");
  if (localStorage.getItem("windowSetting") == "full") {
    localStorage.setItem("windowSetting", "half");
  } else {
    localStorage.setItem("windowSetting", "full");
  }
  console.log(localStorage.getItem("windowSetting"));
}
