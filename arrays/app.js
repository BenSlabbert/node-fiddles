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
    console.log(item.name);
});

