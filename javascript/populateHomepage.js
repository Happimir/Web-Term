function createMPEntry() {
    /*---------------------------------CONTAINER PARENT---------------------------------------------*/

    var MPArea = document.getElementsByClassName("col-md-8")[0];   // gets reference to parent div of all Most Popular Entries
    var container = document.createElement("div");      // creates a div node

    // create class attribute and add it to container div
    var attr = document.createAttribute("class");
    attr.value = "MostPopularEntry";
    container.setAttributeNode(attr);

    // add div to page
    MPArea.appendChild(container);

    /*---------------------------------INNER IMG DIV---------------------------------------------*/
    // creates first inner div
    var innerDiv = document.createElement("div");

    // give inner img div a class value
    attr = document.createAttribute("class");
    attr.value = "imgDiv";
    innerDiv.setAttributeNode(attr);

    // set up img element and attributes
    var img = document.createElement("img");
    img.src = "http://graphicdesignjunction.com/wp-content/uploads/2011/12/grey-movie-poster.jpg";
    img.alt = "placeholder";

    innerDiv.appendChild(img);  // adds img to inner img div

    container.appendChild(innerDiv);    // adds finished inner div to parent container

    /*---------------------------------INNER INFO DIV---------------------------------------------*/
    // creates inner info div
    innerDiv = document.createElement("div");

    // add class value
    attr = document.createAttribute("class");
    attr.value = "infoDiv";
    innerDiv.setAttributeNode(attr);

    container.appendChild(innerDiv);

    var dlNode = document.createElement("dl");

    innerDiv.appendChild(dlNode);

    var dEntry = document.createElement("dt");
    dEntry.appendChild(document.createTextNode("Title"));
    dlNode.appendChild(dEntry);

    dEntry = document.createElement("dd");
    dEntry.appendChild(document.createTextNode("The Grey"));
    dEntry.appendChild(document.createElement("br"));
    dEntry.appendChild(document.createElement("br"));
    dlNode.appendChild(dEntry);

    dEntry = document.createElement("dt");
    dEntry.appendChild(document.createTextNode("Rating"));
    dlNode.appendChild(dEntry);

    dEntry = document.createElement("dd");
    dEntry.appendChild(document.createTextNode("85%"));
    dEntry.appendChild(document.createElement("br"));
    dEntry.appendChild(document.createElement("br"));
    dlNode.appendChild(dEntry);

    dEntry = document.createElement("dt");
    dEntry.appendChild(document.createTextNode("Comments:"));
    dlNode.appendChild(dEntry);

    dEntry = document.createElement("dd");
    dEntry.appendChild(document.createTextNode("Dang Nature, you scary! Watch Liam Neeson punch forest critter for way too long."));
    dlNode.appendChild(dEntry);
}



function createITEntry() {
    /*---------------------------------CONTAINER PARENT---------------------------------------------*/
    var ITArea = document.getElementsByClassName("col-md-4")[0];

    var container = document.createElement("div");

    var attr = document.createAttribute("class");
    attr.value = "inTheatersEntry";
    container.setAttributeNode(attr);

    ITArea.appendChild(container);

    /*---------------------------------INNER IMG DIV---------------------------------------------*/

    var innerDiv = document.createElement("div");

    attr = document.createAttribute("class");
    attr.value = "imgDiv";
    innerDiv.setAttributeNode(attr);

    container.appendChild(innerDiv);

    var img = document.createElement("img");
    img.src = "http://www.printmag.com/wp-content/uploads/skyfall_xlg.jpg?55bde1";
    img.alt = "placeholder";

    innerDiv.appendChild(img);  // adds img to inner img div

    /*---------------------------------INNER INFO DIV---------------------------------------------*/

    innerDiv = document.createElement("div");

    attr = document.createAttribute("class");
    attr.value = "infoDiv";
    innerDiv.setAttributeNode(attr);

    container.appendChild(innerDiv);

    var dlNode = document.createElement("dl");
    innerDiv.appendChild(dlNode);

    var dEntry = document.createElement("dt");
    dEntry.appendChild(document.createTextNode("Title"));
    dlNode.appendChild(dEntry);

    dEntry = document.createElement("dd");
    dEntry.appendChild(document.createTextNode("Aging Super Spy Royale of Solace Fall"));
    dlNode.appendChild(dEntry);

    dEntry = document.createElement("dt");
    dEntry.appendChild(document.createTextNode("Synopsis"));
    dlNode.appendChild(dEntry);

    dEntry = document.createElement("dd");
    dEntry.appendChild(document.createTextNode("This is James Bond and he is here to make you think about death and get sad and stuff!"));
    dlNode.appendChild(dEntry);
}

$(document).ready(function(){
    createMPEntry();
    createITEntry();
});