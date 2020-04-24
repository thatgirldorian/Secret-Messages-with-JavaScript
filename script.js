let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//remove the last string
secretMessage.pop()

//check new length
console.log(secretMessage.length
);

//add new words to the end of the message
secretMessage.push('to', 'Program')

//console.log(secretMessage);

//change a specific word
secretMessage[7] = 'right';

//remove the first string 
secretMessage.shift()

//add a word to the beginning of the message
secretMessage.unshift('Programming');

//replace some words with a single string
secretMessage.splice(6, 5, 'know');
console.log(secretMessage);

//log the whole message
console.log(secretMessage.join(' '));
