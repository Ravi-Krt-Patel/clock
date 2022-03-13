


const hourHand = document.getElementsByClassName("hand")[0];
const minutHand = document.getElementsByClassName("hand")[1];
const secHand = document.getElementsByClassName("hand")[2];

setInterval(setClock,1000);

function setClock() {
	const currentDate = new Date();
	const secondsRatio = currentDate.getSeconds()/60;
	const minutsRatio = (secondsRatio + currentDate.getMinutes())/60;
	const hoursRatio = (minutsRatio + currentDate.getHours())/12;
	setRotation(secHand,secondsRatio);
	setRotation(minutHand,minutsRatio);
	setRotation(hourHand,hoursRatio);
	console.log(currentDate)
};

function setRotation(element,rotationRatio){
	element.style.setProperty('--rotation',rotationRatio*360);
}

setClock();