//CryptoKeyring



//useful tips (info)

var tip1 = document.getElementById("tip1");
var icn1 = document.getElementById("icn1");
var tip2 = document.getElementById("tip2");
var icn2 = document.getElementById("icn2");
var tip3 = document.getElementById("tip3");
var icn3 = document.getElementById("icn3");
var tip4 = document.getElementById("tip4");
var icn4 = document.getElementById("icn4");
var tip5 = document.getElementById("tip5");
var icn5 = document.getElementById("icn5");
var tip6 = document.getElementById("tip6");
var icn6 = document.getElementById("icn6");
var tip7 = document.getElementById("tip7");
var icn7 = document.getElementById("icn7");
var tip8 = document.getElementById("tip8");
var icn8 = document.getElementById("icn8");
var tip9 = document.getElementById("tip9");
var icn9 = document.getElementById("icn9");



function showTip1 (){
  tip1.className ="start-msg";
}

function hideTip1 (){
  tip1.className ="none";
}

function showTip2 (){
  tip2.className ="start-msg";
}

function hideTip2 (){
  tip2.className ="none";
}


function showTip3 (){
  tip3.className ="start-msg";
}

function hideTip3 (){
  tip3.className ="none";
}

function showTip4 (){
  tip4.className ="start-msg";
}

function hideTip4 (){
  tip4.className ="none";
}


function showTip5 (){
  tip5.className ="start-msg";
}

function hideTip5 (){
  tip5.className ="none";
}


function showTip6 (){
  tip6.className ="start-msg";
}

function hideTip6 (){
  tip6.className ="none";
}


function showTip7(){
  tip7.className ="start-msg";
}

function hideTip7 (){
  tip7.className ="none";
}


function showTip8(){
  tip8.className ="start-msg";
}

function hideTip8 (){
  tip8.className ="none";
}

function showTip9(){
  tip9.className ="start-msg";
}

function hideTip9 (){
  tip9.className ="none";
}


icn1.addEventListener("mouseover", showTip1);
icn1.addEventListener("mouseout", hideTip1);
icn2.addEventListener("mouseover", showTip2);
icn2.addEventListener("mouseout", hideTip2);
icn3.addEventListener("mouseover", showTip3);
icn3.addEventListener("mouseout", hideTip3);
icn4.addEventListener("mouseover", showTip4);
icn4.addEventListener("mouseout", hideTip4);
icn5.addEventListener("mouseover", showTip5);
icn5.addEventListener("mouseout", hideTip5);
icn6.addEventListener("mouseover", showTip6);
icn6.addEventListener("mouseout", hideTip6);
icn7.addEventListener("mouseover", showTip7);
icn7.addEventListener("mouseout", hideTip7);
icn8.addEventListener("mouseover", showTip8);
icn8.addEventListener("mouseout", hideTip8);
icn9.addEventListener("mouseover", showTip9);
icn9.addEventListener("mouseout", hideTip9);



//Initial investment

var btnCalc = document.getElementById("btnCalc");
var btnFeeAdd = document.getElementById("btnFeeAdd");
var btnFeeRemove = document.getElementById("btnFeeRemove");


function addFee(){
  var fee2 = document.getElementById("fee2");
  fee2.className="calc margin animated fadeIn";
}

function removeFee(){
  fee2.className="none";
}


function calc(){

    var Amount = document.getElementById("Acquisition").value;
    var BuySell = document.getElementById("BuySell").value;
    var feePtc1 = document.getElementById("feePct1").value;
    var feePtc2 = document.getElementById("feePct2").value;


    if (Amount > 0 || feePtc > 0) {
      var feeAmt = document.getElementById("feeAmt").innerHTML = ((Amount * feePtc1)+(Amount * feePtc2)).toLocaleString("en");
    }

    if (Amount > 0 || BuySell > 0){
      var QtyRes = document.getElementById("qty");
        QtyRes.innerHTML = ((Amount-feeAmt)/BuySell).toLocaleString("en");
                                                              // Number(Math.round((Amount-feeAmt)/BuySell)).toFixed(4)
        QtyRes.style.background="#F4B350";
        if(feeAmt!=0){
        document.getElementById("feeAmt").style.background="#E26A6A";
      }
      else {
        document.getElementById("feeAmt").style.background="#66CC99";
      }
    }
}


 function clear (){
  document.getElementById("Acquisition").value = " ";
  BuySell.value = " ";
  document.getElementById("feePct1").value = " ";
  document.getElementById("feePct2").value = " ";
  feeAmt.innerHTML = " ";
  document.getElementById("qty").innerHTML = " ";
  document.getElementById("feeAmt").style.background="#BDC3C7";
  document.getElementById("feeAmt").style.background="#BDC3C7";
  document.getElementById("qty").style.background="#BDC3C7";
}


