var object = { 'a': 
                    { 'b': 
                        { 'c': 'Test-3 verified' }
                    }
            }
            
var val = getValuefromObjectsUsingKeys(object, "a/b/c");

function getValuefromObjectsUsingKeys(object1: any, key: any) {
    let keys = key.split('/');
        keys.forEach((x:any) => {
            object1 = object1[x];
        });
        return object1;
}

let value = val?val:null
console.log(value);