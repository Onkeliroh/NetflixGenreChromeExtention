// quasi main
document.addEventListener("DOMContentLoaded",function(){
  createList();
  attachEvents();
});

function attachEvents(){
  $("p.categorie").mousedown(function(){
    url = categories[getIndex($(this).text())][0];
    url = NetflixGenreAdr + url;
    chrome.tabs.create({"url":url});
  });
}

function getIndex(str){
  for (i = 0; i < categories.length; i++)
  {
    if (categories[i][1] == str)
    {
      return i;
    }
  }
  return -1;
}

function createList(){
  for (i = 0; i < categories.length; i++)
  {
    appendCategorie(categories[i][1]);
  }
}

function appendCategorie(CategorieText) {
  $("#CategorieListContainer").append("<p class='categorie' style='font-weight:bold; color:#fff; cursor:pointer;'>" + CategorieText + "</p>");
}
