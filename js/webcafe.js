var menuLi = $('.menu > li');
var subLink = $('.sub-menu a');
var section = $('.board section');

var tab = $('.tab');
var boardLi = $('.board li'); //유사배열 정보가 변수에 담긴다

subLink.addClass('icon-dot-circled');
boardLi.addClass('icon-dot-circled');

//메인메뉴의 하위 메뉴를 제어하기 위한 스크립트
menuLi.on('mouseover focusin', function(){
  menuLi.removeClass('menu-act');
  $(this).addClass('menu-act');
});


//공지사항 및 자료실 탭 제어를 위한 스크립트
tab.on('click keyup', function(e){
  e.preventDefault();
  if(e.type === 'click' || e.keyCode === 13)
  {
    section.removeClass('board-act');
    $(this).parent().addClass('board-act');
  }
});