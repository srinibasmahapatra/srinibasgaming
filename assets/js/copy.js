var message = "Sorry ! Function Disabled";

function clickIE() {
    if (document.all) {
        alert(message);
        return false;
    }
}
function clickNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == 2 || e.which == 3) {
            alert(message);
            return false;
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS;
}
else {
    document.onmouseup = clickNS;
    document.oncontextmenu = clickIE;
}

document.oncontextmenu = new Function("return false")
    
    
    
    // Keyword Function Disabled
    
      
            document.onkeydown = function(e) {
            if(event.keyCode == 123) {
            return false;
            }
            if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
            return false;
            }
            if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
            return false;
            }
            if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
            return false;
            }
            if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
            return false;
            }
            if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
            return false;
            }
            if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
            return false;
            }
            if(e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)){
            return false;
            }
            if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
            return false;
            }
            if(e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)){
            return false;
            }
            if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
            return false;
            }
            }
         