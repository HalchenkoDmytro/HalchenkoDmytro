const APIURL = "https://api.themoviedb.org/3/discover/movie?api_key=184bfe2fab793ace6ac70a7e43c4a7e9";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=184bfe2fab793ace6ac70a7e43c4a7e9&query=";

const main = document.getElementById("content");
const form = document.getElementById("form");
const search = document.getElementById("search");

let currentPage = 1;
let nextPage = 2;
let prevPage = 1;
//let lastUrl = '';
let totalPages = 100000;
console.log(totalPages);

async function getMovies(url) {
  const response = await fetch(url);
  const responseData = await response.json();

  console.log(responseData);
  showMovies(responseData.results);


  //pagination
/*   if(data.results.length !== 0){
    showMovies(data.results);
    currentPage = data.page;
    nextPage = currentPage + 1;
    prevPage = currentPage - 1;
    totalPages = data.total_pages;

    current.innerText = currentPage;

    if(currentPage <= 1){
      prev.classList.add('disabled');
      next.classList.remove('disabled')
    }else if(currentPage>= totalPages){
      prev.classList.remove('disabled');
      next.classList.add('disabled')
    }else{
      prev.classList.remove('disabled');
      next.classList.remove('disabled')
    }

    tagsEl.scrollIntoView({behavior : 'smooth'})

}else{
    main.innerHTML= `<h1 class="no-results">No Results Found</h1>`
}
 */

  //end pagination
}

getMovies('');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm) {
    getMovies(SEARCHAPI + searchTerm);
    search.value = "";
  }
});

main.innerHTML = "";
function showMovies(movies) {  
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { poster_path, title, vote_average, release_date, overview } = movie;

    const movieElem = document.createElement("div");
    movieElem.classList.add("movie");

    movieElem.innerHTML = `
            <img
                src="${IMGPATH + poster_path}"
                alt="${title}"
            />
            <div class="movie-info">
                <h3>${title}</h3>
                <span>${release_date}</span>
                <span class="rating"> Rating ${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                ${overview}
            </div>
        `;

    main.appendChild(movieElem);
  });

  
}


/* const prev = document.getElementById('prev');
const next = document.getElementById('next');


prev.addEventListener('click', () => {
  if(prevPage > 0){
    pageCall(prevPage);
  }
})

next.addEventListener('click', () => {
  if(nextPage <= totalPages){
    pageCall(nextPage);
  }
})

function pageCall(page){
  let urlSplit = SEARCHAPI.split('?');
  let queryParams = urlSplit[1].split('&');
  let key = queryParams[queryParams.length -1].split('=');
  if(key[0] != 'page'){
    let url = SEARCHAPI + '&page=' + page
    getMovies(url);
  }else{
    key[1] = page.toString();
    let a = key.join('=');
    queryParams[queryParams.length -1] = a;
    let b = queryParams.join('&');
    let url = urlSplit[0] +'?'+ b
    getMovies(url);
  }
} */