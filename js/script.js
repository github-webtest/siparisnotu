var clicks = 1;
var clicks_2 = 1;

function menu_run() {
  
if (clicks == 1) {
  document.getElementById("menu_id").style.display= "block";
 clicks = 0;
} else if (clicks == 0) {
	document.getElementById("menu_id").style.display= "none";
	clicks = 1;
}

}

function close_sezon_open() {
	document.getElementById("yes_no_bg").style.display = "flex";
}

function close_sezon_close() {
	document.getElementById("yes_no_bg").style.display = "none";
}

var new_id2 = localStorage.getItem("id_number2"); new_id2++
var new_sezonlar_1 = localStorage.getItem("new_sezonlar");

function close_sezon() {
	if (document.getElementById("yes_no_input_sezon").value.length >= 1) {
	new_id2 += 0;
	localStorage.setItem("id_number2", new_id2);
	
	new_sezon = localStorage.getItem("new_gecmis_siparis");
	localStorage.setItem("new_gecmis_sezon_" + new_id2 + "", new_sezon);
	localStorage.setItem("new_gecmis_siparis", "");
	
	var fff = "'";
	
	var sezon_yili = document.getElementById("yes_no_input_sezon").value;
	localStorage.setItem("sezon_yillar" + new_id2 + "", sezon_yili);
	
	localStorage.setItem("sezon_toplam_gelir_" + new_id2 + "", localStorage.getItem("sezon_toplam_gelir"));
	localStorage.setItem("sezon_toplam_gider_" + new_id2 + "", localStorage.getItem("sezon_toplam_gider"));
	localStorage.setItem("sezon_toplam_is_" + new_id2 + "", localStorage.getItem("sezon_toplam_is"));
	
	new_sezonlar_1 += '<div class="sezonlar_divs" onclick="localStorage.setItem(' + fff + 'sezonlar_top_gelir' + fff + ', localStorage.getItem(' + fff + 'sezon_toplam_gelir_' + new_id2 + '' + fff + ')); localStorage.setItem(' + fff + 'sezonlar_top_gider' + fff + ', localStorage.getItem(' + fff + 'sezon_toplam_gider_' + new_id2 + '' + fff + ')); localStorage.setItem(' + fff + 'sezonlar_top_is' + fff + ', localStorage.getItem(' + fff + 'sezon_toplam_is_' + new_id2 + '' + fff + ')); localStorage.setItem(' + fff + 'sezonlar_top_kar' + fff + ', Math.floor(localStorage.getItem(' + fff + 'sezonlar_top_gelir' + fff + ') - localStorage.getItem(' + fff + 'sezonlar_top_gider' + fff + '))); localStorage.setItem(' + fff + 'sezon_title' + fff + ', ' + sezon_yili + '); localStorage.setItem(' + fff + 'new_gecmis_sezon' + fff + ', localStorage.getItem(' + fff + 'new_gecmis_sezon_' + new_id2 + '' + fff + ')); location.href=' + fff + 'sezon.html' + fff + ';"><b id="sezon_years_id' + new_id2 + '"></b><b> Yaz Sezonu</b></div>';
	localStorage.setItem("new_sezonlar", new_sezonlar_1);
	
	localStorage.setItem("sezon_toplam_gelir", "");
	localStorage.setItem("sezon_toplam_gider", "");
	localStorage.setItem("sezon_toplam_is", "");
	
	location.reload();
	
	Android.showToast("" + sezon_yili + " Sezonu Kapatıldı");
	} else if (document.getElementById("yes_no_input_sezon").value.length < 1) {
		Android.showToast("Lütfen Bir Yıl Girin");
	}
}

function clear_data_open() {
	document.getElementById("yes_no_bg2").style.display = "flex";
}

function clear_data_close() {
	document.getElementById("yes_no_bg2").style.display = "none";
}

function clear_data() {
	var password_value = document.getElementById("yes_no_input_password").value;
	
	if (password_value == "umVQp6YfvC00qOomiuyk3mAj") {
		localStorage.clear();
		location.reload();
		Android.showToast("Tüm Veriler Silindi!");
		
	} else if (password_value != "umVQp6YfvC00qOomiuyk3mAj") {
		Android.showToast("Şifre Yanlış");
	}
}

var d_none = localStorage.getItem("d_none");
var d_block = localStorage.getItem("d_block");

