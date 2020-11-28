//Initial investment



// var Amount = prompt("Enter the amount you are willing to spend");
// var BuySell = prompt("What is the buy or sell price?");
// var feePtc = prompt("what is the charging fee (i.e. 1% = type 0.01)");
// var feeAmount = Amount * feePtc;
// var QtyRes = (Amount/BuySell)-feeAmount;


var btnCalc = document.getElementById("btnCalc");

function calc(){

    var Amount = document.getElementById("aquisition").value;
    var BuySell = document.getElementById("BuySell").value;
    var feePtc = document.getElementById("feePct").value;


    if (Amount > 0 || feePtc > 0) {
      var feeAmt = document.getElementById("feeAmt").innerHTML = Amount * feePtc;
    }

    if (Amount > 0 || BuySell > 0){
      var QtyRes = document.getElementById("qty").innerHTML = (Amount-feeAmt)/BuySell;
    }

}


 function clear (){
  document.getElementById("aquisition").value = " ";
  BuySell.value = " ";
  feePtc.value = " ";
  document.getElementById("feeAmt");
}


btnCalc.addEventListener("click", calc);
document.getElementById("aquisition").addEventListener("click", clear);



// ROI
var btnCalrRoi = document.getElementById("btnCalcRoi");

function calcRoi (){

    var holdings = document.getElementById("holdings").value;
    var BuySellPrev = document.getElementById("BuySellPrev").value;
    var BuySellCurr = document.getElementById("BuySellCurr").value;


    if (holdings != 0 || BuySellPrev != 0 || BuySellCurr != 0) {
      var Roi = document.getElementById("Roi").innerHTML = (holdings * BuySellCurr) - (holdings * BuySellPrev);
    }

    if(Roi < 0){
      document.getElementById("Roi").style.background="#D64541";
      document.getElementById("Roi").style.color="#fff";
      document.getElementById("roiPct").style.color="#D64541";
      document.getElementById("roiPct").innerHTML ="<i class=\"fas fa-sort-down\"></i>"+ Math.round(((BuySellCurr - BuySellPrev)/BuySellPrev)*100) +"%";

    } else if (Roi > 0) {
      document.getElementById("Roi").style.background="#3FC380";
      document.getElementById("Roi").style.color="#fff";
      document.getElementById("roiPct").style.color="#3FC380";
      document.getElementById("roiPct").innerHTML ="<i class=\"fas fa-sort-up\"></i>" + Math.round(((BuySellCurr - BuySellPrev)/BuySellPrev)*100) +"%";
                                                    // +="<i class=\"fas fa-sort-up\"></i>" + ((BuySellCurr - BuySellPrev)/BuySellPrev)*100 +"%";
                                                    // adding with no stop add + in from of = like abobe
    }


}


function clearRoi (){
  document.getElementById("roiPct").innerHTML = " ";
  holdings.value = " ";
  BuySellPrev.value = " ";
  BuySellCurr.value = " ";
  Roi.innerHTML = " ";
  document.getElementById("Roi").style.background="#fff";
}


btnCalrRoi.addEventListener("click", calcRoi);
holdings.addEventListener("click", clearRoi);
