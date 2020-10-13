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


    //play around with this
    var filteredData =  tableData;
    console.log(filteredData.datetime)

    if (date) {
            var filteredData = filteredData.filter(info => info.datetime === date);
    };
}