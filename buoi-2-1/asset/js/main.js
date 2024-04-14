let URL=`https://fakestoreapi.com/products`;
const getAPI=async(URLapi)=>{
  // Promise.resolve(URLapi)
 let respond=await axios.get('URLapi')
 console.log(respond);
}

getAPI(URL)