function createMainEntry(e) {
    /*---------------------------------CONTAINER PARENT---------------------------------------------*/

    var MPArea = document.getElementsByClassName("col-md-8")[0];   // gets reference to parent div of all Most Popular Entries
    var container = document.createElement("div");      // creates a div node

    // create class attribute and add it to container div
    var attr = document.createAttribute("class");
    attr.value = "MainEntry";
    container.setAttributeNode(attr);

    // add div to page
    MPArea.appendChild(container);

    /*---------------------------------INNER IMG DIV---------------------------------------------*/
    // creates first inner div
    var innerDiv = document.createElement("div");

    // give inner img div a class value
    innerDiv.setAttribute("class","imgDiv");

    // adds onclick event to redirect to info page
    var qTitle = encodeURIComponent(e.Title); // changes title from plain text to url friendly
    innerDiv.setAttribute("onclick","location.href='infoPage.html?title=" + qTitle + "'");

    // adds finished inner div to parent container
    container.appendChild(innerDiv);

    // set up img element and attributes
    var img = document.createElement("img");
    img.setAttribute("class", "img-responsive center-block");
    img.src = e.Poster;

    innerDiv.appendChild(img);  // adds img to inner img div



    /*---------------------------------INNER INFO DIV---------------------------------------------*/
    // creates inner info div
    innerDiv = document.createElement("div");

    // add class value
    innerDiv.setAttribute("class","infoDiv");

    container.appendChild(innerDiv);

    var dlNode = document.createElement("dl");

    innerDiv.appendChild(dlNode);

    var dEntry = document.createElement("dt");
    dEntry.appendChild(document.createTextNode("Title"));
    dlNode.appendChild(dEntry);

    dEntry = document.createElement("dd");
    dEntry.appendChild(document.createTextNode(e.Title));
    dlNode.appendChild(dEntry);

    dEntry = document.createElement("dt");
    dEntry.appendChild(document.createTextNode("Rating"));
    dlNode.appendChild(dEntry);

    dEntry = document.createElement("dd");
    dEntry.appendChild(document.createTextNode(e.Rated));
    dlNode.appendChild(dEntry);

    dEntry = document.createElement("dt");
    dEntry.appendChild(document.createTextNode("Synopsis:"));
    dlNode.appendChild(dEntry);

    dEntry = document.createElement("dd");
    dEntry.appendChild(document.createTextNode(e.Plot));
    dlNode.appendChild(dEntry);
}



function createSideEntry(e) {
    /*---------------------------------CONTAINER PARENT---------------------------------------------*/
    var ITArea = document.getElementsByClassName("col-md-4")[0];

    var container = document.createElement("div");

    container.setAttribute("class","SideEntry");

    ITArea.appendChild(container);

    /*---------------------------------INNER IMG DIV---------------------------------------------*/

    var innerDiv = document.createElement("div");

    innerDiv.setAttribute("class","imgDiv");

    // adds onclick event to redirect to info page
    var qTitle = encodeURIComponent(e.Title); // changes title from plain text to url friendly
    innerDiv.setAttribute("onclick","location.href='infoPage.html?title=" + qTitle + "'");

    container.appendChild(innerDiv);

    var img = document.createElement("img");
    img.src = e.Poster;
    img.setAttribute("class", "img-responsive center-block");

    innerDiv.appendChild(img);  // adds img to inner img div

    /*---------------------------------INNER INFO DIV---------------------------------------------*/

    innerDiv = document.createElement("div");

    innerDiv.setAttribute("class","infoDiv");

    container.appendChild(innerDiv);

    var dlNode = document.createElement("dl");
    innerDiv.appendChild(dlNode);

    var dEntry = document.createElement("dt");
    dEntry.appendChild(document.createTextNode("Title"));
    dlNode.appendChild(dEntry);

    dEntry = document.createElement("dd");
    dEntry.appendChild(document.createTextNode(e.Title));
    dlNode.appendChild(dEntry);

    dEntry = document.createElement("dt");
    dEntry.appendChild(document.createTextNode("Synopsis"));
    dlNode.appendChild(dEntry);

    dEntry = document.createElement("dd");
    dEntry.appendChild(document.createTextNode(e.Plot));
    dlNode.appendChild(dEntry);
}

function prepareMain(e){
    for(var i = 0; i < 20; i++){
        var qTitle = encodeURIComponent(e.results[i].title);
        $.ajax({
            url: "http://www.omdbapi.com/?t=" + qTitle + "&y=&plot=short&r=json",
            crossDomain: true,
            dataType: "json",
            success: createMainEntry
        });
    }
}

function prepareSide(e){
    for(var i = 0; i < 10; i++){
        var qTitle = encodeURIComponent(e.results[i].title);
        $.ajax({
            url: "http://www.omdbapi.com/?t=" + qTitle + "&y=&plot=short&r=json",
            crossDomain: true,
            dataType: "json",
            success: createSideEntry
        });
    }
}

$(document).ready(function(){
    /*$.ajax({
        url: "http://www.omdbapi.com/?t=The+Grey&y=&plot=short&r=json",
        crossDomain: true,
        dataType: "json",
        success: createMPEntry
    });

    $.ajax({
        url: "http://www.omdbapi.com/?t=Skyfall&y=&plot=short&r=json",
        crossDomain: true,
        dataType: "json",
        success: createITEntry
    });*/

    $.ajax({
        url: "https://api.themoviedb.org/3/movie/now_playing?api_key=027d8b752a92c86cb355d5a2965a7208&page=1",
        crossDomain: true,
        dataType: "json",
        success: prepareMain
    });

    $.ajax({
        url: "https://api.themoviedb.org/3/movie/upcoming?api_key=027d8b752a92c86cb355d5a2965a7208&language=en-US&page=1",
        crossDomain: true,
        dataType: "json",
        success: prepareSide
    });

});