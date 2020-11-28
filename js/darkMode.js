//Gent J.
function cssMode(sheet) {
  document.getElementById("Theme").setAttribute("href", sheet);
}


function runDarkMode() {
    var dark = document.getElementById("dark");
    var light = document.getElementById("light");
    
    dark.style.color = "#caeafa";

    light.onclick = function(){
                               cssMode("css/style.css");
                               light.style.color = "#e0b369";
                               dark.style.color = "#575655"
                            };

    dark.onclick = function(){
                                cssMode("css/style_dark.css");
                                dark.style.color = "#caeafa";
                                light.style.color = "#575655"
                            };
}

window.onload = runDarkMode;
