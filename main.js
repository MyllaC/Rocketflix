//import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

const API_KEY = 'api_key=023351e022928c049941ed91a0a6b835'

const BASE_URL = 'https://api.themoviedb.org/3/movie/'

const IMG_URL = 'https://image.tmdb.org/t/p/w500'

const language = 'language=pt-BR'

//https://api.themoviedb.org/3/movie/524434?api_key=023351e022928c049941ed91a0a6b835&language=pt-BR

function getMovie() {
  const movieId = Math.floor(Math.random() * 1000 + 1)
  const url = BASE_URL + movieId + '?' + API_KEY + '&' + language
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(movieId)
      console.log(url)
      console.log(data)
      console.log(data.vote_average)

      displayMovie(data)

      const movieBox = document.getElementById('movie-box')
      movieBox.classList.add('show-movie')
    })
}

function displayMovie(data) {
  if (data.vote_average > 5) {
    const movieTitle = document.getElementById('movie-title')
    const movieSummary = document.getElementById('movie-summary')
    const movieImage = document.getElementById('movie-image')

    const title = data.title
    const summary = data.overview
    const img = IMG_URL + data.poster_path

    movieTitle.innerHTML = title
    movieSummary.innerHTML = summary
    movieImage.src = img
  } else {
    getMovie()
  }
}

const movieButton = document.getElementById('find-movie-button')
movieButton.addEventListener('click', event => {
  getMovie()
})
