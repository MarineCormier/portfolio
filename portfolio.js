var i = 0;
var text = 'B I E N V E N U E';

var phrase = document.getElementById('sentence')

function write() {
		 phrase.innerHTML += text[i];
		 if(i >=text.length-1) {
		 	clearInterval(delay);
		 }
		 i++;
}
console.log(text.length);
var delay = setInterval(
			write

	, 100);