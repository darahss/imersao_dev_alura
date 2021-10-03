var filmList = [
  'https://upload.wikimedia.org/wikipedia/pt/0/02/Get_Out_2017.png',
  'https://upload.wikimedia.org/wikipedia/pt/e/e9/Oldeuboi_2003.jpg',
  'https://br.web.img3.acsta.net/pictures/210/124/21012465_2013061319170245.jpg',
  'https://m.media-amazon.com/images/I/81FNja+9-iL._AC_SL1500_.jpg',
  'https://upload.wikimedia.org/wikipedia/pt/thumb/2/2b/FightClubPoster.jpg/230px-FightClubPoster.jpg',
  'https://upload.wikimedia.org/wikipedia/pt/8/84/AOrigemPoster.jpg',
  'https://m.media-amazon.com/images/I/91OJsdscU9L._AC_SX466_.jpg',
  'https://upload.wikimedia.org/wikipedia/pt/1/16/Primal_Fear_%28filme%29.jpg',
  'https://upload.wikimedia.org/wikipedia/pt/4/43/Us_2019_-_P%C3%B4ster.jpg',
  'https://metagalaxia.com.br/wp-content/uploads/2020/04/parasita-filme-oscar-resenha-poster.jpg'
]

filmList.push('https://upload.wikimedia.org/wikipedia/pt/4/47/Coherence.jpg')

for (var i = 0; i < filmList.length; i++) {
  document.write('<img src="' + filmList[i] + '" class="page-logo" alt="">')
}
