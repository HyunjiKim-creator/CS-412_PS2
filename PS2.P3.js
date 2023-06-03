const cube = (x) => {
    let result = Math.pow(x, 3);
    return result;
};

let array = [1,2,3,4,5,6,7];

let cubedArray = array.map(x => {
    let cubeValue = cube(x);
    console.log(`Cube of ${x} is: ${cubeValue}`);
    return cubeValue;
});
