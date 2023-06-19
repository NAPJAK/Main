

//유튜브 비디오 호버시 정보 div 보여주기 구현//
const videoTag = document.querySelector(".video");
const videoExp = document.querySelector(".section2-text");

//유튜브 영상 div에 마우스가 오버되었을 시, showup클래스를 추가해줌으로써 영상 뒤에 숨겨진 videoExp를 오른쪽으로 슬라이드시킴//
videoTag.addEventListener("mouseover", function(){
    videoExp.classList.add('showup');
});

//유로메이트의 강점 4가지(section3) 애니메이션 구현//
document.addEventListener("scroll", function(){
    //section3-cont 지정//
    const ruleTag = document.querySelector(".section3-cont");
    //section3-cont의 상단과 하단을 getBoundingClientRect를 사용해 계산//
    let ruleTop = ruleTag.getBoundingClientRect().top;
    let ruleBottom = ruleTag.getBoundingClientRect().bottom;
    //ruleTop * 3값보다 scrollY값이 높고, ruleBottom이 0보다 클때 showrules클래스를 각 ruleExp태그에 추가해줌으로써 section3로 스크롤 했을 때 애니메이션 효과 구현//
    if(ruleTop * 3 < window.scrollY && ruleBottom > 0){
        console.log("안");
        const ruleExp1 = document.querySelector(".rule-1");
        const ruleExp2 = document.querySelector(".rule-2");
        const ruleExp3 = document.querySelector(".rule-3");
        const ruleExp4 = document.querySelector(".rule-4");

        ruleExp1.classList.add('showrules');
        ruleExp2.classList.add('showrules');
        ruleExp3.classList.add('showrules');
        ruleExp4.classList.add('showrules');
    }
})

//슬라이더 구현//
//슬라이더 요소에 필요한 요소들을 지정//
const slider = document.querySelector(".slider");
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
const buttons = document.querySelectorAll(".wrapper .slide-btn");

console.log(slider, carousel, images, prev, next);

let imageIndex = 0,
    intervalid;

//자동으로 슬라이드가 넘어가는 효과//
const autoSlide = () => {
    //함수를 반복 실행하는 함수인 setInterval을 사용해 2초마다 slideImage를 호출함으로써 자동 슬라이드 애니메이션 구현// 
    intervalid = setInterval(() => slideImage(++imageIndex), 2000);
};
//자동 슬라이드 함수 실행//
autoSlide();

//슬라이드가 넘어갈때마다 바뀌는 이미지//
const slideImage = () => {
    //carousel이 이동할 때 마다 해당 이미지의 imageIndex값을 계산함.//
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    //carousel(나열된 이미지)를 이동시켜 슬라이드에 맞는 특정 이미지를 보여줌// 
    carousel.style.transform = `translate(-${imageIndex*100}%)`;
    console.log(imageIndex);
};

//양쪽의 슬라이드 버튼 클릭시 슬라이드가 넘어가는 효과//
const updateClick = (e) => {
    //클릭시 기존에 지속되던 자동 슬라이드를 멈춤//
    clearInterval(intervalid);
    //버튼 클릭에 따라 slideImage 함수처럼 이미지의 imageIndex값을 계산//
    imageIndex += e.target.id === "prev" ? -1 : 1;
    slideImage(imageIndex);
    console.log("click");
}
//양쪽의 버튼 클릭시 updateClick 함수 실행//
buttons.forEach(button => button.addEventListener("click", updateClick));
//슬라이드에 마우스가 올라갈 시 자동 슬라이드를 멈춤//
slider.addEventListener("mouseover", () => clearInterval(intervalid));
slider.addEventListener("mouseleave", autoSlide);