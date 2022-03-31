const compute = (input) => {
    const number = parseFloat(input);
    let res = '';
    
    if (number % 3 === 0) {
        res+= 'Foo';
    }
    
    if (!res) {
        return input
    }

    return res;
}

module.exports = compute