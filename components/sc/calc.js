let divs = document.querySelectorAll(".grid-item");
let disp="";

/* Add event listeners */
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function (event) {
		//console.log(divs[i].innerHTML);
		let btnCalc=document.getElementsByClassName('grid-item-display')[0];
	
        switch (divs[i].innerHTML) {
            case "C":
                disp = "0";
                break;
            case "=":
                disp =  expr(disp);
                break;
            case "0":
                disp.length === 1 ? disp.substring(1) :  disp+=divs[i].innerHTML;
                break;
            default:
                disp+=divs[i].innerHTML;
                break;
        }

		
		btnCalc.innerHTML = disp;
	});
}


function expr (expr) {

    var chars = expr.split("");
    var n = [], op = [], index = 0, oplast = true;

    n[index] = "";

    // Parse the expression
    for (var c = 0; c < chars.length; c++) {

        if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
            op[index] = chars[c];
            index++;
            n[index] = "";
            oplast = true;
        } else {
            n[index] += chars[c];
            oplast = false;
        }
    }

    // Calculate the expression
    expr = parseFloat(n[0]);
    for (var o = 0; o < op.length; o++) {
        var num = parseFloat(n[o + 1]);
        switch (op[o]) {
            case "+":
                expr = expr + num;
                break;
            case "-":
                expr = expr - num;
                break;
            case "x":
                expr = expr * num;
                break;
            case "/":
                expr = expr / num;
                break;
        }
    }

    return expr;
}
      


		