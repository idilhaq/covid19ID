function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//Tanggal Update
var a = document.getElementsByClassName("tgl_update");
var b = document.getElementsByClassName("spec_msg");
var spec_msg = 'Bismillah 2022 Normal';

var date = 'Update per Kamis, 16 September 2021 20:38 WIB'
var x_data = [4181309,3145,139919,237,3968152,14633,0,19411940,51621,23593249,0.0,3.35,54766];

a[0].innerHTML = a[1].innerHTML = date;
b[0].innerHTML = spec_msg;
document.getElementById("positif").innerHTML = numberWithCommas(x_data[0]);
document.getElementById("positif_note").innerHTML = numberWithCommas(x_data[1])	
document.getElementById("new_case").innerHTML = numberWithCommas(x_data[1]);
document.getElementById("meninggal").innerHTML = numberWithCommas(x_data[2]);	
document.getElementById("meninggal_note").innerHTML = numberWithCommas(x_data[3]);	
document.getElementById("sembuh").innerHTML = numberWithCommas(x_data[4]);
document.getElementById("sembuh_note").innerHTML = numberWithCommas(x_data[5]);	
document.getElementById("negatif").innerHTML = numberWithCommas(x_data[7]);
document.getElementById("negatif_note").innerHTML = numberWithCommas(x_data[8]);
document.getElementById("totaltes").innerHTML = numberWithCommas(x_data[9]);	
document.getElementById("new_test").innerHTML = numberWithCommas(x_data[12]);	
document.getElementById("percentage_increase").innerHTML = numberWithCommas(x_data[10]);
document.getElementById("ratio_meninggal").innerHTML = x_data[11];

// $.ajax({
//     type: "GET",
//     url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTmb1WvsO22hTIDE9b0MmBpOpOhuE4SRzcKJQtPKXkRkOqTnhr-VDPDhveMn9-kBkDTc9lTRTVbZ3kf/pub?gid=0&single=true&output=csv",       
//     success: function(response)  
//     {
//     x_data = $.csv.toArrays(response);
//     generateHtmlTable(x_data);
//     }
// });

// function generateHtmlTable(x_data) {
//     if(typeof(x_data[0]) === 'undefined') {
//         return null;
//       } else {
// 		$.each(x_data, function( index, row ) {
//             if(index == 0){
//                 $.each(row, function( index, colData ) {
//                     if(index == 0){
//                         a[0].innerHTML = a[1].innerHTML = colData;
//                     }                    
//                 });
//             }else{
//                 $.each(row, function( index, colData ) {
//                     switch(index){
//                         case 0:
//                             document.getElementById("positif").innerHTML = numberWithCommas(colData);
//                         break;
//                         case 2:
//                             document.getElementById("positif_note").innerHTML = document.getElementById("new_case").innerHTML = colData;
//                         break;
//                         case 3:
//                             document.getElementById("meninggal").innerHTML = numberWithCommas(colData);
//                         break;
//                         case 4:
//                             document.getElementById("meninggal_note").innerHTML = colData;
//                         break;
//                         case 5:
//                             document.getElementById("sembuh").innerHTML = numberWithCommas(colData);
//                         break;
//                         case 6:
//                             document.getElementById("sembuh_note").innerHTML = colData;
//                         break;
//                         case 8:
//                             document.getElementById("negatif").innerHTML = numberWithCommas(colData);
//                         break;
//                         case 9:
//                             document.getElementById("negatif_note").innerHTML = numberWithCommas(colData);
//                         break;
//                         case 10:
//                             document.getElementById("totaltes").innerHTML = numberWithCommas(colData);
//                         break;
//                         case 12:
//                             document.getElementById("percentage_increase").innerHTML = colData;
//                         break;          
//                         case 13:
//                             document.getElementById("ratio_meninggal").innerHTML = colData;
//                         break;          
//                     }
//                 });
//             }			
// 		});
//     }
// }
