
// 강아지 이미지를 랜덤으로 보여 주겠다
var dogImg=[];
var setDogImg;
var tmpDropImg;
var dragIndex;
var resultImg = [];
var ranIndex=[2,1,5,6,10,9,3,11,4,7,0,8];
window.onload=function(){
    var tmpImg=document.getElementsByClassName("mainDivImgDiv");
    var tmpDiv=document.getElementsByClassName("mainDivImgDiv");//div에 다시 넣어 주기 위해
    for(var index = 0; index < tmpImg.length; index++){
       dogImg[ranIndex[index]]=tmpImg[index].innerHTML;
       resultImg[index]=tmpImg[index].innerHTML;
    }
    for(var index = 0; index < tmpImg.length; index++){
        tmpDiv[index].innerHTML=dogImg[index];
    }
    console.log(dogImg);
    console.log(ranIndex.length);
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
            cnt=false;
            break;
        }
    }
    if(cnt == true){
        alert("성공성공");
    }
    console.log(nowImgArr)
    
}