
function suma (){
    var num1 =document.getElementById("num1").value ;
    num1= parseInt (num1);
    var num2  = document.getElementById("num2").value ;
    num2= parseInt (num2);
    var res ;
    res = num1 +num2;
    document.getElementById("res").value = res;
}
function multi (){
    var num3 =document.getElementById("num3").value ;
    num3= parseInt (num3);
    var num4  = document.getElementById("num4").value ;
    num4= parseInt (num4);
    var resm ;
    resm = num3 *num4;
    document.getElementById("resm").value = resm;
}
function resta (){
    var num5 =document.getElementById("num5").value ;
    num5= parseInt (num5);
    var num6  = document.getElementById("num6").value ;
    num6= parseInt (num6);
    var resr ;
    resr = num5 -num6;
    document.getElementById("resr").value = resr;
}
function div (){
    var num7 =document.getElementById("num7").value ;
    num7= parseInt (num7);
    var num8  = document.getElementById("num8").value ;
    num8= parseInt (num8);
    var resd ;
    resd = num7 /num8;
    document.getElementById("resd").value = resd;
}