/*let slides = document.querySelectorAll('.img-slide');
console.log(slides);
let slider =  [];
for (let i=0; i< slides.length; i++){
	slider[i] = slides[i].src;
	slides[i].remove();
}
console.log(slider);

let step = 0;
let offset = 0;

function draw() {
	let img = document.createElement('img');
	img.src = slider[step];
	img.classList.add('img-slide');
	document.querySelector('#slide').appendChild(img);
	
	if (step + 1 == slider.length){
		step = 0;
	}
	else {
		step++;
	}
	offset = 1;
}

function go() {
	document.onclick = null;
	let slides2 = document.querySelectorAll('.img-slide');
	let offset2 = 0;	
	for (let i=0; i< slides2.length; i++){
		offset2++;
	}

	setTimeout(function(){
		slides2[0].remove();
		draw();		
		document.onclick = go;
	}, 500);
	
}

draw();
document.onclick = go;*/

    /* этот код помечает картинки, для удобства разработки */
    let i = 1;
    for(let li of carousel.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }

    /* конфигурация */
    let width = 200; // ширина картинки
    let count = 2; // видимое количество изображений

    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 0; // положение ленты прокрутки

    carousel.querySelector('.prev').onclick = function() {
      // сдвиг влево
      position += width * count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };