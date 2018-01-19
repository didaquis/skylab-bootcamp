/**
 * Unit Testing Tools v1.0.1
 * 
 * @author manuelbarzi
 */

/**
 * Evaluates a value against an expected result.
 * 
 * @param {*} value 
 */
function should(value) {
    return {
        result: function(expected) {
            if (value !== expected) throw new Error('condition not accomplished, expected ' + expected + ' but got ' + value);
        }
    };
}

/**
 * Runs a unit test.
 * 
 * @param {*} unit 
 */
function test(unit) {
    try {
        unit();

        console.log('TEST', unit.name, 'PASSED');
    } catch(err) {
        console.error('TEST', unit.name, 'NOT PASSED', err.message);
    }
}