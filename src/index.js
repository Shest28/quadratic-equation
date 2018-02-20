module.exports = function solveEquation(equation) {
	let str = equation.replace(/\s/g,'').replace(/x\^2|x/g,'');
	let parseArr = str.split('*');

	const a = parseArr[0];
	const b = parseArr[1];
	const c = parseArr[2];
	
	let d = b * b - 4 * a * c;
	let x1 = Math.round(( -b + Math.sqrt(d) ) / (2 * a));
	let x2 = Math.round(( -b - Math.sqrt(d) ) / (2 * a));
	
	return x1 < x2 ? [x1, x2] : [x2, x1];
}
