var imgtag = "<img src='https://bitcoin.org/img/icons/opengraph.png' width='18'>";
var ws = new WebSocket("wss://api2.bitfinex.com:3000/ws");
ws.onopen = function(){
  ws.send(JSON.stringify({
                          "event":"subscribe",
                          "channel":"ticker",
                          "pair":"BTCUSD"}))
};
ws.onmessage = function(msg){
  var response = JSON.parse(msg.data);
    //console.log(response);
  var hb = response[1];
  if(hb != "hb"){
    document.getElementById("btcwidget").innerHTML = imgtag +' ' + response[3].toFixed(2) + " <br> USD Current Price" ;
  }
};
