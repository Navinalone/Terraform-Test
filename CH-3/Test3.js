"use strict";
var object = { 'a': { 'b': { 'c': 'Test-3 verified' }
    }
};
var val = getValuefromObjectsUsingKeys(object, "a/b/c");
function getValuefromObjectsUsingKeys(object1, key) {
    let keys = key.split('/');
    keys.forEach((x) => {
        object1 = object1[x];
    });
    return object1;
}
let value = val ? val : null;
console.log(value);
