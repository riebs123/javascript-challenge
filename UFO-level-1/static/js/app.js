console.log('app.js loaded');


// from data.js on index.html need to make sure data.js loads BEFORE app.js
var tableData = data;

console.log('Table data loaded');
console.log(tableData);

var tbody = d3.select('tbody');

var dateTime = tableData.map(ufo => ufo.datetime);
var city = tableData.map(ufo => ufo.city);
var state = tableData.map(ufo => ufo.state);
var country = tableData.map(ufo => ufo.country);
var shape = tableData.map(ufo => ufo.shape);
var comment = tableData.map(ufo => ufo.comments);

//  console.log(dateTime);
// console.log(city);
// console.log(state);
// console.log(country);
// console.log(shape);
// console.log(shape);
// console.log(comment);

tableData.forEach(function (ufoSightings) {

    // console.log(ufoSightings);

    var row = tbody.append('tr')
    Object.entries(ufoSightings).forEach(function ([key, value]) {
        var cell = row.append('td');
        cell.text(value)
    });
});

// Set up the event handlers for form and button

var button = d3.select('#filter-btn');

var form = d3.select('#filters');

button.on('click', runEnter);
form.on('submit', runEnter);

function runEnter() {
    
    // Prevent page refresh
    d3.event.preventDefault();

    var inputElement = d3.select('#datetime')

    var inputValue = inputElement.property('value');

    // console.log(inputValue);

    // Logic that filers data when button is clicked based on the input field
    function filteredDate(ufoSighting) {
       
        return ufoSighting.datetime == inputValue; 
    }
    
    var filteredTableData = tableData.filter(ufoSighting => ufoSighting.datetime == inputValue)

    console.log(filteredTableData);

    // Logic that overwrites the table with the filteredDate

    tbody.html('');

    filteredTableData.forEach(function (ufoSightings) {

        // console.log(ufoSightings);
    
        var row = tbody.append('tr')
        Object.entries(ufoSightings).forEach(function ([key, value]) {
            var cell = row.append('td');
            cell.text(value)
        });
    });


};
