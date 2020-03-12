//Tanggal Update
var a = document.getElementsByClassName("tgl_update");
var date = "Update per Kamis, 12 Maret 2020 22:15 WIB";
a[0].innerHTML = date;

function arrayToTable(tableData) {
    var table = $('<table class="table table-striped table-valign-middle"></table>');
    var tbody = $('<tbody></tbody>')
    var sembuh = [6,14,19];
    var meninggal = [25];
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
    url: "daftar_kasus.csv",
    success: function (data) {
        $('#tabel_kasus').append(arrayToTable(Papa.parse(data).data));
    }
});