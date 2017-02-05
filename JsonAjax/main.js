

var btnCounter = 1;
var btn = document.getElementById("btn");
var animalContainer = document.getElementById("animal-info");


btn.addEventListener("click", function() {
    
    var ourRequest = new XMLHttpRequest();

    
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' 
    + btnCounter + '.json');

    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
    btnCounter++;
    if(btnCounter > 3) {
        btn.classList.add("hide-me");
    }
});



function renderHTML(data) {

    var htmlString = "";

    for(i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + 
        data[i].species + " that likes to eat ";
        for(ii = 0; ii < data[i].foods.likes.length; ii++) {
           if(ii == 0) {
                htmlString += data[i].foods.likes[ii];
           } else {
                htmlString += " and " + data[i].foods.likes[ii];
           }
        }
        htmlString += '.</p>'
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