btnFeeAdd.addEventListener("click", addFee);
btnFeeRemove.addEventListener("click", removeFee);
btnCalc.addEventListener("click", calc);
document.getElementById("Acquisition").addEventListener("click", clear);




// ROI
var btnCalrRoi = document.getElementById("btnCalcRoi");

function calcRoi (){

    var holdings = document.getElementById("holdings").value;
    var BuySellPrev = document.getElementById("BuySellPrev").value;
    var BuySellCurr = document.getElementById("BuySellCurr").value;
    var Roi = document.getElementById("Roi");
    var resultRoi = ((holdings * BuySellCurr) - (holdings * BuySellPrev));
    var RoiPctChange = (Math.round(((BuySellCurr - BuySellPrev)/BuySellPrev)*100));

    if (holdings != 0 && BuySellPrev != 0 || BuySellCurr != 0) {
      if(resultRoi > 500000000000 || resultRoi < -500000000000){
      Roi.innerHTML = resultRoi.toExponential();
    } else {
      Roi.innerHTML = resultRoi.toLocaleString("en");
    }

    }

    if(resultRoi < 0){
      document.getElementById("Roi").style.background="#D64541";
      document.getElementById("Roi").style.color="#674172";
      document.getElementById("roiPct").style.color="#D64541";

      if(RoiPctChange > 500000000000) {
        document.getElementById("roiPct").innerHTML ="<i class=\"fas fa-sort-down\"></i>"+ RoiPctChange.toExponential() +"%";
      } else {
          document.getElementById("roiPct").innerHTML ="<i class=\"fas fa-sort-down\"></i>"+ RoiPctChange.toLocaleString("en") +"%";
      }


    } else if (resultRoi > 0) {
      document.getElementById("Roi").style.background="#1E824C";
      document.getElementById("Roi").style.color="#fff";
      document.getElementById("roiPct").style.color="#1E824C";

      if(RoiPctChange > 500000000000) {
        document.getElementById("roiPct").innerHTML ="<i class=\"fas fa-sort-up\"></i>"+ RoiPctChange.toExponential() +"%";
      } else {
          document.getElementById("roiPct").innerHTML ="<i class=\"fas fa-sort-up\"></i>"+ RoiPctChange.toLocaleString("en") +"%";
      }

                                                    // +="<i class=\"fas fa-sort-up\"></i>" + ((BuySellCurr - BuySellPrev)/BuySellPrev)*100 +"%";
                                                    // adding with no stop add + in from of = like abobe
    }

}


function clearRoi (){
  holdings.value = " ";
  BuySellPrev.value = " ";
  BuySellCurr.value = " ";
  Roi.innerHTML = " ";
  document.getElementById("roiPct").innerHTML = " ";
  document.getElementById("Roi").style.background="#BDC3C7";

}


btnCalrRoi.addEventListener("click", calcRoi);
holdings.addEventListener("click", clearRoi);




//convertor
var btnCalcMult = document.getElementById("btnCalcMult");

function covertor(){
  var holdMult = document.getElementById("holdMult").value;
  var priceMult = document.getElementById("priceMult").value;
  var MultOutput = document.getElementById("MultOutput");
  var result = holdMult * priceMult;

  if(holdMult > 0 || priceMult > 0 ){

    if(result > 500000000000){
      MultOutput.innerHTML = result.toExponential();
      MultOutput.style.background="#F4B350";
    } else {
      MultOutput.innerHTML = result.toLocaleString("en");
      MultOutput.style.background="#F4B350";
    }
  }
}


function clearConverotr (){
   document.getElementById("holdMult").value = " ";
   document.getElementById("priceMult").value = " ";
   document.getElementById("MultOutput").innerHTML = " ";
    MultOutput.style.background="#BDC3C7";
}

btnCalcMult.addEventListener("click", covertor);
document.getElementById("holdMult").addEventListener("click", clearConverotr);
