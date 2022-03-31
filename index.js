const compute = (input) => {
    const number = parseFloat(input);
    let res = '';

    res = getDivisibleEquivalence(number);
    
    if (!res) {
        return input
    }

    return res;
}

const getDivisibleEquivalence = (number) => {
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

    return res;
};

module.exports = compute