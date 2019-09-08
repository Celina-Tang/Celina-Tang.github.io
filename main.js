var nbDrop = 300;

function randRange(minNum, maxNum) {
	return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

function createRain() {
	for (i = 1; i < nbDrop; i++) {
		var dropLeft = randRange(0, screen.width);
		var dropTop = randRange(-1000, screen.height);
		var dropDiv = document.createElement('div');
		dropDiv.className = 'drop';
		dropDiv.id = 'drop' + i;
		dropDiv.style.left = dropLeft + 'px';
		dropDiv.style.top = dropTop + 'px';
		document.getElementsByClassName('rain')[0].appendChild(dropDiv);
	}
}

function scrollSkyline() {
	var newYorkSkyline = new Image(); 
	var parisSkyline = new Image(); 
	var shangHaiSkyline = new Image(); 
	newYorkSkyline.src = "NewYorkCity.png";
	parisSkyline.src = "Paris.png";
	shanghaiSkyline.src = "Shanghai.png";

	
}
createRain();
