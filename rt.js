function mul(){
	var x = Number(prompt("Enter the 1st number to be multiplied: "));
	var y = Number(prompt("Enter the 2nd number to be multiplied: "));
	var z = x*y;
	alert("Your product is: " + z);
}
function div(){
	var a = Number(prompt("Enter the dividend: "));
	var b = Number(prompt("Enter the divider: "));
	var c = a/b; 
	alert("Your quotient is: " + c);
}
function get(){	
	var d = Number(prompt("Enter the 1st number: "));
	var e = Number(prompt("Enter the 2nd number: "));
	var f = d+e;
	alert("Your sum is:" + f);
}
function get2(){	
	var g = Number(prompt("Enter the 1st number: "));
	var h = Number(prompt("Enter the 2nd number: "));
	var i = g-h;
	alert("Your diffrence is : " + i);
}
function cbrt(){	
	var j = Number(prompt("Enter the number: "));
	var k = Math.cbrt(j);
	alert("Your cube is: " + k);
}function sqrt(){	
	var l = Number(prompt("Enter the number: "));
	var m = Math.sqrt(l);
	alert("Your square is: " + m);
}
function sq(){
	var n = Number(prompt("Enter the number to be squared: "));
	var o = (n*n);
	alert("Your squared number is: " + o);
}
function cb(){
	var p = Number(prompt("Enter the number to be cubed: "));
	var q = (p*p*p);
	alert("Your squared number is: " + q);
}