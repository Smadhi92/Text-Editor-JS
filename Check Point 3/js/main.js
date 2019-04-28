function bold() {

 var c=document.getElementById("txt");

 if (c.style.fontWeight != "bold"){
    c.style.fontWeight = "bold";
 }
 else{
    c.style.fontWeight="normal";
 }
}
 //   console.log(  window.getComputedStyle(document.getElementById("txt")).fontFamily);

 function italic() {
   
    var element = document.getElementById("txt");
   
    if(element.style.fontStyle != "italic"){ 
        element.style.fontStyle="italic";
        }
    else{
        element.style.fontStyle="normal";
        }
    }
    // console.log( document.getElementById("txt").style.fontStyle);
    function underline() {

        var d = document.getElementById("txt");
        if(d.style.textDecoration != "underline"){
            d.style.textDecoration ="underline";
        }
        else
        d.style.textDecoration = "none";
        }

        function ChangeFont(){
            var x=document.getElementById('Font').value;
            document.getElementById("txt").style.fontFamily = x;
           }
           function ChangeSize() {
           var y=document.getElementById("Size").value;
           document.getElementById("txt").style.fontSize = y+ "px";
           document.getElementById("txt").style.resize="none";
          }
        