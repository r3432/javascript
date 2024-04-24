const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'


const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
const getAPI = async (URLapi) => {
  let response = await axios.get(URLapi);
  // console.log(response.data.results); 
  ShowMovie(response.data.results)
}

getAPI(API_URL); 
let rowJS=document.querySelector(".row-js")
const ShowMovie=(data)=>{
  let HTML=``;
  // console.log(data);
  data.forEach(value => {
    // console.log(value)
    HTML+=`<div class="col-12 col-sm-6 col-md-3">

    <div class="wrap-movie">
    <a href="./detail.html?id=${value.id}">
      <div class="box-image">
        <img src="${IMG_PATH+value.poster_path}">
      </div>
      <div class="box-infor">
        <h3>${value.title}</h3>
        <p class="rateing ${starMovie(value.vote_average)}">${value.vote_average}</p>
      </div>
      <div class="over-view">
        <h4 >Over view</h4>
        <p class="descript">${value.overview}</p>
      </div>
      </a>
    </div>
  </div>
    `
  });

  rowJS.innerHTML=HTML;
}

const starMovie = (vote)=>{
if(vote>=8){
  return 'green';
}
else if(vote>=5){
  return 'orange';
}
else{
  return 'red';
}
}
// console.log(starMovie(5))
// starMovie(9);


const form = document.querySelector("form");
const inputSearch = document.querySelector(".input-search");

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Corrected: Added parentheses after preventDefault
  
  const searchTerm = inputSearch.value;
  
  console.log(searchTerm);
});

getAPI(SEARCH_API + searchTerm);