function go_siparis() {
	if (localStorage.getItem("d_none") == null) {
  localStorage.setItem("d_none", "none");
  localStorage.setItem("d_block", "block");
  localStorage.setItem("new_cop_siparis", "");
  localStorage.setItem("new_gecmis_siparis", "");
  localStorage.setItem("onay_id_nn", "");
  localStorage.setItem("onay_id2_nn", "");
  localStorage.setItem("onay_id3_nn", "");
  localStorage.setItem("s_cop1", "");
  localStorage.setItem("new_siparis1", "");
  localStorage.setItem("s_display1", "");
  localStorage.setItem("id_number", "");
  localStorage.setItem("input_siparis_onay1_id1", "");
  localStorage.setItem("input_siparis_onay2_id1", "");
  localStorage.setItem("input_siparis_onay3_id1", "");
  localStorage.setItem("input_fiyat_onay1_id1", "");
  localStorage.setItem("input_fiyat_onay2_id1", "");
  localStorage.setItem("edit_onays_id1", "");
  localStorage.setItem("onay_border_id1", "");
  localStorage.setItem("onay_color_id1", "");
  localStorage.setItem("new2_siparis1", "");
  localStorage.setItem("s_edit_ids", "");
  localStorage.setItem("edit_onays", "");
  localStorage.setItem("new_sezonlar", "");
  localStorage.setItem("sezon_toplam_gelir", "");
  localStorage.setItem("sezon_toplam_gider", "");
  localStorage.setItem("sezon_toplam_is", "");
  location.href = "siparis_ekle.html";
	}
}

function go_siparis_2() {
  location.href = "siparis_ekle.html";
}

function go_anasayfa() {
  location.href = "index.html";
}

function go_gecmis() {
	location.href= "gecmis_siparisler.html";
}

function go_cop() {
	location.href= "cop_kutusu.html";
}

function go_sezon() {
	location.href= "sezonlar.html";
}

function go_hakkinda() {
	location.href= "hakkinda.html";
}

/* save */

var sandalye = localStorage.getItem("sandalye");
var masa = localStorage.getItem("masa");
var cadir = localStorage.getItem("cadir");
var cayocagi = localStorage.getItem("cayocagi");
var projektor = localStorage.getItem("projektor");
var telefon = localStorage.getItem("telefon");
var isim = localStorage.getItem("isim");
var tarih = localStorage.getItem("tarih");
var fiyat = localStorage.getItem("fiyat");
var aciklama = localStorage.getItem("aciklama");
var adres = localStorage.getItem("adres");
var new_siparis = localStorage.getItem("new_siparis");
var id_number = localStorage.getItem("id_number");
var onay_id1_nn = localStorage.getItem("onay_id_nn");
var onay_id2_nn = localStorage.getItem("onay_id2_nn");
var onay_id3_nn = localStorage.getItem("onay_id3_nn");

var onay_border_id1 = localStorage.getItem("onay_border_id1");
var onay_color_id1 = localStorage.getItem("onay_color_id1");

var new_cop_siparis_1 = localStorage.getItem("new_cop_siparis");
var new_gecmis_siparis_1 = localStorage.getItem("new_gecmis_siparis");
var new_id = localStorage.getItem("id_number"); new_id++
var sezon_gelir = localStorage.getItem("sezon_toplam_gelir"); sezon_gelir++
var sezon_gider = localStorage.getItem("sezon_toplam_gider"); sezon_gider++
var sezon_is = localStorage.getItem("sezon_toplam_is"); sezon_is++

