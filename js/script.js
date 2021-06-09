var user_choose = prompt("Che panino preferisci? Crispy ,Big ,Double, McChicken");
var menu_buger = ["Crispy","Big","Double","McChicken"];

while(!menu_buger.includes(user_choose)){
    alert("inserisci nome valido ");
    user_choose = prompt("Che panino preferisci?");
}
document.getElementById("title-buger").innerHTML= user_choose;





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

