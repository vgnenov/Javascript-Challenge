// // from data.js
var tableData = data;

// const tbody= d3.select('tbody');
// //build table

// function buildTable(data){
//     tbody.html("");
//     data.forEach((item) => {
//         var newRow=tbody.append('tr');
//         Object.values(item).forEach((val)=> {
//             newRow.append('td').text(val)
//         });
//     });
// };
var tbody = d3.select("tbody");

// function handleClick() {
//     const date=d3.select("#datetime").property("value");
//     const city=d3.select("#city").property("value");
//     const state=d3.select("#state").property("value");
//     const country=d3.select("#country").property("value");
//     const shape=d3.select("shape").property("value");
tableData.forEach((SpookyVisit) => {
    var row = tbody.append("tr");
    Object.entries(SpookyVisit).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Button and filtering code
//var button = d3.select("#click-me");
var button = d3.select("#filter-btn");

// var inputField = d3.select("#input-field");

// Select the upvote and downvote buttons
// var upvote = d3.select(".upvote");
// var downvote = d3.select(".downvote");
var form = d3.select("form");

// grab references to the input element and the output div
// var text = d3.select("#text");
// var output = d3.select(".output");

// // Function to reverse a string
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// // Function to handle input change
// function handleChange(event) {
//   // grab the value of the input field
//   var inputText = d3.event.target.value;

//   // reverse the input string
//   var reversedInput = reverseString(inputText);

//   // Set the output text to the reversed input string
//   output.text(reversedInput);
// }

// text.on("change", handleChange);
form.on("submit", runEnter);

function buildTable(data){
            tbody.html("");
            data.forEach((item) => {
                var newRow=tbody.append('tr');
                Object.values(item).forEach((val)=> {
                    newRow.append('td').text(val)
                });
            });
        };


function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter((data) => data.datetime === inputValue);
    filteredData.forEach((SpookyVisit) => {
        var row = tbody.append("tr");
        Object.entries(SpookyVisit).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
      console.log(filteredData);
      buildTable(filteredData);

    

      //buildTable(filteredData);
};

// function buildTable(data){
//         tbody.html("");
//         data.forEach((item) => {
//             var newRow=tbody.append('tr');
//             Object.values(item).forEach((val)=> {
//                 newRow.append('td').text(val)
//             });
//         });
//     };   


//     //play around with this
//     var filteredData =  tableData;
//     console.log(filteredData.datetime)

//     if (date) {
//             var filteredData = filteredData.filter(info => info.datetime === date);
//     };

//     if (city) {
//         var lowCity=city.toLowerCase();
//         var filteredData= filteredData.filter(info => info.city === lowCity);
//     };

//     if (state) {
//         var lowState= state.toLowerCase();
//             var filteredData = filteredData.filter(info => info.state === lowState);
//     };
//     if (country) {
//         var lowCountry= country.toLowerCase();
//             var filteredData = filteredData.filter(info => info.country === lowCountry);
//     };
//     if (shape) {
//         var lowShape= shape.toLowerCase();
//             var filteredData = filteredData.filter(info => info.shape === lowShape);
//     };

//     buildTable(filteredData)

// };



// d3.selectAll("#filter-btn").on('click', handleClick);


// buildTable(tableData);




//import data from data.js




