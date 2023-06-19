"use strict";
const inputFirstname = document.getElementById("input-firstname");
const inputLastname = document.getElementById("input-lastname");
const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputPasswordConfirm = document.getElementById("input-password-confirm");
const btnSubmit = document.getElementById("btn-submit");
// bat su kien nhan nut Register
btnSubmit.addEventListener("click", function () {
  const user = new User(
    inputFirstname.value,
    inputLastname.value,
    inputUsername.value,
    inputPassword.value
  );
  // kiem tra da nhap du lieu chua
  const isValidate = validate(user);
  if (isValidate) {
    // them user vao mang Arr
    userArr.push(user);
    // luu du lieu vao Local Storage
    saveToStorage("userArr", userArr);
    alert(" Dang Ky Thanh Cong !!!!");
    // chuyn huong sang trang login
    window.location.assign("../pages/login.html");
  }
});

function validate(user) {
  // kiem tra co truong hop nao bi bo trong khong
  let isValidate = true;
  if (user.firstName.trim().length === 0) {
    alert("Vui long nhap First Name !");
    isValidate = false;
  }
  if (user.lastName.trim().length === 0) {
    alert("Vui long nhap Last Name !");
    isValidate = false;
  }
  if (user.userName.trim().length === 0) {
    alert("Vui long nhap User Name !");
    isValidate = false;
  }
  if (user.password === "") {
    alert("Vui long nhap Password !");
    isValidate = false;
  }
  if (inputPasswordConfirm.value === "") {
    alert("Vui long nhap Confirm Password !");
    isValidate = false;
  }
  // kiem tra co bi trung user khong

  for (let i = 0; i < userArr.length; i++) {
    if (userArr[i].userName === user.userName) {
      alert(" UserName da ton tai !");
      isValidate = false;
    }
    break;
  }
  // kiem tra password vaf passwordconfirm
  if (user.password !== inputPasswordConfirm.value) {
    alert(" Password va Confirm Password phai trung nhau !");
    isValidate = false;
  }
  // password phai co nhieu hon 8 ky tu
  if (user.password.length <= 8) {
    alert(" Password phai co nhieu hon 8 ky tu !");
    isValidate = false;
  }
  return isValidate;
}
