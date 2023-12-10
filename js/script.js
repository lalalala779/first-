let a = 1;
let b = 5;
let rth = 'gdsegse';

if (a > b){
	console.log('YES');
} else {
	console.log('NO');
}


let flag = 0
let productImage = document.querySelector('.product-img');
function increaseProductImg(){
	if (flag == 0){
		productImage.style.width = '100px';
		flag = 1
	} else {
		productImage.style.width = '300px';
		flag = 0
	}
}
productImage.addEventListener('click', increaseProductImg)

let hho = 0
let btnBuy = document.querySelector('.btn-buy');
btnBuy.addEventListener('click', addCart)
function addCart (){
	if (hho == 0){
		btnBuy.style.background = '#0f0';
		btnBuy.innerHTML = 'убрать с корзинки.'
		hho= 1
	} else {
		btnBuy.style.background = '#8F9FF3';
		btnBuy.innerHTML = 'в корзину'
		hho = 0
	}

}
