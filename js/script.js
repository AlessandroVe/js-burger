var user_choose = prompt("Che panino preferisci?");
document.getElementById("title-burger").innerHTML= user_choose;
if(user_choose.length===0){
    alert("Inserisci nome valido");
}





var createsum = document.getElementById('create-burger');


var resultSumElement = document.getElementById('burger-cost');

createsum.addEventListener("click", function(){
   var resultSumInt = 0;

   var checkNum = document.getElementsByClassName("add-items");

   for(var i=0; i < checkNum.length; i++ ){
       if(checkNum[i].checked){ 

           resultSumInt += parseFloat(checkNum[i].value);

       }
    }
    resultSumElement.innerHTML = resultSumInt + "$";

    var discount = parseInt(document.getElementById('discount').value);
    var sale= 0.2;
    if(discount===123456){
        var totalcost = resultSumInt - (resultSumInt*sale);
        resultSumElement.innerHTML = totalcost + "$";  
    }
})

