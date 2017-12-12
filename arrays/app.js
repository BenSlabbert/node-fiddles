let arr = [
    {
        id: 123,
        name: 'ben'
    },
    {
        id: 234,
        name: 'ola'
    }
];

let filter = arr.filter( obj => obj.name === 'ben');
filter.forEach((item, index) => {
    console.log('filtered: ', item.name);
});

let array = [
    123,
    456,
    789
];

console.log('Joined array:');
let join = array.join("\n").trim();
console.log(join);
