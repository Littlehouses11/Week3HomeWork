const numsArr = [1,2,52,4,5,28,7]

function setNums(arr) {                    
  arr[2] = 3
  arr[5] = 6
  return arr
}

setNums(numsArr)

const cars =['buic', 'chevy', 'ford', 'honda', 'mini', 'toyota']

cars.sort
return cars

//answers
function carOrder(arr){
    arr.push('kia', 'jeep', 'bmw');
    arr.sort();
    console.log(arr);
}

carOrder(cars);


const board = [



]



const subArr = [3, 6, 9, 12]
function subtrsctByTwo(arr){
    const subtractedArr = arr.map(function(elemeny){
        return element - 2
    });
}

console.log (subtrsctByTwo(subArr))



const subArr = [3, 6, 9, 12]

function subTwoFrom(arr){
    return arr.map(function(element){
        return element - 2
});

}

console.log(subTwoFrom(subArr))


function addAllElements(arr){

    const reducedArr = arr.reduce(function(acc, cur) {
        return acc *= cur
    }, 1)
    return reducedArr
    
    }
    
    console.log(addAllElements(numArr));
    
    function joinArrays(){
        let combinedArray = input.concat(staticArray);
        console.log(combinedArray);
        return combinedArray;
    }
    console.log(joinArrays(input, staticArray));

    
    function gradList(graduates){
        //write your code here
        graduates.push("Mary", "Steven", "Eddie");
        graduates.sort();
        let reverseGrads = graduates.reverse();
        return reverseGrads;
    }
    
    
    console.log(gradList(grads));