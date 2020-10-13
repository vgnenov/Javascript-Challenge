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

