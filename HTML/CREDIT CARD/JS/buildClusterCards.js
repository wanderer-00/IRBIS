var clusterCards = document.getElementsByClassName("clusterCards")[0];

for (i=0; i<10; i++){

	var test;
	console.log(test);

	if (true){
		clusterCards.innerHTML += `
			<div class="card  skinCard" style="background-image: url(IMG/${i}.jpg);">
				<div class="chip">
			        <div class="chip-line"></div>
			        <div class="chip-line"></div>
			        <div class="chip-line"></div>
			        <div class="chip-line"></div>
			        <div class="chip-main"></div>
				</div>
			</div>
		`
	}
}