const tombolCari = document.querySelector('.searchButton');
tombolCari.addEventListener('click', async function() {
  const inputPencarian = document.querySelector('.searchInput');
  const movies = await getMovie(inputPencarian.value);
  console.log(movies)
  cetakFilm(movies);
});
async function getMovie(cari){
  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=6fc67b19&s=${cari}`);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    return data.Search;
  } catch (error) {
    alert(error);
}
}

function cetakFilm(movies){
  const movieContainer = document.querySelector('.movieContainer');
  movieContainer.innerHTML = '';
  try{
    movies.forEach(m => {
    movieContainer.innerHTML += cardMovie(m);
    });
  }catch(err){
    alert("Film tidak ditemukan");
  }
}

function cardMovie(m){
  return `<div class="card m-3" style="width: 18rem;">
  <img src="${m.Poster}">
  <div class="card-body">
    <h5 class="card-title">${m.Title}</h5>
    <p class="card-text">${m.Year}</p>
    <button type="button" class="btn btn-primary detail-button" data-bs-toggle="modal" data-bs-target="#exampleModal"  value="${m.imdbID}">
    Launch detail 
    </button>
  </div>
</div>`
}
document.body.addEventListener('click', async function(e){
  if(e.target.classList.contains('detail-button')){
    const imdbID = e.target.value;
    const dataDetail = await getDetail(imdbID);
    console.log(dataDetail)
    showDetail(dataDetail);

  }
});
function getDetail(imdbID){
  try{
    const dataDetail = fetch(`http://www.omdbapi.com/?apikey=6fc67b19&i=${imdbID}`)
    .then(response => response.json())
    .then(response => response)
    return dataDetail;
  }catch(err){
    console.log(err);
  }
}
function showDetail(data){
  const modalBody = document.querySelector('.modal-body');
  modalBody.innerHTML = `
  <table>
  <tr>
    <td><b>Actors</b></td>
    <td>:</td>
    <td>${data.Actors}</td>
  </tr>
  <tr>
    <td><b>Country</b></td>
    <td>:</td>
    <td>${data.Country}</td>
  </tr>
  <tr>
    <td><b>Genre</b></td>
    <td>:</td>
    <td>${data.Genre}</td>
  </tr>
  <tr>
    <td><b>Plot</b></td>
    <td>:</td>
    <td>${data.Plot}</td>
  </tr>
</table>
  `
}