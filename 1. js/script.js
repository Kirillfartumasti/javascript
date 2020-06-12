function plusOne(){
	result.innerHTML = parseInt(result.innerHTML) + 3
}

function minusOne(){
	result.innerHTML = parseInt(result.innerHTML) - 3
}

function multiplyOne(){
	result.innerHTML = parseInt(result.innerHTML) * 3
}

function splitupOne(){
	result.innerHTML = parseInt(result.innerHTML) / 3
}

function powerOne(){
	result.innerHTML = parseInt(result.innerHTML) ** 3
}


plus.addEventListener("click", plusOne);
minus.addEventListener("click", minusOne);
multiply.addEventListener("click", multiplyOne);
splitup.addEventListener("click", splitupOne);
power.addEventListener("click", splitupOne);