function myfunction(){
    var l=document.getElementById('L-1').value;
    var w=document.getElementById('W-1').value;
    let area=l*w;
    let perimeter=(2*l)+(2*w);
    console.log(l);
    console.log(perimeter);
    document.getElementById('first-area').innerHTML="Area is " +area+  "sq. mtr.";
    document.getElementById('second-peri').innerHTML="Perimeter is " +perimeter+  "mtr";

}
