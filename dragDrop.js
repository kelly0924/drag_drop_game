
var tmpTime=document.getElementById("mainDivTime");
var index=0;
window.onload=function(){
    for(var i=0; i< 5; i++){//5번 반복하면서 타이머 이미지 보여주기 
        var doingTime=setTimeout(countTime(),1000);

    }
    tmpTime.style.display="none";
    document.getElementById("mainDivSelect").style.display="block";
    document.getElementById("mainDivMake").style.display="block";

}
function countTime(){
  
  for(var i = 0; i < 5; i++){
    var tmpTimeImg=document.getElementsByTagName("mainDivtimeImg");
    //window.getComputedStyle(tmpTimeImg[i]).display="block";
    tmpTime.innerHTML=tmpTimeImg[i];
  }

}