function should(value) {
    return {
        result: function(expected) {
            if (value !== expected) throw new Error('condition not accomplished, expected ' + expected + ' but got ' + value);
        }
    };
}

function test(unit) {
    try {
        unit();

        console.log(unit.name, 'PASSED');
    } catch(err) {
        console.error(unit.name, 'NOT PASSED', err.message);
    }
}