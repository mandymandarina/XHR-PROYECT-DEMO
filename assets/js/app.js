const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = searchField.value;
  getNews();
});

function getNews() {
  const articleRequest = new XMLHttpRequest();
  articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&&api-key=d15bb7061d2c40ce823dd7b3af3a8b95`);
  articleRequest.onload = addNews;
  articleRequest.onerror = handleError;
  articleRequest.send();
}

 function handleError (){
  console.log('se ha presentado un error');
}

function addNews() {
 const data = JSON.parse(this.responseText);
 console.log(data);
}

function addNew(){
  const data = JSON.parse(this.responsiveText);
  const article = data.response.docs[0];
  const title = article.headline.main;
  const snippet = article.snippet;

  let li = document.createElement('li');
  li.className ='articleClass';
  li.innerText = snippet;

  responseContainer.appendChild(li);
}
