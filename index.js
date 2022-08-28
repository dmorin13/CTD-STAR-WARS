
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


// function getPathArrayFromUrl2(url2) {
//   const parsedUrl = new URL(url2);
//   return parsedUrl.pathname.split("/");
// }
// function getIdFromUrl2(url2) {
//   const pathParts = getPathArrayFromUrl(url2).reverse();
//   for (let part of pathParts) {
//     const candidateId = Number.parseInt(part);
//     if (typeof candidateId === "number" && candidateId) {
//       return candidateId.toString();
//     }
//   }
// }

let url = "https://swapi.dev/api/people/"
fetch(url)
  .then((res) => res.json())
  .then((data) => {

    // console.log(data.results);

    for (let i = 0; i < data.results.length; i++) {

      let charId = getIdFromUrl(data.results[i].url)

      console.log(charId)

      var tag = document.createElement('a')
      tag.setAttribute('href', `characters.html?id=${charId}`)//characters.html?id=3
      // tag.innerText=data.results[i].name
      document.querySelector(".charList").appendChild(tag)
      tag.innerText = data.results[i].name

      console.log(data.results[i]['name'])
      console.log(data.results[i].gender)
      console.log(data.results[i].hair_color)
      // var tag = document.createElement('a')
      // // tag.innerText = "dog"
      // tag.innerText = data.results[i]['name']
      // console.log(data.results[i])
      // tag.setAttribute('href', "characters.html")
      // // tag.innerText=data.results[i].name
      // document.querySelector(".charList").appendChild(tag)

      // let charName = document.querySelector(".charName")
      // charName.innerText = data.results[i]['name']

      // let hairColor = document.querySelector(".hair-color")
      // hairColor.innerText = data.results[i].hair_color


      // let charGender = document.querySelector(".gender")
      // charGender.innerText = data.results[i].gender

      // console.log(data.results[i].name)

      // console.log(tag.innerText)

      // document.body.appendChild(tag)
      // var href = "characters.html"
      // tag.setAttribute('href', href)

    }

    // let charName = document.querySelector(".charName")
    // charName.innerText = data.results[i]['name']

    // let hairColor = document.querySelector(".hair-color")
    // hairColor.innerText = data.results[i].hair_color

    // let charGender = document.querySelector(".film-rating")
    // charGender.innerText = data.results[i].gender
    // charNames.innerText = data.results[i].name;

  })
const film_titles = document.querySelector(".filmTitle")

let url2 = "https://swapi.dev/api/films/"
fetch(url2)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data.results);
    const filmList = new Set()
    const films = data.results
    console.log(films)
    for (let i = 0; i < films.length; i += 1) {
      console.log(films[i].title)
      let filmId = getIdFromUrl(films[i].url)
      // console.log(data.results[i].name)
      var filmTag = document.createElement('a')
      filmTag.setAttribute('href', `films.html?id=${filmId}`)
      // tag.innerText=data.results[i].name
      document.querySelector(".filmTitle").appendChild(filmTag)
      filmTag.innerText = films[i].title
      // console.log(filmTag.innerText)
      // tag.innerText=data.results[i].name
      // document.querySelector(".films").appendChild(filmTag)
      // document.querySelector(".films-list").appendChild(filmTag)
      // filmTag.forEach(film) => {
      //   return film.title
      // })
    }

    // document.body.appendChild(tag)
    // var href = "characters.html"
    // tag.setAttribute('href', href)

    // name.innerText = data.results[i].name

    // let releaseDate = document.querySelector(".film-date")
    // releaseDate.innerText = data.results
    // hairColor.innerText = data.results[i].hair_color

    // let ratings = document.querySelector(".film-rating")
    // ratings.innerText = data.results[i]
    // charGender.innerText = data.results[i].gender
    // charNames.innerText = data.results[i].name;

  })