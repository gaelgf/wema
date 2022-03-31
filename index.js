const compute = (input) => {
    const number = parseFloat(input);
    let res = '';

    const equivalences = [
        {number :3, label: 'Foo'},
        {number :5, label: 'Bar'},
        {number :7, label: 'Qix'}
    ];

    equivalences.forEach(equivalence => {
        if (number % equivalence.number === 0) {
            res += equivalence.label;
        }
    });
    
    if (!res) {
        return input
    }

    return res;
}

module.exports = compute