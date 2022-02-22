
// 강아지 이미지를 랜덤으로 보여 주겠다
var setDogImg;
var tmpDropImg;
var dragIndex;
var timer;
var dogImg=[];
var resultImg = [];
var ranArr=[];
var resultMin;
var resultSec;
var resultMilesc;
window.onload=function(){
    randomShowImg();  
}

function getImgDragEvent(index){//드래그 시작 하면서 실행 되는 이벤트 
    //index 는 0부터 11까지
    setDogImg=document.getElementsByClassName("mainDivImgDiv")[index].innerHTML
    // console.log(index);
    // console.log("setDog"+setDogImg);
    dragIndex = index;
    
}

function setImgOverEvent(){//드래그 이벤트가 되는 동안 실행 되는 이벤트
    event.preventDefault()
}

function setImgDropEvent(index){
    tmpDropImg = document.getElementsByClassName("mainDivImgDiv")[index].innerHTML;//드롭 될 곳에 이미지 기억 하기 
    //document.getElementsByClassName("mainDivImgDiv")[index].innerHTML="";
    document.getElementsByClassName("mainDivImgDiv")[index].innerHTML=setDogImg;
    //document.getElementsByClassName("mainDivImgDiv")[dragIndex].innerHTML=" ";
    document.getElementsByClassName("mainDivImgDiv")[dragIndex].innerHTML=tmpDropImg;
}
function againPlayGame(){
    var nowImgArr=[];
    var cnt=true;
    var nowImg= document.getElementsByClassName("mainDivImgDiv");
    for(var index = 0; index < resultImg.length; index++){
            nowImgArr[index]=nowImg[index].innerHTML;
    }
    console.log(resultImg);
    for(var i = 0; i<resultImg.length; i++){
        if(nowImgArr[i] == resultImg[i]){
            cnt=true;
            continue;
        }else{
            cnt=false;
            break;
        }
    }
    return cnt;
}

function startGame(){
    startTime();

}
function startTime(){
    var clickedTime=new Date().getTime();//객체 사용 new 로 사용 파란 색 객체-> 함수들을 묶은 것이다. 
                timer=setInterval(function(){//함수 역활은 일정 시간 마다 반복 해준다. 100ms=1s 매개 변수가 2개 첫 함수, 시간
                var nowTime=new Date().getTime();
                var duration=new Date(nowTime - clickedTime);
                var min=duration.getMinutes();
                var sec=duration.getSeconds();
                var millesc=duration.getMilliseconds();
                document.getElementById("mainDivTime").innerHTML=min+ ":" + sec + ":" +millesc;

            },100);
}
function randomShowImg(){//화면에 랜덤으로 이미지를 섞어서 보여주는 함수
    var tmpImg=document.getElementsByClassName("mainDivImgDiv");
    var tmpDiv=document.getElementsByClassName("mainDivImgDiv");//div에 다시 넣어 주기 위해
    for(var i=0; i<12; i++){
        ranArr[i]=Math.floor(Math.random()*12);
        for(var j=0; j<i; j++){
            if(ranArr[i] == ranArr[j]){
                i --;
                break;
            }
        }
    }
    for(var index = 0; index < tmpImg.length; index++){
       dogImg[ranArr[index]]=tmpImg[index].innerHTML;
       resultImg[index]=tmpImg[index].innerHTML;
    }
    for(var index = 0; index < tmpImg.length; index++){
        tmpDiv[index].innerHTML=dogImg[index];
    }
}

function compareImg(){
    var tmpCnt=againPlayGame();

    if(tmpCnt == true){
        // alert("완성! 완성 하는데 걸린 시간 : " +   document.getElementById("mainDivTime").innerHTML);
        document.getElementById("headerDivH1").innerHTML="";
        document.getElementById("headerDivH1").innerHTML="완성 하였습니다.";
        document.getElementsByClassName("mainDivButtonImg")[0].style.display="none";
        document.getElementsByClassName("mainDivButtonImg")[1].style.display="none";
        document.getElementById("mainDivButtonAgainImg").style.display="block";
        clearInterval(timer);     
        //location.reload();
    }else {
        //clearInterval(timer); 
        document.getElementById("headerDivH1").innerHTML="";
        document.getElementById("headerDivH1").innerHTML="틀렸습니다. 계속 진행 해주세요!";
    }
    //clearInterval(timer);      
}

function playAgain(){
    location.reload();
}