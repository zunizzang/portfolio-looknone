$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: true, // 자동 슬라이드
        pause: 3000, // 슬라이드 간격 (밀리초)
        pager: false, // 페이지네이션 표시
        controls: false // 이전/다음 버튼 표시
    });
});
$(document).ready(function() {
    let currentIndex = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    // 슬라이드 표시 함수
    function showSlide(index) {
        const slideWidth = $('.slider').width(); // 슬라이드의 너비
        $('.slide-list').css('transform', 'translateX(' + (-slideWidth * index) + 'px)');
    }

    $('.next').click(function() {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0; // 마지막 슬라이드에서 처음으로
        }
        showSlide(currentIndex);
    });

    $('.prev').click(function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1; // 처음 슬라이드에서 마지막으로
        }
        showSlide(currentIndex);
    });
});
$(document).ready(function() {
    let currentIndex = 0;
    const slides = $('.accslider');
    const totalSlides = slides.length;

    // 슬라이드 표시 함수
    function showSlide(index) {
        const slideWidth = $('.acc-slide').width(); // 슬라이드의 너비
        $('.accslide-list').css('transform', 'translateX(' + (-slideWidth * index) + 'px)');
    }

    $('.accbtnnext').click(function() {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0; // 마지막 슬라이드에서 처음으로
        }
        showSlide(currentIndex);
    });

    $('.accbtnprev').click(function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1; // 처음 슬라이드에서 마지막으로
        }
        showSlide(currentIndex);
    });
});
$(".page-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500); //스크롤 맨위로 올리기
    return false;
})
$(".page-down").click(function(){
    $("html, body").animate({ scrollTop: $(document).height() }, 500); //스크롤 맨아래로 내리기
});
