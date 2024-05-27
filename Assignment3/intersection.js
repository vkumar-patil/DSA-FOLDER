let arr1 = [1, 2, 2, 1];
let arr2 = [2, 2];


function findIntersection(arr1, arr2) {
    let intersection = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && !intersection.includes(arr1[i])) {
                intersection.push(arr1[i]);
                break; 
            }
        }
    }

    return intersection;
}

console.log(findIntersection(arr1, arr2));

