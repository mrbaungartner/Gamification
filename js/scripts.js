include("http://code.jquery.com/jquery-1.9.1.js");
include("http://code.jquery.com/ui/1.10.1/jquery-ui.js");
// Retirar, trate-se do mock
include("js/mock.js");

include("js/javaScript.js");
include("js/sorttable.js");





//MODAL
include("./modal/js/jquery.simplemodal.js");
include("./modal/js/modal.js");



// TESTE SCROLLBAR
include("js/jquery.jscrollpane.min.js");
include("js/jquery.mousewheel.js");


function include(url) {
    document.write('<script src="' + url + '"></script>');
}