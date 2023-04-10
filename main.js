let a;
let b;
let c;


document.getElementById("submitbutton").onclick = function () {

    a = document.getElementById("Texta").value;
    a = Number(a);

    b = document.getElementById("Textb").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("sidec").innerHTML = ("The Value of C is : "+ c);
}
