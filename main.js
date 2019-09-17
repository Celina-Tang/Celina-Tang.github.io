// number of drops created.

// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createCloud() {
	if (screen.width < 900) {
		var nbCloud = 250; 
	}
	else
	{
		var nbCloud = 100; 
	}
	for (i = 1; i < nbCloud; i++) {
		var dropLeft = randRange(-1800, screen.width - 200);
		var dropTop = randRange(-100, screen.height + 50);
		var cloudImg = document.createElement('img');
		cloudImg.className = 'cloud';
		cloudImg.src = "./clouds/cloud" + randRange(1, 8) + ".png";
		cloudImg.id = 'cloud' + i;
		cloudImg.style.left = dropLeft + 'px';
		cloudImg.style.top = dropTop + 'px';
		if (screen.width < 900) {
			cloudImg.style.width = randRange(0, 30) + 'vh';
		}
		else
		{
			cloudImg.style.width = randRange(0, 15) + 'vw';
		}
		cloudImg.style.opacity = 0;
		document.getElementById('cloudLayer' + randRange(1, 2)).appendChild(cloudImg);
	}
}
// Make it cloud
createCloud();
