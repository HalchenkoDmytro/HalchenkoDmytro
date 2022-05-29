let i = -1;

btn.onclick = function trafficLight(){
	i++;
	let arr = ['red','orange','green'],
		round = document.querySelectorAll('.round');
	if(round[i-1]) round[i-1].style.backgroundColor = '';
	if(i == arr.length) i = 0;
	round[i].style.backgroundColor = arr[i];
}