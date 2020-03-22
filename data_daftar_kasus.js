a[0].innerHTML = date;
function arrayToTable(tableData) {
    var table = $('<table id="tabel_k" class="table table-striped table-valign-middle"></table>');
    var tbody = $('<tbody></tbody>')
    var sembuh = [1,2,3,6,7,8,9,13];
    var meninggal = [25,35,36,39,50,71,72,74,87,99,109,113,116,117,118,384];
    $(tableData).each(function (i, rowData) {
        if(i == 0){
            var thead = $('<thead></thead>');
            var row = $('<tr style="text-align:center"></tr>');
            $(rowData).each(function (j, cellData) {
                row.append($('<th>'+cellData+'</th>'));
            });
            thead.append(row);
            table.append(thead);
        }else{
            if(sembuh.indexOf(i) != -1){
                var row = $('<tr style="text-align:center; background-color: #cdeccd;"></tr>');
                $(rowData).each(function (j, cellData) {
                    if(j == 3){
                        row.append($('<td><span class="badge badge-success">'+cellData+'</span></td>'));
                    }else{
                        row.append($('<td>'+cellData+'</td>'));
                    }                    
                });
            }else if(meninggal.indexOf(i) != -1){
                var row = $('<tr style="text-align:center; background-color: #f5d6d6;"></tr>');
                $(rowData).each(function (j, cellData) {
                    if(j == 3){
                        row.append($('<td><span class="badge badge-danger">'+cellData+'</span></td>'));
                    }else{
                        row.append($('<td>'+cellData+'</td>'));
                    }   
                });
            }else{
                var row = $('<tr style="text-align:center"></tr>');
                $(rowData).each(function (j, cellData) {
                    row.append($('<td>'+cellData+'</td>'));
                });
            }
            tbody.append(row);
        }
        
    });
    table.append(tbody);
    return table;
}

$.ajax({
    type: "GET",
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQw8mTbcVOX_Yyb6tXP7m851FSIDIP3pfuLAcmbfnlCNXBvevLcUUN6ooW6Wc5Egb0wmdpLSLtceC7k/pub?gid=0&single=true&output=csv",
    success: function (data) {
        $('#tabel_kasus').append(arrayToTable(Papa.parse(data).data));
    }
});