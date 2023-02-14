"use strict";
const obj = {
    "prop": [
        {
            "key": "FOOD",
            "value": "Food is wonderfull, food is great"
        },
        {
            "key": "BAR",
            "value": "Bar is bad, really bad"
        },
        {
            "key": "BAR",
            "value": "Bar is good, really good"
        }
    ]
};
const findByKey = (obj, key) => {
    const arr = obj['prop'];
    if (arr.length) {
        const result = arr.filter((el) => {
            return el['key'] === key;
        });
        // console.log(result);
        if (result.length) {
            return result[0].value;
        }
        else {
            return 'no value found';
        }
    }
};
console.log(findByKey(obj, 'FOOD'));
