//Gent J.
function cssMode(sheet) {
  document.getElementById("Theme").setAttribute("href", sheet);
}


function runDarkMode() {
    var dark = document.getElementById("dark");
    var light = document.getElementById("light");
    var btcHeader = document.getElementById("btcHeader")
    var btcChart = document.getElementById("btcChart")  
    var btcTb = document.getElementById("btcTb")
    
    dark.style.color = "#caeafa";

    light.onclick = function(){
                               cssMode("css/style.css");
                               btcHeader.setAttribute("src", 'https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover=');
                               btcChart.setAttribute("src", 'https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505');
                              // if in mobile mode want to put different widget
                              // if (window.innerWidth < 1100) {
                              //   btcChart.setAttribute("src", 'https://widget.coinlib.io/widget?type=single_v2&theme=light&coin_id=859&pref_coin_id=1505');
                              // } else {
                              //   btcChart.setAttribute("src", 'https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505');
                              // }                            
                               btcTb.setAttribute("src", 'https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=7&pref_coin_id=1505&graph=yes');
                               light.style.color = "#e0b369";
                               dark.style.color = "#575655"
                            };

    dark.onclick = function(){
                                cssMode("css/style_dark.css");
                                btcHeader.setAttribute("src", 'https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=');
                                btcChart.setAttribute("src", 'https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=859&pref_coin_id=1505');
                                // if in mobile mode want to put different widget
                                // if (window.innerWidth < 1100) {
                                //   btcChart.setAttribute("src", 'https://widget.coinlib.io/widget?type=single_v2&theme=dark&coin_id=859&pref_coin_id=1505');
                                // } else {
                                //   btcChart.setAttribute("src", 'https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=859&pref_coin_id=1505');
                                // }
                                btcTb.setAttribute("src", 'https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=7&pref_coin_id=1505&graph=yes');
                                dark.style.color = "#caeafa";
                                light.style.color = "#575655"
                            };
}

window.onload = runDarkMode;

