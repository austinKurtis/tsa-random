console.log("random.js");


function randomNumber(){
	let number = Math.floor((Math.random() * 1000) +1);
	console.log("Number Value", number);
	if(number % 2 === 0 ){
		document.getElementById("bigButton").innerHTML = `<img src="LeftArrow.png" width="100%" height="100%">`;
	} else{
		document.getElementById("bigButton").innerHTML = `<img src="rightArrow.png" width="100%" height="100%">`;
	}
}

let button = document.getElementById("bigButton");
button.addEventListener("click", randomNumber);
