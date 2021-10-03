function addMovie() {
  var LebalfavoriteMovie = document.getElementById('movie').value

  var elementFavoriteMovie = '<img src=' + movie + '>'

  var elementMovieList = document.getElementById('movieList')
  elementMovieList.innerHTML = elementFavoriteMovie;
}
