const compute = (input) => {
    const number = parseFloat(input);
    let res = '';

    res = getDivisibleEquivalence(number);

    res = getReplacedEquivalence(input, res);
    
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

const getReplacedEquivalence = (input, res) => {
    const equivalences = [
        {number :/3/g, label: 'Foo'},
        {number :/5/g, label: 'Bar'},
        {number :/7/g, label: 'Qix'}
    ];

    equivalences.forEach(equivalence => {
        const founded = input.match(equivalence.number) || []
        founded.forEach(item => {
            res += equivalence.label;
        });
    });

    return res;
};

module.exports = compute