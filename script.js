// The createRow function takes data returned by OMDB and appends the table data to the tbody
var createRow = function(data){
    // create a new table row element
var tRow = $("<tr>");


// Methods run on jQuery selectors return the selector they run on
// This is why we can create and save a reference to a td in the same statement and we update its text
var titleTd = $("<td>").text(data.title);
var yearTd = $("<td>").text(data.year);
var actorsTd = $("<td>").text(data.actors);

// Append the newly created the tabledata to the table row
tRow.append(titleTd, yearTd, actorsTd);

// Append the tableRow to the tableBody
$("tbody").append(tRow);
};

    //  ++++  
// The below code fills in the first row of the table:
var movie = "Dune";
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

fetch(queryURL)
.then(function(response){
    return response.json();
}).then(function(data){
    // Create a new table row element or a new data:
    var tRow = $("<tr>");
    //  Methods run on jquery selectors return selector they run on
    // This is why we can create and save a reference to a td. In the same statement we update its text
    var titleTd = $("<td>").text(data.Title);
    var yearTd = $("<td").text(data.Year);
    var actorsTd = $("<td>").text(data.Actors);
    // Append the newly created table data in the table row
    tRow.append(titleTd, yearTd, actorsTd);
    // Append the table row to the tablw body
    $("tbody").append(tRow); 
});

// Repeat the same prosecces for second movie title and so on