function add_siparis() {
	var sandalye_value = document.getElementById("sandalye_input").value;
	var masa_value = document.getElementById("masa_input").value;
	var cadir_value = document.getElementById("cadir_input").value;
	var cayocagi_value = document.getElementById("cayocagi_input").value;
	var projektor_value = document.getElementById("projektor_input").value;
	var telefon_value = document.getElementById("telefon_input").value;
	var isim_value = document.getElementById("isim_input").value;
	var tarih_value = document.getElementById("tarih_input").value;
	var aciklama_value = document.getElementById("aciklama_input").value;
	var adres_value = document.getElementById("adres_input").value;
	var fiyat_value = document.getElementById("fiyat_input").value;
	
	new_id += 0;
	localStorage.setItem("id_number", new_id);
	
	localStorage.setItem("sandalye" + new_id + "", sandalye_value);
	localStorage.setItem("masa" + new_id + "", masa_value);
	localStorage.setItem("cadir" + new_id + "", cadir_value);
	localStorage.setItem("cayocagi" + new_id + "", cayocagi_value);
	localStorage.setItem("projektor" + new_id + "", projektor_value);
	localStorage.setItem("telefon" + new_id + "", telefon_value);
	localStorage.setItem("isim" + new_id + "", isim_value);
	localStorage.setItem("tarih" + new_id + "", tarih_value);
	localStorage.setItem("aciklama" + new_id + "", aciklama_value);
	localStorage.setItem("adres" + new_id + "", adres_value);
	localStorage.setItem("fiyat" + new_id + "", fiyat_value);
	
	var fff = "'";
	
	new_onclick_1 = '' + fff + 'onay_div_id' + localStorage.getItem("id_number") + '' + fff + '';
	localStorage.setItem("onay_id_nn", new_onclick_1);
	
	new_onclick_2 = 'var a = document.getElementById(' + fff + 'siparis_onay1_id' + localStorage.getItem("id_number") + '' + fff + ').checked; var b = document.getElementById(' + fff + 'siparis_onay2_id' + localStorage.getItem("id_number") + '' + fff + ').checked; var c = document.getElementById(' + fff + 'siparis_onay3_id' + localStorage.getItem("id_number") + '' + fff + ').checked; var a1 = document.getElementById(' + fff + 'fiyat_onay1_id' + localStorage.getItem("id_number") + '' + fff + ').checked; var b1 = document.getElementById(' + fff + 'fiyat_onay2_id' + localStorage.getItem("id_number") + '' + fff + ').checked; if (a == true && a1 == true) {localStorage.setItem(' + fff + 'input_siparis_onay1_id' + localStorage.getItem("id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'input_siparis_onay2_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'input_siparis_onay3_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'input_fiyat_onay1_id' + localStorage.getItem("id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'input_fiyat_onay2_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'onay_border_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '2px solid red' + fff + '); localStorage.setItem(' + fff + 'onay_color_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + 'red' + fff + '); location.reload();} else if (b == true && a1 == true) {localStorage.setItem(' + fff + 'input_siparis_onay1_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'input_siparis_onay2_id' + localStorage.getItem("id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'input_siparis_onay3_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'input_fiyat_onay1_id' + localStorage.getItem("id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'input_fiyat_onay2_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'onay_border_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '2px solid yellow' + fff + '); localStorage.setItem(' + fff + 'onay_color_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + 'red' + fff + '); location.reload();} else if (c == true && a1 == true) {localStorage.setItem(' + fff + 'input_siparis_onay1_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'input_siparis_onay2_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'input_siparis_onay3_id' + localStorage.getItem("id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'input_fiyat_onay1_id' + localStorage.getItem("id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'input_fiyat_onay2_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'onay_border_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '2px solid green' + fff + '); localStorage.setItem(' + fff + 'onay_color_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + 'red' + fff + '); location.reload();}  else if (a == true && b1 == true) {localStorage.setItem(' + fff + 'input_siparis_onay1_id' + localStorage.getItem("id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'input_siparis_onay2_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'input_siparis_onay3_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'input_fiyat_onay1_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'input_fiyat_onay2_id' + localStorage.getItem("id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'onay_border_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '2px solid red' + fff + '); localStorage.setItem(' + fff + 'onay_color_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + 'green' + fff + '); location.reload();} else if (b == true && b1 == true) {localStorage.setItem(' + fff + 'input_siparis_onay1_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'input_siparis_onay2_id' + localStorage.getItem("id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'input_siparis_onay3_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'input_fiyat_onay1_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'input_fiyat_onay2_id' + localStorage.getItem("id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'onay_border_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '2px solid yellow' + fff + '); localStorage.setItem(' + fff + 'onay_color_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + 'green' + fff + '); location.reload();} else if (c == true && b1 == true && document.getElementById(' + fff + 'tamamla_gider_input' + new_id + '' + fff + ').value.length < 1) {Android.showToast(' + fff + 'Lütfen Gider Girin' + fff + ')} else if (c == true && b1 == true && document.getElementById(' + fff + 'tamamla_gider_input' + new_id + '' + fff + ').value.length >= 1) {var gider = document.getElementById(' + fff + 'tamamla_gider_input' + new_id + '' + fff + ').value; localStorage.setItem(' + fff + 'siparis_gider_' + new_id + '' + fff + ', gider); var gelir = localStorage.getItem(' + fff + 'fiyat' + new_id + '' + fff + '); localStorage.setItem(' + fff + 'siparis_gelir_' + new_id + '' + fff + ', gelir); sezon_gelir += Math.floor(gelir - 1); localStorage.setItem(' + fff + 'sezon_toplam_gelir' + fff + ', sezon_gelir); sezon_gider += Math.floor(gider - 1); localStorage.setItem(' + fff + 'sezon_toplam_gider' + fff + ', sezon_gider); sezon_is += 0; localStorage.setItem(' + fff + 'sezon_toplam_is' + fff + ', sezon_is); localStorage.setItem(' + fff + 'new2_siparis' + new_id + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 's_cop' + new_id + '' + fff + ', 1); localStorage.setItem(' + fff + 's_display' + new_id + '' + fff + ', ' + fff + 'none' + fff + '); new_gecmis_siparis_1 += localStorage.getItem(' + fff + 'new_siparis' + localStorage.getItem('id_number') + '' + fff + '); localStorage.setItem(' + fff + 'new_gecmis_siparis' + fff + ', new_gecmis_siparis_1); localStorage.setItem(' + fff + 'input_siparis_onay1_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'input_siparis_onay2_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'input_siparis_onay3_id' + localStorage.getItem("id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'input_fiyat_onay1_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'input_fiyat_onay2_id' + localStorage.getItem("id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'onay_border_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '2px solid green' + fff + '); localStorage.setItem(' + fff + 'onay_color_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + 'green' + fff + '); Android.showToast(' + fff + 'Sipariş Tamamlandı' + fff + '); location.reload();} else if (a == true) {localStorage.setItem(' + fff + 'input_siparis_onay1_id' + localStorage.getItem("id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'input_siparis_onay2_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'input_siparis_onay3_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'onay_border_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '2px solid red' + fff + '); location.reload();} else if (b == true) {localStorage.setItem(' + fff + 'input_siparis_onay1_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'input_siparis_onay2_id' + localStorage.getItem("id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'input_siparis_onay3_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'onay_border_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '2px solid yellow' + fff + '); location.reload();} else if (c == true) {localStorage.setItem(' + fff + 'input_siparis_onay1_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'input_siparis_onay2_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'input_siparis_onay3_id' + localStorage.getItem("id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'onay_border_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '2px solid green' + fff + '); location.reload();} else if (a1 == true) {localStorage.setItem(' + fff + 'input_fiyat_onay1_id' + localStorage.getItem("id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'input_fiyat_onay2_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'onay_color_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + 'red' + fff + '); location.reload();} else if (b1 == true) {localStorage.setItem(' + fff + 'input_fiyat_onay1_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 'input_fiyat_onay2_id' + localStorage.getItem("id_number") + '' + fff + ', true); localStorage.setItem(' + fff + 'onay_color_id' + localStorage.getItem("id_number") + '' + fff + ', ' + fff + 'green' + fff + '); location.reload();} else if (a == false && b == false && c == false && a1 == false && b1 == false) {Android.showToast(' + fff + 'Lütfen bir seçenek seçin' + fff + ');}'
	localStorage.setItem("onay_id2_nn", new_onclick_2);
	
	new_onclick_3 = 'document.getElementById(' + fff + 'siparis_durum_id' + localStorage.getItem("id_number") + '' + fff + ').style.border= localStorage.getItem(' + fff + 'onay_border_id' + localStorage.getItem("id_number") + '' + fff + '); document.getElementById(' + fff + 'fiyat_miktar_id' + localStorage.getItem("id_number") + '' + fff + ').style.color= localStorage.getItem(' + fff + 'onay_color_id' + localStorage.getItem("id_number") + '' + fff + ');'
	localStorage.setItem("onay_id3_nn", new_onclick_3);
	
	new_onclick_5 = "var sandalye_value = document.getElementById('sandalye_input').value;var masa_value = document.getElementById('masa_input').value;var cadir_value = document.getElementById('cadir_input').value;var cayocagi_value = document.getElementById('cayocagi_input').value;var projektor_value = document.getElementById('projektor_input').value;var telefon_value = document.getElementById('telefon_input').value;var isim_value = document.getElementById('isim_input').value;var tarih_value = document.getElementById('tarih_input').value;var aciklama_value = document.getElementById('aciklama_input').value;var adres_value = document.getElementById('adres_input').value;var fiyat_value = document.getElementById('fiyat_input').value;localStorage.setItem('sandalye' + localStorage.getItem('s_edit_ids') + '', sandalye_value);localStorage.setItem('masa' + localStorage.getItem('s_edit_ids') + '', masa_value);localStorage.setItem('cadir' + localStorage.getItem('s_edit_ids') + '', cadir_value);localStorage.setItem('cayocagi' + localStorage.getItem('s_edit_ids') + '', cayocagi_value);localStorage.setItem('projektor' + localStorage.getItem('s_edit_ids') + '', projektor_value);localStorage.setItem('telefon' + localStorage.getItem('s_edit_ids') + '', telefon_value);localStorage.setItem('isim' + localStorage.getItem('s_edit_ids') + '', isim_value);localStorage.setItem('tarih' + localStorage.getItem('s_edit_ids') + '', tarih_value);localStorage.setItem('aciklama' + localStorage.getItem('s_edit_ids') + '', aciklama_value);localStorage.setItem('adres' + localStorage.getItem('s_edit_ids') + '', adres_value);localStorage.setItem('fiyat' + localStorage.getItem('s_edit_ids') + '', fiyat_value);location.href='index.html'; Android.showToast('Sipariş Düzenlendi');";
	
	new_onclick_6 = 'localStorage.setItem(' + fff + 'new2_siparis' + new_id + '' + fff + ', ' + fff + '' + fff + '); localStorage.setItem(' + fff + 's_cop' + new_id + '' + fff + ', 1); localStorage.setItem(' + fff + 's_display' + new_id + '' + fff + ', ' + fff + 'none' + fff + '); new_cop_siparis_1 += localStorage.getItem(' + fff + 'new_siparis' + localStorage.getItem('id_number') + '' + fff + '); localStorage.setItem(' + fff + 'new_cop_siparis' + fff + ', new_cop_siparis_1); location.href=' + fff + 'index.html' + fff + '; Android.showToast(' + fff + 'Sipariş Silindi' + fff + ');';
	
	new_onclick_4 = '<div class="task_title"><center>Sipariş ' + localStorage.getItem("id_number") + '</center></div><div class="siparis_miktar bg_gray"><input id="sandalye_input" class="siparis_left_input" type="Number" placeholder="Sandalye"></div><div class="siparis_adres bg_gray"><textarea id="adres_input" class="siparis_right_input" typte="Text" placeholder="Adres"></textarea></div><div class="siparis_miktar bg_white"><input id="masa_input" class="siparis_left_input" type="Number" placeholder="Masa"></div><div class="siparis_aciklama bg_white"><textarea id="aciklama_input" class="siparis_right_input" typte="Text" placeholder="Açıklama"></textarea></div><div class="siparis_miktar bg_gray" style="margin-top: -40px;"><input id="cadir_input" class="siparis_left_input" type="Number" placeholder="Çadır"></div><div class="siparis_miktar bg_white" style="margin-top: -20px;"><input id="cayocagi_input" class="siparis_left_input" type="Number" placeholder="Çay Ocağı"></div><div class="siparis_miktar bg_gray"><input id="projektor_input" class="siparis_left_input" type="Number" placeholder="Projektör"></div><div class="siparis_miktar bg_white"><input id="telefon_input" class="siparis_left_input" type="Number" placeholder="Telefon"></div><div class="siparis_miktar bg_gray"><input id="isim_input" class="siparis_left_input" type="Text" placeholder="İsim"></div><div class="siparis_miktar bg_white"><input id="tarih_input" class="siparis_left_input" type="Text" placeholder="Tarih"></div><div class="siparis_tutar bg_gray"><input id="fiyat_input" class="siparis_tutar_input" type="Number" placeholder="Fiyat"></div><div class="siparis_olustur" onclick="' + new_onclick_5 + '"><b>Siparişi Kaydet</b></div><div class="siparis_olustur" style="background-color: red;" onclick="' + new_onclick_6 + '"><b>Siparişi Sil</b></div><div class="anasayfa" onclick="go_anasayfa()"><b>Anasayfaya Dön</b></div>'
	localStorage.setItem("edit_onays_id" + localStorage.getItem("id_number") + "", new_onclick_4);
	
	new_siparis_1 = '<div id="tasktitle_id' + localStorage.getItem("id_number") + '" class="task_title"><center class="baslik_class">Sipariş ' + localStorage.getItem("id_number") + '</center></div><div id="siparis_durum_id' + localStorage.getItem("id_number") + '" class="siparis_durum"><div id="miktar_sandalye_id' + localStorage.getItem("id_number") + '" class="siparis_miktar bg_gray"><b>Sandalye: </b><span id="sandalye_id' + localStorage.getItem("id_number") + '"></span></div><div id="siparis_id' + localStorage.getItem("id_number") + '" class="siparis_adres bg_gray"><b><center>Adres</center></b><span id="adres_id' + localStorage.getItem("id_number") + '"></span></div><div id="miktar_masa_id' + localStorage.getItem("id_number") + '" class="siparis_miktar bg_white"><b>Masa: </b><span id="masa_id' + localStorage.getItem("id_number") + '"></span></div><div id="siparis_aciklama_id' + localStorage.getItem("id_number") + '" class="siparis_aciklama bg_white"><b><center>Açıklama</center></b><span id="aciklama_id' + localStorage.getItem("id_number") + '"></span></div><div id="cadir_miktar_id' + localStorage.getItem("id_number") + '" class="siparis_miktar bg_gray" style="margin-top: -40px;"><b>Çadır: </b><span id="cadir_id' + localStorage.getItem("id_number") + '"></span></div><div id="cayocagi_miktar_id' + localStorage.getItem("id_number") + '" class="siparis_miktar bg_white" style="margin-top: -20px;"><b>Çay Ocağı: </b><span id="cayocagi_id' + localStorage.getItem("id_number") + '"></span></div><div id="projektor_miktar_id' + localStorage.getItem("id_number") + '" class="siparis_miktar bg_gray"><b>Projektör: </b><span id="projektor_id' + localStorage.getItem("id_number") + '"></span></div><div id="telefon_miktar_id' + localStorage.getItem("id_number") + '" class="siparis_miktar bg_white"><b>Tel: </b><span id="telefon_id' + localStorage.getItem("id_number") + '"></span></div><div id="isim_miktar_id' + localStorage.getItem("id_number") + '" class="siparis_miktar bg_gray"><b>İsim: </b><span id="isim_id' + localStorage.getItem("id_number") + '"></span></div><div id="tarih_miktar_id' + localStorage.getItem("id_number") + '" class="siparis_miktar bg_white"><b>Tarih: </b><span id="tarih_id' + localStorage.getItem("id_number") + '"></span></div><div id="fiyat_miktar_id' + localStorage.getItem("id_number") + '" class="siparis_tutar bg_gray"><b>Fiyat: </b><span id="fiyat_id' + localStorage.getItem("id_number") + '"></span><span style="user-select:none;"> ₺</span></div><div id="gider_miktar_id' + localStorage.getItem("id_number") + '" class="siparis_tutar bg_white display_none"><b>Gider: </b><span id="gider_id' + localStorage.getItem("id_number") + '"></span><span style="user-select:none;"> ₺</span></div><div id="siparis_edit_id' + localStorage.getItem("id_number") + '"  onclick="if(localStorage.getItem(' + fff + 's_cop' + localStorage.getItem("id_number") + '' + fff + ') == 0) {localStorage.setItem(' + fff + 's_edit_ids' + fff + ', ' + localStorage.getItem('id_number') + ');localStorage.setItem(' + fff + 'edit_onays' + fff + ', localStorage.getItem(' + fff + 'edit_onays_id' + localStorage.getItem('id_number') + '' + fff + '));location.href= ' + fff + 'siparis_edit.html' + fff + ';}" class="siparis_edit"><b>Düzenle</b></div><div id="siparis_onay_id' + localStorage.getItem("id_number") + '"  onclick="if(localStorage.getItem(' + fff + 's_cop' + localStorage.getItem("id_number") + '' + fff + ') == 0) {document.getElementById(' + localStorage.getItem('onay_id_nn') + ').style.display=' + fff + 'block' + fff + ';}" class="siparis_onay"><b>Tamamla</b></div></div><div id="onay_div_id' + localStorage.getItem("id_number") + '" class="onay_div"><div class="onay_div_in"><div class="onay_div_title bg_gray"><b>Sipariş</b></div><div class="onay_div_i_div bg_white" onclick="document.getElementById(' + fff + 'siparis_onay1_id' + new_id + '' + fff + ').checked= true;"><input id="siparis_onay1_id' + localStorage.getItem("id_number") + '" class="onay_input" type="radio" name="siparis_onay"><label for="siparis_onay1_id' + localStorage.getItem("id_number") + '">Tamamlanmadı</label></div><div class="onay_div_i_div bg_gray" onclick="document.getElementById(' + fff + 'siparis_onay2_id' + new_id + '' + fff + ').checked= true;"><input id="siparis_onay2_id' + localStorage.getItem("id_number") + '" class="onay_input" type="radio" name="siparis_onay"><label for="siparis_onay2_id' + localStorage.getItem("id_number") + '">Devam ediyor</label></div><div class="onay_div_i_div bg_white" onclick="document.getElementById(' + fff + 'siparis_onay3_id' + new_id + '' + fff + ').checked= true;"><input id="siparis_onay3_id' + localStorage.getItem("id_number") + '" class="onay_input" type="radio" name="siparis_onay"><label for="siparis_onay3_id' + localStorage.getItem("id_number") + '">Tamamlandı</label></div></div><div class="onay_div_in"><div class="onay_div_title bg_white"><b>Fiyat</b></div><div class="onay_div_i_div2 bg_gray" onclick="document.getElementById(' + fff + 'fiyat_onay1_id' + new_id + '' + fff + ').checked= true;"><input id="fiyat_onay1_id' + localStorage.getItem("id_number") + '" class="onay_input" type="radio" name="fiyat_onay"><label for="fiyat_onay1_id' + localStorage.getItem("id_number") + '">Ödenmedi</label></div><div class="onay_div_i_div2 bg_white" onclick="document.getElementById(' + fff + 'fiyat_onay2_id' + new_id + '' + fff + ').checked= true;"><input id="fiyat_onay2_id' + localStorage.getItem("id_number") + '" class="onay_input" type="radio" name="fiyat_onay"><label for="fiyat_onay2_id' + localStorage.getItem("id_number") + '">Ödendi</label></div></div><div id="tamamla_gider_id' + new_id + '" class="tamamla_gider bg_gray"><b>Gider</b><br><input id="tamamla_gider_input' + new_id + '" type="number"></input></div><div class="onay_div_kaydet" onclick="' + localStorage.getItem("onay_id2_nn") + '"><b>Kaydet</b></div></div>';
	localStorage.setItem("new_siparis" + new_id + "", new_siparis_1);
	localStorage.setItem("new2_siparis" + new_id + "", new_siparis_1);
	
	localStorage.setItem("s_cop" + new_id + "", 0);

    location.href = "index.html";

    Android.showToast("Sipariş Oluşturuldu");	
}

function edit() {
	document.getElementById("tasks_div").innerHTML= localStorage.getItem("edit_onays");
	
	var numbers = localStorage.getItem("s_edit_ids");

	document.getElementById("sandalye_input").value= localStorage.getItem("sandalye" + numbers + "");
	document.getElementById("masa_input").value= localStorage.getItem("masa" + numbers + "");
	document.getElementById("cadir_input").value= localStorage.getItem("cadir" + numbers + "");
	document.getElementById("cayocagi_input").value= localStorage.getItem("cayocagi" + numbers + "");
	document.getElementById("projektor_input").value= localStorage.getItem("projektor" + numbers + "");
	document.getElementById("telefon_input").value= localStorage.getItem("telefon" + numbers + "");
	document.getElementById("isim_input").value= localStorage.getItem("isim" + numbers + "");
	document.getElementById("tarih_input").value= localStorage.getItem("tarih" + numbers + "");
	document.getElementById("aciklama_input").value= localStorage.getItem("aciklama" + numbers + "");
	document.getElementById("adres_input").value= localStorage.getItem("adres" + numbers + "");
	document.getElementById("fiyat_input").value= localStorage.getItem("fiyat" + numbers + "");

}

function cop_kutusu() {
	document.getElementById("tasks_div").innerHTML= localStorage.getItem("new_cop_siparis");
	
	var run_number = 0;
	
	setInterval(function option_div() {
		run_number += 0; run_number++
	document.getElementById("siparis_durum_id" + run_number + "").style.border= "2px solid black";
	document.getElementById("fiyat_miktar_id" + run_number + "").style.color= "black";
	
	document.getElementById("sandalye_id" + run_number + "").innerText= Math.floor(localStorage.getItem("sandalye" + run_number + ""));
	document.getElementById("masa_id" + run_number + "").innerText= Math.floor(localStorage.getItem("masa" + run_number + ""));
	document.getElementById("cadir_id" + run_number + "").innerText= Math.floor(localStorage.getItem("cadir" + run_number + ""));
	document.getElementById("cayocagi_id" + run_number + "").innerText= Math.floor(localStorage.getItem("cayocagi" + run_number + ""));
	document.getElementById("projektor_id" + run_number + "").innerText= Math.floor(localStorage.getItem("projektor" + run_number + ""));
	document.getElementById("telefon_id" + run_number + "").innerText= localStorage.getItem("telefon" + run_number + "");
	document.getElementById("isim_id" + run_number + "").innerText= localStorage.getItem("isim" + run_number + "");
	document.getElementById("tarih_id" + run_number + "").innerText= localStorage.getItem("tarih" + run_number + "");
	document.getElementById("aciklama_id" + run_number + "").innerText= localStorage.getItem("aciklama" + run_number + "");
	document.getElementById("adres_id" + run_number + "").innerText= localStorage.getItem("adres" + run_number + "");
	document.getElementById("fiyat_id" + run_number + "").innerText= Math.floor(localStorage.getItem("fiyat" + run_number + ""));
	
	document.getElementById("siparis_edit_id" + run_number + "").style.display= "none";
	document.getElementById("siparis_onay_id" + run_number + "").style.display= "none";
	
	}, 1);
}

function gecmis_siparisler() {
	document.getElementById("tasks_div").innerHTML= localStorage.getItem("new_gecmis_siparis");
	
	var run_number = 0;
	
	setInterval(function option_div() {
		run_number += 0; run_number++
	document.getElementById("siparis_durum_id" + run_number + "").style.border= "2px solid green";
	document.getElementById("fiyat_miktar_id" + run_number + "").style.color= "green";
	document.getElementById("gider_miktar_id" + run_number + "").style.color= "red";
	document.getElementById("gider_miktar_id" + run_number + "").style.display= "block";
	
	document.getElementById("sandalye_id" + run_number + "").innerText= Math.floor(localStorage.getItem("sandalye" + run_number + ""));
	document.getElementById("masa_id" + run_number + "").innerText= Math.floor(localStorage.getItem("masa" + run_number + ""));
	document.getElementById("cadir_id" + run_number + "").innerText= Math.floor(localStorage.getItem("cadir" + run_number + ""));
	document.getElementById("cayocagi_id" + run_number + "").innerText= Math.floor(localStorage.getItem("cayocagi" + run_number + ""));
	document.getElementById("projektor_id" + run_number + "").innerText= Math.floor(localStorage.getItem("projektor" + run_number + ""));
	document.getElementById("telefon_id" + run_number + "").innerText= localStorage.getItem("telefon" + run_number + "");
	document.getElementById("isim_id" + run_number + "").innerText= localStorage.getItem("isim" + run_number + "");
	document.getElementById("tarih_id" + run_number + "").innerText= localStorage.getItem("tarih" + run_number + "");
	document.getElementById("aciklama_id" + run_number + "").innerText= localStorage.getItem("aciklama" + run_number + "");
	document.getElementById("adres_id" + run_number + "").innerText= localStorage.getItem("adres" + run_number + "");
	document.getElementById("fiyat_id" + run_number + "").innerText= Math.floor(localStorage.getItem("fiyat" + run_number + ""));
	document.getElementById("gider_id" + run_number + "").innerText= "-" +  Math.floor(localStorage.getItem("siparis_gider_" + run_number + ""));
	
	document.getElementById("siparis_edit_id" + run_number + "").style.display= "none";
	document.getElementById("siparis_onay_id" + run_number + "").style.display= "none";
	
	}, 1);
}

function sezonlar() {
	document.getElementById("sezonlar_div_id").innerHTML= localStorage.getItem("new_sezonlar");
	
	var run_number = 0;
	
	setInterval(function option_div() {
		run_number += 0; run_number++
	
	document.getElementById("sezon_years_id" + run_number + "").innerText = localStorage.getItem("sezon_yillar" + run_number + "");
	
	}, 1);
}

function sezon() {
	
	document.getElementById("sezon_gelir").innerText= Math.floor(localStorage.getItem("sezonlar_top_gelir")) + " ₺";
	document.getElementById("sezon_gider").innerText= "-" + Math.floor(localStorage.getItem("sezonlar_top_gider")) + " ₺";
	document.getElementById("sezon_is").innerText= Math.floor(localStorage.getItem("sezonlar_top_is"));
	document.getElementById("sezon_kar").innerText= Math.floor(localStorage.getItem("sezonlar_top_kar")) + " ₺";
	document.getElementById("tasks_div").innerHTML= localStorage.getItem("new_gecmis_sezon");
	document.getElementById("sezon_title").innerText= localStorage.getItem("sezon_title");
	
	var run_number = 0;
	
	setInterval(function option_div() {
		run_number += 0; run_number++
	document.getElementById("siparis_durum_id" + run_number + "").style.border= "2px solid green";
	document.getElementById("fiyat_miktar_id" + run_number + "").style.color= "green";
	document.getElementById("gider_miktar_id" + run_number + "").style.color= "red";
	document.getElementById("gider_miktar_id" + run_number + "").style.display= "block";
	
	document.getElementById("sandalye_id" + run_number + "").innerText= Math.floor(localStorage.getItem("sandalye" + run_number + ""));
	document.getElementById("masa_id" + run_number + "").innerText= Math.floor(localStorage.getItem("masa" + run_number + ""));
	document.getElementById("cadir_id" + run_number + "").innerText= Math.floor(localStorage.getItem("cadir" + run_number + ""));
	document.getElementById("cayocagi_id" + run_number + "").innerText= Math.floor(localStorage.getItem("cayocagi" + run_number + ""));
	document.getElementById("projektor_id" + run_number + "").innerText= Math.floor(localStorage.getItem("projektor" + run_number + ""));
	document.getElementById("telefon_id" + run_number + "").innerText= localStorage.getItem("telefon" + run_number + "");
	document.getElementById("isim_id" + run_number + "").innerText= localStorage.getItem("isim" + run_number + "");
	document.getElementById("tarih_id" + run_number + "").innerText= localStorage.getItem("tarih" + run_number + "");
	document.getElementById("aciklama_id" + run_number + "").innerText= localStorage.getItem("aciklama" + run_number + "");
	document.getElementById("adres_id" + run_number + "").innerText= localStorage.getItem("adres" + run_number + "");
	document.getElementById("fiyat_id" + run_number + "").innerText= Math.floor(localStorage.getItem("fiyat" + run_number + ""));
	document.getElementById("gider_id" + run_number + "").innerText= "-" +  Math.floor(localStorage.getItem("siparis_gider_" + run_number + ""));
	
	document.getElementById("siparis_edit_id" + run_number + "").style.display= "none";
	document.getElementById("siparis_onay_id" + run_number + "").style.display= "none";
	
	}, 1);
}

function save() {
	
	document.getElementById("add_1").style.display = d_none;
	document.getElementById("add_2").style.display = d_block;

	var siparisler_ekleme = document.getElementById("siparisler");
	siparisler_ekleme.innerHTML +=  localStorage.getItem("new_siparis" + run_number + "");
	
	var run_number = 0;
	
	setInterval(function option_div() {
		run_number += 0; run_number++
	if(localStorage.getItem("new2_siparis" + run_number + "") != null) {
	document.getElementById("siparisler").innerHTML +=  localStorage.getItem("new2_siparis" + run_number + "");
	}
	
	document.getElementById("siparis_durum_id" + run_number + "").style.border= localStorage.getItem("onay_border_id" + run_number + "");
	document.getElementById("fiyat_miktar_id" + run_number + "").style.color= localStorage.getItem("onay_color_id" + run_number + "");
	
	document.getElementById("sandalye_id" + run_number + "").innerText= Math.floor(localStorage.getItem("sandalye" + run_number + ""));
	document.getElementById("masa_id" + run_number + "").innerText= Math.floor(localStorage.getItem("masa" + run_number + ""));
	document.getElementById("cadir_id" + run_number + "").innerText= Math.floor(localStorage.getItem("cadir" + run_number + ""));
	document.getElementById("cayocagi_id" + run_number + "").innerText= Math.floor(localStorage.getItem("cayocagi" + run_number + ""));
	document.getElementById("projektor_id" + run_number + "").innerText= Math.floor(localStorage.getItem("projektor" + run_number + ""));
	document.getElementById("telefon_id" + run_number + "").innerText= localStorage.getItem("telefon" + run_number + "");
	document.getElementById("isim_id" + run_number + "").innerText= localStorage.getItem("isim" + run_number + "");
	document.getElementById("tarih_id" + run_number + "").innerText= localStorage.getItem("tarih" + run_number + "");
	document.getElementById("aciklama_id" + run_number + "").innerText= localStorage.getItem("aciklama" + run_number + "");
	document.getElementById("adres_id" + run_number + "").innerText= localStorage.getItem("adres" + run_number + "");
	document.getElementById("fiyat_id" + run_number + "").innerText= Math.floor(localStorage.getItem("fiyat" + run_number + ""));
	
	document.getElementById("tasktitle_id" + run_number + "").style.display= localStorage.getItem("s_display" + run_number + "");
	document.getElementById("siparis_durum_id" + run_number + "").style.display= localStorage.getItem("s_display" + run_number + "");
	}, 1);	
}

const myTimeout = setTimeout(timeout, 500);

function timeout() {
  document.getElementById("loading").style.display = "none";
}