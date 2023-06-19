"use strict";
const navPageNum = document.getElementById("nav-page-num");
const inputQuery = document.getElementById("input-query");
const btnSubmit = document.getElementById("btn-submit");
const newsContainer = document.getElementById("news-container");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const pageNumber = document.getElementById("page-num");

let totalResults = 0;
let keywords = "";
// an thanh nav
navPageNum.style.display = "none";
// bat su kien nhan nut submit
btnSubmit.addEventListener("click", function () {
  pageNumber.textContent = "1";
  newsContainer.innerHTML = "";
  // kiem tra nguoi dung da nhap tu khoa tim kiem chua
  if (inputQuery.value.trim().length === 0) {
    alert("vui long nhap tu khoa ban muon tim kiem !");
  } else {
    keywords = inputQuery.value;
    // hien thi list news theo tu khoa tim kiem
    getDataNews(keywords, 1);
  }
});
async function getDataNews(keywords, page) {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${keywords}&sortBy=popularity&pageSize=${userActive.pageSize}&page=${page}&apiKey=479b1fd208384237bf6fbd833eb89e68`
    );
    // neu khong co bai nao phu hop thi thong bao
    const data = await res.json();
    if (data.totalResults == 0) {
      navPageNum.style.display = "none";
      throw new Error(" Khong co bai nao phu hop voi tu khoa");
    }
    // hien thi nav neu co du lieu tra ve
    navPageNum.style.display = "block";
    displayNewList(data);
  } catch (err) {
    alert(err.message);
  }
}
function checkBtnPrev() {
  // neu page la 1 thi an di
  if (pageNumber.textContent == 1) {
    btnPrev.style.display = "none";
  } else {
    btnPrev.style.display = "block";
  }
}
// bay su kien nut Prev
btnPrev.addEventListener("click", function () {
  // lay du lieu va hien thi danh sach cac news truoc do
  getDataNews(keywords, --pageNumber.textContent);
});
function checkBtnNext() {
  // neu page Number bang voi tong so tin tuc cua API thi an di
  if (pageNumber.textContent == Math.ceil(totalResults / userActive.pageSize)) {
    btnNext.style.display = "none";
  } else {
    btnNext.style.display = "block";
  }
}
// bat su kien btn Next
btnNext.addEventListener("click", function () {
  // lay du lieu va hien thi danh sach cac news tiep theo
  getDataNews(keywords, ++pageNumber.textContent);
});
function displayNewList(data) {
  // lay gia tri cho bien totalResults
  totalResults = data.totalResults;
  // kiem tra cac nut Prev, Next
  checkBtnNext();
  checkBtnPrev();
  // tao cac html cua cac News de hien thi
  let html = "";
  data.articles.forEach(function (article) {
    html += `<div class="card flex-row flex-wrap">
    <div class="card mb-3" style="">
      <div class="row no-gutters">
        <div class="col-md-4">
        <img src=${
          article.urlToImage ? article.urlToImage : "../no-photo.jpg"
        } alt="img" class="card-img"/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
            ${article.title}
            </h5>
            <p class="card-text">
              ${article.description}
            </p>
            <a class="btn btn-primary"href=${
              article.url
            }target="_blank">View</a>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  });
  newsContainer.innerHTML = html;
}
