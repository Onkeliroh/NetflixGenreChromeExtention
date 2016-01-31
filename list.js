// quasi main
document.addEventListener("DOMContentLoaded",
  main);

function main(){
  createList("All");

  attachMetaGenres();

  document.getElementById("FilterSelect").addEventListener("change",filterChanged);
}

function filterChanged(){
  selector = document.getElementById("FilterSelect");

  option = getSelectedOption(selector);

  createList(option);
}

function getSelectedOption(selectElement){
  if (selectElement.selectedIndex == -1)
    return null;

  return selectElement.options[selectElement.selectedIndex].text;
}

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

function createList(filter){
  //gain access to element
  var genrecontainer = document.getElementById("CategorieListContainer");

  //remove old List
  while(genrecontainer.hasChildNodes()){
    genrecontainer.removeChild(genrecontainer.lastChild);
  }

  if (filter == "All" || filter == "" )
  {
    for (i = 0; i < categories.length; i++)
    {
      appendGenre(categories[i][1]);
    }
  }
  else {
    for (i = 0; i < categories.length; i++)
    {
      if (strContains(categories[i][1],filter))
      {
        appendGenre(categories[i][1]);
      }
    }
  }
  attachEvents();
}

function appendGenre(genre){
  $("#CategorieListContainer").append("<p class='categorie'>" + genre  + "</p>");
}

function strContains(s1,s2){
  return (s1.indexOf(s2) > -1);
}

function attachMetaGenres(){
  for (i = 0; i< metagenres.length; i++)
  {
    var option = document.createElement("option");
    option.text = metagenres[i];

    document.getElementById("FilterSelect").add(option);
  }
}
