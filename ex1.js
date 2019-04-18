 // 1
function Ex1() {
    var n = 123;
    var arr = n.toString().split('');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = +arr[i] | 0;
        console.log(arr[i]);
    }
}
Ex1();
  // 2
  function renameKeys(obj, newKeys) {
    const keyValues = Object.keys(obj).map(key => {
      const newKey = newKeys[key] || key;
      return { [newKey]: obj[key] };
    });
    return Object.assign({}, ...keyValues);
  }

  const obj = { name: 'Bob',
  job: 'Programmer'
     };
const newKeys = {name: "firstName", job: "actor" };
const renamedObj = renameKeys(obj, newKeys);
console.log(renamedObj);


// 3
function makeAlphabet(str) { 
    var arr = str.split(''),
    alpha = arr.sort().join('').replace(/\s+/g, '');
    return alpha; 
 }
 console.log(makeAlphabet("cabbage"));

 //4
 
 var maxCombine = (a) => +(a.sort((x, y) => +("" + y + x) - +("" + x + y)).join(''));
 var b = [1,4,45,76,9,98,34,3];
 // test & output
 console.log([
   b
 ].map(maxCombine));

