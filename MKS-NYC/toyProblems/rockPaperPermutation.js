function rockPaperPermutation (roundCount) {
    // Write your code here, and
    // return your final answer.
    var r = "r";
    var p = "p";
    var s = "s";
    var rString = "";
    var pString = "";
    var sString = "";
    var results = [];
  
    for (var i = 0; i < roundCount; i++) {
	rString += r;
	pString += p;
	sString += s;
	if (roundCount > 1) {
	    rString += rString;
	    rString += pString;
	    rString += sString;
	}
	results.push(rString, pString, sString);
    }  
  
    return results;
}

rockPaperPermutation(2);

/*
when i = 0
results.push();

when i = 1
results.push(r, p, s);

when i = 2
results.push(r+r, r+p, r+s, p+r, p+p, p+s, s+r, s+p, s+s);

when i = 3
results.push(r+r+r, r+r+p, r+r+s, r+p+r, r+p+p, r+p+s, r+s+r, r+s+p, r+s+s,
 ...
 )
*/