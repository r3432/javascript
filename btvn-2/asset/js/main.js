console.log("-------------------------")
console.log("btvn2");
function b2(arr){
  arr.sort((a, b) => b - a); 
  const secondLargest = arr[1];


  const asc = arr.slice().sort((a, b) => a - b);

  const sumEven = arr.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
  return{
    secondLargest:secondLargest,
    asc:asc,
    sumEven:sumEven
  } 
}
const mang2=[1,2,3,4,5,6];
const result = b2(mang2);
console.log("Số lớn thứ hai trong mảng:", result.secondLargest);
console.log("Mảng được sắp xếp tăng dần:", result.asc);
console.log("Tổng các số chẵn trong mảng:", result.sumEven);