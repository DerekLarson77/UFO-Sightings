
var tbody = d3.select("tbody");

//Function to add entire table on webpage opening
data.forEach(function(ufoData) {

    //Appending each row 
    var row = tbody.append("tr");

    Object.entries(ufoData).forEach(function([key, value]) {
        
        //console.log(key, value);
        //Appending each column of current row
        var cell = row.append("td");
        cell.text(value);
    });

});

// function to delete all contents of tbody before adding filtered data
function delete_table() {
    var table = document.getElementById("table-data");
    while(table.rows.length > 0) {
        table.deleteRow(0);
    };
};


// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

// When the button is clicked a filtered table based on selection is created
button.on("click", function() {

    delete_table()


    let inputField = d3.select("#datetime").property("value");

    let filterData = data.filter((d)=>d.datetime  === inputField);


    filterData.forEach(function(ufoData) {
        //Appending each row 
        var row = tbody.append("tr");

        Object.entries(ufoData).forEach(function([key, value]) {
            
            //console.log(key, value);
            //Appending each column of current row
            var cell = row.append("td");
            cell.text(value);
        });
    });

});
