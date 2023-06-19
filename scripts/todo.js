"use strict";
if (userActive) {
  const todoList = document.getElementById("todo-list");
  const btnAdd = document.getElementById("btn-add");
  const inputTask = document.getElementById("input-task");
  displayTodoList();
  function displayTodoList() {
    let html = "";
    // tu mang arr loc ra cac todo cua user dang dang nhap
    todoArr
      .filter((todo) => todo.owner === userActive.userName)
      .forEach(function (todo) {
        html += `
        <li class=${todo.isDone ? "checked" : ""} >${
          todo.task
        }<span class="close">x</span></li>`;
      });
    todoList.innerHTML = html;
    // bat su kien
    eventToggleTasks();
    eventDeleteTasks();
  }
  // bat su kien nhan nut add task
  btnAdd.addEventListener("click", function () {
    // kiem tra nguoi dung da nhap todolist can add chua
    if (inputTask.value.trim().length === 0) {
      alert(" Vui ling nhap TodoList !");
    } else {
      const todo = new Task(inputTask.value, userActive.userName, false);
      // them task moi vao mang todo
      todoArr.push(todo);
      // luu du lieu xuong local Storage
      saveToStorage("todoArr", todoArr);
      // hien thi lai list da co
      displayTodoList();
      // reset du lieu tu form nhap
      inputTask.value = "";
    }
  });
  // bat su kien toggle Task
  function eventToggleTasks() {
    // lay tat ca phan tu li chua thong tin cua cac task va bat su kien click tren tung li
    document.querySelectorAll("#todo-list li").forEach(function (liEl) {
      liEl.addEventListener("click", function (e) {
        // bo qua nut delete de khong bi chong su kien khi nhan nut delete
        if (e.target !== liEl.children[0]) {
          liEl.classList.toggle("checked");
          // tim task vua click
          const todo = todoArr.find(
            (todoItem) =>
              todoItem.owner === userActive.userName &&
              todoItem.task === liEl.textContent.slice(0, -1)
            // lay noi dung chua task va bo qua dau X
          );
          // // thay doi thuoc tinh isDone
          todo.isDone = liEl.classList.contains("checked") ? true : false;
          //cap nhat local Storage
          saveToStorage("todoArr", todoArr);
        }
      });
    });
  }
  // bat su kien nhan nut xoa
  function eventDeleteTasks() {
    // lay tat ca ca phan tu nut Delete bat su kien click tren tung phan tu day
    document.querySelectorAll("#todo-list .close").forEach(function (closeEl) {
      closeEl.addEventListener("click", function () {
        const isDelete = confirm(" Ban chac chan muon xoa chu ?");
        if (isDelete) {
          // tim vi tri cua task muon xoa trong todoArr
          const index = todoArr.findIndex(
            (item) =>
              item.owner === userActive.userName &&
              //  tim kiem phan tu trong task va so sanh
              item.task === closeEl.parentElement.textContent.slice(0, -1)
          );
          // xoa task ra khoi todoArr
          todoArr.splice(index, 1);
          // luu du lieu
          saveToStorage("todoArr", todoArr);
          // hien thi lai lisr todo
          displayTodoList();
        }
      });
    });
  }
} else {
  alert(" Ban can dang nhap truoc khi su dung TodoList");
  window.location.href = "../index.html";
}
