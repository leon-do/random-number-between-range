generateRandom(11,24)	//generates a random number between 11 and 24

function generateRandom(min,max){
	var RandomNumber = Math.round(Math.random()*(max - min) + min)
	return RandomNumber;
}