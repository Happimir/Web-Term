function fillPage(e){
    document.getElementById("movieTitle").innerHTML = e.Title;  // sets movie title

    document.getElementById("genre").innerHTML = e.Genre;   // sets movie genre

    document.getElementById("actors").innerHTML = e.Actors; // sets movie Actors

    document.getElementById("plot").innerHTML = e.Plot; // adds plot section

    var posterDiv = document.getElementById("moviePoster"); // gets the div that will contain movie poster
    posterDiv.innerHTML = "";

    // creates the img and sets attributes
    var poster = document.createElement("img");
    poster.setAttribute("class", "img-responsive center-block");
    poster.src = e.Poster;

    posterDiv.appendChild(poster);

}

$(document).ready(function(){
    // GET will store all arguments in the url
    var GET = {};
    // isolates the argument string from rest of url and splits the argument value pairs
    var query = window.location.search.substring(1).split("&");
    // iterate through list of queries and adds them GET array as key value pair
    for(var i = 0; i < query.length; i++){
        if(query[i] === "") // checks for extra & at end of url
            continue;
        var param = query[i].split("="); // separates the arg=val string into separate vars
        // creates the key value pair in GET array
        GET[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || "");
    }

    // get the movie title and prepare it to be used in query
    var qTitle = encodeURIComponent(GET["title"]);
    // final url to be used in query
    var queryUrl = "http://www.omdbapi.com/?t=" + qTitle + "&y=&plot=short&r=json";

    // queries the OMDb api and calls the fillPage function on success
    $.ajax({
        url: queryUrl,
        crossDomain: true,
        dataType: "json",
        success: fillPage
    });

    //document.getElementById("movieTitle").innerHTML = GET["title"];
});
