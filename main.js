let a;
let b;
let c;

// a = window.prompt("enter the value of A")
// a = Number(a);

// b = window.prompt("enter the value of B")
// b = Number(b);

// c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

// console.log("Side c is : ", c);


document.getElementById("submitbutton").onclick = function () {

    a = document.getElementById("texta").value;
    a = Number(a);

    b = document.getElementById("textb").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("sidec").innerHTML = ("The Value of C is : "+ c);
}
