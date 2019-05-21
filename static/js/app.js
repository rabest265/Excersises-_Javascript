// from data.js
var tableData = data;
// Get a reference to the table body
var tbody = d3.select("tbody");
// Select the submit button
var submit = d3.select("#filter-btn");

//Insert a row for each ufo sighting and then fill it with data
data.forEach((alienReport) => {
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  

// Set up what happens when you filter by a date
submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#filtered-datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData);

    // Clear table results
    tbody.selectAll("tr").remove();
    //refill table with filtered results
    filteredData.forEach((filteredReport) => {
        var row = tbody.append("tr");
        Object.entries(filteredReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
});


