

let params = new URLSearchParams(document.location.search);
let filmId = params.get("id");

let url = `https://swapi.dev/api/films/${filmId}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data.results);
    // for (let i = 0; i < data.length; i++) {
    // console.log(data)

    let film_Title = document.querySelector(".filmTitle")
    film_Title.innerText = data['title']

    let date = document.querySelector(".film-date")
    date.innerText = data['release_date']

    let epNumber = document.querySelector(".episode")
    epNumber.innerText = data['episode_id']
    // "Masking" is disastrous!
    // for (let filmURL of data.title) {
    //   console.log("HELLO!!")
    //   let filmId = getIdFromUrl(filmURL)
    //   fetch(filmURL)
    //     .then((film) => film.json())
    //   console.log("GOODBYE!")
    //     .then((filmData) => {
    //       // console.log("GOODBYE!")
    //       console.log(filmData.title)
    //       let filmName = document.querySelector(".featuredFilms")
    //       let filmTag = document.createElement('a')
    //       filmTag.setAttribute('href', `films.html?id=${filmId}`)
    //       filmTag.innerText = filmData.title
    //       let liFilm = document.createElement('li')
    //       liFilm.appendChild(filmTag)
    //       filmName.appendChild(liFilm)
    //      
    //     })

    //switch case
    //if filmData.title="A New Hope" "The Empire Strikes Back" "Return of the Jedi" "The Phantom Menace" "Attack of the Clones" "Revenge of the Sith"

    function displayImg(title) {
      let src;
      switch (title) {
        case "A New Hope":
          src = "new_hope.jpg";
          break;
        case "The Empire Strikes Back":
          src = "empire-strikes.png";
          break;
        case "Return of the Jedi":
          src = "return-jedi.png";
          break;
        case "The Phantom Menace":
          src = "phantom-menace.png";
          break;
        case "Attack of the Clones":
          src = "clone-attack.png";
          break;
        case "Revenge of the Sith":
          src = "sith-revenge.png";
          break;
        default:
          src = "SW_Uni.jpg";
      }
      return src;
    }
    let filmImage = document.querySelector(".film_image")
    let SRC = displayImg(data.title)
    console.log(data.title)
    console.log(displayImg(data.title))
    filmImage.src = `img/${SRC}`
    console.log(filmImage.src)


  })
// }



// });

function getPathArrayFromUrl(url) {
  const parsedUrl = new URL(url);
  return parsedUrl.pathname.split("/");
}
function getIdFromUrl(url) {
  const pathParts = getPathArrayFromUrl(url).reverse();
  for (let part of pathParts) {
    const candidateId = Number.parseInt(part);
    if (typeof candidateId === "number" && candidateId) {
      return candidateId.toString();
    }
  }
}