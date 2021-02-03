// 뷰타입 스크립트
const viewFull = document.querySelector(".view_full");
const viewGrid = document.querySelector(".view_grid");
const viewList = document.querySelector(".view_list");

const productList = document.querySelector(".product-main-productList");
const productItemLink = document.querySelectorAll(".productItem__link");
const productItemImg = document.querySelectorAll(".productItem__imgBox");
const productItemLabel = document.querySelector(".productItem__imgBox__label");

const screenMedia = window.matchMedia("screen and (max-width: 600px)");
const windowWidth = window.outerWidth;

window.onload = function () {
  // 로드시 크기에 따른 뷰타입
  if (windowWidth >= 600) {
    viewTypeBasicsGrid();
  } else {
    viewTypeBasicsNormal();
  }
  //  브라우저 크기 변동시 반응형 뷰 타입
  screenMedia.addEventListener("change", (e) => {
    if (e.matches) {
      viewTypeBasicsNormal();
    } else {
      viewTypeBasicsGrid();
    }
  });
};

// 뷰 타입 아이콘 클릭시 이벤트
function viewTypeNormal() {
  viewTypeBasicsGrid();
}
function viewTypeGrid() {
  viewTypeBasicsList();
}
function viewTypeList() {
  viewTypeBasicsNormal();
}

// 뷰타입 아이콘의 상태에 따라 스타일 적용
// 그리드 상태
function viewTypeBasicsGrid() {
  viewGrid.classList.add("act");
  viewFull.classList.remove("act");
  viewList.classList.remove("act");
  productList.style.display = "flex";
  productItemImg.forEach((item) => {
    item.classList.add("tGrid");
    item.classList.remove("tList");
  });
  productItemLink.forEach((item) => {
    item.classList.remove("tList");
  });
  productItemLabel.classList.remove("tList");
}
// 노멀 상태
function viewTypeBasicsNormal() {
  viewFull.classList.add("act");
  viewList.classList.remove("act");
  viewGrid.classList.remove("act");
  productList.style.display = "block";
  productItemLink.forEach((item) => {
    item.classList.remove("tGrid");
    item.classList.remove("tList");
  });
  productItemImg.forEach((item) => {
    item.classList.remove("tGrid");
    item.classList.remove("tList");
  });
  productItemLabel.classList.remove("tList");
}
// 리스트 상태
function viewTypeBasicsList() {
  viewGrid.classList.remove("act");
  viewList.classList.add("act");
  productList.style.display = "block";
  productItemLink.forEach((item) => {
    item.classList.remove("tGrid");
    item.classList.add("tList");
  });
  productItemImg.forEach((item) => {
    item.classList.add("tList");
  });
  productItemLabel.classList.add("tList");
}
