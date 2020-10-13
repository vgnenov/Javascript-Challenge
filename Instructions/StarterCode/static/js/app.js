// from data.js
var tableData = data;

const tbody= d3.select('tbody');
//build table

function buildTable(data){
    tbody.html("");
    data.forEach((item) => {
        var newRow=tbody.append('tr');
        Object.values(item).forEach((val)=> {
            newRow.append('td').text(val)
        });
    });
};

function handleClick() {
    const date=d3.select("#datetime").property("value");
    const city=d3.select("#city").property("value");
    const state=d3.select("#state").property("value");
    const country=d3.select("#country").property("value");
    const shape=d3.select("shape").property("value");

function buildTable(data){
        tbody.html("");
        data.forEach((item) => {
            var newRow=tbody.append('tr');
            Object.values(item).forEach((val)=> {
                newRow.append('td').text(val)
            });
        });
    };   


    //play around with this
    var filteredData =  tableData;
    console.log(filteredData.datetime)

    if (date) {
            var filteredData = filteredData.filter(info => info.datetime === date);
    };

    if (city) {
        var lowCity=city.toLowerCase();
        var filteredData= filteredData.filter(info => info.city === lowCity);
    };

    if (state) {
        var lowState= state.toLowerCase();
            var filteredData = filteredData.filter(info => info.state === lowState);
    };
    if (country) {
        var lowCountry= country.toLowerCase();
            var filteredData = filteredData.filter(info => info.country === lowCountry);
    };
    if (shape) {
        var lowShape= shape.toLowerCase();
            var filteredData = filteredData.filter(info => info.shape === lowShape);
    };

    buildTable(filteredData)

};



d3.selectAll("#filter-btn").on('click', handleClick);


buildTable(tableData);







// // Event Listeners
// var button = d3.select("#filter-btn");
// var form = d3.select("form");
// button.on("click", runEnter);
// form.on("submit", runEnter);
// function runEnter() {
//     // Clear the table
//     tbody.html("");
  
//     // Prevent the page from refreshing
//     d3.event.preventDefault();
  
//     // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#datetime");
  
//     // Get the value property of the input element
//     var inputValue = inputElement.property("value");
  
//     // Use the form input to filter the data by date
//     var filteredData = tableData.filter((data) => data.datetime === inputValue);
  
//     // Table of filtered data appears after event
//     filteredData.forEach((ufoSighting) => {
//       var row = tbody.append("tr");
//       Object.entries(ufoSighting).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//       });
//     });
//     console.log(filteredData);
//   }

