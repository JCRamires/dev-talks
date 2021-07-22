function mySlowFunction() {
    console.time('mySlowFunction');
    let result = 0;	
    for (var i = Math.pow(11, 7); i >= 0; i--) {		
        result += Math.atan(i) * Math.tan(i);
    };
    console.timeEnd('mySlowFunction');
}