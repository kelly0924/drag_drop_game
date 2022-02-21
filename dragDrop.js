
// 강아지 이미지를 랜덤으로 보여 주겠다
var setDogImg;
var tmpDropImg;
var dragIndex;
var timer;
var dogImg=[];
var resultImg = [];
var ranIndex=[2,1,5,6,10,9,3,11,4,7,0,8];
window.onload=function(){
    randomShowImg();
    
}
function randomShowImg(){//화면에 랜덤으로 이미지를 섞어서 보여주는 함수
    var tmpImg=document.getElementsByClassName("mainDivImgDiv");
    var tmpDiv=document.getElementsByClassName("mainDivImgDiv");//div에 다시 넣어 주기 위해
    for(var index = 0; index < tmpImg.length; index++){
       dogImg[ranIndex[index]]=tmpImg[index].innerHTML;
       resultImg[index]=tmpImg[index].innerHTML;
    }
    for(var index = 0; index < tmpImg.length; index++){
        tmpDiv[index].innerHTML=dogImg[index];
    }
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
    // console.log(index);
    // console.log(document.getElementsByClassName("mainDivImgDiv")[index].innerHTML=setDogImg);
   
}

function compareImg(){
   var nowImgArr=[];
   var cnt=true;
   var nowImg= document.getElementsByClassName("mainDivImgDiv");
   console.log(resultImg)
   for(var index = 0; index < resultImg.length; index++){
        nowImgArr[index]=nowImg[index].innerHTML;
    }
    for(var i = 0; i<resultImg.length; i++){
        if(nowImgArr[i] == resultImg[i]){
            continue;
        }else{
            alert("다시 하기");
            randomShowImg();
            startTime();
            cnt=false;
            break;
        }
    }
    if(cnt == true){
        alert("성공성공");
        clearInterval(timer);
    }
     clearInterval(timer);
    console.log(nowImgArr)
    
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
 
