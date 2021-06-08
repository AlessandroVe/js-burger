var user_choose = prompt("Che panino preferisci?");
var menu_buger= ["Crispy","Big","Double","McChicken"];
for(var i = 1 ; i<= menu_buger.length ;i++){
    if(user_choose === menu_buger[i]){
        alert("Scegli pure gli ingredienti");
        document.getElementById("title-burger").innerHTML= user_choose;
        break;
    }else{
        alert("Inserisci nome valido");
        break;
    }
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

