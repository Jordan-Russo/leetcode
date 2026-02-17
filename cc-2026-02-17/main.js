function evensAndOdds(num){
	return num & 1 ? num.toString(16).toLowerCase() : num.toString(2);
}