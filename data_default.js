function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//Tanggal Update
var a = document.getElementsByClassName("tgl_update");
var date = 'Update per Kamis, 16 April 2020 15:57 WIB';
var x_data;

$.ajax({
    type: "GET",
    dataType: "text",
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTmb1WvsO22hTIDE9b0MmBpOpOhuE4SRzcKJQtPKXkRkOqTnhr-VDPDhveMn9-kBkDTc9lTRTVbZ3kf/pub?gid=0&single=true&output=csv",       
    success: function(response)  
    {
    x_data = $.csv.toArrays(response);
    generateHtmlTable(x_data);
    }   
});

function generateHtmlTable(x_data) {
    if(typeof(x_data[0]) === 'undefined') {
        return null;
      } else {
		$.each(x_data, function( index, row ) {
            if(index == 0){
                $.each(row, function( index, colData ) {
                    if(index == 0){
                        a[0].innerHTML = a[1].innerHTML = colData;
                    }                    
                });
            }else{
                $.each(row, function( index, colData ) {
                    switch(index){
                        case 0:
                            document.getElementById("positif").innerHTML = numberWithCommas(colData);
                        break;
                        case 2:
                            document.getElementById("positif_note").innerHTML = document.getElementById("new_case").innerHTML = colData;
                        break;
                        case 3:
                            document.getElementById("meninggal").innerHTML = numberWithCommas(colData);
                        break;
                        case 4:
                            document.getElementById("meninggal_note").innerHTML = colData;
                        break;
                        case 5:
                            document.getElementById("sembuh").innerHTML = numberWithCommas(colData);
                        break;
                        case 6:
                            document.getElementById("sembuh_note").innerHTML = colData;
                        break;
                        case 8:
                            document.getElementById("negatif").innerHTML = numberWithCommas(colData);
                        break;
                        case 9:
                            document.getElementById("negatif_note").innerHTML = numberWithCommas(colData);
                        break;
                        case 10:
                            document.getElementById("totaltes").innerHTML = numberWithCommas(colData);
                        break;
                        case 12:
                            document.getElementById("percentage_increase").innerHTML = colData;
                        break;          
                        case 13:
                            document.getElementById("ratio_meninggal").innerHTML = colData;
                        break;          
                    }
                });
            }			
		});
    
}
}