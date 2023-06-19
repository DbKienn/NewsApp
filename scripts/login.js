"use strict";
const inputUserName = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const btnSubmit = document.getElementById("btn-submit");

// bat su kien nhaan nut submit
btnSubmit.addEventListener("click", function () {
  // kiem tra nguoi dung da nhap du user vaf password hay chua
  const isValidate = validate();
  if (isValidate) {
    // tim kiem thong tin gnuoi dung trong userArr
    const user = userArr.find(
      (item) =>
        item.userName === inputUserName.value &&
        item.password === inputPassword.value
    );
    if (user) {
      alert(" Dang nhap thanh cong !");
      // luu user dang hoat dong
      saveToStorage("userActive", user);
      // chuyen huong ve trang chu
      window.location.href = "../index.html";
    } else {
      alert(" Thong tin dang nhap khong dung, vui long kiem tra lai !!");
    }
  }
});
function validate() {
  let isValidate = true;
  if (inputUserName.value === "") {
    alert(" Vui long nhap User Name");
    isValidate = false;
  }
  if (inputPassword.value === "") {
    alert(" Vui long nhap Password");
    isValidate = false;
  }
  return isValidate;
}
console.log(userArr);
