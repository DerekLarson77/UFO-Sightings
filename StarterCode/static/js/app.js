// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach(function(ufoData) {

    var row = tbody.append("tr");

    Object.entries(ufoData).forEach(function([key, value]) {
        
        console.log(key, value);
        var cell = row.append("td");

        cell.text(value);
    });

});
