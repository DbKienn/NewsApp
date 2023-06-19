"use strict";
const loginModal = document.getElementById("login-modal");
const mainContent = document.getElementById("main-content");
const welcomeMessage = document.getElementById("welcome-message");
const btnLogout = document.getElementById("btn-logout");

displayHome();
// hien thi noi dung tren trang
function displayHome() {
  if (userActive) {
    loginModal.style.display = "none";
    mainContent.style.display = "block";
    // add thong bao welcome
    welcomeMessage.textContent = `Welcome ${userActive.firstName}`;
  }
  // neu khong co ai dang nhap thi an maincontnet va hien thi login
  else {
    loginModal.style.display = "block";
    mainContent.style.display = "none";
  }
}
// // bat su kien nhan vao nut logout
btnLogout.addEventListener("click", function () {
  // xoa du lieu userActive
  localStorage.removeItem("userActive");
  // quay lai trang login
  window.location.href = "../index.html";
});
