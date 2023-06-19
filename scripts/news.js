"use strict";
// khi nguoi dung chua dang nhap thi khong the vao muc news

const newsContainer = document.getElementById("news-container");
const btnPrev = document.getElementById("btn-prev");
const pageNumber = document.getElementById("page-num");
const btnNext = document.getElementById("btn-next");
// tinh so tin tuc tra ve tu API
let totalResults = 0;
getDataNews("us", 1);
// lay du lieu tu API hien thi list news
async function getDataNews(country, page) {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${userActive.category}&pageSize=${userActive.pageSize}&page=${page}&apiKey=479b1fd208384237bf6fbd833eb89e68`
    );
    const data = await res.json();
    // goi ham hien thi list news
    displayNewList(data);
  } catch (err) {
    alert(err.message);
  }
}

// bay su kien nut Prev
btnPrev.addEventListener("click", function () {
  // lay du lieu va hien thi danh sach cac news truoc do
  getDataNews("us", --pageNumber.textContent);
});
// btn Prev
function checkBtnPrev() {
  // neu page la 1 thi an di
  if (pageNumber.textContent == 1) {
    btnPrev.style.display = "none";
  } else {
    btnPrev.style.display = "block";
  }
}
// bat su kien btn Next
btnNext.addEventListener("click", function () {
  // lay du lieu va hien thi danh sach cac news tiep theo
  getDataNews("us", ++pageNumber.textContent);
});
// btn Next
function checkBtnNext() {
  // neu page Number bang voi tong so tin tuc cua API thi an di
  if (pageNumber.textContent == Math.ceil(totalResults / userActive.pageSize)) {
    btnNext.style.display = "none";
  } else {
    btnNext.style.display = "block";
  }
}

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
