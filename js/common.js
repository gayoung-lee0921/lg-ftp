const tab = $(".tab");
const tabMenu = $(".tab .tab-menu li");
const tabContents = $(".tab .tab-contents > li");
tabMenu.on("click", function () {
  // .index()는 배열이라 0부터 시작
  const idx = $(this).index();
  const siblings = $(this).siblings();
  $(this).addClass("on");
  siblings.removeClass("on");
  const selectedContents = tabContents.eq(idx);
  const contentsSiblings = selectedContents.siblings();
  selectedContents.addClass("on");
  contentsSiblings.removeClass("on");
});
