// ref: https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript

let string = ' hello {{test}} {{test}} {{code-here}} {{code-here}} {{another}} user!';

string = string.replace('{{test}}', 'ben');
console.log(string);

string = ' hello {{test}} {{test}} {{code-here}} {{code-here}} {{another}} user!';

string = string.split('{{test}}').join('ben');
console.log(string);
