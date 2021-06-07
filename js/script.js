var createsum = document.getElementsById('create-burger');

var resultSumElement = document.getElementsById('burger-cost');

createsum.addEventListener("click", function(){
   var resultSumInt = 0;

   var checkNum = document.getElementsByClassName("add-items");

   for(var i=o; i < checkNum.length; i++ ){
       if(checkNum[i].checked){ 

           resultSumInt += parseInt(checkNum[i].value);

       }
   }
    resultSumElement.innerHTML = " il risultato e' " + resultSumInt;
})