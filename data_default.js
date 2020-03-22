//Tanggal Update
var a = document.getElementsByClassName("tgl_update");
var date = 'Update per Minggu, 22 March 2020 21:30 WIB';
var x_data = [514,64,48,10,29,9,0,1895,0,2409,14,9.33];
// positif         = x_data[0]
// new_positif     = x_data[1]
// meninggal       = x_data[2]
// new_meninggal   = x_data[3]
// sembuh          = x_data[4]
// new_sembuh      = x_data[5]
// pemeriksaan     = x_data[6]
// negatif         = x_data[7]
// new_negatif     = x_data[8]
// totaltes        = x_data[9]
// percentage_inc  = x_data[10]
// ratio_meninggal      = x_data[11]

//Dashboard
//Positif
document.getElementById("positif").innerHTML = x_data[0];
document.getElementById("positif_note").innerHTML = x_data[1];
//Meninggal
document.getElementById("meninggal").innerHTML = x_data[2];
document.getElementById("meninggal_note").innerHTML = x_data[3];
//Sembuh
document.getElementById("sembuh").innerHTML = x_data[4];
document.getElementById("sembuh_note").innerHTML = x_data[5];
//Proses Pemeriksaan
//document.getElementById("pemeriksaan").innerHTML = x_data[6];
//Negatif
document.getElementById("negatif").innerHTML = x_data[7];
document.getElementById("negatif_note").innerHTML = x_data[8];
//Total Test
document.getElementById("totaltes").innerHTML = x_data[9];
//Mortality Rate
document.getElementById("ratio_meninggal").innerHTML = x_data[11];