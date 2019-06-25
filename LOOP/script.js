// loops = repeatative work / again n again

// kia chalana hai // curly braces me
// kitni bar chalana hai // round bracket me
// initializer i = 0 === step 1
//condition i < 100 ==== step 2
//increment/decrement  i++
// body {} ===step 3


// for (let i=100; i >= 1; i--) {
//     console.log(i);

// }

function Click(){

    let a = parseInt(document.querySelector('#number1').value);
    let b = parseInt(document.querySelector('#number2').value);
    for(let i= a; i<b; i++){
        console.log(i);
    }

}
