// let s = prompt('Pleas enter your phrase: ');

let s = 'javascriptloops';

function vowelsAndConsonants(s) {
	s = String(s);
   for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === 'a' || s.charAt(i) === 'e' || s.charAt(i) === 'i' || s.charAt(i) === 'o' || s.charAt(i) === 'u') {
            console.log(s.charAt(i));
        }
    }
   for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) != 'a' && s.charAt(i) != 'e' && s.charAt(i) != 'i' && s.charAt(i) != 'o' && s.charAt(i) != 'u') {
            console.log(s.charAt(i));
        }
    }
}

vowelsAndConsonants(s);

// var sign = window.prompt('Are you feeling lucky', 'sure');
// const sign = prompt("What's your sign?");
// sign();
// console.log('hello');