"use strict";
// ham lay giu lieu
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// ham luu du lieu
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
// lay du lieu userArr tu Local Storage
const users = getFromStorage("userArr") ? getFromStorage("userArr") : [];
// chuyen doi ve dang class instance
const userArr = users.map((user) => parseUser(user));
// lay du lieu user dang dang nhap
let userActive = getFromStorage("userActive")
  ? parseUser(getFromStorage("userActive"))
  : null;
// lay du lieu todoArr tu local Storage
const todos = getFromStorage("todoArr") ? getFromStorage("todoArr") : [];
//chuyen doi ve dang Class Instance
const todoArr = todos.map((todo) => parseTask(todo));

// chuyen tu JS Object sang Class Instance
function parseUser(userData) {
  const user = new User(
    userData.firstName,
    userData.lastName,
    userData.userName,
    userData.password,
    userData.pageSize,
    userData.category
  );
  return user;
}
// ham chuyen doi tu JS object sang Class Instance cua Task Class
function parseTask(taskData) {
  const task = new Task(taskData.task, taskData.owner, taskData.isDone);
  return task;
}
