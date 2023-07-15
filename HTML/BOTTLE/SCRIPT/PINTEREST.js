var PHOTOS = document.getElementById("photos");

var n = 0;

while (n < 20) {
    PHOTOS.innerHTML += `<img src="IMG/${n}.jpg">`;
    n++;
};


console.log('Кол-во завершённых итераций:', n);