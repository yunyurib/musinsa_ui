const bImgMotionSetInterval = setInterval(bImgMotion, 9000);
const introObj01 = $(".intro02__objBox01");
const introObj02 = $(".full4__objImg:last-child");
const introObj03 = $(".full5__objImg");

$(document).ready(function () {
  fullset(); //스크롤 함수
  quickClick(); //퀵메뉴 클릭시 함수

  //화면이 로드 되었을때는 퀵버튼에 1번째에 불이 들어옴.
  $("#fullpage .quick ul :first-child").addClass("on");
  bImgMotion(); //컨텐츠1번 이미지 변경 함수
});

function fullset() {
  //fullpage 안에 섹션이(.showcase-content) 몇개인지 확인
  const pageindex = $("#fullpage .showcase-content").size();

  for (var i = 1; i <= pageindex; i++) {
    $("#fullpage > .quick > ul").append("<li></li>");
  }

  //마우스 휠 이벤트 영역
  $(window).bind("mousewheel", function (event) {
    let page = $(".quick ul li.on");

    // 페이지 세로길이 계산
    if ($("body").find("#fullpage:animated").length >= 1) return false;

    // 마우스 휠을 위로 올렸을 때
    if (event.originalEvent.wheelDelta >= 0) {
      var before = page.index();
      if (page.index() >= 0) {
        page.prev().addClass("on").siblings(".on").removeClass("on"); //퀵버튼옮기기

        // 마우스 휠을 위로 올렸을 때 오브젝트 패럴랙스 되돌리기
        if (page.index() === 5) {
          introObj03.css("bottom", "-85%");
        }
        if (page.index() === 4) {
          introObj02.css("bottom", "-62%");
        }
        if (page.index() === 3) {
          introObj01.css("bottom", "-80%");
        }
      }

      //콘텐츠의 세로 값 확인
      var pagelength = 0;
      for (var i = 1; i < before; i++) {
        pagelength += $(".full" + i).height();
      }
      if (page.index() > 0) {
        //첫번째 페이지가 아닐때 (index는 0부터 시작임)
        page = page.index() - 1;
        $("#fullpage").animate({ top: -pagelength + "px" }, 500, "swing");
      } else {
        //첫번째 페이지 일 때
      }
    } else {
      // 마우스 휠을 아래로 내릴 때
      //다음페이지번호
      const nextPage = parseInt(page.index() + 1);
      //마지막 페이지번호
      const lastPageNum = parseInt($(".quick ul li").size());

      //퀵버튼옮기기
      if (page.index() <= $(".quick ul li").size() - 1) {
        page.next().addClass("on").siblings(".on").removeClass("on");

        // 마우스 휠을 내렸을 때 오브젝트 패럴랙스
        if (page.index() === 2) {
          introObj01.css("bottom", "-55%");
        }
        if (page.index() === 3) {
          introObj02.css("bottom", "-28%");
        }
        if (page.index() === 4) {
          introObj03.css("bottom", "-60%");
        }
      }

      if (nextPage < lastPageNum) {
        //마지막 페이지가 아닐때만 animate !
        let pagelength = 0;
        for (var i = 1; i < nextPage + 1; i++) {
          //총 페이지 길이 구하기
          //ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
          pagelength += $(".full" + i).height();
        }
        $("#fullpage").animate({ top: -pagelength + "px" }, 500, "swing");
      } else {
        // 현재가 마지막 페이지 일때
      }
    }
  });

  $(window).resize(function () {
    //페이지가 100%이기때문에 브라우저가 resize 될때마다 스크롤 위치가 그대로 남아있는것을 방지하기 위해
    const resizeindex = $(".quick ul li.on").index() + 1;

    let pagelength = 0;
    for (var i = 1; i < resizeindex; i++) {
      //총 페이지 길이 구하기
      //ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
      pagelength += $(".full" + i).height();
    }

    $("#fullpage").animate({ top: -pagelength + "px" }, 0);
  });
}
// 사이드 퀵버튼 클릭 이동
function quickClick() {
  $(".quick li").click(function () {
    const gnbindex = $(this).index() + 1;
    let length = 0;
    for (var i = 1; i < gnbindex; i++) {
      length += $(".full" + i).height();
    }
    if ($("body").find("#fullpage:animated").length >= 1) return false;
    $(this).addClass("on").siblings("li").removeClass("on");

    $("#fullpage").animate({ top: -length + "px" }, 500, "swing");
    return false;
  });
}

// 첫번째 컨텐츠 이미지 변경 함수
function bImgMotion() {
  const bImg1 = $(".bImg1");
  const bImg2 = $(".bImg2");
  const bImg3 = $(".bImg3");

  setTimeout(function () {
    bImg1.animate({ opacity: 1 }, 500);
    bImg3.animate({ opacity: 0 }, 500);
  }, 1000);
  setTimeout(function () {
    bImg2.animate({ opacity: 1 }, 500);
    bImg1.animate({ opacity: 0 }, 500);
  }, 2000);
  setTimeout(function () {
    bImg3.animate({ opacity: 1 }, 500);
    bImg2.animate({ opacity: 0 }, 500);
  }, 3000);
}
