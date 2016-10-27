generateRandom(2,4)	//generates a random number between 10 and 20
console.log(generateRandom(2,4))

function generateRandom(min,max){
	var RandomNumber = Math.round(Math.random()*(max - min) + min)
	return RandomNumber;
}