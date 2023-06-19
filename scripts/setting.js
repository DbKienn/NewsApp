"use strict";
const inputPageSize = document.getElementById("input-page-size");
const inputCategory = document.getElementById("input-category");
const btnSubmit = document.getElementById("btn-submit");

// bat su kien nhan nut submit
btnSubmit.addEventListener("click", function () {
  if (validate()) {
    // cap nhat lai userActive
    userActive.pageSize = Number.parseInt(inputPageSize.value);
    userActive.category = inputCategory.value;
    saveToStorage("userActive", userActive);
    // cap nhat lai userArr
    const index = userArr.findIndex(
      (userItem) => userItem.userName === userActive.userName
    );
    userArr[index] = userActive;
    saveToStorage("userArr", userArr);
    alert(" Cap Nhat Thanh Cong !!");
  }
});

function validate() {
  let isValidate = true;
  // kiem tra pagesize da nhap hay chua
  if (Number.isNaN(Number.parseInt(inputPageSize.value))) {
    alert("News per page khong hop le, vui long nhap lai !!!");
    isValidate = false;
  }
}
