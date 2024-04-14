console.log("btvn1")

function trung(arr){
  const countMap = {};
  arr.forEach(item => {
    countMap[item] = (countMap[item] || 0) + 1;
});


const loc= arr.filter(item => countMap[item] === 1);

return loc;
}


const array = [1, 2, 3, 2, 4, 5, 6, 1 ,10,2,3];
const result = trung(array);
console.log(result);

