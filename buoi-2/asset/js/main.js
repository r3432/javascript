// console.log("m a s d f g")
// console.log("1234")
// console.log("dsfadf")

// const work=(name)=>{
// console.log("thuc hien trong 3s"+ name)
// }

// const work2=(name)=>{
//   console.log("thuc hien trong 3s"+ name)
//   }

//   const work3=(name)=>{
//     console.log("thuc hien trong 3s"+ name)
//     }

//     work(" lam bt1");
//     work2(" lam bt2");
//     work3(" lam bt3");


// const cv1=(name,callback)=>{
//   console.log("bat dau")
//   console.log("thuc hien trong 3s"+ name)
//   setTimeout(()=>{
// callback();
//   },3000);
// }
// const cv2=(name,callback)=>{

//   console.log("thuc "+ name)
//   setTimeout(()=>{
//     callback();
//       },4000);
// }

// const cv3=(name)=>{

//   console.log("linh "+ name)
// }

// cv1("lam bt ",()=>{
//   cv2("di choi",()=>{
//     cv3("nau com");
//   });
// })


// let mon=40;

// let buySam=new Promise((resovle,reject)=>{
// if(mon>35){
//   resovle("mua popeye thoi")
// }else{
//   reject("ko mua")
// }
// })


// let buyWatch=new Promise((resovle,reject)=>{
//   if(mon-35-4>=0){
//     resovle("mua popeye thoi")
//   }else{
//     reject("ko mua")
//   }
//   })

// buySam.then((respond)=>{
// console.log(respond)
// return buyWatch;
// })

// .catch((error)=>{
//   console.log(error)
// })
// .finnally(()=>{
//   console.log("dive nha")
// })
// ;

let hello=async()=>{
 return Promise.resolve("hello di")
}

hello()
.then((res)=>{
  console.log(res);
});