var isOpen = false; //#detail 화면에 표시된 상태 저장 변수
	
var bigPic = document.querySelector("#cup");  
var smallPics = document.querySelectorAll(".small");  
// 작은 그림의 src 정보 저장 - newPic
// 작은 그림 선택하면 bigPic 그림바꾸기
for( var i=0; i<smallPics.length; i++){
    smallPics[i].addEventListener("click", function(){
        newPic=this.src;
        bigPic.setAttribute("src", newPic);
    })
}


// 상세 설명 보기 클릭하면 내용 펼치기, '상세 설명 닫기' 로 바꾸기
// 상세 설명 닫기 클릭하면 내용 숨기기, '상세 설명 보기' 로 바꾸기
var view=document.querySelector("#view");
view.addEventListener("click", function(){
    if(isOpen == false) {
        document.querySelector("#detail").style.display="block";
        view.innerHTML="상세 설명 닫기"
        isOpen=true;
    }
    else {
        document.querySelector("#detail").style.display="none";
        view.innerHTML="상세 설명 보기"
        isOpen=false;
    }
})


