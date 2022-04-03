function map(f, a) {
    let result = [];
    let i;
    for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
    
    return result;
}
    const f = function (x) {
        return x * x * x;

    }
    let numbers = [1, 4, 5, 3, 5];
    let cube = map(f, numbers);
    console.log(cube);



var myFunc;
if (num === 0) {
    myFunc = function(theObject) {
        theObject.make = 'Toyota';
    }
}