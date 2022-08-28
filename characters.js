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

let params = new URLSearchParams(document.location.search);
let charId = params.get("id");

let url = `https://swapi.dev/api/people/${charId}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    // console.log(data.results);
    // for (let i = 0; i < data.length; i++) {
    // console.log(data)

    let charName = document.querySelector(".charName")
    charName.innerText = data['name']

    let hairColor = document.querySelector(".hair-color")
    hairColor.innerText = data['hair_color']

    let charGender = document.querySelector(".gender")
    charGender.innerText = data['gender']

    let charImage = document.querySelector(".char_image")

    //switch case
    //if filmData.title="A New Hope" "The Empire Strikes Back" "Return of the Jedi" "The Phantom Menace" "Attack of the Clones" "Revenge of the Sith"

    function displayImg(char) {
      let name;
      switch (char) {
        case "Luke Skywalker":
          name = "luke.jpg";
          break;
        case "C-3PO":
          name = "c3po.jpg";
          break;
        case "R2-D2":
          name = "r2d2.jpg";
          break;
        case "Darth Vader":
          name = "vader.jpg";
          break;
        case "Leia Organa":
          name = "leia.jpg";
          break;
        case "Beru Whitesun lars":
          name = "beru.jpg";
          break;
        case "R5-D4":
          name = "r5d4.jpg";
          break;
        case "Owen Lars":
          name = "owen.jpg";
          break;
        case "Biggs Darklighter":
          name = "biggs.jpg";
          break;
        case "Obi-Wan Kenobi":
          name = "Obi-Wan.jpg";
          break;
        default:
          name = "luke.jpg";
      }
      return name;
    }

    let nameChar = displayImg(data.name)
    // console.log(data.name)
    // console.log(displayImg(data.name))
    charImage.src = `img/${nameChar}`
    console.log(charImage.src)

    // console.log(data.films)
    for (let filmURL of data.films) {
      console.log(data.films)
      fetch(filmURL)
        .then((film) => film.json())
        // console.log("GOODBYE!")
        .then((filmData) => {
          let filmId = getIdFromUrl(filmURL)
          // console.log("GOODBYE!")
          console.log(filmData.title)
          let filmName = document.querySelector(".featuredFilms")
          let filmTag = document.createElement('a')
          filmTag.setAttribute('href', `films.html?id=${filmId}`)
          filmTag.innerText = filmData.title
          let liFilm = document.createElement('li')
          liFilm.appendChild(filmTag)
          filmName.appendChild(liFilm)
          let filmImage = document.querySelector(".film_image")
        })

    }
  })



// });

// var tag = document.createElement('a')
// tag.setAttribute('href', "characters.html")
// // tag.innerText=data.results[i].name
// document.querySelector(".charList").appendChild(tag)
// tag.innerText = data.results[i].name

// console.log(data.results[i]['name'])
// console.log(data.results[i].gender)
// console.log(data.results[i].hair_color)
// charNames.innerText = data.results[i].name;
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
//       let filmImage = document.querySelector(".film_image")
//     })



  // const charFilms = document.querySelector(".featuredFilms")

  // let url2 = "data"
  // fetch(url2)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     // console.log(data.results);
  //     const charFilms = new Set()
  //     const films = data.results
  //     console.log(films)
  //     for (let i = 0; i < films.length; i += 1) {
  //       console.log(data.results[i].name)
  //       var filmTag = document.createElement('a')
  //       filmTag.setAttribute('href', "films.html")
  //       // tag.innerText=data.results[i].name
  //       document.querySelector(".filmTitle").appendChild(filmTag)
  //       filmTag.innerText = films[i].title
  //       console.log(films[i])
  //     }

  // let charName = document.querySelector(".charName")
  // charName.innerText = data.results[i]['name']

  // let hairColor = document.querySelector(".hair-color")
  // hairColor.innerText = data.results[i].hair_color

  // let charGender = document.querySelector(".film-rating")
  // charGender.innerText = data.results[i].gender
  // charNames.innerText = data.results[i].name;
  // }


  //  })

// })
