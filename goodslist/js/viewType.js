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

//  로드시 반응형 뷰 타입
function msg() {
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
}
