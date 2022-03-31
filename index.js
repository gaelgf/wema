const compute = (input) => {
    const number = parseFloat(input);
    let res = '';
    
    if (number % 3 === 0) {
        res+= 'Foo';
    }

    if (number % 5 === 0) {
        res+= 'Bar';
    }
    
    if (!res) {
        return input
    }

    return res;
}

module.exports = compute