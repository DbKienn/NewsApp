"use strict";
class User {
  constructor(
    firstName,
    lastName,
    userName,
    password,
    // neu khong khai bao o setting thi gia tri mac dinh nhu sau
    pageSize = 10,
    category = "General"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;

    // yeu cau so 9
    this.category = category;
    this.pageSize = pageSize;
  }
}
// chua cac thong tin ve task trong todoList
class Task {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}
