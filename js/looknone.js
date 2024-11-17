$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: true, // 자동 슬라이드
        pause: 3000, // 슬라이드 간격 (밀리초)
        pager: false, // 페이지네이션 표시
        controls: false // 이전/다음 버튼 표시
    });
});




$(document).ready(function() {
    // New Arrivals 슬라이드 기능
    let currentSlide = 0;
    const newSlides = $('.slide'); // 모든 New Arrivals 슬라이드 선택
    const totalNewSlides = newSlides.length; // 총 New Arrivals 슬라이드 수

    // New Arrivals 슬라이드 초기 설정
    updateNewSlides();

    // New Arrivals 이전 버튼 클릭 시
    $('.prev').click(function() {
        currentSlide = (currentSlide === 0) ? totalNewSlides - 1 : currentSlide - 1; // 인덱스 변경
        updateNewSlides(); // 슬라이드 업데이트
    });

    // New Arrivals 다음 버튼 클릭 시
    $('.next').click(function() {
        currentSlide = (currentSlide === totalNewSlides - 1) ? 0 : currentSlide + 1; // 인덱스 변경
        updateNewSlides(); // 슬라이드 업데이트
    });

    function updateNewSlides() {
        const offset = currentSlide * 100; // 현재 슬라이드에 따른 오프셋 계산
        $('.slide-list').css('transform', 'translateX(-' + offset + '%)'); // 슬라이드 이동
    }

    // MADE 슬라이드 기능
    let currentMadeSlide = 0;
    const madeSlides = $('.madeslide > .slide'); // 모든 MADE 슬라이드 선택
    const totalMadeSlides = madeSlides.length; // 총 MADE 슬라이드 수

    // MADE 슬라이드 초기 설정
    updateMadeSlides();

    // MADE 이전 버튼 클릭 시
    $('#prev-made').click(function() {
        currentMadeSlide = (currentMadeSlide === 0) ? totalMadeSlides - 1 : currentMadeSlide - 1; // 인덱스 변경
        updateMadeSlides(); // 슬라이드 업데이트
    });

    // MADE 다음 버튼 클릭 시
    $('#next-made').click(function() {
        currentMadeSlide = (currentMadeSlide === totalMadeSlides - 1) ? 0 : currentMadeSlide + 1; // 인덱스 변경
        updateMadeSlides(); // 슬라이드 업데이트
    });

    function updateMadeSlides() {
        const offset = currentMadeSlide * 100; // 현재 슬라이드에 따른 오프셋 계산
        $('.madeslide').css('transform', 'translateX(-' + offset + '%)'); // 슬라이드 이동
    }
    let currentAccSlide = 0;
    const accSlides = $('.accslide-list .slide'); // 모든 ACC 슬라이드 선택
    const totalAccSlides = accSlides.length; // 총 ACC 슬라이드 수

    updateAccSlides();

    $('#accbtnprev').click(function() {
        currentAccSlide = (currentAccSlide === 0) ? totalAccSlides - 1 : currentAccSlide - 1; // 인덱스 변경
        updateAccSlides(); // 슬라이드 업데이트
    });

    $('#accbtnnext').click(function() {
        currentAccSlide = (currentAccSlide === totalAccSlides - 1) ? 0 : currentAccSlide + 1; // 인덱스 변경
        updateAccSlides(); // 슬라이드 업데이트
    });

    function updateAccSlides() {
        const offset = currentAccSlide * 100; // 현재 슬라이드에 따른 오프셋 계산
        $('.accslider').css('transform', 'translateX(-' + offset + '%)'); // 슬라이드 이동
    }
});























$(".page-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500); //스크롤 맨위로 올리기
    return false;
})
$(".page-down").click(function(){
    $("html, body").animate({ scrollTop: $(document).height() }, 500); //스크롤 맨아래로 내리기
});
