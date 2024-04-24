
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

let imgDetail = document.querySelector(".img-detail-js");

let params = new URLSearchParams(window.location.search); 

let idDetail = params.get("id");

const getAPI = async (URLapi) => {
  try {
    let response = await axios.get(URLapi);
    showDetail(response.data.results);
  } catch (error) {
    console.error('Error fetching API:', error);
  }
}

getAPI(API_URL);

const showDetail = (data) => {
  let detail = data.find(item => item.id == idDetail); // Removed console.log(item) and corrected item.idDetail to idDetail
  console.log(detail);
  imgDetail.innerHTML = `<img src="${IMG_PATH + detail.poster_path}" alt="${detail.title} Poster">`; // Corrected $detail to ${detail}
}
