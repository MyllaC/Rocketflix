import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

let movieId = ''

function generateMovieId() {
  const min = Math.ceil(11111)
  const max = Math.floor(99999)

  const randomIdNumber = Math.floor(Math.random() * (max - min)) + min

  movieId = randomIdNumber.toString()

  return movieId
}
generateMovieId()

const url =
  'https://api.themoviedb.org/3/movie/' +
  movieId +
  '?' +
  API_KEY +
  '&language=pt-BR'

function getMovie(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })

  console.log(movieId)
}

getMovie(url)

//https://api.themoviedb.org/3/movie/524434?api_key=023351e022928c049941ed91a0a6b835&language=pt-BR
//https://api.themoviedb.org/3/movie/' +

