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