const arr = [{K1: 'V1'},{K2: 'V2'},{K3: 'V3'}];
//console.log(arr);
//console.log(Object.keys(arr[1])[0]);
//console.log(arr[1][Object.keys(arr[1])[0]]);
const keys = Object.keys(arr[0]);
//const result = `${keys[0]}: ${arr[0][keys[0]]}`;
//console.log(result);
// arr[0] returns the object
// Object.keys(object) returns an array of the keys
// arr[0][key] returns the value, for that key, at that index
// just gotta loop and itll work for all indices and keys

for (let i = 0; i < arr.length; i++)
    {
        let key =Object.keys(arr[1])[0];
        let value=arr[1][Object.keys(arr[1])[0]];
        console.log(key+value);
    }