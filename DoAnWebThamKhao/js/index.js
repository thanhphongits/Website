// JavaScript Document

//=====================================================Phần chung=============================================================//
//===================================hiện ảnh chạy trong 3s===================================================
var current = 1;
var num_image = 5;

function img_trai(){
	document.getElementById('dot'+current).style.background = "black";
	current--;
	if(current <= 0) current = 5;
	document.getElementById('dot' + current).style.background = "white";
	document.images['img-auto1'].src ='image/quangcao' + current + '.jpg';
}

function img_phai(){
	document.getElementById('dot'+current).style.background = "black";
	current++;
	if(current >= 6) current = 1;
	document.getElementById('dot' + current).style.background = "white";
	document.images['img-auto1'].src ='image/quangcao' + current + '.jpg';
}

function dot(cc){
	document.getElementById('dot' + current).style.background = "black";
	document.getElementById('dot' + cc).style.background = "white";
	document.images['img-auto1'].src ='image/quangcao' + cc + '.jpg';
	current = cc;
	if(current == num_image) current = 0;
}

function switch_Image(){
	if(current != 0) document.getElementById('dot' + current).style.background = "black";
	else document.getElementById('dot5').style.background = "black";
	current++;
	document.getElementById('dot' + current).style.background = "white";
	document.images['img-auto1'].src ='image/quangcao' + current + '.jpg';
	if(current < num_image){
	   setTimeout("switch_Image()", 3000);
	}
	else if(current == num_image){
	   current = 0;
	   setTimeout("switch_Image()", 3000);
	}
}

function Auto_sp_ban_chay(){
	var a = localStorage.getItem("spbanchay");
	a = JSON.parse(a);
	if(a != null && a != "") return;
	a = localStorage.getItem("Array_sp");
	a = JSON.parse(a);
	var b = new Array();
	var i = 0, j = 0;
	for(i = 0; i < a.length; i++) if(a[i].type == "Trang điểm"){
		b.push(new sanpham(a[i].id, a[i].img, a[i].type, a[i].type1, a[i].type2, a[i].name, a[i].hieu, a[i].price, a[i].soluong, a[i].info, a[i].use));
		j++;
		if(j >= 25) break;
	}
	localStorage.setItem("spbanchay",JSON.stringify(b));
}

function Auto_tim_kiem_pho_bien(){
	var a = localStorage.getItem("tiemkiemphobien");
	a = JSON.parse(a);
	if(a != null && a != "") return;
	a = localStorage.getItem("Array_sp");
	a = JSON.parse(a);
	var b = new Array();
	var i = 0, j = 0;
	for(i = 0; i < a.length; i++) if(a[i].type == "Nước hoa"){
		b.push(new sanpham(a[i].id, a[i].img, a[i].type, a[i].type1, a[i].type2, a[i].name, a[i].hieu, a[i].price, a[i].soluong, a[i].info, a[i].use));
		j++;
		if(j >= 25) break;
	}
	localStorage.setItem("tiemkiemphobien",JSON.stringify(b));
}


function Auto_mua_le(){
	var a = localStorage.getItem("mualemoinhat");
	a = JSON.parse(a);
	if(a != null && a != "") return;
	a = localStorage.getItem("Array_sp");
	a = JSON.parse(a);
	var b = new Array();
	var i = 0, j = 0;
	for(i = 0; i < a.length; i++) if(a[i].type == "Dưỡng da"){
		b.push(new sanpham(a[i].id, a[i].img, a[i].type, a[i].type1, a[i].type2, a[i].name, a[i].hieu, a[i].price, a[i].soluong, a[i].info, a[i].use));
		j++;
		if(j >= 25) break;
	}
	localStorage.setItem("mualemoinhat",JSON.stringify(b));
}


function sp_ban_chay(index){
	var a = localStorage.getItem("spbanchay");
	a = JSON.parse(a);
	var sotrang = a.length/5;
	if(parseInt(sotrang) < sotrang) sotrang = parseInt(sotrang)+1;
	var i = 0, j = 0, begin, end, s = "";
	end = index*5;
	begin = end - 5;
	if(end > a.length) end = a.length;
	for(i = begin; i < end; i++){
		s = s + "<div class='khung_sp' id='sp_chay_"+i+"'>"+
			"<img src='" + a[i].img + "' onclick='get_id_sp_bc(" + i +")'/>"+
			"<div class='san_pham_phan_chu' onclick='get_id_sp_bc("+ i +")'>"+
				"<p>Tên : "+ a[i].name + "</p>"+
				"<p>Nhãn hiệu : " + a[i].hieu + "</p>"+
				"<p>Giá : " + a[i].price + "đ</p>"+
			"</div>"+
			"<div class='sanpham_icon_them' onclick='sp_bc_vao_gio(" + i +")'><img src='icon/icons8-add-basket-48.png'></div>"+
		"</div>";
	}
	switch(sotrang){
		case 1: break;
		case 2:{
			s = s + "<table>"+
						"<button type='button' class='dot2' id = 'sp_ban_chay1' onclick='index_chuyen_dot(1,"+index+",1)'></button>"+
						"<button type='button' class='dot3' id = 'sp_ban_chay2' onclick='index_chuyen_dot(1,"+index+",2)'></button>"+
					"</table>"+
					"<button type='button' class='img_left' onclick='index_chuyensp(1, 1, "+ index+","+sotrang+")'><</button>"+
					"<button type='button' class='img_right' onclick='index_chuyensp(2, 1, "+ index+","+sotrang+")'>></button>";
			break;
		}
		case 3:{
			s = s + "<table>"+
						"<button type='button' class='dot2' id = 'sp_ban_chay1' onclick='index_chuyen_dot(1,"+index+",1)'></button>"+
						"<button type='button' class='dot3' id = 'sp_ban_chay2' onclick='index_chuyen_dot(1,"+index+",2)'</button>"+
						"<button type='button' class='dot4' id = 'sp_ban_chay3' onclick='index_chuyen_dot(1,"+index+",3)'></button>"+
					"</table>"+
					"<button type='button' class='img_left' onclick='index_chuyensp(1, 1, "+ index+","+sotrang+")'><</button>"+
					"<button type='button' class='img_right' onclick='index_chuyensp(2, 1, "+ index+","+sotrang+")'>></button>";
			break;
		}
		case 4:{
			s = s + "<table>"+
						"<button type='button' class='dot1' id = 'sp_ban_chay1' onclick='index_chuyen_dot(1,"+index+",1)'></button>"+
						"<button type='button' class='dot2' id = 'sp_ban_chay2' onclick='index_chuyen_dot(1,"+index+",2)'></button>"+
						"<button type='button' class='dot3' id = 'sp_ban_chay3' onclick='index_chuyen_dot(1,"+index+",3)'></button>"+
						"<button type='button' class='dot4' id = 'sp_ban_chay4' onclick='index_chuyen_dot(1,"+index+",4)'></button>"+
					"</table>"+
					"<button type='button' class='img_left' onclick='index_chuyensp(1, 1, "+ index+","+sotrang+")'><</button>"+
					"<button type='button' class='img_right' onclick='index_chuyensp(2, 1, "+ index+","+sotrang+")'>></button>";
			break;
		}
		case 5:{
			s = s + "<table>"+
						"<button type='button' class='dot1' id = 'sp_ban_chay1' onclick='index_chuyen_dot(1,"+index+",1)'></button>"+
						"<button type='button' class='dot2' id = 'sp_ban_chay2' onclick='index_chuyen_dot(1,"+index+",2)'></button>"+
						"<button type='button' class='dot3' id = 'sp_ban_chay3' onclick='index_chuyen_dot(1,"+index+",3)'></button>"+
						"<button type='button' class='dot4' id = 'sp_ban_chay4' onclick='index_chuyen_dot(1,"+index+",4)'></button>"+
						"<button type='button' class='dot5' id = 'sp_ban_chay5' onclick='index_chuyen_dot(1,"+index+",5)'></button>"+
					"</table>"+
					"<button type='button' class='img_left' onclick='index_chuyensp(1, 1, "+ index+","+sotrang+")'><</button>"+
					"<button type='button' class='img_right' onclick='index_chuyensp(2, 1, "+ index+","+sotrang+")'>></button>";
			break;
		}
		default: break;
	}
	document.getElementById("sp_ban_chay").innerHTML = s;
}

function get_id_sp_bc(index){
	var a = localStorage.getItem("spbanchay");
	a = JSON.parse(a);
	var b = new sanpham(a[index].id, a[index].img, a[index].type, a[index].type1, a[index].type2, a[index].name, a[index].hieu, a[index].price, a[index].soluong, a[index].info, a[index].use);
	sessionStorage.setItem("detail_sp", JSON.stringify(b));
	window.location.href = "detail.html";
}

function sp_bc_vao_gio(index){
	var a = localStorage.getItem("spbanchay");
	a = JSON.parse(a);
	var b = localStorage.getItem("Cartsp");
	b = JSON.parse(b);
	if(b == null || b == ""){
		b = new Array();
		b.push(new sanpham_giohang(a[index].id, a[index].img, a[index].type, a[index].type1, a[index].type2, a[index].name, a[index].hieu, a[index].price, 1, a[index].soluong, a[index].info, a[index].use));
		localStorage.setItem("Cartsp", JSON.stringify(b));
		Auto_hien_thi_soluong_sp();
		alert("Đã thêm vào giỏ hàng.");
		return;
	}
	for(let i = 0; i < b.length; i++) if(a[index].id == b[i].id){
		alert("Sản phẩm đã có trong giỏ.");
		return;
	}

	b[b.length] = new sanpham_giohang(a[index].id, a[index].img, a[index].type, a[index].type1, a[index].type2, a[index].name, a[index].hieu, a[index].price, 1, a[index].soluong, a[index].info, a[index].use);
	localStorage.setItem("Cartsp", JSON.stringify(b));
	Auto_hien_thi_soluong_sp();
	alert("Đã thêm vào giỏ hàng.");
}

function sp_mua_le(index){
	var a = localStorage.getItem("mualemoinhat");
	a = JSON.parse(a);
	var sotrang = a.length/5;
	if(parseInt(sotrang) < sotrang) sotrang = parseInt(sotrang)+1;
	var i = 0, j = 0, begin, end, s = "";
	end = index*5;
	begin = end - 5;
	if(end > a.length) end = a.length;
	for(i = begin; i < end; i++){
		s = s + "<div class='khung_sp' id='sp_mua_le_"+i+"'>"+
			"<img src='" + a[i].img + "' onclick='get_id_sp_ml(" + i +")'/>"+
			"<div class='san_pham_phan_chu' onclick='get_id_sp_ml("+ i +")'>"+
				"<p>Tên : "+ a[i].name + "</p>"+
				"<p>Nhãn hiệu : " + a[i].hieu + "</p>"+
				"<p>Giá : " + a[i].price + "đ</p>"+
			"</div>"+
			"<div class='sanpham_icon_them' onclick='sp_ml_vao_gio(" + i +")'><img src='icon/icons8-add-basket-48.png'></div>"+
		"</div>";
	}
	switch(sotrang){
		case 1: break;
		case 2:{
			s = s + "<table>"+
						"<button type='button' class='dot2' id = 'sp_mua_le1' onclick='index_chuyen_dot(2,"+index+",1)'></button>"+
						"<button type='button' class='dot3' id = 'sp_mua_le2' onclick='index_chuyen_dot(2,"+index+",2)'></button>"+
					"</table>"+
					"<button type='button' class='img_left' onclick='index_chuyensp(1, 2, "+ index+","+ sotrang +")'><</button>"+
					"<button type='button' class='img_right' onclick='index_chuyensp(2, 2, "+ index+","+sotrang+")'>></button>";
			break;
		}
		case 3:{
			s = s + "<table>"+
						"<button type='button' class='dot2' id = 'sp_mua_le1' onclick='index_chuyen_dot(2,"+index+",1)'></button>"+
						"<button type='button' class='dot3' id = 'sp_mua_le2' onclick='index_chuyen_dot(2,"+index+",2)'></button>"+
						"<button type='button' class='dot4' id = 'sp_mua_le3' onclick='index_chuyen_dot(2,"+index+",3)'></button>"+
					"</table>"+
					"<button type='button' class='img_left' onclick='index_chuyensp(1, 2, "+ index+","+ sotrang +")'><</button>"+
					"<button type='button' class='img_right' onclick='index_chuyensp(2, 2, "+ index+","+sotrang+")'>></button>";
			break;
		}
		case 4:{
			s = s + "<table>"+
						"<button type='button' class='dot1' id = 'sp_mua_le1' onclick='index_chuyen_dot(2,"+index+",1)'></button>"+
						"<button type='button' class='dot2' id = 'sp_mua_le2' onclick='index_chuyen_dot(2,"+index+",2)'></button>"+
						"<button type='button' class='dot3' id = 'sp_mua_le3' onclick='index_chuyen_dot(2,"+index+",3)'></button>"+
						"<button type='button' class='dot4' id = 'sp_mua_le4' onclick='index_chuyen_dot(2,"+index+",4)'></button>"+
					"</table>"+
					"<button type='button' class='img_left' onclick='index_chuyensp(1, 2, "+ index+","+ sotrang +")'><</button>"+
					"<button type='button' class='img_right' onclick='index_chuyensp(2, 2, "+ index+","+sotrang+")'>></button>";
			break;
		}
		case 5:{
			s = s + "<table>"+
						"<button type='button' class='dot1' id = 'sp_mua_le1' onclick='index_chuyen_dot(2,"+index+",1)'></button>"+
						"<button type='button' class='dot2' id = 'sp_mua_le2' onclick='index_chuyen_dot(2,"+index+",2)'></button>"+
						"<button type='button' class='dot3' id = 'sp_mua_le3' onclick='index_chuyen_dot(2,"+index+",3)'></button>"+
						"<button type='button' class='dot4' id = 'sp_mua_le4' onclick='index_chuyen_dot(2,"+index+",4)'></button>"+
						"<button type='button' class='dot5' id = 'sp_mua_le5' onclick='index_chuyen_dot(2,"+index+",5)'></button>"+
					"</table>"+
					"<button type='button' class='img_left' onclick='index_chuyensp(1, 2, "+ index+","+ sotrang +")'><</button>"+
					"<button type='button' class='img_right' onclick='index_chuyensp(2, 2, "+ index+","+sotrang+")'>></button>";
			break;
		}
		default: break;
	}
	document.getElementById("sp_mua_le").innerHTML = s;
}

function get_id_sp_ml(index){
	var a = localStorage.getItem("mualemoinhat");
	a = JSON.parse(a);
	var b = new sanpham(a[index].id, a[index].img, a[index].type, a[index].type1, a[index].type2, a[index].name, a[index].hieu, a[index].price, a[index].soluong, a[index].info, a[index].use);
	sessionStorage.setItem("detail_sp", JSON.stringify(b));
	window.location.href = "detail.html";
}

function sp_ml_vao_gio(index){
	var a = localStorage.getItem("mualemoinhat");
	a = JSON.parse(a);
	var b = localStorage.getItem("Cartsp");
	b = JSON.parse(b);
	if(b == null || b == ""){
		b = new Array();
		b.push(new sanpham_giohang(a[index].id, a[index].img, a[index].type, a[index].type1, a[index].type2, a[index].name, a[index].hieu, a[index].price, 1, a[index].soluong, a[index].info, a[index].use));
		localStorage.setItem("Cartsp", JSON.stringify(b));
		Auto_hien_thi_soluong_sp();
		alert("Đã thêm vào giỏ hàng.");
		return;
	}
	for(let i = 0; i < b.length; i++) if(a[index].id == b[i].id){
		alert("Sản phẩm đã có trong giỏ.");
		return;
	}

	b[b.length] = new sanpham_giohang(a[index].id, a[index].img, a[index].type, a[index].type1, a[index].type2, a[index].name, a[index].hieu, a[index].price, 1, a[index].soluong, a[index].info, a[index].use);
	localStorage.setItem("Cartsp", JSON.stringify(b));
	Auto_hien_thi_soluong_sp();
	alert("Đã thêm vào giỏ hàng.");
}


function sp_tk_phobien(index){
	var a = localStorage.getItem("tiemkiemphobien");
	a = JSON.parse(a);
	var sotrang = a.length/5;
	if(parseInt(sotrang) < sotrang) sotrang = parseInt(sotrang)+1;
	var i = 0, j = 0, begin, end, s = "";
	end = index*5;
	begin = end - 5;
	if(end > a.length) end = a.length;
	for(i = begin; i < end; i++){
		s = s + "<div class='khung_sp' id='sp_tim_kiem_"+i+"'>"+
			"<img src='" + a[i].img + "' onclick='get_id_sp_tk(" + i +")'/>"+
			"<div class='san_pham_phan_chu' onclick='get_id_sp_tk("+ i +")'>"+
				"<p>Tên : "+ a[i].name + "</p>"+
				"<p>Nhãn hiệu : " + a[i].hieu + "</p>"+
				"<p>Giá : " + a[i].price + "đ</p>"+
			"</div>"+
			"<div class='sanpham_icon_them' onclick='sp_tk_vao_gio(" + i +")'><img src='icon/icons8-add-basket-48.png'></div>"+
		"</div>";
	}
	switch(sotrang){
		case 1: break;
		case 2:{
			s = s + "<table>"+
						"<button type='button' class='dot2' id='sp_tk_phobien1' onclick='index_chuyen_dot(3,"+index+",1)'></button>"+
						"<button type='button' class='dot3' id='sp_tk_phobien2' onclick='index_chuyen_dot(3,"+index+",1)'></button>"+
					"</table>"+
					"<button type='button' class='img_left' onclick='index_chuyensp(1, 3, "+ index+","+ sotrang +")'><</button>"+
					"<button type='button' class='img_right' onclick='index_chuyensp(2, 3, "+ index+","+ sotrang +")'>></button>";
			break;
		}
		case 3:{
			s = s + "<table>"+
						"<button type='button' class='dot2' id='sp_tk_phobien1' onclick='index_chuyen_dot(3,"+index+",1)'></button>"+
						"<button type='button' class='dot3' id='sp_tk_phobien2' onclick='index_chuyen_dot(3,"+index+",2)'></button>"+
						"<button type='button' class='dot4' id='sp_tk_phobien3' onclick='index_chuyen_dot(3,"+index+",3)'></button>"+
					"</table>"+
					"<button type='button' class='img_left' onclick='index_chuyensp(1, 3, "+ index+","+ sotrang +")'><</button>"+
					"<button type='button' class='img_right' onclick='index_chuyensp(2, 3, "+ index+","+ sotrang +")'>></button>";
			break;
		}
		case 4:{
			s = s + "<table>"+
						"<button type='button' class='dot1' id='sp_tk_phobien1' onclick='index_chuyen_dot(3,"+index+",1)'></button>"+
						"<button type='button' class='dot2' id='sp_tk_phobien2' onclick='index_chuyen_dot(3,"+index+",2)'></button>"+
						"<button type='button' class='dot3' id='sp_tk_phobien3' onclick='index_chuyen_dot(3,"+index+",3)'></button>"+
						"<button type='button' class='dot4' id='sp_tk_phobien4' onclick='index_chuyen_dot(3,"+index+",4)'></button>"+
					"</table>"+
					"<button type='button' class='img_left' onclick='index_chuyensp(1, 3, "+ index+","+ sotrang +")'><</button>"+
					"<button type='button' class='img_right' onclick='index_chuyensp(2, 3, "+ index+","+ sotrang +")'>></button>";
			break;
		}
		case 5:{
			s = s + "<table>"+
						"<button type='button' class='dot1' id='sp_tk_phobien1' onclick='index_chuyen_dot(3,"+index+",1)'></button>"+
						"<button type='button' class='dot2' id='sp_tk_phobien2' onclick='index_chuyen_dot(3,"+index+",2)'></button>"+
						"<button type='button' class='dot3' id='sp_tk_phobien3' onclick='index_chuyen_dot(3,"+index+",3)'></button>"+
						"<button type='button' class='dot4' id='sp_tk_phobien4' onclick='index_chuyen_dot(3,"+index+",4)'></button>"+
						"<button type='button' class='dot5' id='sp_tk_phobien5' onclick='index_chuyen_dot(3,"+index+",5)'></button>"+
					"</table>"+
					"<button type='button' class='img_left' onclick='index_chuyensp(1, 3, "+ index+","+ sotrang +")'><</button>"+
					"<button type='button' class='img_right' onclick='index_chuyensp(2, 3, "+ index+","+ sotrang +")'>></button>";
			break;
		}
		default: break;
	}
	document.getElementById("sp_tim_kiem").innerHTML = s;
}

function get_id_sp_tk(index){
	var a = localStorage.getItem("tiemkiemphobien");
	a = JSON.parse(a);
	var b = new sanpham(a[index].id, a[index].img, a[index].type, a[index].type1, a[index].type2, a[index].name, a[index].hieu, a[index].price, a[index].soluong, a[index].info, a[index].use);
	sessionStorage.setItem("detail_sp", JSON.stringify(b));
	window.location.href = "detail.html";
}

function sp_tk_vao_gio(index){
	var a = localStorage.getItem("tiemkiemphobien");
	a = JSON.parse(a);
	var b = localStorage.getItem("Cartsp");
	b = JSON.parse(b);
	if(b == null || b == ""){
		b = new Array();
		b.push(new sanpham_giohang(a[index].id, a[index].img, a[index].type, a[index].type1, a[index].type2, a[index].name, a[index].hieu, a[index].price, 1, a[index].soluong, a[index].info, a[index].use));
		localStorage.setItem("Cartsp", JSON.stringify(b));
		Auto_hien_thi_soluong_sp();
		alert("Đã thêm vào giỏ hàng.");
		return;
	}
	for(let i = 0; i < b.length; i++) if(a[index].id == b[i].id){
		alert("Sản phẩm đã có trong giỏ.");
		return;
	}

	b[b.length] = new sanpham_giohang(a[index].id, a[index].img, a[index].type, a[index].type1, a[index].type2, a[index].name, a[index].hieu, a[index].price, 1, a[index].soluong, a[index].info, a[index].use);
	localStorage.setItem("Cartsp", JSON.stringify(b));
	Auto_hien_thi_soluong_sp();
	alert("Đã thêm vào giỏ hàng.");
}

function index_chuyensp(huong, ham, index, sotrang){
	switch(ham){
		case 1:{
			if(huong == 1){
				if(index - 1 > 0){
					sp_ban_chay(index-1);
					document.getElementById("sp_ban_chay"+1).style = "background-color:black;";
					document.getElementById("sp_ban_chay"+index).style = "background-color:black;";
					document.getElementById("sp_ban_chay"+(index-1)).style = "background-color:white;";
				}
				else{
					sp_ban_chay(sotrang);
					document.getElementById("sp_ban_chay"+1).style = "background-color:black;";
					document.getElementById("sp_ban_chay"+index).style = "background-color:black;";
					document.getElementById("sp_ban_chay"+sotrang).style = "background-color:white;";
				}
			}
			else{
				if(index+1 <= sotrang){
					sp_ban_chay(index+1);
					document.getElementById("sp_ban_chay"+1).style = "background-color:black;";
					document.getElementById("sp_ban_chay"+index).style = "background-color:black;";
					document.getElementById("sp_ban_chay"+(index+1)).style = "background-color:white;";
				}
				else{
					sp_ban_chay(1);
					document.getElementById("sp_ban_chay"+1).style = "background-color:black;";
					document.getElementById("sp_ban_chay"+index).style = "background-color:black;";
					document.getElementById("sp_ban_chay"+1).style = "background-color:white;";
				}
			}
			break;
		}
		case 2:{
			if(huong == 1){
				if(index - 1 > 0){
					sp_mua_le(index-1);
					document.getElementById("sp_mua_le"+1).style = "background-color:black;";
					document.getElementById("sp_mua_le"+index).style = "background-color:black;";
					document.getElementById("sp_mua_le"+(index-1)).style = "background-color:white;";
				}
				else{
					sp_mua_le(sotrang);
					document.getElementById("sp_mua_le"+1).style = "background-color:black;";
					document.getElementById("sp_mua_le"+index).style = "background-color:black;";
					document.getElementById("sp_mua_le"+sotrang).style = "background-color:white;";
				}
			}
			else{
				if(index+1 <= sotrang){
					sp_mua_le(index+1);
					document.getElementById("sp_mua_le"+1).style = "background-color:black;";
					document.getElementById("sp_mua_le"+index).style = "background-color:black;";
					document.getElementById("sp_mua_le"+(index+1)).style = "background-color:white;";
				}
				else{
					sp_mua_le(1);
					document.getElementById("sp_mua_le"+1).style = "background-color:black;";
					document.getElementById("sp_mua_le"+index).style = "background-color:black;";
					document.getElementById("sp_mua_le"+1).style = "background-color:white;";
				}
			}
			break;
		}
		case 3:{
			if(huong == 1){
				if(index - 1 > 0){
					sp_tk_phobien(index-1);
					document.getElementById("sp_tk_phobien"+1).style = "background-color:black;";
					document.getElementById("sp_tk_phobien"+index).style = "background-color:black;";
					document.getElementById("sp_tk_phobien"+(index-1)).style = "background-color:white;";
				}
				else{
					sp_tk_phobien(sotrang);
					document.getElementById("sp_tk_phobien"+1).style = "background-color:black;";
					document.getElementById("sp_tk_phobien"+index).style = "background-color:black;";
					document.getElementById("sp_tk_phobien"+sotrang).style = "background-color:white;";
				}
			}
			else{
				if(index+1 <= sotrang){
					sp_tk_phobien(index+1);
					document.getElementById("sp_tk_phobien"+1).style = "background-color:black;";
					document.getElementById("sp_tk_phobien"+index).style = "background-color:black;";
					document.getElementById("sp_tk_phobien"+(index+1)).style = "background-color:white;";
				}
				else{
					sp_tk_phobien(1);
					document.getElementById("sp_tk_phobien"+1).style = "background-color:black;";
					document.getElementById("sp_tk_phobien"+index).style = "background-color:black;";
					document.getElementById("sp_tk_phobien"+1).style = "background-color:white;";
				}
			}
			break;
		}
		default: break;
	}
}

function index_chuyen_dot(ham, index, index1){
	switch(ham){
		case 1:{
			sp_ban_chay(index1);
			document.getElementById("sp_ban_chay"+1).style = "background-color:black;";
			document.getElementById("sp_ban_chay"+index).style = "background-color:black;";
			document.getElementById("sp_ban_chay"+index1).style = "background-color:white;";
			break;
		}
		case 2:{
			sp_mua_le(index1);
			document.getElementById("sp_mua_le"+1).style = "background-color:black;";
			document.getElementById("sp_mua_le"+index).style = "background-color:black;";
			document.getElementById("sp_mua_le"+index1).style = "background-color:white;";
			break;
		}
		case 3:{
			sp_tk_phobien(index1);
			document.getElementById("sp_tk_phobien"+1).style = "background-color:black;";
			document.getElementById("sp_tk_phobien"+index).style = "background-color:black;";
			document.getElementById("sp_tk_phobien"+index1).style = "background-color:white;";
			break;
		}
		default: break;
	}
}

//===========================================hàm thoát dăng nhập/đăng kí==========================================
function exit(cc){
//	an_hien(false);
	switch(cc){
		case 1 : {
			var login = document.getElementById('login');
			var cancel = document.getElementById('huy1');
			window.onclick = function(event) {
				if (event.target == login || event.target == cancel) {
					login.style.display = "none";
					document.getElementById('login-form').reset();
				}
			}
			break;
		}
		case 2 : {
			var signup = document.getElementById('signup');
			var cancel = document.getElementById('huy2');
			window.onclick = function(event) {
				if (event.target == signup || event.target == cancel) {
					signup.style.display = "none";
					document.getElementById('signup-form').reset();
				}
			}
			break;
		}
		case 3:{
			var table_qlsp = document.getElementById("table_qlsp");
			var cancel = document.getElementById('huy3');
			window.onclick = function(event){
				if (event.target == table_qlsp || event.target == cancel) {
					table_qlsp.style.display = "none";
					document.getElementById('table_qlsp_form').reset();
				}
				
			}
			break;
		}
		case 4:{
			var table_qltk = document.getElementById("table_qltk");
			var cancel = document.getElementById('huy4');
			window.onclick = function(event){
				if (event.target == table_qltk || event.target == cancel) {
					table_qltk.style.display = "none";
					document.getElementById('qltk_form').reset();
				}
				
			}
			break;
		}
		case 5:{
			var table_qlsp_add = document.getElementById("table_qlsp_add");
			var cancel = document.getElementById('huy5');
			window.onclick = function(event){
				if (event.target == table_qlsp_add || event.target == cancel) {
					table_qlsp_add.style.display = "none";
					document.getElementById('table_qlsp_add_form').reset();
				}
				
			}
			break;
		}
		default: break;
	}
}
//==========================================hàm hiện bảng đăng nhập=================================================
function show_Login(){
	exit(2);
	document.getElementById('signup').style.display = 'none';
	document.getElementById('chuthich8').innerHTML = "";
	document.getElementById('chuthich9').innerHTML = "";
//	an_hien(true);
	var login = document.getElementById('login');
	login.style.display = "block";
}
//================Hàm làm cho tiêu đề relative hay fixed==================================================
/*
function an_hien(cc){
	var temp = location.href;
	if(cc == true){					//true là hiện fixed
		document.getElementById('head').style = "position: fixed; z-index: 2;";
		document.getElementById('head-link').style = "position: fixed; margin-top:50px;z-index:1;";
		if(temp.indexOf("index.html")!=-1){
			document.getElementById('img-js').style = "margin-top:150px;";
		}
		else if(temp.indexOf("sanpham.html")!=-1){
			document.getElementById('content').style = "margin-top:150px;";
		}
	}
	else{
		document.getElementById('head').style = "position: relative;";
		document.getElementById('head-link').style = "{position: relative; margin-top:0px;}";
		if(temp.indexOf("index.html")!=-1){
			document.getElementById('img-js').style = "margin-top:0px;";
		}
		else if(temp.indexOf("sanpham.html")!=-1){
			document.getElementById('content').style = "margin-top:0px;";
		}
	}
}*/

//=========================================hàm hiện bảng đăng kí====================================================
function show_signup(){
	exit(1);
	document.getElementById('login').style.display = 'none';
	for(let i = 1; i <= 9; i++){
		document.getElementById('chuthich'+i).innerHTML = "";
	}
//	an_hien(true);
	document.getElementById('signup').style.display='block';
}

//========================================hàm tài khoản===========================================================

function Account(user, pass, name, sex, born, phone, email, address, cart){
	this.user = user;
	this.pass = pass;
	this.name = name;
	this.sex = sex;
	this.born = born;
	this.phone = phone;
	this.email = email;
	this.address = address;
	this.cart = cart;
}

var dki_sex = "";
function dki_muc_sex(cc){
	if(cc == 1) dki_sex = "NAM";
	else dki_sex = "NỮ";
}

//========================================hàm đăng kí tài khoản==================================================
function ktdk(){
	var t = true;
	var user = document.getElementById('dki-user');
	var account = localStorage.getItem('ExAccount');
	account = JSON.parse(account);
	var format = "";
	for(let i = 1; i <= 9; i++){
		document.getElementById('chuthich'+i).innerHTML = "";
	}
	//====================kiểm tra tên đăng nhập
	if(user.value == ""){
		document.getElementById('chuthich1').innerHTML = "Tên đăng nhập không được rỗng!";
		t = false;
	}
	else if(user.value.length < 5){
		document.getElementById('chuthich1').innerHTML = "Tên đăng nhập phải bằng hoặc hơn 5 kí tự!";
		t = false;
	}
	else{
		format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
		if(format.test(user.value)){
			document.getElementById('chuthich1').innerHTML = "Tên đăng nhập không chứa các kí tự đặc biệt!"
			t = false;
		}
		else{
			format = /[A-Z]{1}/i;
			if(!format.test(user.value)){
				document.getElementById('chuthich1').innerHTML = "Tên đăng nhập phải chứa ít nhất 1 kí tự chữ";
				t = false;
			}
			else{
				if(user.value == "admin"){
					document.getElementById('chuthich1').innerHTML = "Tài khoản đã tồn tại!";
					t = false;
				}
				else if(account != null){
					for(let i = 0; i < account.length; i++) if(user.value == account[i].user){
						document.getElementById('chuthich1').innerHTML = "Tài khoản đã tồn tại!";
						t = false;
					}
				}
			}
		}
	}
	

	//========================Kiểm tra password
	var pass = document.getElementById('dki-pass');
	var repass = document.getElementById('re-pass');
	if(pass.value == ""){
		document.getElementById('chuthich2').innerHTML = "Mật khẩu không được rỗng!";
		t = false;
	}
	else if(pass.value.length < 5){
		document.getElementById('chuthich2').innerHTML = "Mật khẩu phải bằng hoặc hơn 5 kí tự!";
		t = false;
	}
	if(repass.value == ""){
		document.getElementById('chuthich3').innerHTML = "Nhập lại mật khẩu không được rỗng!";
		t = false;
	}
	else if(repass.value != pass.value){
		document.getElementById('chuthich3').innerHTML = "Xác nhận mật khẩu không khớp!";
		t = false;
	}
	//=====================Kiểm tra tên
	var name = document.getElementById('dki-name');
	if(name.value == ""){
		document.getElementById('chuthich4').innerHTML = "Họ và tên không được rỗng!";
		t = false;
	}
	else if(name.length < 3){
		document.getElementById('chuthich4').innerHTML = "Họ và tên quá ngắn!";
		t = false;
	}
	//====================Kiểm tra giới tính=====================
	if(dki_sex == ""){
		document.getElementById('chuthich5').innerHTML = "Giới tính không được rỗng!";
		t = false;
	}
	//====================Kiểm tra ngày sinh====================
	var borndate = document.getElementById('dki_born');
	borndate = borndate.value;
	if(borndate == ""){
		document.getElementById('chuthich6').innerHTML = "Ngày sinh không được rỗng!";
		t = false;
	}

	//======================Kiểm tra số điện thoại
	var phone = document.getElementById('dki-phone');
	if(phone.value == ""){
		document.getElementById('chuthich7').innerHTML = "Số điện thoại không được rỗng!";
		t = false;
	}
	else{
		format = /\D/g;
		if(format.test(phone.value)){
			document.getElementById('chuthich7').innerHTML = "Số điện thoại phải là chữ số!";
			t = false;
		}
		else if(phone.value.length < 10 || phone.value.length > 11){
			document.getElementById('chuthich7').innerHTML = "Số điện thoại không phù hợp!";
			t = false;
		}
	}
	//=======================Kiểm tra email
	var email = document.getElementById('dki-email');
	if(email.value == ""){
		document.getElementById('chuthich8').innerHTML = "Email không được rỗng!";
		t = false;
	}
	else if(email.value.length < 5){
		document.getElementById('chuthich8').innerHTML = "Email quá ngắn!";
		t = false;
	}
	else{
		format = /[A-Z0-9._%+-]{6,30}@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
		if(!format.test(email.value)){
			document.getElementById('chuthich8').innerHTML = "Email không hợp lệ!";
			t = false;
		}
	}
	//=====================Kiểm tra địa chỉ
	var address = document.getElementById('dki-address');
	if(address.value == ""){
		document.getElementById('chuthich9').innerHTML = "Địa chỉ không được rỗng!";
		t = false;
	}
	//=======================Lưu thông tin vào Local Storage
	if(!t) return;
	if ( account == null ) {
		account = new Array();
		var b1 = user.value, b2 = pass.value, b3 = name.value, b4 = phone.value, b5 = email.value, b6 = address.value;
		account.push( new Account(user.value, pass.value, name.value, dki_sex, borndate, phone.value, email.value, address.value, ""));
		localStorage.setItem("ExAccount", JSON.stringify(account));
		document.getElementById('signup').style.display = "none";
		document.getElementById('signup-form').reset();
		var ccc = new Account(b1, b2, b3, dki_sex, borndate, b4, b5, b6, "");
		localStorage.setItem("CurAccount", JSON.stringify(ccc));
		alert("Đăng ký thành công!");
		loginStatus();
	} else {
		account.push( new Account(user.value, pass.value, name.value, dki_sex, borndate, phone.value, email.value, address.value, ""));
		var b1 = user.value, b2 = pass.value, b3 = name.value, b4 = phone.value, b5 = email.value, b6 = address.value;
		localStorage.setItem("ExAccount", JSON.stringify(account));
		document.getElementById('signup').style.display = "none";
		document.getElementById('signup-form').reset();
		var ccc = new Account(b1, b2, b3, dki_sex, borndate, b4, b5, b6, "");
		localStorage.setItem("CurAccount", JSON.stringify(ccc));
		alert("Đăng ký thành công!");
		loginStatus();
	}
}
//===========================================Hàm kiểm tra đăng nhập===============================================
function ktdn(){
	var user = document.getElementById('dn-user');
	var pass = document.getElementById('dn-pass');
	var account = localStorage.getItem('ExAccount');
	account = JSON.parse(account);
	var t = true;
	document.getElementById('chuthich10').innerHTML = "";
	document.getElementById('chuthich11').innerHTML = "";
	if(user.value == ""){
		document.getElementById('chuthich10').innerHTML = "Tên đăng nhập không được rỗng!";
		user.focus();
		t = false;
	}
	if(pass.value == ""){
		document.getElementById('chuthich11').innerHTML = "Mật khẩu không được rỗng!";
		t = false;
	}
	if(t){
		if(user.value == "admin" && pass.value == "admin"){
			localStorage.setItem("CurAccount",user.value);
			alert("Xin chào admin!");
			document.getElementById('login').style.display = "none";
			document.getElementById('login-form').reset();
			window.location.href="admin.html";
			return;
		}
		if(account == null){
			alert("Tài khoản không tồn tại!");
		}
		else{
			
			for (let i = 0; i < account.length; i++) if(user.value == account[i].user){
				if(pass.value == account[i].pass){
					user = new Account(account[i].user, account[i].pass, account[i].name, account[i].sex, account[i].born, account[i].phone, account[i].email, account[i].address, account[i].cart);
					localStorage.setItem("CurAccount",JSON.stringify(user));
					alert("Đăng nhập thành công!");
/*					document.getElementById('login').style.display = "none";
					document.getElementById('login-form').reset();
					document.getElementById('dang-nhap').style.display = "none";
					document.getElementById('member').innerHTML = user.name;
					document.getElementById('hien-thi-kh').style.display = "block";*/
					location.reload();
					return;
				}
				else{
					document.getElementById('chuthich11').innerHTML = "Sai mật khẩu!";
					return;
				}
			}
			alert("Tài khoản không tồn tại!");
		}
	}
}

//=====================Hàm trạng thái đăng nhập================
function loginStatus(){
	var acc = localStorage.getItem("CurAccount");
	if(acc == "admin"){
		document.getElementById('dang-nhap').style.display = "none";
		document.getElementById('member').innerHTML = acc;
		document.getElementById('hien-thi-kh').style.display = "block";
		return;
	}
	acc = JSON.parse(acc);
	if(acc == null){
		return;
	}
	document.getElementById('dang-nhap').style.display = "none";
	document.getElementById('member').innerHTML = acc.name;
	document.getElementById('hien-thi-kh').style.display = "block";
}

//================================================Hàm đăng xuất===================================================
function dx(){
	localStorage.removeItem("CurAccount");
	dki_sex = "";
//	sessionStorage.removeItem("cartArray");
//	fixCartHTML();
	alert("Đã đăng xuất");
	document.getElementById('hien-thi-kh').style.display = "none";
	document.getElementById('dang-nhap').style.display = "block";
	localStorage.removeItem("Cartsp");
	Auto_hien_thi_soluong_sp();
	var s = location.href;
	if(s.indexOf("sanpham.html") != -1 || s.indexOf("cart.html") != -1 || s.indexOf("search.html") != -1 || s.indexOf("index.html") != -1 || s.indexOf("detail.html") != -1) return;
	if(s.indexOf("user.html") != -1){
		var user_danhmuc = localStorage.getItem("user_danhmuc");
		user_danhmuc = JSON.parse(user_danhmuc);
		user_danhmuc = 1;
		localStorage.setItem("user_danhmuc", JSON.parse(user_danhmuc));
	}
	window.location.href = "index.html";
}

function danhmuc(loai){
	this.loai = loai;
}

//===================Đây là phần lưu danh mục phần danh mục của code chung vào LocalStorage=================
function save_danhmuc(cc){
	var p = new danhmuc(cc);
	localStorage.setItem("Danhmuc", JSON.stringify(p));
}

function get_danhmuc(){
	var p = localStorage.getItem("Danhmuc");
	p = JSON.parse(p);
	return p;
}

function chuyentrangsangsp(cc){
	save_danhmuc(cc);
	window.location.href = "sanpham.html";
}

//==================Đây là phần lấy danh mục đã lưu vào LocalStorage=====================
function chay_danhmuc(){
	var p = get_danhmuc();
	if(p == null || p == ""){
		save_danhmuc("Trang điểm");
		p = get_danhmuc();
	}
	switch(p.loai){
		case "Trang điểm":{
			_trang_diem1();
			break;
		}
		case "Dưỡng da":{
			_duong_da1();
			break;
		}
		case "Tóc":{
			_toc1();
			break;
		}
		case "Cơ thể":{
			_co_the1();
			break;
		}
		case "Cọ & Phụ kiện":{
			_co1();
			break;
		}
		case "Nước hoa":{
			_nuoc_hoa();
			break;
		}
		case "Mắt":{
			_maat1();
			break;
		}
		case "Lót mắt":{
			an_danh_muc_sanpham();
			document.images['icon_trang_diem1'].src = "icon/down.png";
			document.getElementById('_mắt1').style.display = "block";
			document.getElementById('_mặt1').style.display = "block";
			document.getElementById('_moi1').style.display = "block";

			document.images['icon_mắt1'].src = "icon/down.png";

			document.getElementById('_mắt11').style.display = "block";
			document.getElementById('_mắt12').style.display = "block";
			document.getElementById('_mắt13').style.display = "block";
			document.getElementById('_mắt14').style.display = "block";
			document.getElementById('_mắt15').style.display = "block";
			document.getElementById('_mắt16').style.display = "block";
			duyetmang("", "", "Lót mắt");
			break;
		}
		case "Phấn mắt":{
			an_danh_muc_sanpham();
			document.images['icon_trang_diem1'].src = "icon/down.png";
			document.getElementById('_mắt1').style.display = "block";
			document.getElementById('_mặt1').style.display = "block";
			document.getElementById('_moi1').style.display = "block";

			document.images['icon_mắt1'].src = "icon/down.png";

			document.getElementById('_mắt11').style.display = "block";
			document.getElementById('_mắt12').style.display = "block";
			document.getElementById('_mắt13').style.display = "block";
			document.getElementById('_mắt14').style.display = "block";
			document.getElementById('_mắt15').style.display = "block";
			document.getElementById('_mắt16').style.display = "block";
			duyetmang("", "", "Phấn mắt"); 
			break;
		}
		case "Chuốt mi":{
			an_danh_muc_sanpham();
			document.images['icon_trang_diem1'].src = "icon/down.png";
			document.getElementById('_mắt1').style.display = "block";
			document.getElementById('_mặt1').style.display = "block";
			document.getElementById('_moi1').style.display = "block";

			document.images['icon_mắt1'].src = "icon/down.png";

			document.getElementById('_mắt11').style.display = "block";
			document.getElementById('_mắt12').style.display = "block";
			document.getElementById('_mắt13').style.display = "block";
			document.getElementById('_mắt14').style.display = "block";
			document.getElementById('_mắt15').style.display = "block";
			document.getElementById('_mắt16').style.display = "block";
			duyetmang("", "", "Chuốt mi");
			break;
		}
		case "Kẻ mắt":{
			an_danh_muc_sanpham();
			document.images['icon_trang_diem1'].src = "icon/down.png";
			document.getElementById('_mắt1').style.display = "block";
			document.getElementById('_mặt1').style.display = "block";
			document.getElementById('_moi1').style.display = "block";

			document.images['icon_mắt1'].src = "icon/down.png";

			document.getElementById('_mắt11').style.display = "block";
			document.getElementById('_mắt12').style.display = "block";
			document.getElementById('_mắt13').style.display = "block";
			document.getElementById('_mắt14').style.display = "block";
			document.getElementById('_mắt15').style.display = "block";
			document.getElementById('_mắt16').style.display = "block";
			duyetmang("", "", "Kẻ mắt");
			break;
		}
		case "Chân mày":{
			an_danh_muc_sanpham();
			document.images['icon_trang_diem1'].src = "icon/down.png";
			document.getElementById('_mắt1').style.display = "block";
			document.getElementById('_mặt1').style.display = "block";
			document.getElementById('_moi1').style.display = "block";

			document.images['icon_mắt1'].src = "icon/down.png";

			document.getElementById('_mắt11').style.display = "block";
			document.getElementById('_mắt12').style.display = "block";
			document.getElementById('_mắt13').style.display = "block";
			document.getElementById('_mắt14').style.display = "block";
			document.getElementById('_mắt15').style.display = "block";
			document.getElementById('_mắt16').style.display = "block";
			duyetmang("", "", "Chân mày");
			break;
		}
		case "Tẩy trang mắt":{
			an_danh_muc_sanpham();
			document.images['icon_trang_diem1'].src = "icon/down.png";
			document.getElementById('_mắt1').style.display = "block";
			document.getElementById('_mặt1').style.display = "block";
			document.getElementById('_moi1').style.display = "block";

			document.images['icon_mắt1'].src = "icon/down.png";

			document.getElementById('_mắt11').style.display = "block";
			document.getElementById('_mắt12').style.display = "block";
			document.getElementById('_mắt13').style.display = "block";
			document.getElementById('_mắt14').style.display = "block";
			document.getElementById('_mắt15').style.display = "block";
			document.getElementById('_mắt16').style.display = "block";
			duyetmang("", "", "Tẩy trang mắt"); 
			break;
		}
		case "Mặt":{
			_mat1();
			break;
		}
		case "Kem lót":{
			an_danh_muc_sanpham();
			document.images['icon_trang_diem1'].src = "icon/down.png";
			document.getElementById('_mắt1').style.display = "block";
			document.getElementById('_mặt1').style.display = "block";
			document.getElementById('_moi1').style.display = "block";

			document.images['icon_mặt1'].src = "icon/down.png";

			document.images['icon_mặt1'].src = "icon/down.png";
			document.getElementById('_mặt11').style.display = "block";
			document.getElementById('_mặt12').style.display = "block";
			document.getElementById('_mặt13').style.display = "block";
			document.getElementById('_mặt14').style.display = "block";
			document.getElementById('_mặt15').style.display = "block";
			duyetmang("", "", "Kem lót"); 
			break;
		}
		case "Kem/Phấn nền":{
			an_danh_muc_sanpham();
			document.images['icon_trang_diem1'].src = "icon/down.png";
			document.getElementById('_mắt1').style.display = "block";
			document.getElementById('_mặt1').style.display = "block";
			document.getElementById('_moi1').style.display = "block";

			document.images['icon_mặt1'].src = "icon/down.png";

			document.images['icon_mặt1'].src = "icon/down.png";
			document.getElementById('_mặt11').style.display = "block";
			document.getElementById('_mặt12').style.display = "block";
			document.getElementById('_mặt13').style.display = "block";
			document.getElementById('_mặt14').style.display = "block";
			document.getElementById('_mặt15').style.display = "block";
			duyetmang("", "", "Kem/Phấn nền"); 
			break;
		}
		case "Phấn phủ":{
			an_danh_muc_sanpham();
			document.images['icon_trang_diem1'].src = "icon/down.png";
			document.getElementById('_mắt1').style.display = "block";
			document.getElementById('_mặt1').style.display = "block";
			document.getElementById('_moi1').style.display = "block";

			document.images['icon_mặt1'].src = "icon/down.png";

			document.images['icon_mặt1'].src = "icon/down.png";
			document.getElementById('_mặt11').style.display = "block";
			document.getElementById('_mặt12').style.display = "block";
			document.getElementById('_mặt13').style.display = "block";
			document.getElementById('_mặt14').style.display = "block";
			document.getElementById('_mặt15').style.display = "block";
			duyetmang("", "", "Phấn phủ");
			break;
		}
		case "Phấn má":{
			an_danh_muc_sanpham();
			document.images['icon_trang_diem1'].src = "icon/down.png";
			document.getElementById('_mắt1').style.display = "block";
			document.getElementById('_mặt1').style.display = "block";
			document.getElementById('_moi1').style.display = "block";

			document.images['icon_mặt1'].src = "icon/down.png";

			document.images['icon_mặt1'].src = "icon/down.png";
			document.getElementById('_mặt11').style.display = "block";
			document.getElementById('_mặt12').style.display = "block";
			document.getElementById('_mặt13').style.display = "block";
			document.getElementById('_mặt14').style.display = "block";
			document.getElementById('_mặt15').style.display = "block";
			duyetmang("", "", "Phấn má"); 
			break;
		}
		case "Tạo khối":{
			an_danh_muc_sanpham();
			document.images['icon_trang_diem1'].src = "icon/down.png";
			document.getElementById('_mắt1').style.display = "block";
			document.getElementById('_mặt1').style.display = "block";
			document.getElementById('_moi1').style.display = "block";

			document.images['icon_mặt1'].src = "icon/down.png";

			document.images['icon_mặt1'].src = "icon/down.png";
			document.getElementById('_mặt11').style.display = "block";
			document.getElementById('_mặt12').style.display = "block";
			document.getElementById('_mặt13').style.display = "block";
			document.getElementById('_mặt14').style.display = "block";
			document.getElementById('_mặt15').style.display = "block";
			duyetmang("", "", "Tạo khối"); 
			break;
		}
		case "Môi":{
			_moi_1();
			break;
		}
		case "Son dưỡng môi & điều trị":{
			an_danh_muc_sanpham();
			document.images['icon_trang_diem1'].src = "icon/down.png";
			document.getElementById('_mắt1').style.display = "block";
			document.getElementById('_mặt1').style.display = "block";
			document.getElementById('_moi1').style.display = "block";

			document.images['icon_moi1'].src = "icon/down.png";

			document.getElementById('_moi11').style.display = "block";
			document.getElementById('_moi12').style.display = "block";
			document.getElementById('_moi13').style.display = "block";
			document.getElementById('_moi14').style.display = "block";
			duyetmang("", "", "Son dưỡng môi & điều trị");
			break;
		}
		case "Son kem":{
			an_danh_muc_sanpham();
			document.images['icon_trang_diem1'].src = "icon/down.png";
			document.getElementById('_mắt1').style.display = "block";
			document.getElementById('_mặt1').style.display = "block";
			document.getElementById('_moi1').style.display = "block";

			document.images['icon_moi1'].src = "icon/down.png";

			document.getElementById('_moi11').style.display = "block";
			document.getElementById('_moi12').style.display = "block";
			document.getElementById('_moi13').style.display = "block";
			document.getElementById('_moi14').style.display = "block";
			duyetmang("", "", "Son kem");
			break;
		}
		case "Son bóng":{
			an_danh_muc_sanpham();
			document.images['icon_trang_diem1'].src = "icon/down.png";
			document.getElementById('_mắt1').style.display = "block";
			document.getElementById('_mặt1').style.display = "block";
			document.getElementById('_moi1').style.display = "block";

			document.images['icon_moi1'].src = "icon/down.png";

			document.getElementById('_moi11').style.display = "block";
			document.getElementById('_moi12').style.display = "block";
			document.getElementById('_moi13').style.display = "block";
			document.getElementById('_moi14').style.display = "block";
			duyetmang("", "", "Son bóng"); 
			break;
		}
		case "Viền môi":{
			an_danh_muc_sanpham();
			document.images['icon_trang_diem1'].src = "icon/down.png";
			document.getElementById('_mắt1').style.display = "block";
			document.getElementById('_mặt1').style.display = "block";
			document.getElementById('_moi1').style.display = "block";

			document.images['icon_moi1'].src = "icon/down.png";

			document.getElementById('_moi11').style.display = "block";
			document.getElementById('_moi12').style.display = "block";
			document.getElementById('_moi13').style.display = "block";
			document.getElementById('_moi14').style.display = "block";
			duyetmang("", "", "Viền môi"); 
			break;
		}
		case "Rửa mặt":{
			_rua_mat1();
			break;
		}
		case "Tẩy trang":{
			an_danh_muc_sanpham();
			document.images['icon_duong_da1'].src = "icon/down.png";
			document.getElementById('_rua_mat1').style.display = "block";
			document.getElementById('_mat_na1').style.display = "block";
			document.getElementById('_duong_am1').style.display = "block";
			document.getElementById('_tri_lieu1').style.display = "block";
			document.getElementById('_chong_nang1').style.display = "block";

			document.images['icon_rua_mat1'].src = "icon/down.png";

			document.getElementById('_rua_mat11').style.display = "block";
			document.getElementById('_rua_mat12').style.display = "block";
			document.getElementById('_rua_mat13').style.display = "block";
			document.getElementById('_rua_mat14').style.display = "block";
			document.getElementById('_rua_mat15').style.display = "block";
			duyetmang("", "", "Tẩy trang");
			break;
		}
		case "Tẩy da chết":{
			an_danh_muc_sanpham();
			document.images['icon_duong_da1'].src = "icon/down.png";
			document.getElementById('_rua_mat1').style.display = "block";
			document.getElementById('_mat_na1').style.display = "block";
			document.getElementById('_duong_am1').style.display = "block";
			document.getElementById('_tri_lieu1').style.display = "block";
			document.getElementById('_chong_nang1').style.display = "block";

			document.images['icon_rua_mat1'].src = "icon/down.png";

			document.getElementById('_rua_mat11').style.display = "block";
			document.getElementById('_rua_mat12').style.display = "block";
			document.getElementById('_rua_mat13').style.display = "block";
			document.getElementById('_rua_mat14').style.display = "block";
			document.getElementById('_rua_mat15').style.display = "block";
			duyetmang("", "", "Tẩy da chết");
			break;
		}
		case "Sữa rửa mặt":{
			an_danh_muc_sanpham();
			document.images['icon_duong_da1'].src = "icon/down.png";
			document.getElementById('_rua_mat1').style.display = "block";
			document.getElementById('_mat_na1').style.display = "block";
			document.getElementById('_duong_am1').style.display = "block";
			document.getElementById('_tri_lieu1').style.display = "block";
			document.getElementById('_chong_nang1').style.display = "block";

			document.images['icon_rua_mat1'].src = "icon/down.png";

			document.getElementById('_rua_mat11').style.display = "block";
			document.getElementById('_rua_mat12').style.display = "block";
			document.getElementById('_rua_mat13').style.display = "block";
			document.getElementById('_rua_mat14').style.display = "block";
			document.getElementById('_rua_mat15').style.display = "block";
			duyetmang("", "", "Sữa rửa mặt");
			break;
		}
		case "Dụng cụ rửa mặt":{
			an_danh_muc_sanpham();
			document.images['icon_duong_da1'].src = "icon/down.png";
			document.getElementById('_rua_mat1').style.display = "block";
			document.getElementById('_mat_na1').style.display = "block";
			document.getElementById('_duong_am1').style.display = "block";
			document.getElementById('_tri_lieu1').style.display = "block";
			document.getElementById('_chong_nang1').style.display = "block";

			document.images['icon_rua_mat1'].src = "icon/down.png";

			document.getElementById('_rua_mat11').style.display = "block";
			document.getElementById('_rua_mat12').style.display = "block";
			document.getElementById('_rua_mat13').style.display = "block";
			document.getElementById('_rua_mat14').style.display = "block";
			document.getElementById('_rua_mat15').style.display = "block";
			duyetmang("", "", "Dụng cụ rửa mặt");
			break;
		}
		case "Nước hoa hồng":{
			an_danh_muc_sanpham();
			document.images['icon_duong_da1'].src = "icon/down.png";
			document.getElementById('_rua_mat1').style.display = "block";
			document.getElementById('_mat_na1').style.display = "block";
			document.getElementById('_duong_am1').style.display = "block";
			document.getElementById('_tri_lieu1').style.display = "block";
			document.getElementById('_chong_nang1').style.display = "block";

			document.images['icon_rua_mat1'].src = "icon/down.png";

			document.getElementById('_rua_mat11').style.display = "block";
			document.getElementById('_rua_mat12').style.display = "block";
			document.getElementById('_rua_mat13').style.display = "block";
			document.getElementById('_rua_mat14').style.display = "block";
			document.getElementById('_rua_mat15').style.display = "block";
			duyetmang("", "", "Nước hoa hồng");
			break;
		}
		case "Mặt nạ":{
			_mat_na1();
			break;
		}
		case "Mặt Nạ Giấy":{
			an_danh_muc_sanpham();
			document.images['icon_duong_da1'].src = "icon/down.png";
			document.getElementById('_rua_mat1').style.display = "block";
			document.getElementById('_mat_na1').style.display = "block";
			document.getElementById('_duong_am1').style.display = "block";
			document.getElementById('_tri_lieu1').style.display = "block";
			document.getElementById('_chong_nang1').style.display = "block";

			document.images['icon_mat_na1'].src = "icon/down.png";

			document.getElementById('_mat_na11').style.display = "block";
			document.getElementById('_mat_na12').style.display = "block";
			duyetmang("", "", "Mặt Nạ Giấy");
			break;
		}
		case "Mặt nạ":{
			an_danh_muc_sanpham();
			document.images['icon_duong_da1'].src = "icon/down.png";
			document.getElementById('_rua_mat1').style.display = "block";
			document.getElementById('_mat_na1').style.display = "block";
			document.getElementById('_duong_am1').style.display = "block";
			document.getElementById('_tri_lieu1').style.display = "block";
			document.getElementById('_chong_nang1').style.display = "block";

			document.images['icon_mat_na1'].src = "icon/down.png";

			document.getElementById('_mat_na11').style.display = "block";
			document.getElementById('_mat_na12').style.display = "block";
			duyetmang("", "", "Mặt nạ");
			break;
		}
		case "Dưỡng ẩm":{
			_duong_am1(); 
			break;
		}
		case "Kem dưỡng":{
			an_danh_muc_sanpham();
			document.images['icon_duong_da1'].src = "icon/down.png";
			document.getElementById('_rua_mat1').style.display = "block";
			document.getElementById('_mat_na1').style.display = "block";
			document.getElementById('_duong_am1').style.display = "block";
			document.getElementById('_tri_lieu1').style.display = "block";
			document.getElementById('_chong_nang1').style.display = "block";

			document.images['icon_duong_am1'].src = "icon/down.png";

			document.getElementById('_duong_am11').style.display = "block";
			document.getElementById('_duong_am12').style.display = "block";
			document.getElementById('_duong_am13').style.display = "block";
			document.getElementById('_duong_am14').style.display = "block";
			document.getElementById('_duong_am15').style.display = "block";
			document.getElementById('_duong_am16').style.display = "block";
			duyetmang("", "", "Kem dưỡng"); 
			break;
		}
		case "Sữa dưỡng":{
			an_danh_muc_sanpham();
			document.images['icon_duong_da1'].src = "icon/down.png";
			document.getElementById('_rua_mat1').style.display = "block";
			document.getElementById('_mat_na1').style.display = "block";
			document.getElementById('_duong_am1').style.display = "block";
			document.getElementById('_tri_lieu1').style.display = "block";
			document.getElementById('_chong_nang1').style.display = "block";

			document.images['icon_duong_am1'].src = "icon/down.png";

			document.getElementById('_duong_am11').style.display = "block";
			document.getElementById('_duong_am12').style.display = "block";
			document.getElementById('_duong_am13').style.display = "block";
			document.getElementById('_duong_am14').style.display = "block";
			document.getElementById('_duong_am15').style.display = "block";
			document.getElementById('_duong_am16').style.display = "block";
			duyetmang("", "", "Sữa dưỡng");
			break;
		}
		case "Dầu dưỡng":{
			an_danh_muc_sanpham();
			document.images['icon_duong_da1'].src = "icon/down.png";
			document.getElementById('_rua_mat1').style.display = "block";
			document.getElementById('_mat_na1').style.display = "block";
			document.getElementById('_duong_am1').style.display = "block";
			document.getElementById('_tri_lieu1').style.display = "block";
			document.getElementById('_chong_nang1').style.display = "block";

			document.images['icon_duong_am1'].src = "icon/down.png";

			document.getElementById('_duong_am11').style.display = "block";
			document.getElementById('_duong_am12').style.display = "block";
			document.getElementById('_duong_am13').style.display = "block";
			document.getElementById('_duong_am14').style.display = "block";
			document.getElementById('_duong_am15').style.display = "block";
			document.getElementById('_duong_am16').style.display = "block";
			duyetmang("", "", "Dầu dưỡng");
			break;
		}
		case "Dưỡng da vùng mắt":{
			an_danh_muc_sanpham();
			document.images['icon_duong_da1'].src = "icon/down.png";
			document.getElementById('_rua_mat1').style.display = "block";
			document.getElementById('_mat_na1').style.display = "block";
			document.getElementById('_duong_am1').style.display = "block";
			document.getElementById('_tri_lieu1').style.display = "block";
			document.getElementById('_chong_nang1').style.display = "block";

			document.images['icon_duong_am1'].src = "icon/down.png";

			document.getElementById('_duong_am11').style.display = "block";
			document.getElementById('_duong_am12').style.display = "block";
			document.getElementById('_duong_am13').style.display = "block";
			document.getElementById('_duong_am14').style.display = "block";
			document.getElementById('_duong_am15').style.display = "block";
			document.getElementById('_duong_am16').style.display = "block";
			duyetmang("", "", "Dưỡng da vùng mắt");
			break;
		}
		case "Dưỡng da vùng cổ":{
			an_danh_muc_sanpham();
			document.images['icon_duong_da1'].src = "icon/down.png";
			document.getElementById('_rua_mat1').style.display = "block";
			document.getElementById('_mat_na1').style.display = "block";
			document.getElementById('_duong_am1').style.display = "block";
			document.getElementById('_tri_lieu1').style.display = "block";
			document.getElementById('_chong_nang1').style.display = "block";

			document.images['icon_duong_am1'].src = "icon/down.png";

			document.getElementById('_duong_am11').style.display = "block";
			document.getElementById('_duong_am12').style.display = "block";
			document.getElementById('_duong_am13').style.display = "block";
			document.getElementById('_duong_am14').style.display = "block";
			document.getElementById('_duong_am15').style.display = "block";
			document.getElementById('_duong_am16').style.display = "block";
			duyetmang("", "", "Dưỡng da vùng cổ");
			break;
		}
		case "Xịt khoáng":{
			an_danh_muc_sanpham();
			document.images['icon_duong_da1'].src = "icon/down.png";
			document.getElementById('_rua_mat1').style.display = "block";
			document.getElementById('_mat_na1').style.display = "block";
			document.getElementById('_duong_am1').style.display = "block";
			document.getElementById('_tri_lieu1').style.display = "block";
			document.getElementById('_chong_nang1').style.display = "block";

			document.images['icon_duong_am1'].src = "icon/down.png";

			document.getElementById('_duong_am11').style.display = "block";
			document.getElementById('_duong_am12').style.display = "block";
			document.getElementById('_duong_am13').style.display = "block";
			document.getElementById('_duong_am14').style.display = "block";
			document.getElementById('_duong_am15').style.display = "block";
			document.getElementById('_duong_am16').style.display = "block";
			duyetmang("", "", "Xịt khoáng"); 
			break;
		}
		case "Trị liệu":{
			_tri_lieu1();
			break;
		}
		case "Trị mụn":{
			an_danh_muc_sanpham();
			document.images['icon_duong_da1'].src = "icon/down.png";
			document.getElementById('_rua_mat1').style.display = "block";
			document.getElementById('_mat_na1').style.display = "block";
			document.getElementById('_duong_am1').style.display = "block";
			document.getElementById('_tri_lieu1').style.display = "block";
			document.getElementById('_chong_nang1').style.display = "block";

			document.images['icon_tri_lieu1'].src = "icon/down.png";
			document.getElementById('_tri_lieu11').style.display = "block";
			document.getElementById('_tri_lieu12').style.display = "block";
			document.getElementById('_tri_lieu13').style.display = "block";
			duyetmang("", "", "Trị mụn");
			break;
		}
		case "Kem lột":{
			an_danh_muc_sanpham();
			document.images['icon_duong_da1'].src = "icon/down.png";
			document.getElementById('_rua_mat1').style.display = "block";
			document.getElementById('_mat_na1').style.display = "block";
			document.getElementById('_duong_am1').style.display = "block";
			document.getElementById('_tri_lieu1').style.display = "block";
			document.getElementById('_chong_nang1').style.display = "block";

			document.images['icon_tri_lieu1'].src = "icon/down.png";
			document.getElementById('_tri_lieu11').style.display = "block";
			document.getElementById('_tri_lieu12').style.display = "block";
			document.getElementById('_tri_lieu13').style.display = "block";
			duyetmang("", "", "Kem lột"); 
			break;
		}
		case "Dưỡng mắt":{
			an_danh_muc_sanpham();
			document.images['icon_duong_da1'].src = "icon/down.png";
			document.getElementById('_rua_mat1').style.display = "block";
			document.getElementById('_mat_na1').style.display = "block";
			document.getElementById('_duong_am1').style.display = "block";
			document.getElementById('_tri_lieu1').style.display = "block";
			document.getElementById('_chong_nang1').style.display = "block";

			document.images['icon_tri_lieu1'].src = "icon/down.png";
			document.getElementById('_tri_lieu11').style.display = "block";
			document.getElementById('_tri_lieu12').style.display = "block";
			document.getElementById('_tri_lieu13').style.display = "block";
			duyetmang("", "", "Dưỡng mắt");
			break;
		}
		case "Chống nắng":{
			_chong_nang1();
			break;
		}
		case "Kem chống nắng cho mặt":{
			an_danh_muc_sanpham();
			document.images['icon_duong_da1'].src = "icon/down.png";
			document.getElementById('_rua_mat1').style.display = "block";
			document.getElementById('_mat_na1').style.display = "block";
			document.getElementById('_duong_am1').style.display = "block";
			document.getElementById('_tri_lieu1').style.display = "block";
			document.getElementById('_chong_nang1').style.display = "block";

			document.images['icon_chong_nang1'].src = "icon/down.png";
			document.getElementById('_chong_nang11').style.display = "block";
			document.getElementById('_chong_nang12').style.display = "block";
			duyetmang("", "", "Kem chống nắng cho mặt");
			break;
		}
		case "Kem chống nắng cho body":{
			an_danh_muc_sanpham();
			document.images['icon_duong_da1'].src = "icon/down.png";
			document.getElementById('_rua_mat1').style.display = "block";
			document.getElementById('_mat_na1').style.display = "block";
			document.getElementById('_duong_am1').style.display = "block";
			document.getElementById('_tri_lieu1').style.display = "block";
			document.getElementById('_chong_nang1').style.display = "block";

			document.images['icon_chong_nang1'].src = "icon/down.png";
			document.getElementById('_chong_nang11').style.display = "block";
			document.getElementById('_chong_nang12').style.display = "block";
			duyetmang("", "", "Kem chống nắng cho body");
			break;
		}
		case "Dưỡng thể":{
			_duong_the1();
			break;
		}
		case "Kem dưỡng da & dầu":{
			an_danh_muc_sanpham();
			document.images['icon_co_the1'].src = "icon/down.png";
			document.getElementById('_duong_the1').style.display = "block";
			document.getElementById('_sua_tam1').style.display = "block";

			document.images['icon_duong_the1'].src = "icon/down.png";
			document.getElementById('_duong_the11').style.display = "block";
			document.getElementById('_duong_the12').style.display = "block";
			duyetmang("", "", "Kem dưỡng da & dầu");
			break;
		}
		case "Dưỡng chân tay":{
			an_danh_muc_sanpham();
			document.images['icon_co_the1'].src = "icon/down.png";
			document.getElementById('_duong_the1').style.display = "block";
			document.getElementById('_sua_tam1').style.display = "block";

			document.images['icon_duong_the1'].src = "icon/down.png";
			document.getElementById('_duong_the11').style.display = "block";
			document.getElementById('_duong_the12').style.display = "block";
			duyetmang("", "", "Dưỡng chân tay"); 
			break;
		}
		case "Sữa tắm":{
			_sua_tam1();
			break;
		}
		case "Tẩy da chết":{
			an_danh_muc_sanpham();
			document.images['icon_co_the1'].src = "icon/down.png";
			document.getElementById('_duong_the1').style.display = "block";
			document.getElementById('_sua_tam1').style.display = "block";

			document.images['icon_sua_tam1'].src = "icon/down.png";
			document.getElementById('_sua_tam11').style.display = "block";
			document.getElementById('_sua_tam12').style.display = "block";
			duyetmang("", "", "Tẩy da chết");
			break;
		}
		case "Sữa tắm":{
			an_danh_muc_sanpham();
			document.images['icon_co_the1'].src = "icon/down.png";
			document.getElementById('_duong_the1').style.display = "block";
			document.getElementById('_sua_tam1').style.display = "block";

			document.images['icon_sua_tam1'].src = "icon/down.png";
			document.getElementById('_sua_tam11').style.display = "block";
			document.getElementById('_sua_tam12').style.display = "block";
			duyetmang("", "", "Sữa tắm");
			break;
		}
		case "Dầu gội":{
			an_danh_muc_sanpham();
			document.images['icon_toc1'].src = "icon/down.png";
			document.getElementById('_toc11').style.display = "block";
			document.getElementById('_toc12').style.display = "block";
			document.getElementById('_toc13').style.display = "block";
			duyetmang("", "Dầu gội","", "");
			break;
		}
		case "Dầu xả":{
			an_danh_muc_sanpham();
			document.images['icon_toc1'].src = "icon/down.png";
			document.getElementById('_toc11').style.display = "block";
			document.getElementById('_toc12').style.display = "block";
			document.getElementById('_toc13').style.display = "block";
			duyetmang("", "Dầu xả", "");
			break;
		}
		case "Dưỡng tóc":{
			an_danh_muc_sanpham();
			document.images['icon_toc1'].src = "icon/down.png";
			document.getElementById('_toc11').style.display = "block";
			document.getElementById('_toc12').style.display = "block";
			document.getElementById('_toc13').style.display = "block";
			duyetmang("", "Dưỡng tóc", "");
			break;
		}
		case "Cọ":{
			an_danh_muc_sanpham();
			document.images['icon_co1'].src = "icon/down.png";
			document.getElementById('_co11').style.display = "block";
			document.getElementById('_co12').style.display = "block";
			duyetmang("", "Cọ","", "");
			break;
		}
		case "Bọt biển":{
			an_danh_muc_sanpham();
			document.images['icon_co1'].src = "icon/down.png";
			document.getElementById('_co11').style.display = "block";
			document.getElementById('_co12').style.display = "block";
			duyetmang("", "Bọt biển", "");
			break;
		}
	}
}


//==============================================================Kết thúc phần chung===========================================
//============================================================================================================================

//=============================================sản phẩm============================================================
function sanpham(id, img, type, type1, type2, name, hieu, price, soluong, info, use){
	this.id = id;
	this.img = img;
	this.type = type;
	this.type1 = type1;
	this.type2 = type2;
	this.name = name;
	this.hieu = hieu;
	this.price = price;
	this.soluong = soluong;
	this.info = info;
	this.use = use;
}

function mangsanpham(){
	var a = new Array();
	a[0] = new sanpham(0, "image/sp0.jpg", "Trang điểm", "Mắt", "Lót mắt", "Lustre Eyeshadow Base", "LUSTRE MAKEUP", 200000, 30, "Sản phẩm kem lót mắt Lustre có kết cấu mỏng, nhẹ, dễ dàng tán đều trên mí mắt. Lustre Eyeshadow Base giúp giữ màu phấn mắt lên màu chuẩn và lâu trôi, đồng thời bảo vệ mắt khỏi hiện tượng bị kích ứng", "Bôi một lớp mỏng sản phẩm lên vùng mí mắt bằng ngón tay hoặc cọ có đầu mỏng như Lustre Pro Makeup Brush E103 Eyeshadow Brush.Tán đều sản phẩm, đợi đến khi khô mới sử dụng phấn mắt");
	a[1] = new sanpham(1, "image/sp1.jpg", "Trang điểm", "Mắt", "Lót mắt", "GOLDEN ROSE EYESHADOW PRIMER", "Golden Rose", 167000, 30, "Golden Rose là một nhãn hiệu của tập đoàn Erkul Cosmetics đến từ Thổ Nhĩ Kỳ. Đây là một trong những tập đoàn mỹ phẩm lớn tại Châu Âu và nổi tiếng trên thế giới, chuyên cung cấp các loại mỹ phẩm chăm sóc mặt, mắt, môi, nails, tóc…. Erkul Cosmetics cũng nằm trong số 5 nhà sản xuất các sản phẩm sơn móng tay lớn nhất thế giới và đã vươn tầm thành công ra khỏi biên giới khi xuất khẩu sản phẩm này đến hơn 90 quốc giá trong 5 chậu lục bao gồm: Châu Mỹ, Bắc Phi, Trung Đông, Cộng Đồng Các Quốc Gia Độc Lập, Balkans và Châu Âu.", " Sử dụng trước khi make-up mắt, tán trực tiếp lên da - Sau khi được thoa lên mắt, kem primer sẽ mau chóng khô lại tạo finish trong mờ, vì vậy bạn đừng lo ngại mí mắt sẽ trở nên trơn bóng");
	a[2] = new sanpham(2, "image/sp2.jpg", "Trang điểm", "Mắt", "Lót mắt", "Smashbox Cosmetics", "Smashbox", 255000, 30, "Smashbox Cosmetics là kem lót dành cho mắt thách thức mọi phong cách trang điểm mắt từ nhẹ nhàng, đơn giản đến ombre, màu khói cầu kỳ quyến rũ, sản phẩm vẫn giữ nguyên màu mắt đẹp của bạn suốt ngày dài. Kết cấu dạng kem mịn, có độ bám cao và dễ tán đều trên da.", "Sau khi dưỡng ẩm, lấy một lượng kem vừa đủ tán đều khắp bầu mắt trước khi sử dụng phấn mắt.");
	a[3] = new sanpham(3, "image/sp3.jpg", "Trang điểm", "Mắt", "Phấn mắt", "Nars Smudge Proof Eyeshadow", "Medium", 510000, 30, "Thiết kế vỏ hộp là tông đen và sản phẩm có thiết kế cũng khá đơn giản với tông trắng đen chủ đạo nhưng rất dễ nhìn ra đặc trưng nhờ sự nổi bật của Logo NARS.Có nhiều tone màu lựa chọn chứa ít nhũ nhẹ. Kết cấu của kem lót khá mịn, như kiểu kem dưỡng.", "Dùng cọ lấy lượng phấn mắt vừa đủ và đánh lên bầu mắt");
	a[4] = new sanpham(4, "image/sp4.jpg", "Trang điểm", "Mắt", "Phấn mắt", "BH Cosmetics Solar Flare", "BH Cosmetics", 688000, 30, "Bảng phấn mắt BH Cosmetics Solar Flare là một trong ba bảng màu mắt chủ đề Vũ trụ của BH Cosmetics. Bộ sưu tập các gam màu vũ trụ lung linh, ấm áp giúp cho đôi mắt của bạn thêm tỏa sáng rực rỡ. Bảng màu nhiều sắc thái từ màu nude lì đến những gam màu nhũ nóng bỏng tạo chiều sâu cho đôi mắt, thích hợp cho ngày đi làm nhẹ nhàng và những buổi party thật chất.", "Dùng cọ lấy lượng phấn mắt vừa đủ và đánh lên bầu mắt. Có thể làm ẩm cọ trước khi lấy phấn để màu lên đậm hơn.Có thể pha trộn màu để tạo nên màu mắt thật khác biệt.");
	a[5] = new sanpham(5, "image/sp5.jpg", "Trang điểm", "Mắt", "Phấn mắt", "BH Cosmetics Mini Zodiac", "BH Cosmetics", 437000, 30, "BH Cosmetics Mini Zodiac Aquarius là bảng màu mắt lấy cảm hứng từ cung Bào Bình trong 12 cung hoàng đạo. 9 tông màu khác nhau với một loạt các sắc màu như nâu, nâu đậm, xanh...đến tông màu trắng ánh bạc giúp khơi gợi nên sự quyến rũ độc đáo của riêng bạn.", "Dùng cọ lấy lượng phấn mắt vừa đủ và đánh lên bầu mắt.Có thể làm ẩm cọ trước khi lấy phấn để màu lên đậm hơn.Có thể pha trộn màu để tạo nên màu mắt thật khác biệt.");
	a[6] = new sanpham(6, "image/sp6.jpg", "Trang điểm", "Mắt", "Phấn mắt", "BH Cosmetics Blushing In Bali", "BH Cosmetics", 669000, 30, "BH Cosmetics Blushing in Bali là bảng phấn má hồng và tạo khối lấy cảm hứng từ những hòn đảo đầy nắng của Bali. 6 màu phấn hồng và tạo khối của BH Cosmetic cho bạn tất cả những gam màu bạn tìm kiếm. Gồm 2 ô phấn má hồng tươi tắn dễ phối màu và 4 ô tạo khối & bắt sáng giúp tạo nét hài hoà, thanh thoát và thon gọn cho gương mặt.","Chỉ lấy một lượng vừa đủ bám trên bề mặt lông của cọ dùng để đánh má hồng.Bắt đầu bằng cách đặt phấn má lên điểm cao nhất của gò má. Sau đó mỉm cười và quét cọ từ đỉnh ngoài của gò má (phía gần mũi) nhẹ nhàng kéo hướng về phía thái dương. Dùng cọ tán đều phấn má hồng về hướng chân tóc.");
	a[7] = new sanpham(7, "image/sp7.jpg", "Trang điểm", "Mắt", "Phấn mắt", "BH Cosmetics Zodiac Love Signs", "BH Cosmetics", 714000, 30, "Bảng phấn mắt BH Cosmetics Zodiac Love Signs với 25 màu bao gồm 12 màu phấn mắt lì mịn, 12 màu phấn nhũ và 1 màu highlight sáng sẽ giúp đôi mắt bạn trông rực rỡ và sống động hơn bao giờ hết. 24 màu mắt trải dài từ các gam màu nóng đến lạnh và các màu thuộc dải ngân hà như màu vàng rựa lửa của mặt trời, màu lục và tím...", "Dùng cọ lấy lượng phấn mắt vừa đủ và đánh lên bầu mắt.Có thể làm ẩm cọ trước khi lấy phấn để màu lên đậm hơn.Có thể pha trộn màu để tạo nên màu mắt thật khác biệt.")
	a[8] = new sanpham(8, "image/sp8.jpg", "Trang điểm", "Mắt", "Phấn mắt", "BH Cosmetics Foil Eyes", "BH Cosmetics", 386000, 30, "Bảng màu mắt BH Cosmetics Foil Eyes gồm 28 gam màu metallic (kim loại); đây là một bộ sưu tập của sự hoàn hảo; đa chiều và đa sắc tố kim loại. Nó là sự kết hợp của tone neutrals và các loại đá ngọc trai, đá thạch anh lấp lánh đến màu ánh khói đem đến cho người dùng sự choáng ngợp khi trải nghiệm với các tông màu đầy sống động.", "Dùng cọ lấy lượng phấn mắt vừa đủ và đánh lên bầu mắt.Có thể làm ẩm cọ trước khi lấy phấn để màu lên đậm hơn.Có thể pha trộn màu để tạo nên màu mắt thật khác biệt.")
	a[9] = new sanpham(9, "image/sp9.jpg", "Trang điểm", "Mắt", "Phấn mắt", "M.A.C EYE SHADOW X 15", "M.A.C Cosmetics", 3088000, 30, "M.A.C EYE SHADOW X 15 là bảng màu mắt gồm các tông màu bán chạy nhất của MAC gồm 15 ô màu full size với chất phấn vô cùng mịn mượt cho khả năng lên màu chuẩn, cực dễ tán trên da và có độ bám màu lên đến 12 tiếng.Thiết kế sang trọng, các tone màu dễ sử dụng cho các phong cách trang điểm từ đơn giản hằng ngày đến các bữa tiệc cầu kì, vì thế sản phẩm này là một sản phẩm cần có đối với các cô nàng là tín đồ makeup.", "Nên dùng kem lót mắt trước khi sử dụng phấn mắt.Tán đều nhẹ nhàng, khéo léo bằng cọ trang điểm mắt.Sử dụng các tông màu từ sáng đến đậm để tạo khối và tạo điểm nổi bật.Bảo quản nơi khô ráo, thoáng mát. Tránh ánh nắng trực tiếp và nhiệt độ cao");
	a[10] = new sanpham(10, "image/sp10.jpg", "Trang điểm", "Mắt", "Phấn mắt", "MISSHA Signature Velvet Art", "Missha", 544000, 30, "Phấn mắt MISSHA Signature Velvet Art với tông màu cổ điển, là sự lựa chọn tuyệt vời cho các cô nàng theo phong cách retro.Tính năng làm đẹp của loại phẩn này rất hiệu quả. Sử dụng sản phẩm để trang điểm cho đôi mắt sẽ đem lại cho bạn cảm giác mềm mại, mịn màng khi sử dụng.Màu phấn có độ bền cao, bám rất lâu và khó bị trôi. Màu phần còn chứa bột ngọc trai giúp cho đôi mắt lấp lánh tự nhiên ở mọi góc nhìn.Phấn mắt được sắp xếp một cách hợp lí, hài hòa về độ bóng và màu sắc (highlight, màu nhạt, màu đậm, viền mắt) giúp cho thao tác trang điểm mắt trở nên thuận tiện và dễ dàng.", "Màu phấn nền được dùng đầu tiên, các bạn phủ đều phấn mắt nền lên rộng gấp 2 lần mí mắt.Màu phấn chính (nhấn) được dùng tiếp theo, loại phấn này chỉ nên vẽ khoảng môt nửa mí mắt để tạo điểm nhấn chính cho đôi mắt. Màu phấn viền thì chỉ để vẽ viền mắt theo một đường thẳng từ trong ra ngoài đuôi mắt.Màu phấn highlight sẽ được dùng cuối cùng, phủ lên toàn bộ lớp phấn trước để đôi mắt thêm long lanh.");
	a[11] = new sanpham(11, "image/sp11.jpg", "Trang điểm", "Mắt", "Chuốt mi", "LUSTRE PRO Volume Waterproof", "LUSTRE MAKEUP", 204000, 30, "LUSTRE PRO Volume Waterproof sử dụng công nghệ đột phá Micro Fiber, giúp bao phủ từng sợi mi. Chỉ với một lần chuốt nhẹ, MLUSTRE PRO Volume Waterproof sẽ khiến hàng mi dày và cong vút tự nhiên. LUSTRE PRO Volume Waterproof không gây cảm giác nặng trĩu và cộm mắt.", "Lăn chai giữa 2 lòng bàn tay để làm ấm Mascara (giúp Mascara ít bị vón cục khi sử dụng).Lấy cọ ra khỏi chai và lau bớt phần Mascara dư bằng khăn giấy.Chải cọ theo đường Ziczac từ chân mi đến ngọn mi.Sau khi chuốt qua một lượt, đợi khoảng 10 giây cho khô lớp đầu tiên, chuốt tiếp lớp thứ hai, đợi thêm 10 giây nữa rồi chuốt tiếp lần thứ ba");
	a[12] = new sanpham(12, "image/sp12.jpg", "Trang điểm", "Mắt", "Chuốt mi", "Innisfree Skinny Longlongcar", "Innisfree", 198000, 30, "Innisfree Skinny Longlongcar với đầu chải mi được thiết kế đặc biệt hình tam giác cực nhỏ chỉ có 2.5mm, giúp chổi chạm đến từng sợi mi nhỏ và ngắn nhất, chuốt tận được sâu trong chân mi. Nhờ thiết kế độc đáo này mà khi chuốt mi ít bị vón và dính các sợi mi lại với nhau, giúp kéo dài mi hơn, tạo cho bạn cảm giác như mới được nối mi. Đầu chải mi nhỏ dễ điều khiển cực kì phù hợp để chuốt hàng mi dưới – vốn rất ngắn và dễ bị lem nếu thao tác bằng các đầu chải mi to thông thường khác", "Chải từ phía gốc mi theo hướng đi lên theo đường ziczac.Dựng đứng đầu chải và chải thêm phần mi ngắn ở đầu và đuôi mắt.Chải thêm phần lông mi dưới giúp mắt trông to và quyến rũ hơn");
	a[13] = new sanpham(13, "image/sp13.jpg", "Trang điểm", "Mắt", "Chuốt mi", "Sisley So Intense Mascara Deep", "Sisley Paris", 1359000, 30, "Sisley So Intense Mascara Deep mang đến cho bạn một hàng mi dày và dài trông thấy với hiệu quả ngay tức thì. Công thức độc đáo được bổ sung các peptide giàu vitamin giúp mi dày, dài và chắc khỏe hơn qua từng ngày. Các sắc tố màu siêu tinh khiết cung cấp một màu sắc đen tuyền và độ bền màu lâu cho hàng mi. Khả năng làm tơi mi nhanh chóng cho từng sợi mi được phủ đều mascara.", "Nên bâm mi trước để có hàng mi cong đẹp tự nhiên. Ấn nhẹ đầu chải vào gốc lông mi và nhẹ nhàng chuốt về phía ngọn, lặp lại động tác cho đến khi có được màu mascara bạn muốn.");
	a[14] = new sanpham(14, "image/sp14.jpg", "Trang điểm", "Mắt", "Chuốt mi", "Arcancil Paris Lash Hysteria", "ARCANCIL PARIS", 395000, 30, "Arcancil Paris Lash Hysteria là sản phẩm trang điểm được ưa chuộng của Arcancil Paris với đầu cọ 360 độ cùng với nhiều dưỡng chất tốt giúp cho mỗi sợi lông mi đều được bao phủ bởi lớp mascara mà không bị vón cục, khô mi khi trang điểm trong thời gian dài. Bên cạnh đó còn có khả năng chống thấm nước, chống trôi tốt và hiệu quả làm dày, dài, cong mi rất tự nhiên.", "Chải Mascara bằng cách xoay cọ từ gốc đến đầu lông mi, bắt đầu từ góc bên trong đến góc ngoài của mắt. Áp dụng nhiều lớp đến khối lượng mong muốn: một lớp kem duy nhất cho một kết quả tự nhiên, nhiều lớp kem cho khối lượng tối đa và hiệu ứng lông mi dày cực kỳ quyến rũ.");
	a[15] = new sanpham(15, "image/sp15.jpg", "Trang điểm", "Mắt", "Chuốt mi", "MISSHA THE STYLE 4D MASCARA", "Missha", 153000, 30, "Thành phần chủ yếu là Botanical wax giúp bạn dễ dàng có hàng mi cong, đầy quyến rũ mà không hề có cảm giác cộm, bết dính hay vón cục. Đồng thời, cung cấp các dưỡng chất giúp bảo vệ làn mi luôn khỏe mạnh.Cây chải mi được thiết kế rất đặc biệt và tinh tế với các sợi cọ đều giúp dễ dàng trong việc tạo ra một làn mi mỏng, đều và đầy ấn tượng. Ngoài ra, thiết kế nhỏ gọn kết hợp với màu đen chủ đạo mang đến cho bạn sự sang trọng và vô cùng tiện dụng khi sử dụng và mang theo sản phẩm.Có khả năng chống trôi rất tốt, có thể giữ cho làn mi luôn cong, đẹp và đầy quyến rũ trong vòng từ 8-9 giờ ngay cả khi gặp trời mưa, mồ hôi hoặc khói bụi.", "Lăn Chải mi The Style 4D Missha giữa 2 lòng bàn tay để làm ấm mascara để mascara ít bị vón cục khi sử dụng.Kẹp mi tạo dáng mi.Dùng mascara lấy đầu chổi, chải nhẹ nhàng lớp thứ nhất để khô.Có thể tiếp tục dùng kẹp mí tạo dáng lần 2, chải mascara lần 2, lặp lại 2-3 lần bạn có bờ mi dày dài như mong muốn.");
	a[16] = new sanpham(16, "image/sp16.jpg", "Trang điểm", "Mắt", "Chuốt mi", "Lustre PRO Eyelash Curler", "LUSTRE MAKEUP", 200000, 30, "Kẹp mi Lustre uốn cong mi mắt mà không làm gãy/rụng mi. Chất liệu thép không gỉ và cao su mềm giúp kẹp mi hoạt động lâu dài và không làm gãy mi.", "Mở kẹp mi, đặt vào mí mắt theo đường cong tự nhiên của mí mắt sao cho lông mi nằm trên phần cao su của kẹp. Bấm nhẹ nhàng từ 2-3 lần. Bỏ kẹp mi, chuốt mascara. Lặp lại cho tới khi mi đạt độ cong mong muốn.");
	a[17] = new sanpham(17, "image/sp17.jpg", "Trang điểm", "Mắt", "Chuốt mi", "Buxom Lash Mascara", "Buxom Cosmetics", 408000, 30, "Công thức giàu vitamin, giúp nuôi dưỡng từng sợi lông mi sâu tới tận gốc và chống vón cục. Thêm một điểm mạnh không thể không nhắc tới nữa là về thiết kế: Phần đầu cọ của Mascara Buxom Lash lõm vào giữa tương tự như chiếc đồng hồ cát giúp cho bạn có thể dễ dàng chuốt và bao phủ từng sợi lông mi. Chất mascara mịn và đậm màu từ chân tới ngọn.", "Dùng đầu cọ chuốt nhẹ chuốt mi Buxom Lash lên hai hàng lông mi ở hai bên mắt. Những sợi lông mi có cấu tạo dày hơn ở phần chân lông và mỏng dần về ngọn. Vì thế bạn có thể dùng đầu cọ để chuốt dày cho phần ngọn này trước. Đợi cho phần mascara đầu tiên khô thì ta tiếp tục dùng cọ chuốt đều lớp tiếp theo. Để đạt được độ dày mong muốn thì các bạn có thể chuốt mascara thành nhiều lớp tùy ý. Bảo quản mascara ở nơi khô ráo, thoáng mát, tránh để nắng mặt trời chiếu trực tiếp vào mascara. Để tránh xa tầm tay trẻ em.");
	a[18] = new sanpham(18, "image/sp18.jpg", "Trang điểm", "Mắt", "Chuốt mi", "Isehan Kiss Me Heroine Long", "Isehan", 396000, 30, "Mascara Isehan Heroine Kiss Me Long có khả năng làm dày và dài mi cho những bạn có lông mi dày nhưng bị thẳng, khó làm cong mi.Luôn nằm trong top đầu các sản phẩm mascara được ưa thích nhất do người tiêu dùng bình chọn tại Nhật Bản. Sản phẩm Mascara Isehan phù hợp với mọi dạng lông mi, giúp bạn tạo một hàng mi dài gấp 1,5 lần hàng mi vốn có. Khả năng chống nước và thành phần chiết xuất từ hoa cúc tác dụng giữ ẩm và dầu hoa trà làm mềm giúp bờ mi trông sẽ không bị khô hay làm cứng mi như các sản phẩm mascara thông thường khác.", "Chải từ phía gốc mi theo hướng đi lên theo đường ziczac.Dựng đứng đầu chải và chải thêm phần mi ngắn ở đầu và đuôi mắt.Chải thêm phần lông mi dưới giúp mắt trông to và quyến rũ hơn.Cuối ngày, tẩy trang với Speedy mascara remove, dùng bông tẩy trang thấm sản phẩm sau đó nhẹ nhàng tẩy đi vùng mi mắt.");
	a[19] = new sanpham(19, "image/sp19.jpg", "Trang điểm", "Mắt", "Kẻ mắt", "M.A.C Brushstroke Liner", "M.A.C Cosmetics", 669000, 30, "M.A.C Brushstroke Liner - Brushblack là bút kẻ mắt màu đen tuyền với đầu nhọn cực mảnh cùng khả năng giữ màu siêu đỉnh lên đến 24 giờ. Sản phẩm chứa công thức chống trôi cho bạn đôi mắt đẹp suốt ngày dài. Mặc dù chứa công thức chống trôi nhưng bạn vẫn có thể tẩy rửa dễ dàng với nước ấm.Sản phẩm đã được kiềm nghiệm nhãn khoa an toàn cho mắt, phù hợp cả với những coi nàng thường xuyên sử dụng kính áp tròng.", "Bạn kẻ một đường từ giữa mắt đến đuôi mắt.Kẻ thêm một đường từ khóe mắt nối với đường ban đầu. Bước này giúp mắt bạn to tròn hơn.Kẻ vành trong của mắt. Bước này sẽ tạo hiệu ứng giúp lông mi dày hơn. Bạn đưa đầu bút xuống phần vành trong của mắt và kẻ một đường chạy từ đầu mi mắt tới đuôi mi mắt. Tuy nhiên với những bạn có cặp mắt hơi nhỏ thì không nên áp dụng bước này vì nó có thể làm cho mắt bạn nhỏ hơn nữa.Kẻ đường cánh. Bước này giúp bạn tạo điểm nhấn ở đuôi mắt. Từ đuôi mắt chúng ta kẻ một đường xéo đi lên. Bạn cũng có thể đi theo đường viền dưới. Mắt bạn sẽ có nét nữ tính, điệu đà và gợi cảm.");
	a[20] = new sanpham(20, "image/sp20.jpg", "Trang điểm", "Mắt", "Kẻ mắt", "Dior Diorshow Pro Liner Bevel", "Dior", 775000, 30, "Kẻ mắt Dior Diorshow Pro Liner Bevel chính là một trong những niềm tự hào của thương hiệu Dior. Ưu điểm dễ nhận thấy nhất là phần đầu bút được thiết kế theo dạng xiên, trên nhọn dưới tù giúp cho người dùng có thể diều chỉnh động tác dễ dàng. Chúng cũng tạo nên những đường kẻ mắt sắc sảo như được vẽ bởi nghệ nhân trang điểm thực thụ. Sở hữu thành phần lành mạnh, không sử dụng paraben gây kích ứng, không có các chất sulfate gây ung thư,…hoàn toàn đảm bảo an toàn. Ngoài ra sản phẩm còn chứa công thức chống thấm nước giúp giữ nguyên đôi mắt đẹp khỏi tình trạng lem nhem gây ra bởi nước, mồ hôi,…", "Sử dụng ngón tay căng nhẹ da phần mi mắt để kẻ dễ dàng hơn.Tay kia cầm bút kẻ một đường sát chân mi và hơi chếch lên ở phần đuôi mắt.Có thể tô thêm cho đến khi đạt được đường nét theo ý thích.Bảo quản sản phẩm ở nơi khô ráo, thoáng mát. Ta nên tránh để ánh nắng trực tiếp chiếu vào sản phẩm. Nắp bút luôn luôn phải đóng chặt.");
	a[21] = new sanpham(21, "image/sp21.jpg", "Trang điểm", "Mắt", "Kẻ mắt", "Sisley Phyto Khol Star Eyeliner 3", "Sisley Paris", 1081000, 30, "Sisley Phyto Khol Star Eyeliner 3 là chì kẻ mắt được đúc độc đáo có thể chứa các tinh thể ngọc trai tối đa, tăng cường độ bắt sáng của sản phẩm, tô điểm cho đôi mắt thêm lung linh huyền bí. Thành phần chứa tỷ lệ cao các loại dầu và sáp cho cảm giác lướt nhẹ trên da, giúp cho việc thao tác trở nên nhanh chóng và dễ dàng.", "Kẻ sát viền mi để có một đôi mắt sắc nét.");
	a[22] = new sanpham(22, "image/sp22.jpg", "Trang điểm", "Mắt", "Kẻ mắt", "Sisley Phyto-Khol Perfect Eyeliner 8", "Sisley Paris", 1081000, 30, "Sisley Phyto Khol Star Eyeliner 8 là chì kẻ mắt được đúc độc đáo có thể chứa các tinh thể ngọc trai tối đa, tăng cường độ bắt sáng của sản phẩm, tô điểm cho đôi mắt thêm lung linh huyền bí. Thành phần chứa tỷ lệ cao các loại dầu và sáp cho cảm giác lướt nhẹ trên da, giúp cho việc thao tác trở nên nhanh chóng và dễ dàng.", "Kẻ sát viền mi để có một đôi mắt sắc nét.");
	a[23] = new sanpham(23, "image/sp23.jpg", "Trang điểm", "Mắt", "Kẻ mắt", "MACQUEEN WATERPROOF PEN EYELINER", "MacQueen", 221000, 30, "Bút Kẻ Mắt MACQUEEN WATERPROOF PEN EYELINER với đầu cọ bút lông dễ điều chỉnh cho các đường kẻ mắt thật mỏng tự nhiên và sắc nét cá tính, đem đến đôi mắt to tròn, sắc nét làm nổi bật khuôn mặt bạn. Sản phẩm không bị trôi khi gặp nước, hoàn hảo cho việc sử dụng ở mọi hoàn cảnh đi làm, đi chơi, đi biển. Công thức độc đáo giúp giữ màu lâu, tạo điểm nhấn cho đôi mắt thêm đẹp quyến rũ, long lanh hơn.", "Dùng bút kẻ, đi nét viền ngoài mắt để tô lên vẻ đẹp của đôi mắt bạn. Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao");
	a[24] = new sanpham(24, "image/sp24.jpg", "Trang điểm", "Mắt", "Kẻ mắt", "ECLIPSE- EYELINER LIGNE DIVINE", "Eclipse Colours", 311000, 30, "Eclipse Colours là hãng mỹ phẩm cao cấp tại Pháp đã cho ra đời nhiều dòng mỹ phẩm trang điểm và các sản phẩm làm đẹp dành cho móng tay, móng chân... giúp tô điểm thêm vẻ đẹp của phái nữ. ECLIPSE - EYELINER LIGNE DIVINE: Bút chì kẻ mắt Eclipse chứa sáp làm mềm da tự nhiên và màu sắc bền rõ nét. Với thiết kế đầu bút nhỏ giúp bạn dễ dàng vẽ những đường kẻ sắc sảo như ý muốn.", "Dùng bút chì kẻ mặt kẻ theo đường viền mắt. Sao cho mỏng dần về phía cuối đuôi mắt để mang lại đôi mắt tinh tế và dịu dàng. Nếu muốn mắt to hơn, hãy dùng chì kẻ mắt kẻ 2/3 mi dưới, nếu viền cả mi trên và mi dưới sẽ làm cho mắt sắc nét hơn. Bảo quản nơi khô ráo thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao.");
	a[25] = new sanpham(25, "image/sp25.jpg", "Trang điểm", "Mắt", "Kẻ mắt", "Lustre Ultimate Eyeliner Professional Line", "LUSTRE MAKEUP", 208000, 30, "Chì kẻ mắt của Lustre với đầu bút sáp mềm, dễ dàng trượt lên da cho đường kẻ mắt rõ nét và tự nhiên, đồng thời có nhiều lựa chọn về màu sắc, cho bạn thoả sức sáng tạo.", "Bạn kẻ một đường từ giữa mắt đến đuôi mắt.Kẻ thêm một đường từ khóe mắt nối với đường ban đầu. Bước này giúp mắt bạn to tròn hơn.Kẻ vành trong của mắt. Bước này sẽ tạo hiệu ứng giúp lông mi dày hơn. Bạn đưa chì xuống phần vành trong của mắt và kẻ một đường chạy từ đầu mi mắt tới đuôi mi mắt. Tuy nhiên với những bạn có cặp mắt hơi nhỏ thì không nên áp dụng bước này vì nó có thể làm cho mắt bạn nhỏ hơn nữa.Kẻ đường cánh. Bước này giúp bạn tạo điểm nhấn ở đuôi mắt. Từ đuôi mắt chúng ta kẻ một đường xéo đi lên. Bạn cũng có thể đi theo đường viền dưới. Mắt bạn sẽ có nét nữ tính, điệu đà và gợi cảm.Kiểu chiếc lá. Từ đuôi cánh kẻ 1 đường nối liền với giữa mắt. Kiểu chiếc lá này rất thông dụng và thích hợp với nhiều loại mắt khác nhau.Đường kẻ đôi. Ban kẻ đường đối xứng với chiếc lá tạo một chút tinh nghịch và sáng tạo cho đôi mắt, đôi mắt trong cũng rất dễ thương. Bước này dành cho bạn nào muốn thể hiện cá tính và tạo sự khác biệt.");
	a[26] = new sanpham(26, "image/sp26.jpg", "Trang điểm", "Mắt", "Kẻ mắt", "Lustre Ultimate Eyeliner Professional Line Mini - Black", "LUSTRE MAKEUP", 160000, 30, "Lustre Ultimate Eyeliner Professional Line Mini - Black - Chì kẻ mắt của Lustre với đầu bút sáp mềm, dễ dàng trượt lên da cho đường kẻ mắt rõ nét và tự nhiên.Với tông màu đen dễ dàng phối hợp cùng các kiểu makeup khác nhau sẽ tạo điểm nhấn cho đôi mắt.Ngoài tinh dầu Jojoba nuôi dưỡng mi, chất chì của Lustre rất mềm và dễ kẻ. Đặc biệt, Lustre có cả đầu chuốt đi kèm rất tiện dụng", "Bạn kẻ một đường từ giữa mắt đến đuôi mắt.Kẻ thêm một đường từ khóe mắt nối với đường ban đầu. Bước này giúp mắt bạn to tròn hơn.Kẻ vành trong của mắt. Bước này sẽ tạo hiệu ứng giúp lông mi dày hơn. Bạn đưa chì xuống phần vành trong của mắt và kẻ một đường chạy từ đầu mi mắt tới đuôi mi mắt. Tuy nhiên với những bạn có cặp mắt hơi nhỏ thì không nên áp dụng bước này vì nó có thể làm cho mắt bạn nhỏ hơn nữa.Kẻ đường cánh. Bước này giúp bạn tạo điểm nhấn ở đuôi mắt. Từ đuôi mắt chúng ta kẻ một đường xéo đi lên. Bạn cũng có thể đi theo đường viền dưới. Mắt bạn sẽ có nét nữ tính, điệu đà và gợi cảm.");
	a[27] = new sanpham(27, "image/sp27.jpg", "Trang điểm", "Mắt", "Chân mày", "M.A.C Great Brows Brow Kit - TAUPE", "M.A.C Cosmetics", 1152000, 30, "Bột sẽ bám phủ vào lông mày cho đôi lông mày có màu sắc đẹp tự nhiên. Đường nét mềm mại, rõ ràng thay đổi toàn diện khuôn mặt.Sản phẩm có thành phần lành tính, an toàn cho da. Hạn chế gây kích ứng, bảo vệ và chăm sóc hàng chân mày hoàn hảo, thích hợp với mọi loại da.Hạn chế được tình trạng tiết bã nhờn và mồ hôi trên da. Màu sắc của phấn kẻ chân mày MAC Eyebrows Brow của rất phù hợp đối với người Châu Á. Đem đến cho bạn một diện mạo khác hẳn.Bột cũng rất hữu dụng cho các trường hợp đã trót lỡ phun, xăm chân mày. Nhưng làm đôi mắt quá sắc nét, thiếu tự nhiên hoặc màu mực đã bắt đầu xuống màu.", "Dùng cọ kèm theo chải đều chân mày rồi lấy cọ tán màu vẽ nhạt dần theo khuôn chân mày, bạn có thể chọn dùng 1 màu, hoặc cũng có thể phối hợp cả 3 màu với nhau (chia màu cho đầu mày và đường cong đuôi mày) rồi dùng ngón tay mix lại lần nữa để tạo hiệu ứng thật tự nhiên.");
	a[28] = new sanpham(28, "image/sp28.jpg", "Trang điểm", "Mắt", "Chân mày", "M.A.C VELUXE BROW LINER", "M.A.C Cosmetics", 669000, 30, "Chì kẻ chân mày M.A.C VELUXE BROW LINER được thiết kế nhỏ gọn, rất tiện dụng để mang đi khi đi học, đi làm hay đi du lịch. Bột phấn có màu sắc nhẹ nhàng tạo nên sự tự nhiên cho khuôn mặt khi sử dụng. Mặt khác, kẻ mày MAC Veluxe Brow Liner còn cò khả năng giữ màu lâu, không trôi và không thấm nước, giúp bạn luôn tươi tắn suốt cả ngày.", "Xác định điểm đầu, đỉnh và đuôi chân mày. Đỉnh chân mày nằm trên 1 đường thẳng với khóe mũi và đầu mắt.Đỉnh chân mày được xác đinh là vị trí ở 2/3 chiều dài chân mày tính từ điểm đầu chân mày. Đuôi chân mày nằm trên cùng đường thẳng với khóe mũi và đuôi mắt.Dùng chì kẻ mày vẽ thật nhẹ nhàng bắt đầu từ đỉnh chân mày hướng về đầu chân mày và từ đỉnh chân mày hướng về đuôi chân mày dọc theo viền mắt, hơi xếch lên ở đuôi mắt để đôi mắt trông to và rạng rỡ hơn để có đôi chân mày thật tự nhiên");
	a[29] = new sanpham(29, "image/sp29.jpg", "Trang điểm", "Mắt", "Chân mày", "PETITE LAEL EYE BROW #EB008", "PETITE LAEL", 102000, 30, "Petite Lael là dòng mỹ phẩm mới toanh đến từ Hàn Quốc vừa ra mắt đã khiến bao trái tim mê làm đẹp phải đổ liêu xiêu vì vẻ ngoài vô cùng đáng yêu, khác biệt với những màu sắc và thiết kế độc đáo. Nhỏ gọn, trẻ trung, dễ thương, Petite Lael còn ghi điểm với những màu sắc độc đáo: kẻ mắt màu rượu đỏ hoặc xanh biển, mascara cam,... cho bạn thỏa sức sáng tạo những makeup look siêu cá tính.PETITE LAEL EYE BROW #EB008 là sản phẩm kẻ mày giúp bạn dễ dàng kẻ được hàng chân mày đẹp như ý với thiết kế nhỏ gọn, tiện lợi, dễ dàng mang theo bên mình.", "Dùng đầu cọ kẻ khuôn chân mày như ý sau đó tô đều vào những khoảng trống để có hàng chân mày đẹp sắc sảo.");
	a[30] = new sanpham(30, "image/sp30.jpg", "Trang điểm", "Mắt", "Chân mày", "Lustre Brow Pomade Professional Line - Poised Taupe", "LUSTRE MAKEUP", 184000, 30, "Sản phẩm Kẻ Chân Mày dạng gel pomade giúp dễ dàng tạo hình cặp chân mày cùng với khả năng chống trôi và chống lem. Công thức đặc biệt lý tưởng cho da dầu cũng như trong thời tiết nhiệt đới.Màu Poised Taupe - Nâu Tự Nhiên trẻ trung phù hợp với đa số màu tóc", "Dùng đầu cọ Lustre Pro Makeup Brush E105 Brow Brush chấm nhẹ nhàng để lấy sản phẩm.Định hình khung chân mày và tán đều đường viền về đuôi chân mày");
	a[31] = new sanpham(31, "image/sp31.jpg", "Trang điểm", "Mắt", "Chân mày", "The BrowGal Eyebrow Pencil - Blond", "THE BROWGAL", 621000, 30, "Được thiết kế và tạo hình cẩn thận để mô phỏng vẻ ngoài của tóc thật, Bút chì kẻ lông mày của BrowGal luôn trông tự nhiên và không nhúc nhích. Những cây bút chì có thể pha trộn này được làm từ gỗ tuyết tùng cho một cây chì cứng hơn mang lại hiệu ứng giống như tóc hơn. Với một loạt các sắc thái pha trộn tùy chỉnh độc đáo, có một kết hợp hoàn hảo cho mọi màu tóc.", "Chuốt nhọn để dễ dàng phẩy sợi , tạo khuôn chân mày, kết hợp với bột tán chân màu để có hiệu quả tốt nhất.");
	a[32] = new sanpham(32, "image/sp32.jpg", "Trang điểm", "Mắt", "Chân mày", "Lustre Brow Defining Professional Line - Dark Taupe", "LUSTRE MAKEUP", 208000, 30, "Lustre là thương hiệu xuất xứ từ Mỹ chuyên về các dòng trang điểm chuyên nghiệp với giá thành hợp lý cho những người yêu makeup. Sản xuất tại Hàn Quốc với công nghệ vượt trội, chì kẻ mày đầu tam giác của Lustre vô cùng dễ sử dụng kể cả cho những người mới bắt đầu. Cây chì cho phép bạn dễ dàng tạo dáng ngang dễ thương kiểu Hàn Quốc, hay dáng cong phương Tây quyến rũ. Màu sắc ra đều và mượt mà, cho nét mày tự nhiên", "Dùng đầu cọ xoắn chuốt lông mày vào nếp.Dùng đầu chì phẩy từng sợi lông mày theo khuôn và hướng có sẵn. Nhẹ tay (nhạt màu) ở đầu lông mày, đậm dần về đuôi lông mày. Phẩy đuôi lông mày nhọn mảnh.");
	a[33] = new sanpham(33, "image/sp33.jpg", "Trang điểm", "Mắt", "Chân mày", "SPRING HEART EYEBROW PENCIL", "Dolly Wink", 225000, 30, "Ưu điểm của chì kẻ mày SPRING HEART EYEBROW PENCIL là bạn có thể tạo nên những đường kẻ thanh mảnh và sắc nét với chất chì mềm mịn, mà không làm tổn hại đến làn da. Ngoài ra, sản phẩm với khả năng kháng nước sẽ bảo vệ chân mày bạn không bị trôi bởi bã nhờn trên da, bụi bẩn hoặc sức nóng ngoài trời. Sản phẩm còn được kèm theo đầu chuốt để tiện lợi hơn cho bạn.", "Xác định dáng chân mày hợp với khuôn mặt sau đó kẻ khuôn và tô đều cho chân mày.");
	a[34] = new sanpham(34, "image/sp34.jpg", "Trang điểm", "Mắt", "Tẩy trang mắt", "Muji Mild Eye Make Up Remover", "Muji", 388000, 30, "Muji Mild Eye Make Up Remover nhẹ nhàng loại bỏ trang điểm mắt trên da nhạy cảm như mắt và môi mà không có cảm giác dính. Sản phẩm có thành phần chính là dầu ô liu, chiết xuất Chamomile, chiết xuất lá đào, thành phần dưỡng ẩm tự nhiên và thành phần dưỡng ẩm axit hyaluronic. Ngoài hiệu quả làm sạch sản phẩm còn bổ sung thêm các dưỡng chất để dưỡng da mềm mại. Sau khi tẩy trang bạn không hề có cảm giác khô da như các dòng sản phẩm khác. Tẩy trang dịu nhẹ không tác động quá mạnh để tránh làm da bị khô hay hư tổn.", "Lắc đều trước khi sử dụng.Cho một lượng sản phẩm cỡ đồng xu lên cotton pad, áp trên vùng trang điểm mắt và môi trong vài giây rồi lau nhẹ nhàng.");
	a[35] = new sanpham(35, "image/sp35.jpg", "Trang điểm", "Mặt", "Kem lót", "Lashfood Conditioning Collagen Lash Primer", "United States", 230000, 30, "Lashfood Conditioning Collagen Lash Primer", "Bôi lên mặt");
	a[36] = new sanpham(36, "image/sp36.jpg", "Trang điểm", "Mặt", "Kem lót", "Milk Hydra Grip Primer", "Milk", 150000, 30, "Kem lót cấp ẩm MILK MAKEUP Hydro Grip Primer là một sản phẩm kem lót không chứa silicone - thành phần dễ gây nên tắc nghẽn lỗ chân lông, kem dạng gel trong đầy dưỡng chất sẽ giúp da ẩm mịn hơn trông thấy.Kem lót đem lại cảm giác như bạn đang sử dụng một loại serum cấp ẩm nào đó chứ không phải là loại kem lót gây cảm giác nặng mặt hay quá bóng bẩy. Kem có chiết xuất từ trà xanh, nước lô hội ngọc trai để giúp làn da trở nên sáng mịn và rạng rỡ hơn.", "Bôi lên mặt");
	a[37] = new sanpham(37, "image/sp37.jpg", "Trang điểm", "Mặt", "Kem/Phấn nền", "MISSHA VELVET FINISH CUSHION", "Missha", 261000, 30, "Khi thoa lên da, phấn có lớp mỏng nhẹ tự nhiên không bệt dính khó chịu trong quá trình dùng. Không tạo độ bóng dầu sau khi sử dụng. Tạo cho bạn sự thoải mái khí sử dụng điện thoại mà không còn dấu dính lại.MISSHA VELVET FINISH CUSHION ẽ là lớp màng bảo vệ cho làn da mỏng manh của bạn khỏi tác hại của tia UV, giảm sự tổn thương từ nhiệt độ ánh sáng mặt trời gây lên bề mặt da. Bảo vệ da lên đến 5-6 giờ đồng hồ ngoài nắng.","Lấy 1 lượng vừa vủ, dùng bông tẩy trang đánh đều lên bề mặt da.");
	a[38] = new sanpham(38, "image/sp38.jpg", "Trang điểm", "Mặt", "Kem/Phấn nền", "Innisfree My To Go Cushion", "Innisfree", 554000, 30, "Chứa chiết xuất từ bột tro núi lửa đảo Jeju, hoa atiso và axit hyaluronic giúp tăng cường độ ẩm cho da.Chỉ số chống nắng cao với SPF35 PA++, mang đến cho người sử dụng cảm giác an toàn trong khi tham gia vào những hoạt động ngoài trời.Có độ che phủ tốt lấp đi khuyết điểm về sắc da xạm đen, lỗ chân lông to nhưng lớp nền lại vô cùng mỏng nhẹ và tự nhiên, thoải mái không gây cảm giác nặng mặt.", "Ấn nút lấy sản phẩm ở rìa hộp cho đến khi lấy được lượng sản phẩm cần dùng, dùng bông cushion phân bổ đều phấn nước trên dĩa tán rồi bắt đầu dặm phấn nước lên mặt.Dặm nhẹ nhàng phấn từ phần má rồi di chuyển đến vùng trung tâm mặt.Gấp đôi bông cushion lại và bắt đầu dặm những khu vực góc cạnh như khóe mắt, khóe mũi.");
	a[39] = new sanpham(39, "image/sp39.jpg", "Trang điểm", "Mặt", "Kem/Phấn nền", "Laneige Layering Cover Cushion", "Laneige", 665000, 30, "Độ che phủ cao và hiệu quả bền màu.Mang lại làn da đều màu và sáng hồng tự nhiên.Có thể điều chỉnh lớp nền lì hoặc sáng bóng tùy theo sở thích của bạn.Sản phẩm mang lại cảm giác ẩm mượt, không gây cảm giác khô, căng da.Chức năng kép: Kem che khuyết điểm: Có khả năng giúp bảo vệ làn da dưới tác hại của tia UV. Phấn nước: Giúp bảo vệ làn da dưới tác hại của tia UV và có khả năng giúp dưỡng trắng da", "Sử dụng kem che khuyết điểm để che phủ những vùng da không hoàn hảo.Giúp gương mặt trở nên tươi sáng và hồng hào hơn khi dử dụng LANEIGE Layering Cover Cushion lên toàn bộ gương mặt");
	a[40] = new sanpham(40, "image/sp40.jpg", "Trang điểm", "Mặt", "Kem/Phấn nền", "Guerlain Lingerie De Peau Liquid", "Guerlain", 1729000, 30, "Guerlain Lingerie De Peau Liquid là kem nền có khả năng che phủ hoàn hảo với chất kem lỏng dễ dàng lướt và tán đều trên da, công thức nhẹ nhàng cho lớp che phủ trông tự nhiên như làn da thứ hai, hòa quyện hoàn hảo với làn da bạn. Sản phẩm mang trong mình những cải tiến tối ưu. Đặc biệt là độ bền cực lâu lên đến 24h. Nhờ đó, bạn vẫn có thể hoạt động cả ngày, đêm mà không lo làn da bị bí bách.", "Trước khi dùng kem nền, bạn nên thoa một loại kem lót.Khi thoa kem nền, dùng mũi làm trọng tâm, thoa từ trong ra ngoài. Thoa vùng rộng trước, vùng hẹp sau. Sau đó, thoa thật nhẹ nhàng cho vùng mắt và môi.Nên thoa kem mỏng ở những vùng da quanh mắt và miệng. Thoa kem thật kỹ ở vùng trán và mũi, vì kem ở những vùng này dễ trôi.Khi kết thúc nên sử dụng phấn phủ màu sáng nhấn ở vùng chữ T, màu tối phủ vùng chữ U như thái dương, xương gò má, quai hàm và hai bên gò má.");
	a[41] = new sanpham(41, "image/sp41.jpg", "Trang điểm", "Mặt", "Kem/Phấn nền", "Flawless Finish Everyday Perfection Bouncy Makeup", "Elizabeth Arden", 1270000, 30, "Đánh thức làn da hoàn hảo và tràn đầy sức sống với hộp phấn nén Elizabeth Arden với chất phấn nhẹ như không, nhanh chóng cung cấp năng lượng để trẻ hóa và phục hồi làn da tuổi thanh xuân của bạn. Các chất làm mát có trong sản phẩm giúp xoa dịu những làn da mệt mỏi, xỉn màu và thiếu sức sống với công thúc bouncy-gel giúp làm đều màu da, hoàn thiện kết cấu của da cho lớp phấn trông tự nhiên nhất có thể. Hãng đã sử dụng công thức nén độc đáo tạo thành kết cấu phấn đàn hồi như gel giúp bám da tốt, duy trì khả năng che phủ hoàn hảo trong nhiều giờ, mang đến cho bạn làn da sáng mịn, tự nhiên.", "Dùng bông lấy một lượng phấn vừa đủ và nhẹ nhàng tán đều lên mặt từ giữa ra xung quanh.Có thể dặm thêm ở các vùng cần che phủ nhiều hơn.Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao");
	a[42] = new sanpham(42, "image/sp42.jpg", "Trang điểm", "Mặt", "Kem/Phấn nền", "Sisley Phyto Teint Expert", "Sisley Paris", 2830000, 30, "Sisley Phyto Teint Expert là kem nền giúp da trắng sáng, đều màu, che khuyết điểm hiệu quả và giữ màu suốt 12h. Hơn nữa, sản phẩm còn có tinh chất dưỡng ẩm, chống lão hóa, mang lại làn da mềm mại, mịn màng hơn. Kem không chứa dầu, không gây nhờn dính, phù hợp cho mọi loại da, ngay cả với làn da mụn.","Lấy một lượng vừa đủ ra tay, thoa nhẹ lên vùng da và cổ. Sử dụng sau các bước làm sạch da");
	a[43] = new sanpham(43, "image/sp43.jpg", "Trang điểm", "Mặt", "Kem/Phấn nền", "Sisley Phyto-Fluid Foundation Oil", "Sisley Paris", 2511000, 30, "Sisley Phyto-Fluid Foundation Oil là loại kem nền lâu trôi giúp da trắng sáng, đều màu, che khuyết điểm hiệu quả. Hơn nữa, sản phẩm còn có tinh chất dưỡng ẩm, chống lão hóa, mang lại làn da mềm mại, mịn màng hơn. Kem không chứa dầu, không gây nhờn dính, phù hợp cho mọi loại da, ngay cả với làn da mụn. Thành phần chiết xuất cây sơn trà, cây gỗ và hoa Linden, mang lại cảm giác như làn da đang được ngậm nước đầy ẩm mượt và mềm mịn.", "Lấy một lượng vừa đủ ra tay, thoa nhẹ lên vùng da và cổ. Sử dụng sau các bước làm sạch da");
	a[44] = new sanpham(44, "image/sp44.jpg", "Trang điểm", "Mặt", "Kem/Phấn nền", "L'OREAL INFALLIBLE Total Cover Foundation", "L’oreal", 290000, 30, "Sản phẩm có kết cấu dạng mouse mềm mịn, khi lên da sẽ tạo cảm giác nhẹ nhàng và vô cùng mượt mà vừa mỏng nhẹ lại thoải mái. Có khả năng che phủ và bền màu lên đến 24h, phù hợp với những người bận rộn không có thời gian dặm lại nhiều lần. Bổ sung chất dưỡng ẩm để giữ cho lớp nền bền lâu, tuy nhiên nếu là da khô thì vẫn nên lưu ý về việc dưỡng ẩm trước khi sử dụng.", "Nhẹ nhàng tán đều kem nền lên da bằng mút hoặc cọ nền, tập trung vào vùng chữ T.");
	a[45] = new sanpham(45, "image/sp45.jpg", "Trang điểm", "Mặt", "Phấn phủ", "Eglips Apple Fit Blusher", "Eglips", 171000, 30, "Eglips Apple Fit Blusher là phấn má hồng dạng nén khi đánh không bị vón cục cho bạn một màu má hồng thật đẹp. Hạt phấn siêu mịn có khả năng hấp thụ bã nhờn và hút mồ hôi đồng thời còn giúp che phủ khuyết điểm như lỗ chân lông to, da thiếu sức sống.., với màu sắc nổi trội bạn có thể cảm nhận được màu sắc rạng rỡ và sống động trên đôi má của mình. Eglips Apple Fit Blusher ngoài việc sử dụng làm phấn má thì còn có thể sử dụng như phấn mắt, đánh highlight và làm phấn phủ.", "Chỉ đánh vùng tròn giữa má tạo đôi má hồng dễ thương.Đánh phấn hơi xếch lên tạo gương mặt cô gái cá tính");
	a[46] = new sanpham(46, "image/sp46.jpg", "Trang điểm", "Mặt", "Phấn phủ", "Eglips Oil Cut Powder Pact", "Eglips", 209000, 30, "Eglips Oil Cut Powder Pact là phấn phủ dạng nén với những hạt phấn sáng lấp lánh tạo một lớp phủ mịn màng cho khuôn mặt. Sản phẩm có khả năng kiểm soát dầu nhờn hiệu quả, mang lại làn da sạch mịn và duy trì lớp nền mịn nhẹ tự nhiên suốt cả ngày. Chiết xuất các thành phần tự nhiên như hoa oải hương, hương thảo, húng tây, bạc hà,.. giúp nhẹ nhàng nuôi dưỡng làn da đồng thời giảm thiểu khả năng gây ích ứng da và làm dịu da. Màu beige natural phù hợp với mọi tông da. Hộp phấn nhỏ gọn tiện lợi giúp bạn dễ dàng mang theo bên mình, kèm theo đó là thiết kế bông phấn cao cấp siêu mềm giúp lớp phủ bám dính hoàn hảo và đều màu.", "Sử dụng phấn nén phủ ở bước cuối cùng để hoàn tất lớp trang điểm, chú ý phủ kỹ ở những vùng bị dầu nhiều, tạo lớp trang điểm nhẹ nhàng hàng ngày.Bạn có thể xịt một lớp xịt khoáng trang điểm để lớp nền được bền màu khi hoạt động lâu ở ngoài trời.Bảo quản : Nơi khô thoáng, tránh ánh nắng trực tiếp");
	a[47] = new sanpham(47, "image/sp47.jpg", "Trang điểm", "Mặt", "Phấn phủ", "Eglips Glow Powder Pact", "Eglips", 209000, 30, "Eglips Glow Powder Pact là phấn phủ dạng nén với những hạt phấn sáng lấp lánh tạo một lớp phủ mịn màng cho khuôn mặt. Sản phẩm có khả năng kiểm soát dầu nhờn hiệu quả, mang lại làn da sạch mịn và duy trì lớp nền mịn nhẹ tự nhiên suốt cả ngày, đồng thời làm da sáng rạng rỡ, lấp lánh và đầy nổi bật. Chiết xuất các thành phần tự nhiên như hoa oải hương, hương thảo, húng tây, bạc hà,.. giúp nhẹ nhàng nuôi dưỡng làn da, giảm thiểu khả năng gây ích ứng da và làm dịu da. Màu pitch pink với các hạt phấn chứa ngọc trai làm trắng da hiệu quả, tạo độ căng bóng hồng hào cho làn da.","Sử dụng phấn nén phủ ở bước cuối cùng để hoàn tất lớp trang điểm, chú ý phủ kỹ ở những vùng bị dầu nhiều, tạo lớp trang điểm nhẹ nhàng hàng ngày.Bạn có thể xịt một lớp xịt khoáng trang điểm để lớp nền được bền màu khi hoạt động lâu ở ngoài trời.Bảo quản : Nơi khô thoáng, tránh ánh nắng trực tiếp.");
	a[48] = new sanpham(48, "image/sp48.jpg", "Trang điểm", "Mặt", "Phấn phủ", "Eglips Blur Powder Pact", "Eglips", 209000, 30, "Phấn nén tự nhiên có màu, kềm dầu giúp che khuyết điểm và nhẹ nhàng làm tan biến những nỗi lo về da như nếp nhăn, lỗ chân lông to, da sần sùi, mang lại làn da láng mịn làm bạn cứ muốn chạm vào mãi. Công thức lecithin coating với độ bám dính phù hợp giúp da láng mịn một cách tự nhiên, cùng với các hạt phấn mịn giúp che phủ tốt những khuyết điểm trên da. Thành phần chứa thạch anh tím, bột ngọc trai phản xạ ánh sáng giúp da rạng rỡ tươi tắn.", "Sử dụng phấn nén phủ ở bước cuối cùng để hoàn tất lớp trang điểm, chú ý phủ kỹ ở những vùng bị dầu nhiều, tạo lớp trang điểm nhẹ nhàng hàng ngày. Bạn có thể xịt một lớp xịt khoáng trang điểm để lớp nền được bền màu khi hoạt động lâu ở ngoài trời. Bảo quản : Nơi khô thoáng, tránh ánh nắng trực tiếp.");
	a[49] = new sanpham(49, "image/sp49.jpg", "Trang điểm", "Mặt", "Phấn phủ", "Innisfree No-Sebum Blur Powder", "Innisfree", 153000, 30, "Phấn phủ kiềm dầu, che khuyết điểm Innisfree No-sebum Blur Powder thuộc dòng mĩ phẩm hỗ trợ việc trang điểm, được thiết kế đặc biệt dành cho da nhạy cảm, da tiết quá nhiều dầu hoặc gặp rắc rối về mụn. Hướng đến đối tượng sử dụng là những người có làn da nhạy cảm, nhiều dầu nhờn, phấn phủ kiềm dầu, che khuyết điểm Innisfree No-sebum Blur Powder được bào chế từ các thành phần tự nhiên như muối khoáng, tinh chất trà xanh, tinh chất bạc hà… nên hoàn toàn lành tính, hạn chế gây kích ứng da. Thêm vào đó, sản phẩm còn được bổ sung vitamin và khoáng chất giúp nuôi dưỡng da khỏe mạnh, bảo vệ trước tác động nguy hại từ môi trường.", "Dùng ở bước trang điểm cuối cùng hoặc khi da bóng nhờn. Dùng bông phấn lấy lượng vừa đủ và nhẹ nhàng tán đều lên da, cho đến khi phấn bao phủ hết khuôn mặt.");
	a[50] = new sanpham(50, "image/sp50.jpg", "Trang điểm", "Mặt", "Phấn phủ", "SILKYGIRL MAGIC BB OIL CONTROL", "SILKYGIRL", 136000, 30, "Phấn phủ Silkygirl Magic BB Oil chứa chiết xuất cây cọ lùn và trái hồng giúp thấm hút dầu thừa và hạn chế tiết bã nhờn, cho làn da mịn màng, không còn bóng dầu đồng thời còn có khả năng chống nắng với SPF 45/PA++ giúp bảo vệ làn da dưới tác hại của ánh mặt trời. Sản phẩm không dầu, khống bóng nhờn, không mùi, không làm tắc nghẽn lỗ chân lông và không thử nghiệm trên động vật. Được sản xuất dành riêng cho làn da châu Á.","Dùng bông phấn đi kèm lấy một lượng phấn vừa đủ và dặm đều lên mặt. Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao");
	a[51] = new sanpham(51, "image/sp51.jpg", "Trang điểm", "Mặt", "Phấn phủ", "Innisfree No Sebum Mineral Powder", "Innisfree", 171000, 30, "Phấn Phủ Bột kiềm dầu Innisfree No Sebum Mineral Powder là loại phấn khoáng dạng bột, chiết xuất 100% từ bạc hà và hạt ngọc trai, có khả năng hút dầu rất tốt. Phấn có tông màu trong suốt nên rất dễ tiệp với tất cả các tone da và không ảnh hưởng đến tông màu của các phấn trang điểm khác. Sản phẩm có màu trắng trong suốt, lên da không có màu, giúp bạn có làn da sáng nhẹ. Công thức kiểm soát dầu nhờn vượt trội, giữ được lớp makeup lâu trôi đến 24 giờ đồng hồ. Đặc biệt, sản phẩm có khả năng tạo độ ẩm cân bằng trên da giúp da thông thoáng không bị bí dầu.", "Sau khi áp dụng lớp kem nền và hoàn thiện gương mặt bằng kem che khuyết điểm, bạn có thể sử dụng phấn phủ để kết thúc lớp nền. Dùng cọ nhúng bột phấn. Lắc nhẹ cọ cho bột phấn thừa rơi ra sau đó nhẹ nhàng phủ bầu mắt và toàn bộ gương mặt cho thật đều.");
	a[52] = new sanpham(52, "image/sp52.jpg", "Trang điểm", "Mặt", "Phấn má", "MISSHA The Style Defining Blusher", "Missha", 221000, 30, "Màu sắc hợp thời trang, tạo đường nét sống động tự nhiên cho khuôn mặt. Công nghệ Air Jet Mill tạo hạt phấn mịn đều bám nhẹ nhàng và mềm mại trên làn da và giữ cho lớp trang điểm bền màu. Chứa bột màu ngọc bích cho đường nét xinh đẹp tự nhiên, kết hợp cùng với một số thành phần giàu dưỡng chất như chiết xuất xoài, bear berry, trái bí,.... giúp bổ sung độ ẩm cho lớp trang điểm mềm mịn, tự nhiên.", "Dùng sau khi hoàn thành các bước trang điểm. Dùng bông phấn hoặc cọ chấm một lượng vừa đủ để tạo độ hồng tự nhiên.");
	a[53] = new sanpham(53, "image/sp53.jpg", "Trang điểm", "Mặt", "Phấn má", "Lustre Pro Eyeshadow Magnetic Palette Case", "LUSTRE MAKEUP", 240000, 30, "Một bảng màu phấn mắt 16 khe trống, có thể đổ lại, có thể được tùy chỉnh với chảo phấn mắt yêu thích của bạn.", "Sử dụng bảng màu để lưu trữ Luster Pro Pressed của bạn.");
	a[54] = new sanpham(54, "image/sp54.jpg", "Trang điểm", "Mặt", "Phấn má", "Refillable Makeup Case", "STATISFY", 240000, 30, "Tùy chỉnh hộp trang điểm của riêng bạn.", "Tùy chỉnh hộp trang điểm của riêng bạn.");
	a[55] = new sanpham(55, "image/sp55.jpg", "Trang điểm", "Mặt", "Phấn má", "Lustre Pro Mix And Match Custom Palette Case", "LUSTRE MAKEUP", 240000, 30, "Một bảng màu từ tính trống sẽ giúp bạn tạo ra bộ trang điểm mơ ước với phấn mắt, phấn má, phấn highlight và bronzers yêu thích của bạn. Hoàn hảo cho một bộ sưu tập trên đường đi.", "Sử dụng bảng màu để lưu trữ Luster Pro Pressed của bạn.");
	a[56] = new sanpham(56, "image/sp56.jpg", "Trang điểm", "Mặt", "Phấn má", "Sisley Phyto-Blush Eclat - 4 Pinky Rose", "Sisley Paris", 1646000, 30, "Sisley Phyto-Blush Eclat - 4 Pinky Rose là phấn má hồng với chất phấn siêu mịn, màu sắc đa dạng phù hợp với nhiều phong cách trang điểm khác nhau và có khả năng giữ màu cực lâu trên da. Công thức giàu các thành phần hương gỗ, cây sơn và hoa Linden giúp làm dịu và nuôi dưỡng làn da. Sản phẩm được thiết kế nhỏ gọn kèm gương thuận tiện cho các cô nàng hơn khi trang điểm.", "Dùng cọ tán má hồng lấy lượng phấn vừa đủ, vẫy nhẹ để rớt phấn thừa sau đó nhẹ nhàng thoa lên hai bầu má để có một màu má hồng đáng yêu. Có thể làm ẩm cọ trước khi tán phấn để màu lên đậm và giữ màu lâu hơn.");
	a[57] = new sanpham(57, "image/sp57.jpg", "Trang điểm", "Mặt", "Phấn má", "Aritaum Sugar Ball Cushion Blusher - 01 Posy Pink", "Aritaum", 175000, 30, "Sản phẩm có kết cấu dạng kem độc đáo, vượt trội hơn hẳn phấn má truyền thống bởi độ bám dính tuyệt vời. Chất kem mịn tệp nhanh vào da và tạo ra hiệu ứng căng mịn cho da giúp lớp make up tự nhiên hơn. Má hồng kem Aritaum Sugarball Cushion Blusher lâu trôi hơn má hồng dạng phấn. Dễ điều chỉnh, chất kem không đậm như phấn nên không sợ quá tay. Đặc biệt, sản phẩm còn có thể dùng để làm son cho môi với màu sắc tự nhiên và độ ẩm cao cho môi luôn mềm mượt, hồng hào rạng rỡ.", "Đánh lớp phấn nền cho da trước khi sử dụng sản phẩm. Dùng miếng puff lấy phấn (hoặc dùng tay) tán lên phần xương gò má và kéo dài lên thái dương để khuôn mặt cân đối mà không cần dùng đến highlight.");
	a[58] = new sanpham(58, "image/sp58.jpg", "Trang điểm", "Mặt", "Phấn má", "LOVE 3CE CHEEK MAKER", "3CE", 411000, 30, "3CE - 3 Concept Eyes là thương hiệu mỹ phẩm của Hàn Quốc với các sản phẩm mang phong cách trẻ trung và nổi bật, ấn tượng được giới trẻ Hàn Quốc và các nước châu Á cực kỳ ưa chuộng. Phấn má hồng LOVE 3CE CHEEK MAKER cũng không ngoại lệ khi lam siêu lòng những cả khách hàng khó tính nhất bởi thiết kế trẻ trung, tươi mới; chất phấn mỏng mịn nhẹ, bám màu tốt và tệp vào da giúp gương mặt rạng ngời và tràn đầy sức sống.", "Quét cọ lên phấn, vỗ cọ nhẹ để loại bỏ bớt phấn thừa từ cọ trước khi thoa lên mặt. Quét lên xương gò má để định hình và tạo nét hoặc quét ngay bên dưới gò má để có một cái nhìn sắc nét và định hình tốt hơn.");
	a[59] = new sanpham(59, "image/sp59.jpg", "Trang điểm", "Mặt", "Phấn má", "Lustre PRO Pressed Blush - Pink Nude", "LUSTRE MAKEUP", 168000, 30, "Một công thức bột ép độc đáo trong một bảng màu có thể đổ lại, cung cấp sự hoàn trả màu sắc mạnh mẽ trong các sắc thái nổi bật, điêu khắc và đỏ mặt.", "Thoa lên mặt");
	a[60] = new sanpham(60, "image/sp60.jpg", "Trang điểm", "Mặt", "Tạo khối", "Kaleido Cosmetics Astrolight - Electric", "Kaleido Cosmetics", 340000, 30, "Một highllight 8 giờ màu kem, lấp lánh rất sáng, bạn sẽ có thể nhìn thấy nó từ không gian. Ngọc trai và mica siêu đậm đặc được đóng gói rất chặt trong một đế gel nhẹ đến nỗi nó thực sự bị chói mắt ngay từ khi bạn thả nó vào. Không đùa, không nói chuyện tiếp thị điên rồ, đây là thỏa thuận thực sự.", "Với dụng cụ bôi, thoa lên các điểm cao trên khuôn mặt của bạn (xương má & xương trán, góc trong của mắt & cung của cupid) và pha trộn. Trộn với phấn nền dạng lỏng để chiếu sáng tự nhiên.");
	a[61] = new sanpham(61, "image/sp61.jpg", "Trang điểm", "Mặt", "Tạo khối", "Stila Glitter", "Stila Cosmetics", 595000, 30, "Siêu mịn chiết xuất thành phần từ ngọc trai, ánh nhũ lấp lánh đa năng vừa có thể làm highlight cho mặt vừa có thể làm nhũ mắt.Sử dụng trên mặt mộc để tạo hiệu ứng bắt sáng nhẹ nhàng , hoặc phủ lên lớp phấn phủ hoặc kem tạo khối yêu thích của bạn.", "Thoa lên mặt");
	a[62] = new sanpham(62, "image/sp62.jpg", "Trang điểm", "Mặt", "Tạo khối", "Lustre Pro Eyeshadow Magnetic Palette Case", "LUSTRE MAKEUP", 240000, 30, "Một bảng màu phấn mắt 16 khe trống, có thể đổ lại, có thể được tùy chỉnh với chảo phấn mắt yêu thích của bạn.", "Sử dụng bảng màu để lưu trữ Luster Pro Pressed của bạn.");
	a[63] = new sanpham(63, "image/sp63.jpg", "Trang điểm", "Mặt", "Tạo khối", "Pressed Highlighter - Sun Kissed", "LUSTRE MAKEUP", 168000, 30, "Một highllight phấn tạo ra một ánh sáng tinh tế, mịn màng và tinh vi.", "Thoa lên mặt");
	a[64] = new sanpham(64, "image/sp64.jpg", "Trang điểm", "Mặt", "Tạo khối", "Pressed Bronzer - Salsa", "LUSTRE MAKEUP", 168000, 30, "Kết hợp các tác dụng tự nhiên, trị liệu của bột ca cao thực sự với các sắc tố bronzing đặc trưng của chúng, tạo ra một bronzer mờ độc đáo trung hòa màu đỏ và phát triển và tăng cường tất cả các tông màu da.", "Thoa lên mặt");
	a[65] = new sanpham(65, "image/sp65.jpg", "Trang điểm", "Mặt", "Tạo khối", "Cover FX Contour Kit - Medium", "Cover Fx", 1105000, 30, "Cover FX Contour Kit - Medium là bảng phấn tạo khối nổi tiếng của thương hiệu Cover FX. Bảng phấn có 4 màu cực kì dễ pha trộn với nhiều phong cách trang điểm khác nhau cùng với kết cấu dạng kem dễ dàng bám vào da và lâu trôi sẽ giúp gương mặt thon gon, thanh thót hơn.", "Dùng cọ lấy phấn tạo khối Cover FX Contour Kit - Medium. Hơi hóp miệng lại và đánh phấn vào phần lõm xuống của khuôn mặt xéo ra đến mang tai. Ngoài ra, đừng quên phần viền khuôn mặt sát chân tóc hay những phần đặc biệt mà bạn muốn thu nhỏ lại.");
	a[66] = new sanpham(66, "image/sp66.jpg", "Trang điểm", "Mặt", "Tạo khối", "Anastasia Beverly Hills Glow Kit - Ultimate Glow", "Anastasia Beverly Hills", 1473000, 30, "Tuy không sở hữu vẻ ngoài lấp lánh, hào nhoáng như các sản phẩm cùng dòng, nhưng Bảng Phấn Bắt Sáng Anastasia Beverly Hills Glow Kit - Ultimate Glow lại tập hợp tới 6 tone màu neutral từ trắng đến nâu đồng, vô cùng tự nhiên lại dễ sử dụng cho nhiều màu da khác nhau. Sản phẩm có kết cấu mỏng nhẹ, mềm mịn, có khả năng bắt sáng tốt nhờ thành phần những hạt nhũ ánh kim siêu nhỏ, dễ dàng bám trên da nhưng không làm tắc nghẽn lỗ chân lông hay gây bí da, tạo hiệu ứng da căng bóng và sáng khỏe.", "Khi thao tác cọ, bạn chỉ cần xoáy đầu cọ để điều tiết màu của phấn. Nên dùng cọ đầu nhỏ và cọ xoè khi tán phấn vào các điểm nhấn của gương mặt như xương gò má, xương chân mày, sống mũi, nhân trung và cằm.");
	a[67] = new sanpham(67, "image/sp67.jpg", "Trang điểm", "Mặt", "Tạo khối", "Anastasia Beverly Hills Contour Cream Kit", "Anastasia Beverly Hills", 1200000, 30, "Bảng tạo khối Anastasia Beverly Hills Contour Cream Kit không chỉ là sự lựa chọn hàng đầu của các chuyên gia trang điểm hàng đầu thế giới mà còn là sản phẩm yêu thích của các ngôi sao Hollywood. Sản phẩm bao gồm 6 ô dạng kem với những tone màu đa dạng (Cream, Banana, Warm Coral, Cinnamon, Chocolate, and Ash Brown) thuộc bảng màu Medium, giúp các nàng có thể linh hoạt tạo điểm nhấn sáng tối và làm nổi bật đôi mắt, gò má, mũi cùng những đường nét khác trên khuôn mặt. Chất kem mềm mịn, không quá dày, dễ tán, khi lên da rất đều màu, đem lại sắc thái vô cùng tự nhiên.", "Xác định đúng hình dáng gương mặt của mình.Sau khi đã xác định đúng loại khuôn mặt, hãy xác định đúng phần xương gò má bằng việc hóp má lại.Sử dụng phấn khối tối tán ⅔ đường từ phần mang tai đến miệng, đi theo xương gò má.Tùy vào gương mặt các bạn sẽ dùng phần khối tối để tạo tối những phần dư trên khuôn mặt như vùng trán, 2 bên cằm hay 2 bên sống mũi. Điều này sẽ giúp gương mặt trở nên hài hòa với đường contour ở phần xương gò má.");
	a[68] = new sanpham(68, "image/sp68.jpg", "Trang điểm", "Môi", "Son dưỡng môi & điều trị", "Laneige Stained Glasstick", "Laneige", 523000, 30, "Màu sắc tỏa sáng giúp đôi môi trông căng mọng, và rạng rỡ. Độ bóng cao giúp đôi môi trông tươi tắn, mềm mại. Kết cấu mềm mại sẽ giữ cho đôi môi được dưỡng ẩm và thoải mái trong nhiều giờ. Lấy cảm hứng từ 10 loại màu đá tự nhiên sẽ mang lại may mắn cho đôi môi của bạn", "Trang điểm đôi môi trông tự nhiên bằng cách thoa lên toàn bộ môi dọc theo đường viền môi hoặc bằng cách thoa vào giữa môi.");
	a[69] = new sanpham(69, "image/sp69.jpg", "Trang điểm", "Môi", "Son dưỡng môi & điều trị", "Innisfree Glow Tint Lip Balm", "Innisfree", 150000, 30, "Son innisfree Glow tint lip balm 3.5g - 03 có kết cấu dạng thỏi thế hệ mới 2 trong 1 cho màu chuẩn như son tint và dưỡng ẩm tốt như son dưỡng. Cho làn môi căng mộng như các cô gái xứ Hàn. Lấy cảm hứng từ vẻ đẹp của hoàng hôn mùa xuân. Bộ sưu tập màu son hầu hết đều mang sắc cam và hồng. Cực kỳ lãng mạn! Với Glow Tint Stick bạn dễ dàng đánh lòng môi hoặc cả môi mà không gây cảm giác thô, cực nhẹ nhàng và tự nhiên.", "Son dưỡng môi là loại son bạn có thể dùng mỗi ngày để bảo vệ cho đôi môi luôn căng mọng, khi thời tiết bắt đầu lạnh, hanh khô hay trước khi trang điểm chính là những lúc quan trọng bạn cần sử dụng đến son dưỡng môi.Trước khi tô son dưỡng môi, việc bạn cần làm là làm sạch đôi môi, lau hết vết lớp son cũ để chắc chắn rằng không có bụi bẩn bám lại, sau đó hãy thoa một lớp son dưỡng mới. Khi môi đã thoa son, hãy nhớ rằng nên trách việc tiếp xúc với thức ăn, nước uống.Ngoài dùng son dưỡng môi, chúng ta cũng có thể đắp mặt nạ cho môi từ thiên nhiên, loại bỏ tế bào chết cho đôi môi bóng mượt. Và đừng quên rằng hãy uống thật nhiều nước.");
	a[70] = new sanpham(70, "image/sp70.jpg", "Trang điểm", "Môi", "Son dưỡng môi & điều trị", "Dior Addict Lip Glow", "Dior", 1044000, 30, "Dior Addict Lip Glow thuộc dòng son dưỡng nổi tiếng của hãng mỹ phẩm đến từ Pháp - Dior. Son sỡ hữu lượng dưỡng chất ưu việt giúp tác động và bảo vệ tức thì lên làn môi nhưng không hề gây bóng nhậy hay nặng nề cho môi. Chỉ cần một lần lướt nhẹ, đôi môi ngay lập tức mịn màng và căng mọng, những rãnh môi sẽ nhanh chóng biến mất. Chất son dưỡng lì không những giữ cho đôi môi luôn mềm mại mà còn giúp lớp son lì bám màu lâu hơn và lên màu chuẩn hơn. Ngoài ra, thành phần chống nắng SPF 10 giúp đôi môi được bảo vệ tốt trước tác hại của tia UV, ngăn ngừa tình trạng thâm môi, lão hóa. ", "Có thể đánh son dưới lớp son màu để tạo độ tươi tắn và sáng cho môi. Có thể chỉ cần đánh son dưỡng mà không cần dùng gì thêm cũng đủ làm cho khuôn mặt bừng sáng.");
	a[71] = new sanpham(71, "image/sp71.jpg", "Trang điểm", "Môi", "Son dưỡng môi & điều trị", "Laneige Lip Sleeping Mask", "Laneige", 396000, 30, "Lip Sleeping Mask là mặt nạ ngủ dành cho môi sẽ nhẹ nhàng loại bỏ các tế bào chết trên môi giúp đôi môi trông căng mượt và đàn hồi. Giúp lấy đi tế bào da chết trên môi, dưỡng ẩm cho đôi môi trông luôn căng mượt và đàn hồi. Chiết xuất quả mọng giàu Vitamin C và chất chống oxi hóa, giúp làm sáng màu môi, hương thơm ngọt ngào, tươi mới.", "Trước khi ngủ, hãy dùng thìa chuyên dụng thoa một lượng nhiều lên môi. Hiệu quả: Loại bỏ các tế bào da chết cứng đầu và cung cấp nguồn độ ẩm dồi dào cho da qua cả đêm. Sáng hôm sau, hãy nhẹ nhàng lau sạch bằng miếng bông gòn hoặc khăn giấy.");
	a[72] = new sanpham(72, "image/sp72.jpg", "Trang điểm", "Môi", "Son dưỡng môi & điều trị", "Son Tẩy Da Chết Môi E.L.F Lip Exfoliator", "e.l.f", 135000, 30, "Son Tẩy Da Chết Môi E.L.F Lip Exfoliator nhẹ nhàng loại bỏ lớp da môi bị khô, nứt nẻ, nuôi dưỡng và bảo vệ làn môi bạn bằng Vitamin E, Bơ Hạt Mỡ, các thành phần chiết xuất trong quả Lê, quả Nho, Hạt dầu Jojoba, và Sáp Copernicia Cerifera làm môi mềm mượt, tươi tắn và tràn đầy sức sống. Sản phẩm có vị ngọt từ đường nâu là sản phẩm đầu tiên của dòng son tấy tế bào chết cho môi e.l.f", "Trước tiên làm ẩm môi, sau đó dùng Lip Exfoliator thoa vài lần lên môi để nhẹ nhàng tẩy đi lớp tế bào chết, sau đórửa sạch bằng nước ấm. Lip Exfoliator có mùi thơm rất dễ chịu cho bạn cảm giác thoải mái khi sử dụng.Sau khi dùng xong, bạn có thể rửa bằng nước sạch thay vì lau bằng khăn hoặc giấy ăn. Sử dụng 1-2 lần/ tuần.");
	a[73] = new sanpham(73, "image/sp73.jpg", "Trang điểm", "Môi", "Son kem", "3CE VELVET LIP TINT", "3CE", 326000, 30, "Son Kem Lì 3CE Velvet Lip Tint có chất kem mềm mịn tựa như mousse, và là sự kết hợp độc đáo giữa son kem lì và son tint nên chất son vô cùng mỏng nhẹ, không hề gây cảm giác nặng môi như những dòng son kem lì khác, cùng mùi hương Vani ngọt ngào đảm bảo bạn sẽ ngất ngây không thôi.", "Thoa lên môi");
	a[74] = new sanpham(74, "image/sp74.jpg", "Trang điểm", "Môi", "Son kem", "YSL Vinyl Cream Lip Stain", "Yves Saint Laurent", 1320000, 30, "Son kem YSL Vilyl Cream là dòng son kết hợp giữa son thỏi, son dưỡng bóng, son không trôi và mang đầy đủ 3 đặc tính của ba dòng son trên; hơn nữa lại chứa rất nhiều thành phần dưỡng bóng nhẹ tạo độ mọng môi cao hơn giúp duy trì vẻ đẹp mềm mại suốt cả ngày. Son Kem YSL giúp môi căng mọng, độ bóng vừa phải và không có nhũ, do đó không sợ lem nhem chảy sệt.", "Để có độ bóng tự nhiên, hãy phủ một lớp lên giữa môi và chải về phía góc ngoài. Để che phủ mờ hơn, hãy áp dụng hai lớp phủ bằng cách sử dụng mặt cong bên ngoài của dụng cụ, sau đó thoa đều lên công thức trên môi.");
	a[75] = new sanpham(75, "image/sp75.jpg", "Trang điểm", "Môi", "Son kem", "Nars Velvet Lip Glide Le Pala", "Nars", 861000, 30, "Đầu cọ nhỏ nhắn, thon dài giúp dễ dàng thoa son. Son có độ lên màu rực rỡ từ lần lướt đầu tiên.Sau khi son khô lớp finish bắt dầu giảm độ bóng và trở nên mịn mượt hơn.Son cũng không gây cảm giác bết dính hay làm khô môi mà tạo cảm giác rất thoải mái.", "Thoa lên môi");
	a[76] = new sanpham(76, "image/sp76.jpg", "Trang điểm", "Môi", "Son kem", "Laneige Tattoo Lip Tint", "Laneige", 475000, 30, "Chất son mềm mịn kết hợp cùng son nước giúp đôi môi trông ẩm mượt và bền màu. Kết cấu mỏng nhẹ, mềm mịn, độ bám dính cao mang lại vẻ ngoài sắc nét. Chất son mềm mịn thể hiện qua lớp cuối cùng mượt mà chỉ với một lần chạm. Son lướt nhẹ trên môi, chất son mỏng nhẹ với gam màu bắt mắt và độ lên màu chuẩn xác.", "Sử dụng cạnh trên của cọ để vẽ và tô vào môi trên. Sử dụng cả hai bề mặt của cọ tùy thuộc vào góc của môi. Sử dụng bề mặt cọ lớn giúp tô lòng môi dễ dàng và đều màu.");
	a[77] = new sanpham(77, "image/sp77.jpg", "Trang điểm", "Môi", "Son kem", "Innisfree Vivid Oil Tint", "Innisfree", 198000, 30, "Innisfree Vivid Oil Tint chứa 5 tinh dầu giúp dưỡng ẩm lâu dài cho môi, tạo độ bóng nhẹ giúp che phủ đôi môi khô ráp xỉn màu, thay vào đó là đôi môi căng mọng tươi mới. Sản phẩm cực kỳ thích hợp với các bạn có môi khô, hay bong tróc. Tuy có độ dưỡng cao nhưng son lên môi vẫn giữ được màu trong thời gian khá lâu. Chất son đúng như tên gọi là son tint nên rất bóng, như 1 lớp dầu trên môi, thích hợp cho mùa đông vì khả năng cấp ẩm và giữ môi mềm mịn rất hiệu quả.", "Nếu bạn muốn có một đôi môi nhẹ nhàng tự nhiên, thoa son lên lòng môi và nhẹ nhàng tán đều. Nếu bạn muốn có một đôi môi bóng bẩy, thoa son lên môi nhiều lần, cho đến khi có màu son như mong muốn.");
	a[78] = new sanpham(78, "image/sp78.jpg", "Trang điểm", "Môi", "Son kem", "Eglips Velvet Fit Tint", "Eglips", 225000, 30, "Eglips Velvet Fit Tint là dòng son kem lì mịn lên màu chuẩn với sắc môi cổ điển. Son được thiết kế đơn giản với hình trụ thuôn dài cầm chắc tay, nắp son màu nude trang nhã và đầy nữ tính. Phần cọ được thiết kế theo kiểu đầu dẹp nhỏ nhắn dễ dàng cho việc tạo viền môi. Kết cấu son xốp mềm mịn, dễ tán và chứa nhiều dưỡng chất cho môi nên sẽ không hề gây ra tình trạng lộ rãnh môi như nhiều dòng son kem lì khác. Vì là dòng son lì nên độ bám màu khá cao, có trôi đi cũng sẽ giữ lại đúng base son đầu nhạt rất tự nhiên. Mùi hương nhẹ nhàng dễ chịu như mùi kẹo bông.", "Thoa một lượng vừa đủ son dưỡng môi trước khi dùng để môi được mềm mại hơn. Dùng che khuyết điểm che viền môi, sau đó nhẹ nhàng son lên lòng môi và tá đều hoặc đánh full môi cho màu sắc quyến rũ rực rỡ.");
	a[79] = new sanpham(79, "image/sp79.jpg", "Trang điểm", "Môi", "Son kem", "Innisfree Vivid Cotton Ink", "Innisfree", 206000, 30, "Chất son dạng tint mềm mướt kết hợp cùng đầu cọ mịn màng, khi apply lên môi không những tạo cảm giác thoải mái mà còn tạo hiệu ứng căng mọng, không khô ráp hay làm lộ vân môi. Đặc biệt, khả năng giữ màu của son cũng tương đối ổn, nếu không ăn uống có thể bám màu từ 5-7 tiếng, tùy theo lượng son mà bạn điều chỉnh khi thoa lên môi.​ Các sản phẩm của Innisfree đều mang đặc tính Organic với các thành phần cực kì lành tính. Do đó bộ sưu tập son lần này cũng không ngoại lệ, dù chất son có lì nhưng không gây khô môi nhờ thành phần tinh dầu tự nhiên dầu Hoa Trà, dầu Hạt Xoài, dầu Bơ, dầu Hạt Bông Vải.", "Thoa son từ lòng môi ra dần phía viền môi. Dùng đầu cọ son viền cẩn thận theo đường viền môi. Thoa đều son lại một lần nữa để son lên màu chuẩn nhất.");
	a[80] = new sanpham(80, "image/sp80.jpg", "Trang điểm", "Môi", "Son kem", "M.A.C RETRO MATTE LIQUID LIPCOLOUR", "M.A.C Cosmetics", 741000, 30, "Là một trong những màu son bán chạy nhất, son kem M.A.C RETRO MATTE LIQUID LIPCOLOUR khoác trên mình tông màu cam đào nhẹ nhàng đầy sức hút, mang đến sự sang trọng quý phái quyến rũ đến lạ thường. Chất son kem lì của dòng Retro Matte được bổ sung một lượng dưỡng nhỏ nhưng cũng khiến đôi môi các cô gái thêm rạng rỡ, mướt môi không gây khô hay bết dính là ưu điểm nổi trội của dòng son kem này.", "Dưỡng môi thường xuyên, dùng son dưỡng, mặt nạ ngủ môi và tẩy da chết để son lên môi đẹp nhất. Tô son từ lòng môi và nhẹ nhàng tán đều hoặc đánh full môi cho màu lên đẹp và nổi bật hơn hẳn.");
	a[81] = new sanpham(81, "image/sp81.jpg", "Trang điểm", "Môi", "Son bóng", "MISSHA M Glossy Lip Rouge SPF13 GBE01", "Missha", 272000, 30, "Là thỏi son thuộc bộ sưu tập son lỳ của thương hiệu Missha nổi tiếng, MISSHA M Glossy Lip Rouge SPF13 GBE01 (Classic Girl) chứa thành phần dưỡng chất chiết xuất từ dầu quả hạch Brazil có tác dụng nuôi dưỡng và giữ ẩm cho môi đồng thời mang đến sắc màu tươi trẻ, tự nhiên cho làn môi thêm quyến rũ. Son có kết cấu mịn mượt, lên màu chuẩn, dễ dàng bám đều lên môi, cho làn môi bóng mềm gợi cảm. Đặc biệt, với hoạt chất chống nắng SPF13, son sẽ bảo vệ môi khỏi tác động của ánh nắng mặt trời và duy trì màu son tươi mới trong nhiều giờ liền.", "Thoa đều son lên môi. Bảo quản nơi khô ráo, thoáng mát, tránh ánh. nắng trực tiếp và nhiệt độ cao. Để xa tầm tay trẻ em.");
	a[82] = new sanpham(82, "image/sp82.jpg", "Trang điểm", "Môi", "Son bóng", "Lime Crime DIAMOND CRUSHERS - Unicorn", "Lime Crime", 425000, 30, "Lime Crime DIAMOND CRUSHERS - Unicorn là bộ sưu tập son bóng đến từ Lime Crime với những màu sắc cực kì nổi bật và chói sáng như những viên kim cương được nghiền vỡ và gắn lên môi bạn, bạn cũng có thể tô điểm cho vẻ đẹp vùng mắt và má hoặc bất kỳ vùng nào trên cơ thể chỉ với một cú vung đũa thần kì.Sản phẩm chính là bí quyết để có được một đôi môi căng mọng quyến rũ và đầy phá cách với chất son có kết cấu dạng nước nhưng cực kì lâu trôi. Khi son lên môi cho hiệu ứng lấp lánh và phát sáng, cho bạn vẻ đẹp độc đáo và cuốn hút trong những buổi tiệc đêm hay mùa vũ hội.", "Dùng son tô hết lòng môi cho đến khi có được màu như ý muốn. Nên dùng một lớp son dưỡng trước khi tô son.");
	a[83] = new sanpham(83, "image/sp83.jpg", "Trang điểm", "Môi", "Son bóng", "Dior Addict Lip Glow - 004 Coral", "Dior", 1044000, 30, "Dior Addict Lip Glow 004 Coral thuộc dòng son dưỡng nổi tiếng của hãng mỹ phẩm đến từ Pháp - Dior. Son sỡ hữu lượng dưỡng chất ưu việt giúp tác động và bảo vệ tức thì lên làn môi nhưng không hề gây bóng nhậy hay nặng nề cho môi. Chỉ cần một lần lướt nhẹ, đôi môi ngay lập tức mịn màng và căng mọng, những rãnh môi sẽ nhanh chóng biến mất. Chất son dưỡng lì không những giữ cho đôi môi luôn mềm mại mà còn giúp lớp son lì bám màu lâu hơn và lên màu chuẩn hơn. Ngoài ra, thành phần chống nắng SPF 10 giúp đôi môi được bảo vệ tốt trước tác hại của tia UV, ngăn ngừa tình trạng thâm môi, lão hóa.", "Có thể đánh son dưới lớp son màu để tạo độ tươi tắn và sáng cho môi. Có thể chỉ cần đánh son dưỡng mà không cần dùng gì thêm cũng đủ làm cho khuôn mặt bừng sáng.");
	a[84] = new sanpham(84, "image/sp84.jpg", "Trang điểm", "Môi", "Son bóng", "Julep Lip Gloss - Lively", 638000, 30, "ulep Lip gloss - Lively có chất son mượt, chứa các dưỡng chất làm mềm môi kiêm chức năng dưỡng ẩm cho đôi môi bóng mượt, ngậm nước. Màu hồng sáng phù hợp với mọi tông da. Chất son nhẹ nhàng không gây nên cảm giác bết dính. Thiết kế đầu cọ tiện lợi để tán đều trên môi.", "Dùng riêng lẻ hoặc đánh lên lớp son thường để tạo độ bóng. Trước khi đánh son nên tẩy tế bào chết cho môi để son lên màu đẹp và chuẩn hơn.");
	a[85] = new sanpham(85, "image/sp85.jpg", "Trang điểm", "Môi", "Viền môi", "Innisfree Vivid Oil Tint - 5 Brown Cherry", "Innisfree", 198000, 30, "Son Innisfree Vivid Oil Tint - 5 Brown Cherry chứa 5 tinh dầu giúp dưỡng ẩm lâu dài cho môi, tạo độ bóng nhẹ giúp che phủ đôi môi khô ráp xỉn màu, thay vào đó là đôi môi căng mọng tươi mới. Sản phẩm cực kỳ thích hợp với các bạn có môi khô, hay bong tróc. Tuy có độ dưỡng cao nhưng son lên môi vẫn giữ được màu trong thời gian khá lâu. Chất son đúng như tên gọi là son tint nên rất bóng, như 1 lớp dầu trên môi, thích hợp cho mùa đông vì khả năng cấp ẩm và giữ môi mềm mịn rất hiệu quả.", "Nếu bạn muốn có một đôi môi nhẹ nhàng tự nhiên, thoa son lên lòng môi và nhẹ nhàng tán đều. Nếu bạn muốn có một đôi môi bóng bẩy, thoa son lên môi nhiều lần, cho đến khi có màu son như mong muốn.");
	a[86] = new sanpham(86, "image/sp86.jpg", "Trang điểm", "Môi", "Viền môi", "MISSHA Silky Lasting Lip Pencil", "Missha", 102000, 30, "Chất chì mềm mượt, lâu trôi giúp định hình tạo cảm giác đôi môi thêm căng mọng hơn. Thành phần chứa vitamin E và bơ hạt mỡ giúp nuôi dưỡng đôi môi trong suốt thời gian sử dụng. Gồm nhiều tone màu thời trang, dễ dàng kết hợp nhiều màu son khác nhau.", "Kẻ đường viền quanh môi trước khi thoa son tạo màu trong lòng môi.");
	a[87] = new sanpham(87, "image/sp87.jpg", "Trang điểm", "Môi", "Viền môi", "SILKYGIRL LONG WEARING 05 WINE", "SILKYGIRL", 94000, 30, "Silky Girl là thương hiệu nổi tiếng của Singapore với các dòng mỹ phẩm, nước hoa, sản phẩm chăm sóc tóc và sản phẩm chăm sóc cá nhân khác được người dùng ở thị trường các nước Đông Nam Á như Malaysia, Singapore, Brunei, Indonesia... săn đón nồng nhiệt do phù hợp với làn da và thói quen sử dụng. Silky Girl cung cấp phong phú các loại mỹ phẩm chất lượng cao, thể hiện tính cách vui vẻ, trẻ trung, đầy màu sắc và sự tự tin cho mỗi bạn gái.", "Thoa lên môi");
	a[88] = new sanpham(88, "image/sp88.jpg", "Trang điểm", "Môi", "Viền môi", "Sisley Phyto-Levres Perfect 5 Burgundy", "Sisley Paris", 1081000, 30, "Sisley Phyto-Levres Perfect 5 Burgundy là cây chì kẻ môi được thiết kế chắc chắn nhưng nhẹ nhàng và dễ lướt cho đường kẻ môi đơn giản và chính xác. Thành phần phong phú với bơ Kokum và phytosqualane giúp nuôi dưỡng và duy trì độ ẩm cho môi. Chiết xuất lô hội và dầu jojoba giúp đôi môi thêm mịn màng, mềm mại và săn chắc. Thiết kể tiện lợi gồm hai đầu: một đầu chì và một dầu cọ giúp tán son vô cùng tiện lợi.", "Dùng đầu chì vẽ dọc theo đường viền môi. Sau đó dùng đầu cọ tán son cho đều hết môi.");
	a[89] = new sanpham(89, "image/sp89.jpg", "Trang điểm", "Môi", "Viền môi", "Tarte Tarteist Lip Crayon", "Tarte", 200000, 30, "Chì kẻ viền môi Tarte tarteist Lip Crayon với thiết kế dạng bút vặn tiện dụng sẽ giúp mang đến cho bạn đôi măng quyến rũ, cuốn hút mỗi ngày. Chất chì mềm mịn, dễ kẻ sẽ mang đến cho bạn đường viền môi mềm mại, sắc nét hoàn hảo và bền màu suốt nhiều giờ mà không sợ lem hay trôi. Đầu chì được thiết kế thon gọn, thanh mảnh, giúp mang đến cho bạn đường viền môi xinh đẹp, chuẩn xác một cách dễ dàng.","Viền theo khuôn môi trước khi thoa son.");
	a[90] = new sanpham(90, "image/sp90.jpg", "Dưỡng da", "Rửa mặt", "Tẩy trang", "Zelens Cleansing Liquid Balm", "Zelens", 102000, 30, "Zelens Cleansing Liquid Balm 10ml", "Tẩy trang");
	a[91] = new sanpham(91, "image/sp91.jpg", "Dưỡng da", "Rửa mặt", "Tẩy trang", "OKAME Peat Purifying Cleansing Water", "OKAME Skincare", 306000, 30, "Nước tẩy trang Okame bổ sung vitamin E giúp da trở nên tươi mới và đầy sức sống. Sản phẩm không có chứa cồn và các chất tổng hợp gây khô da. Nước tẩy trang thích hợp cho da thường và da dầu","Thấm sản phẩm vào bông tẩy trang và lau trên mặt theo chuyển động tròn");
	a[92] = new sanpham(92, "image/sp92.jpg", "Dưỡng da", "Rửa mặt", "Tẩy trang", "Byphasse Solution Micellaire", "Byphasse",126000, 30, "Nước tẩy trang Byphasse Solution Micerallaire Face 500ml của Tây Ban Nha được xem là bản dupe của tẩy trang Bioderma, sử dụng công nghệ Micellar facial cleanser sẽ loại bỏ các chất bẩn và bã nhờn sâu trong lỗ chân lông cùng với lớp trang điểm trên da giúp làn da luôn sạch thoáng, mịn màng và ngăn ngừa mụn xuất hiện. Ngoài ra, tẩy trang Byphasse có chứa nước khoáng giúp rửa sạch các chất bẩn còn sót lại trước khi làm sạch với nước.", "Lấy bông thấm một lượng nưóc tẩy trang vừa đủ, nhẹ nhàng lau đều khắp vùng mặt và cổ hoặc những nơi cần tẩy trang theo chuyển động tròn. Lau đến khi thấy miếng bông không còn màu nữa là lớp trang điểm của bạn đã được lấy đi hết. Có thể rửa mặt lại nếu muốn.");
	a[93] = new sanpham(93, "image/sp93.jpg", "Dưỡng da", "Rửa mặt", "Tẩy trang", "Clinique Take The Day Off", "Clinique", 880000, 30, "Clinique Take The Day Off Cleansing Balm là một loại tẩy trang nhẹ, khả năng biến đổi kết cấu từ dạng bơ sáp đến dầu để làm tan chảy mọi dấu vết của trang điểm mắt và mặt và kem chống nắng, sau đó kết thúc ở dạng sữa đục để dễ dàng rửa trôi. Tẩy trang này dễ dàng hòa tan ngay cả các trang điểm và kem chống nắng cứng đầu nhất. Công thức không gây nhờn, không khô, dịu nhẹ của nó giúp nuôi dưỡng da, làm sạch hoàn toàn và dễ dàng rửa sạch, vì vậy tất cả những gì còn lại là một làn da tươi sáng, ẩm mướt.", "Sử dụng đầu ngón tay để mát xa sáp trên da khô ráo. Rửa sạch với nước ấm. Lau khô. Kết hơp với Hệ thống chăm sóc da 3 bước của Clinique.");
	a[94] = new sanpham(94, "image/sp94.jpg", "Dưỡng da", "Rửa mặt", "Tẩy trang", "Bioderma Créaline H2O 250 ML", "Bioderma", 485000, 30, "Nước tẩy trang Bioderma Créaline H20 500 ml là nước tẩy trang được cấu tạo bởi những hạt dầu nhỏ, tác dụng làm sạch da hiệu quả nhưng không hề để lại dầu trên da gây khó chịu cho da. Bioderma Créaline H20 dành cho da nhạy cảm, da khô thích hợp cả nam và nữ, nhẹ dịu, không có nước hoa, ít dầu, không cồn, không gây kích ứng. Với dung tích 500ml, thành phần của Nước tẩy trang Bioderma Créaline H20 đặc biệt không hề chứa cồn, không hương hiệu, Hypoallergenic cho nên khi sử dụng da sẽ không bị khô đi hay căng cứng.", "Làm ướt bông tẩy trang với Créaline H20. Nhẹ nhàng dùng miếng bông đã tẩm dung dịch lau sạch lớp bụi bẩn, lớp trang điểm trên da, mắt và môi. Thực hiện lại thao tác trên cho đến khi không thấy bám bẩn trên bông tẩy trang nữa.");
	a[95] = new sanpham(95, "image/sp95.jpg", "Dưỡng da", "Rửa mặt", "Tẩy trang", "Bioderma Créaline H2O 100 ML", "Bioderma", 224000, 30, "Nước tẩy trang cho da nhạy cảm Bioderma Créaline H2O 100 ml có chứa các hạt micelle được kết cấu từ các ester acid béo, tương tự như phospholipid của màng tế bào da, do vậy chúng tương thích với làn da và giúp tái tạo lớp màng hydrolipid của da một cách tự nhiên. Các hạt micelle này nhẹ nhàng hút các phân tử béo như bụi bẩn, dầu và lớp trang điểm, giúp làm sạch da và đồng thời làm giảm cảm giác căng da, khó chịu.",  "Làm ướt bông tẩy trang với Créaline H20. Nhẹ nhàng dùng miếng bông đã tẩm dung dịch lau sạch lớp bụi bẩn, lớp trang điểm trên da, mắt và môi. Thực hiện lại thao tác trên cho đến khi không thấy bám bẩn trên bông tẩy trang nữa.");
	a[96] = new sanpham(96, "image/sp96.jpg", "Dưỡng da", "Rửa mặt", "Tẩy trang", "Bioderma Sebium H2O 100 Ml", "Bioderma", 224000, 30, "Nước tẩy trang Bioderma Sebium H2O 100 ml có công dụng loại bỏ bụi bẩn, lớp kem chống nắng và lớp trang điểm, nhưng vẫn dịu nhẹ và an toàn cho da. Công nghệ Micelle giúp làm sạch da, loại bỏ bã nhờn cho lỗ chân lông trở nên thông thoáng hơn. Bên cạnh đó, sản phẩm còn chứa phức hợp Fluidacti® gồm Mannitol và chiết xuất Ginkgo Biloba giúp ngăn ngừa vi khuẩn gây mụn hiệu quả.",   "Làm ướt bông tẩy trang với Créaline H20. Nhẹ nhàng dùng miếng bông đã tẩm dung dịch lau sạch lớp bụi bẩn, lớp trang điểm trên da, mắt và môi. Thực hiện lại thao tác trên cho đến khi không thấy bám bẩn trên bông tẩy trang nữa.");
	a[97] = new sanpham(97, "image/sp97.jpg", "Dưỡng da", "Rửa mặt", "Tẩy trang", "DHC Deep Cleansing Oil - 70 Ml", "DHC", 297000, 30, "DHC Deep Cleansing Oil là dầu tẩy trang rất nổi tiếng được ưa chuộng tại Nhật khi cứ 10s lại có 1 chai được bán ra và DHC cũng là tình yêu của rất nhiều tín đồ làm đẹp nhờ khả năng làm sạch “hoàn hảo”, lấy đi mọi bụi bẩn và tẩy sạch hoàn toàn các sản phẩm trang điểm trên da, kể cả mascara hay eyeliner chống nước. Thành phần lại rất lành tính với chiết xuất chủ yếu từ dầu olive, bổ sung thêm vitamin E và dầu hương thảo, đồng thời công thức không chứa dầu khoáng cũng như paraben, chính vì thế DHC Deep Cleansing Oil phù hợp với mọi loại da kể cả da nhạy cảm.", "Tẩy trang ngay trên da khô. Không cần rửa mặt trước khi tẩy trang. Tay cũng cần khô khi tẩy trang.Lấy 1-2 bơm dầu tẩy trang ra lòng bàn tay.Thoa dầu khắp mặt, massage nhẹ nhàng toàn bộ gương mặt để dầu thấm vào da, hòa tan lớp trang điểm trong 2 phút. Lưu ý, massage theo hướng từ dưới lên trên, từ trong ra ngoài để đẩy hiệu quả nâng cơ mặt. Vùng quanh mắt, miệng cần massage với lực nhẹ nhàng.Rửa sạch mặt với nước ấm trước và rửa lại bằng sữa rửa mặt để bảo đảm da được sạch và ngăn ngừa mụn.");
//	a[98] = new sanpham(98, "image/sp98.jpg", "Dưỡng da", "Rửa mặt", "Tẩy da chết", "Mad Hippie Exfoliating Serum 30ml", "Mad Hippie", 523000, 30,"Glycolic Acid – Chiết xuất từ mía đường và được xem là dạng AHA hiệu quả nhất nhờ kích thước phân tử nhỏ hơn, Glycolic acid giúp thanh tẩy da hiệu quả, giảm các nếp nhăn và đốm nâu, cho da đều màu hơn.Lactic Acid – Chiết xuất từ củ cải đỏ lên men và là một dạng AHA khác, Lactic acid cũng giúp thanh tẩy da, giảm các nếp nhăn và đốm nâu và làm đều màu da, đồng thời cấp nước và dưỡng ẩm cho da.Apple Stem Cells (PhytoCellTec®) – Làm giảm các dấu hiệu lão hóa.Sodium Hyaluronate - muối của Hyaluronic Acid - hỗ trợ Hyaluronic Acid thấm vào da tốt hơn nhiều đồng thời còn giúp cung cấp thêm độ ẩm cho da, làm giảm sự xuất hiện của các nếp nhăn, cho làn da trẻ trung năng động hơn.", "Sau khi rửa mặt sạch + toner. Lấy một lượng vừa đủ serum và mát xa nhẹ nhàng kết hợp vỗ nhẹ để tinh chất thấm thấu vào da nhanh chóng.Sản phẩm có thể khiến da bạn nhạy cảm dưới ánh mặt trời, vì thế bạn cần sử dụng kem chống nắng thường xuyên khi tham gia các hoạt động ngoài trời.");

	a[98] = new sanpham(098, "image/sp98.jpg", "Dưỡng da", "Rửa mặt", "Tẩy da chết", "Mad Hippie Exfoliating Serum 30ml", "Mad Hippie", 523000, 30, " Mad Hippie là hãng mỹ phẩm organic nổi tiếng ở Mỹ, tất cả sản phẩm của hãng đều được chứng nhận không kiểm nghiệm trên động vật (cruelty-free) và không có nguồn gốc từ động vật (Vegan). Mad Hippie sản xuất hầu hết các sản phẩm chăm sóc da mặt như kem chống nắng, kem dưỡng, serum, kem mắt… Nhưng phổ biến nhất, được nhiều người biết đến nhất là kem dưỡng và serum vitamin của hãng.Tinh chất tẩy tế bào chết Mad Hippie Exfoliating Serum 30ml có khả năng lấy đi các tế bào da đã bị xỉn màu, các tế bào chết trên bề mặt da, giúp làn da sáng và mượt mà hơn, giảm thâm nám, tàn nhang hiệu quả. Thành phần chính: Glycolic Acid – Chiết xuất từ mía đường và được xem là dạng AHA hiệu quả nhất nhờ kích thước phân tử nhỏ hơn, Glycolic acid giúp thanh tẩy da hiệu quả, giảm các nếp nhăn và đốm nâu, cho da đều màu hơn. Lactic Acid – Chiết xuất từ củ cải đỏ lên men và là một dạng AHA khác, Lactic acid cũng giúp thanh tẩy da, giảm các nếp nhăn và đốm nâu và làm đều màu da, đồng thời cấp nước và dưỡng ẩm cho da.  Apple Stem Cells(PhytoCellTec®) – Làm giảm các dấu hiệu lão hóa.  Gigawhite – Hỗn hợp 6 loại cây từ núi giúp làm sáng và đều màu da hiệu quả. Matrixyl Synthe '6 – giúp da mịn màng hơn và xóa mờ các nếp nhăn. ", "Sau khi rửa mặt sạch + toner.Lấy một lượng vừa đủ serum và mát xa nhẹ nhàng kết hợp vỗ nhẹ để tinh chất thấm thấu vào da nhanh chóng. Sản phẩm có thể khiến da bạn nhạy cảm dưới ánh mặt trời, vì thế bạn cần sử dụng kem chống nắng thường xuyên khi tham gia các hoạt động ngoài trời.");
    a[99] = new sanpham(099, "image/sp99.jpg", "Dưỡng da", "Rửa mặt", "Tẩy da chết", "Huxley Spa Routine Kit", " Huxley", 1224000, 30, "Bắt đầu nổi lên như một thương hiệu mỹ phẩm cao cấp với các sản phẩm chăm sóc da chứa thành phần dầu hạt cây xương rồng Prickly Pear. Huxley - thương hiệu mỹ phẩm đến tứ xứ sở kim chi Hàn Quốc là một biểu tượng đương đại, khám phá những thành phần chưa được biết đến, hoàn thiện và dẫn dắt xu hướng mới của vẻ đẹp hiện đại. Thương hiệu mỹ phẩm Huxley đã học hỏi phương pháp làm đẹp cổ xưa của những người phụ nữ Berber ở xứ sở Morocco, sử dụng tinh dầu chiết xuất từ hạt của giống xương rồng Prickly Pear, có tác dụng tốt cho làn da phải luôn đối mặt với tình trạng mất nước. Theo đuổi triết lý “Less is more” và những tiến bộ về tư duy làm đẹp hiện đại, sản phẩm của Huxley ngoài sử dụng thành phần xương rồng hữu cơ và sản xuất thủ công, còn đạt tiêu chuẩn: không cồn, paraben, dầu khoáng, hương thơm tổng hợp và các chất bảo quản khác.Huxley Spa Routine Trio Set là 1 trong những bộ mặt nạ chăm sóc da nổi tiếng của thương hiệu Huxley.Bộ mặt nạ chăm sóc da 3 bước, được chiết xuất từ các thành phần tự nhiên từ hạt xương rồng, nước cây xương rồng rất giàu dưỡng chất, phù hợp cho tất cả các loại da, đặc biệt là da dầu tiết nhiều bã nhờn và lỗ chân lông bị tắc.Sản phẩm hoàn toàn không chứa Paraben, không thuốc nhuộm tổng hợp, không dầu khoáng.", "Bước 1: Sau khi làm sạch da với sữa rửa mặt, cho một lượng vừa đủ mặt nạ tẩy tế bào chết Huxley Scrub Mask; Sweet Therapy lên mặt và massage nhẹ nhàng trong vòng 1 phút rồi rửa lại bằng nước sạch. Bước 2: Dùng toner để cân bằng da và bắt đầu sử dụng mặt nạ Huxley Healing Mask; Keep Calm.Thoa đều lên mặt và đợi khoảng 10 - 15 phút trước khi rửa sạch với nước ấm.       Bước 3. Dùng một lượng mặt nạ ngủ Huxley Sleep Mask; Good Night, thoa đều lên mặt, để nguyên qua đêm và rửa lại mặt vào sáng hôm sau. Lưu ý: Mỗi tuần dùng Huxley Spa Routine Trio Set 2 lần để đạt hiệu quả.");
    a[100] = new sanpham(100, "image/sp100.jpg", "Dưỡng da", "Rửa mặt", "Tẩy da chết", "Simple Clear Skin Oil Balancing Facial Scrub ", " Simple", 176000, 30, "Simple là nhãn hiệu chăm sóc da số 1 Anh Quốc (Dựa vào dữ liệu từ Nielsen ScanTrack (Toàn bộ Vương Quốc Anh, ngoại trừ Bắc AiLen) về Chăm sóc da mặt, 12 tháng đến ngày 24 tháng 2, 2018). Ngay từ khi bắt đầu, Simple® đã luôn hướng tới việc tạo ra các sản phẩm lành tính cho da, ngay cả với loại da nhạy cảm nhất. Mọi thành phần được sử dụng trong các sản phẩm đều là thành phần được da yêu thích và chỉ sử dụng các hoạt chất lành tính nhất, giúp tái tạo những chất sẵn có của một làn da khỏe mạnh. Kem tẩy tế bào chết cho da nhạy cảm Simple Clear Skin Oil Balancing Facial Scrub sẽ giúp bạn lấy đi tế bào sừng hóa, bụi bẩn và cặn bã đóng sâu trong lỗ chân lông mà không gây khô da và kích ứng đến các nốt mụn. Sản phẩm dành cho da nhạy cảm với thành phần lành tính và an toàn cho da, là một sự pha trộn hoàn hảo của các hoạt chất và tẩy da chết giúp loại bỏ tế bào chết da, bụi bẩn và tạp chất.", "Lấy một lượng nhỏ kem tẩy tế bào chết cho da nhạy cảm-Simple Clear Skin Oil Balancing Facial Scrub bôi lên lên da ướt massage nhẹ nhàng bằng đầu ngón tay lên mặt và cổ , tránh vùng mắt. Rửa sạch ngay với thật nhiều nước.");
    a[101] = new sanpham(101, "image/sp101.jpg", "Dưỡng da", "Rửa mặt", "Tẩy da chết", "Slinky Touch Body Milk", " Slinky Touch", 323000, 30, "Slinky Touch là thương hiệu mỹ phẩm nổi tiếng đến từ Nhật Bản. Cái tên này hiện đang “làm mưa làm gió” với bộ đôi kem tẩy lông và kem dưỡng thể có chiết xuất từ thiên nhiên.  Slinky Touch Body Milk là sản phẩm giúp thu nhỏ các lỗ chân lông sau khi tẩy lông, nhờ các thành phần từ Mirifica và đậu tương chiết xuất Pueraria, những dưỡng chất có lợi và làm mềm da.Các tác dụng này có hiệu quả lâu dài và làm làn da bạn mịn màng khi sử dụng mỗi ngày, đặc biệt sản phẩm cung cấp độ ẩm cho da dễ bị khô nhờ vào công thức giàu thành phần dưỡng ẩm cao.", "Sản phẩm có thể sử dụng lên cơ thể để massage sau khi tắm.Ngoài ra Slinky Touch Body Milk còn được sử dụng vào việc chăm sóc da sau khi tẩy lông, cũng như nuôi dưỡng làn da khô hàng ngày của bạn.");
    a[102] = new sanpham(102, "image/sp102.jpg", "Dưỡng da", "Rửa mặt", "Tẩy da chết", "TSURU HANA HIME – Peeling cream for your nose", "Shiro Waki Hime ", 325000, 30, "Shiro Waki Hime là thương hiệu chăm sóc da đến từ Nhật Bản. Phương châm hoạt động của hãng đó là coi mỗi khách hàng là một nàng công chúa và Shiro Waki Hime chính là bí quyết đằng sau vẻ đẹp tuyệt trần.TSURU HANA HIME – Peeling cream for your nose là sản phẩm giúp đánh bay các loại mụn đầu đen cứng đầu, da chết và mụn đầu trắng ở vùng mũi.  Các cô nàng thường sử dụng phương pháp truyền thống là dùng gel hoặc miếng dán lột mụn để làm sạch vùng mũi tuy nhiên nó chỉ mang tính hiệu quả tạm thời và dần dần có thể khiến lỗ chân lông to hơn, gây mất thẩm mỹ, tạo môi trường cho mụn đầu đen dễ hình thành hơn trước.Vì vậy, Tsuru Hana Hime ra đời là vị cứu tinh cho các cô nàng thường xuyên phiền não vì sự xuất hiện của mụn đầu đen.  Sản phẩm có dạng kem, sử dụng như tẩy tế bào chết thông thường nhưng được thiết kế đặc biệt cho vùng mũi.Vừa giúp làm sach mụn, lại khắc phục nhược điểm của phương pháp lột truyền thống, chưa kể là có thể giúp cải thiện lỗ chân lông và kéo dài thời gian mụn xuất hiện trở lại.", "Rửa mặt sạch, thoa lượng kem vừa đủ lên mũi (kích cỡ hạt đậu), để trên da khoảng 3-5 phút và nhẹ nhàng massage theo chuyển động tròn sau đó lau sạch và rửa lại với nước ẩm.");
    a[103] = new sanpham(103, "image/sp103.jpg", "Dưỡng da", "Rửa mặt", "Sữa rửa mặt", "PIXI Glow Mud Cleanser 135ml ", "Pixi by Petra", 512000, 30, "Sữa rửa mặt sạch sâu lỗ chân lông với bùn, thảo mộc và 5% Glycolic Acid giúp da rạng ngời bóng khoẻ. Hỗn hợp bùn và thảo mộc giúp làm sạch sâu lỗ chân lông, giúp da mịn màng hơn, ngăn ngừa bít tắc dẫn đến mụn Chứa 5 % glycolic acid nhẹ nhàng làm hoà tan các liên kết giữa tế bào da chết và bề mặt da để lộ ra làn da tươi mới, mịn màng. Phù hợp cho mọi loại da nhưng đặc biệt các nàng nào da nhạy cảm, dễ lên mụn, dễ bị tắc lỗ chân lông.", "Sau khi làm sạch mặt và dùng toner mỗi sáng và tối, thoa đều một lượng sản phẩm vừa đủ lên mặt, tránh vùng mắt. Nếu sản phẩm dính vào mắt, rửa sạch lại với nước.");
    a[104] = new sanpham(104, "image/sp104.jpg", "Dưỡng da", "Rửa mặt", "Sữa rửa mặt", "FRESH Soy Face Cleanser To Go Travel Size 50ml ", " Fresh", 650000, 30, "Sữa rửa mặt Fresh soy face cleanser 50ml – một lựa chọn khó lòng bỏ qua cho làn da nhạy cảm. Sữa rửa mặt Fresh soy face cleanser 50ml với thành phần đẹp như thế, nhưng về cảm giác sau khi rửa mặt thì ấn tượng còn tuyệt vời hơn nhiều.Da mặt mịn màng hơn, da má không bị khô mà phần da dầu cũng sạch sẽ khô thoáng.Đặc biệt là mùi thơm thanh mát của dưa chuột và điểm chút dư vị tinh tế ngọt ngào của hoa hồng chắc chắn sẽ khiến mọi sự mệt mỏi, căng thẳng tan biến Fresh Soy Face Cleanser là một sản phẩm highend, hướng tới các cô nàng có kinh tế vững mong chờ một sản phẩm rửa mặt không chì giúp làm sạch đơn thuần mà còn truyền cảm hứng cho các bước dưỡng tiếp theo.", "Sau khi làm sạch mặt và dùng toner mỗi sáng và tối, thoa đều một lượng sản phẩm vừa đủ lên mặt, tránh vùng mắt. Nếu sản phẩm dính vào mắt, rửa sạch lại với nước.");
    a[105] = new sanpham(105, "image/sp105.jpg", "Dưỡng da", "Rửa mặt", "Sữa rửa mặt", "Peter Thomas Roth Anti - Aging Cleansing Gel 18ml", "Peter Thomas Roth ", 213000, 30, "Sữa rửa mặt dành cho da lão hóa, làm sạch da dịu nhẹ và không gây khô da Glycolic Acid(AHA) 1 %: tẩy da chết dịu nhẹ và hỗ trợ làm căng sáng da  Salicylic Acid(BHA) 1 %: làm sạch sâu lỗ chân lông và giảm bã nhờn, dầu thừa trên da.  Panthenol(Pro Vitamin B5): giữ ẩm và hạn chế kích ứng trên da.  Chiết xuất chanh và nho : chống oxy hóa làm sáng da Sữa rửa mặt dạng gel tạo bọt dịu nhẹ làm sạch da mà không hề gaya khô da.Mùi hương xen lẫn giữa chanh và mùi hoa quả mang lại cảm giác thoải mái khi rửa mặt. Thích hợp cho da hỗn hợp thiên dầu, da không đều màu, da kém mịn màng và sần sùi.", "Sau khi làm sạch mặt và dùng toner mỗi sáng và tối, thoa đều một lượng sản phẩm vừa đủ lên mặt, tránh vùng mắt. Nếu sản phẩm dính vào mắt, rửa sạch lại với nước.");
    a[106] = new sanpham(106, "image/sp106.jpg", "Dưỡng da", "Rửa mặt", "Sữa rửa mặt", "INDIE LEE Rosehip Cleanser 30ml", " Indie Lee", 255000, 30, "Khai thác hiệu quả tuyệt vời của dầu tầm xuân giàu vitamin, sản phẩm có thể lấy đi lớp trang điểm mắt nhẹ nhàng, giúp làm dịu da để giúp giảm những dấu hiệu của sự lão hóa, đảm bảo độ ẩm và điều trị các vết đỏ và rosacea. Sản phẩm nhẹ nhàng cho làn da nhạy cảm Hàm lượng cao chất chống oxy hóa và vitamin A, E, và K Giúp cải thiện sự xuất hiện của các nếp nhăn và giữ ẩm da ", "Thoa một lượng nhỏ sữa rửa mặt để mặt ẩm ướt. Sử dụng với một miếng bông ướt để loại bỏ trang điểm mắt. Rửa sạch hoàn toàn bằng nước. Không sử dụng với những vết thương hở");
    a[107] = new sanpham(107, "image/sp107.jpg", "Dưỡng da", "Rửa mặt", "Sữa rửa mặt", "Some By Mi AHA-BHA-PHA 30 Days Miracle Acne Clear Foam 100ml", "Some By Mi", 277000, 30, "Some By Mi là một thương hiệu làm đẹp hàng đầu Hàn Quốc, luôn tiên phong trong việc cải tiến nguồn nguyên liệu thiên nhiên cũng như công nghệ sản xuất. Sữa Rửa Mặt Some By Mi AHA - BHA - PHA 30 Days Miracel Acne Clear Foam 100ml là bọt rửa mặt 'thần kì' giúp làm dịu da, loại bỏ tình trạng da mụn sưng đỏ, mang lại sự tươi mới cho làn da và ngăn ngừa các nguyên nhân gây mụn. ", "Bước 1: Lấy lượng sữa rửa mặt vừa đủ cho ra bàn tay ướt.  Bước 2: Xoa cho đến khi bông bọt. Bước 3: Trải đều bọt lên da và massage nhẹ nhàng để loại bỏ bụi bẩn. Bước 4: Làm sạch lại với nước.");
    a[108] = new sanpham(108, "image/sp108.jpg", "Dưỡng da", "Rửa mặt", "Sữa rửa mặt", "Mario Badescu Botanical Facial gel - 472ml ", " Mario Badescu ", 865000, 30, "Thương hiệu Mario Badescu được thành lập vào năm 1967. Ban đầu chỉ là một cửa tiệm nhỏ, Trải qua 50 năm Mario Badescu đã tiếp tục vươn xa, phát triển mạnh mẽ thêm các dòng sản phẩm chăm sóc da. Từ các sản phẩm hỗ trợ trị mụn cho đến các sản phẩm chống lão hóa. Mario Badescu luôn cố gắng cải thiện các phát đồ trị liệu thích hợp cho nhu cầu người sử dụng. “Simple, Gentle, and Effective Skin Care” – triết lý thương hiệu kinh doanh của Mario Badescu. Là một trong những sản phẩm bán chạy nhất của Mario Badescu, sữa rửa mặt kiểm soát dầu nhờn, làm mới da dạng gel Mario Badescu Botanical Facial gel nhẹ nhàng loại bỏ lớp trang điểm, bụi bẩn và dầu thừa mà không gây khô da.Công thức alpha hydroxy và không chứa xà phòng, không tạo bọt của sản phẩm có tác dụng tẩy tế bào tích tụ có thể gây ra mụn đầu đen, mụn nhọt đồng thời làm sạch sâu và tạo cảm giác sảng khoái cho da nhờn.", " Massage theo chuyển động tròn trên da ướt hai lần mỗi ngày, tránh vùng mắt và rửa sạch với nước ấm.  Thấm khô và thực hiện các bước dưỡng da tiếp theo.");
    a[109] = new sanpham(109, "image/sp109.jpg", "Dưỡng da", "Rửa mặt", "Sữa rửa mặt", "Mario Badescu Enzyme Cleansing Gel - 236 ml ", "Mario Badescu ", 480000, 30, "Thương hiệu Mario Badescu được thành lập vào năm 1967. Ban đầu chỉ là một cửa tiệm nhỏ, Trải qua 50 năm Mario Badescu đã tiếp tục vươn xa, phát triển mạnh mẽ thêm các dòng sản phẩm chăm sóc da. Từ các sản phẩm hỗ trợ trị mụn cho đến các sản phẩm chống lão hóa. Mario Badescu luôn cố gắng cải thiện các phát đồ trị liệu thích hợp cho nhu cầu người sử dụng. “Simple, Gentle, and Effective Skin Care” – triết lý thương hiệu kinh doanh của Mario Badescu. Là sữa rửa mặt bán chạy nhất của hãng, Mario Badescu Enzyme Cleansing Gel với chiết xuất đu đủ và bưởi đỏ giúp loại bỏ lớp trang điểm còn đọng lại sau lớp tẩy trang, dầu thừa và tạp chất mà không làm khô da; đồng thời giúp tẩy nhẹ lớp da chết, ngăn ngừa mụn bọc, mụn đầu đen đáng ghét, cho làn da được khỏe mạnh và tươi sáng.", " Dùng 2 lần mỗi ngày.  Cho một ít sữa rửa mặt ra tay rồi massage theo vòng tròn trên da ẩm ướt, tránh vùng mắt.  Rửa sạch lại với nước.");
    a[110] = new sanpham(110, "image/sp110.jpg", "Dưỡng da", "Rửa mặt", "Sữa rửa mặt", "Elta MD FOAMING FACIAL CLEANSER", "ELTA MD Skin Care", 612000, 30, "Eltamd là thương hiệu dược mỹ phẩm được ưa chuộng hàng đầu của Mỹ. Với hơn 25 năm kinh nghiệm chuyên sâu trong ngành, EltaMD là một trong những hãng dược mỹ phẩm tiên phong trong việc chăm sóc làn da, với sứ mệnh mang lại làn da đẹp nhất và tự nhiên nhất có thể cho người dùng. Trải qua nhiều công trình nghiên cứu sinh học, dược lý và kiểm nghiệm lâm sàng nghiêm ngặt, sản phẩm của EltaMD luôn là sự lựa chọn hàng đầu của bác sĩ da liễu, bệnh viện, phòng khám chuyên nghiệp, viện bỏng quốc da… được giám định và chỉ định bởi chuyên khoa Da Liễu, và được Dược Sĩ khuyên dùng.  Sữa rửa mặt tạo bọt EltaMD Foaming Facial Cleanser là sản phẩm dành cho mọi loại da, ngay cả da nhạy cảm dễ kích ứng.Công thức ưu việt với enzyme và amino axit nhẹ nhàng loại bỏ lớp trang điểm, dầu và các tạp chất khác trên da và bên trong lỗ chân lông cho da sạch sâu và thông thoáng.An toàn cho mọi loại da.  Đặc điểm nổi bật:  Bromelain: Enzymes tự nhiên tìm thấy trong quả dứa hoạt động như một chất chống viêm và giảm viêm.Bổ sung thêm tính năng tạo bọt, lưu lại làn da mịn màng.   Hiệu quả làm sạch tối ưu mà không khiến da bị khô sau khi sử dụng. Cân bằng lượng dầu thừa và cung cấp độ ẩm cần thiết để tạo bước đệm cho các bước dưỡng sau hoạt động tốt hơn.", "Không nên rửa mặt quá 2 lần/ngày, vì như vậy không chỉ khiến da mất nước dẫn đến khô ráp, dễ kích ứng mà còn kích thích các tuyến nhờn hoạt động mạnh mẽ hơn và dễ gây mụn. Rửa sạch tay và làm ướt mặt trước khi cho sữa rửa mặt lên da, bởi trong các loại kem, sữa rửa mặt đều có những hóa chất không nên sử dụng trực tiếp lên mặt, nhất là khi da còn khô. Chỉ nên để sữa rửa mặt trên da trong thời gian 30 giây và cả quá trình rửa chỉ nên diễn ra trong 2 phút.Việc rửa mặt và chà xát quá lâu sẽ khiến da dễ mẫn cảm và bị bào mòn hơn. Sau khi rửa mặt, nên dùng kem dưỡng cùng dòng EltaMD để da không bị mất nước và có độ ẩm cần thiết, tránh tình trạng khô rát, bong tróc.");
    a[111] = new sanpham(111, "image/sp111.jpg", "Dưỡng da", "Rửa mặt", "Sữa rửa mặt", "The Drunk Elephant Detective Game", " Drunk Elephant", 2112000, 30, "Năm 2012, Tiffany Masterson đã cho ra đời thương hiệu dược mỹ phẩm Drunk Elephant, với mong muốn kết hợp y học vào mỹ phẩm để tạo nên các sản phẩm tự nhiên, an toàn và lành tính cho da. Hãng chú trọng vào vẻ đẹp, sức khỏe và cấu trúc làn da; loại bỏ các thành phần độc hại cũng như nhiều thành phần tuy được quảng cáo rộng rãi ngày nay nhưng vẫn gây kích ứng cho da. Drunk Elephant không phân loại làn da, bởi theo Masterson “Làn da luôn là làn da, nếu chúng ta hiểu rõ và tôn trọng cấu trúc cơ bản của da, nó sẽ trở nên tốt hơn”.", "Bạn có thể dùng riêng lẻ từng bước như C-Firma™ Day Serum-B-Hydra™ Intensive Hydration Serum-Shaba Complex™ Eye Serum -Protini™ Polypeptide Cream-Umbra Tinte™ Physical Daily Defense, SPF 30");
    a[112] = new sanpham(112, "image/sp112.jpg", "Dưỡng da", "Rửa mặt", "Sữa rửa mặt", "Naruko Tea Tree Blemish Clear Makeup Removing Cleansing Mousse 150 ml", "Naruko", 254000, 30, "Naruko được sáng lập ra bởi chuyên gia mỹ phẩm nổi tiếng, và cũng là cha đẻ của ngành mỹ phẩm Đài Loan: ông Ngưu Dục Lân. Thực chất Naruko chính là viết tắt của các từ N - Niuer ( tên nhà sáng lập ), A - Affordable ( giá cả phải chăng), R - Refine (tinh tế), U - Unique (độc đáo), K - Kindness (thái độ làm việc ân cần), O - Original (sản phẩm luôn đạt chất lượng đồng bộ không đổi). Chính nhờ những tiêu chí làm việc nghiêm chỉnh cùng phương thức hoạt động rõ ràng trong suốt hơn một thập kỷ qua, mà tính đến thời điểm hiện tại Naruko luôn có mặt trong top những thương hiệu dẫn đầu và có chỗ đứng ổn định vững chắc trong ngành công nghiệp hóa mỹ phẩm khắc nghiệt của Đài Loan. ", "Hướng dẫn sử dụng: Giữ cho da tay và da mặt thật khô ráo. Lấy một lượng nhỏ dung dịch từ chai (ấn khoảng 3 lần) và thoa đều lên mặt, xoa bóp nhẹ nhàng, sau đó thêm nước lên mặt để tạo bọt. Cuối cùng, rửa sạch lại với nước.");
    a[113] = new sanpham(113, "image/sp113.jpg", "Dưỡng da", "Rửa mặt", "Sữa rửa mặt", "Naruko Tea Tree Purifying Clay Mask and Cleanser 3 in 1 120 gr", "Naruko", 179000, 30, "Naruko được sáng lập ra bởi chuyên gia mỹ phẩm nổi tiếng, và cũng là cha đẻ của ngành mỹ phẩm Đài Loan: ông Ngưu Dục Lân. Thực chất Naruko chính là viết tắt của các từ N - Niuer ( tên nhà sáng lập ), A - Affordable ( giá cả phải chăng), R - Refine (tinh tế), U - Unique (độc đáo), K - Kindness (thái độ làm việc ân cần), O - Original (sản phẩm luôn đạt chất lượng đồng bộ không đổi). Chính nhờ những tiêu chí làm việc nghiêm chỉnh cùng phương thức hoạt động rõ ràng trong suốt hơn một thập kỷ qua, mà tính đến thời điểm hiện tại Naruko luôn có mặt trong top những thương hiệu dẫn đầu và có chỗ đứng ổn định vững chắc trong ngành công nghiệp hóa mỹ phẩm khắc nghiệt của Đài Loan. ", "Hướng dẫn sử dụng: Làm ướt da mặt, lấy 1 lượng nhỏ 1 tới 2 cm, thêm nước vào để tạo bọt, sau đó xoa đều lên toàn mặt đã ẩm nước, nhẹ nhàng xoa bóp và sau đó rửa lại bằng nước sạch.");
    a[114] = new sanpham(114, "image/sp114.jpg", "Dưỡng da", "Rửa mặt", "Sữa rửa mặt", "Innisfree Green tea foam cleanser 150mL", "Innisfree", 188000, 30, "Innisfree là một thương hiệu mỹ phẩm được thành lập vào năm 2000 tại Hàn Quốc, thuộc thuộc Tập đoàn mỹ phẩm AmorePacific, đồng sở hữu các thương hiệu nổi tiếng như Sulwhasoo, Laneige, Mamonde, Etude House. Cái tên “Innisfree” của hãng được lấy cảm hứng từ bài thơ của nhà thơ William Butler Yeats viết vào năm 1888 là “The lake Isle of Innisfree” có nội dung ca ngợi quang cảnh thiên nhiên tuyệt đẹp ở quanh hồ Isle vùng Innisfree thuộc đất nước Ailen xinh đẹp.", "Làm sạch tay, cho một lượng nhỏ sữa rửa mặt ra tay tạo bọt. Sau đó đưa lên mặt massage khoảng 1 phút. Rửa sạch lại với nước");
    a[115] = new sanpham(115, "image/sp115.jpg", "Dưỡng da", "Rửa mặt", "Sữa rửa mặt", "EMMA HARDIE SKINCARE Moringa Cleansing Balm with Cleansing Cloth ", "LIXIBOX", 911000, 30, "Sữa rửa mặt dành cho da lão hóa, làm sạch da dịu nhẹ và không gây khô da Glycolic Acid(AHA) 1 %: tẩy da chết dịu nhẹ và hỗ trợ làm căng sáng da  Salicylic Acid(BHA) 1 %: làm sạch sâu lỗ chân lông và giảm bã nhờn, dầu thừa trên da.  Panthenol(Pro Vitamin B5): giữ ẩm và hạn chế kích ứng trên da.  Chiết xuất chanh và nho : chống oxy hóa làm sáng da Sữa rửa mặt dạng gel tạo bọt dịu nhẹ làm sạch da mà không hề gaya khô da.Mùi hương xen lẫn giữa chanh và mùi hoa quả mang lại cảm giác thoải mái khi rửa mặt. Thích hợp cho da hỗn hợp thiên dầu, da không đều màu, da kém mịn màng và sần sùi.", "Sau khi làm sạch mặt và dùng toner mỗi sáng và tối, thoa đều một lượng sản phẩm vừa đủ lên mặt, tránh vùng mắt. Nếu sản phẩm dính vào mắt, rửa sạch lại với nước.");
    a[116] = new sanpham(116, "image/sp116.jpg", "Dưỡng da", "Rửa mặt", "Sữa rửa mặt", "Paula's Choice Perfect Cleansing Oil", "Paula's Choice", 604000, 30, "Paula's Choice là thương hiệu đến từ Mỹ được sáng lập bởi bà Paula Begoun - tác giả của nhiều cuốn sách bán chạy về mỹ phẩm. Các sản phẩm của Paula's Choice chú trọng chữa trị tận gốc các vấn đề của da bằng cách sử dụng các thành phần đã được chứng minh là có tác dụng tốt và an toàn cho làn da. Ngay sau khi ra mắt 4 dòng sản phẩm có tính năng đột phá trong việc chăm sóc và cải thiện sức khỏe da, Paula's Choice đã nhận được nhiều sự quan tâm của người tiêu dùng, được nhiều tạp chí làm đẹp đánh giá cao về hiệu quả cải thiện rõ rệt cho làn da.", "Cho một lượng dầu tẩy trang vừa đủ ra lòng bàn tay,sau đó massage nhẹ nhàng (có thể dùng bông hoặc dùng tay) xung quanh mặt, để làm sạch bụi bẩn cũng như các vết trang điểm.");
    a[117] = new sanpham(117, "image/sp117.jpg", "Dưỡng da", "Rửa mặt", "Sữa rửa mặt", "Sisley Cleansing Milk With Sage 250ml", "Sisley Paris", 1706000, 30, "Thương hiệu mỹ phẩm Sisley Paris do Hubert D’Ornano và Isabelle D’Ornano đồng sáng lập vào năm 1976 - thời điểm ưa chuộng các phương pháp làm đẹp truyền thống. Với chiết xuất từ tự nhiên, các sản phẩm Sisley Paris đã ra đời và ngày càng được yêu thích tại thị trường châu Âu. Phương châm hoạt động của Sisley Paris chính là dựa vào tiến bộ khoa học kỹ thuật để khai thác thành phần tối ưu có trong thực vật cùng các loại tinh dầu để đưa vào sản phẩm. Hiện Sisley Paris đang có mặt tại năm châu lục, trên 90 quốc gia với hơn 4000 đối tác toàn cầu.", "Cho lượng sữa rửa mặt vừa đủ ra lòng bàn tay để tạo bọt và thoa lên mặt theo chuyển động tròn để làm sạch da, kết hợp massage nhẹ nhàng.");
    a[118] = new sanpham(118, "image/sp118.jpg", "Dưỡng da", "Rửa mặt", "Sữa rửa mặt", "Cosrx Low PH Good Morning Gel Cleanser 150 ml", "Cosrx", 219000, 30, "COSRX là thương hiệu mỹ phẩm Hàn Quốc được ra đời và phát triển dựa trên nền tảng số liệu nghiên cứu khách hàng trong vòng 10 năm. Với COSRX, làm đẹp không phải là mục tiêu hàng đầu mà cần ưu tiên nhất là một làn da khỏe mạnh. Hãng chuyên sản xuất các sản phẩm dành cho da mụn với việc sử dụng các thành phần tự nhiên nên lành tính và dịu nhẹ với da bạn, kể cả da nhạy cảm.", " Làm ướt mặt và tay. Lấy một lượng vừa đủ và tạo bọt.- Thoa kem bọt lên khắp mặt và mát xa theo chuyển động tròn đều. - Rửa sạch lại bằng nước.Sử dụng 2 lần / ngày(sáng và tối). ");
    a[119] = new sanpham(119, "image/sp119.jpg", "Dưỡng da", "Rửa mặt", "Dụng cụ rửa mặt", " TWOSOME SET 3", "TWOSOME", 1150000, 30, "Halio là thương hiệu máy rửa mặt sử dụng công nghệ Sonic Wave Cleansing giúp làm sạch sâu gấp 10 lần và loại bỏ tới 99% dầu thừa cũng như lớp trang điểm còn sót lại mà vẫn dịu nhẹ không gây lão hoá cho làn da. Đồng thời, Halio cũng giúp massage thư giãn khuôn mặt sau một ngày làm việc căng thẳng. ", "Sử dụng máy rửa mặt Halio 2 lần mỗi ngày, mỗi lần 1 phút để làm sạch sâu và thư giãn làn da.");
    a[120] = new sanpham(120, "image/sp120.jpg", "Dưỡng da", "Rửa mặt", "Nước hoa hồng", "Naruko RJT Supercritical CO2 Pore Minimizing and Brightening Lotion 150 ml", "Naruko", 271000, 30, "Toner ý dĩ nhân đỏ Naruko cải thiện tình trạng lỗ chân lông thô to và các vùng da tối màu; điều tiết, duy trì và cân bằng lượng dầu cần thiết; hấp thụ tinh dầu dưỡng chất; tái tạo làm mới tế bào biểu bì da; giúp lỗ chân lông lưu thông không bị tắc nghẽn; giúp da luôn săn chắc; tăng cường độ sáng bóng trên da; hiệu quả dưỡng ẩm cao, hỗ trợ hấp thụ sâu các dưỡng chất vào sâu nuôi dưỡng da", "Làm ướt mặt và tay. Lấy một lượng vừa đủ và tạo bọt.- Thoa kem bọt lên khắp mặt và mát xa theo chuyển động tròn đều. - Rửa sạch lại bằng nước.Sử dụng 2 lần / ngày(sáng và tối). ");
    a[121] = new sanpham(121, "image/sp121.jpg", "Dưỡng da", "Rửa mặt", "Nước hoa hồng", "PIXI Rose Tonic 100 ml", "Pixi by Petra", 299000, 30, "Pixi Rose Tonic: Chứa chiết xuất từ hoa hồng, nó vừa làm ẩm và làm trẻ hóa làn da dễ mẫn cảm. Em nó cũng chứa các thành phần dưỡng da khác như hoa hướng dương, làm sáng và nhẹ nhàng tái tạo da, trong khi đó lô hội và hoa cúc đóng vai trò như một tấm chắn bảo vệ an toàn, giúp loại bỏ những vết khô và giảm mẩn đỏ.", "Làm ướt mặt và tay. Lấy một lượng vừa đủ và tạo bọt.- Thoa kem bọt lên khắp mặt và mát xa theo chuyển động tròn đều. - Rửa sạch lại bằng nước.Sử dụng 2 lần / ngày(sáng và tối). ");
    a[122] = new sanpham(122, "image/sp122.jpg", "Dưỡng da", "Rửa mặt", "Nước hoa hồng", "PIXI Retinol Tonic 100 ml", " Pixi by Petra", 299000, 30, "Pixi Retinol Tonic: Pixi mới cho ra đời sản phẩm chứa Retinol dạng Toner lỏng đầu tiên trên thị trường đặc biệt dùng hàng ngày", "Làm ướt mặt và tay. Lấy một lượng vừa đủ và tạo bọt.- Thoa kem bọt lên khắp mặt và mát xa theo chuyển động tròn đều. - Rửa sạch lại bằng nước.Sử dụng 2 lần / ngày(sáng và tối). ");
    a[123] = new sanpham(123, "image/sp123.jpg", "Dưỡng da", "Rửa mặt", "Nước hoa hồng", "PIXI Vitamin C Tonic 100 ml", " Pixi by Petra", 690000, 30, "Siêu cung cấp độ sáng tự nhiên cho da với PIXI Vitamin-C Tonic; một loại nước hoa hồng nhẹ và tươi mát, có khả năng chống oxy hóa, giúp điều chỉnh rõ rệt các đốm đen và làm sáng da, thúc đẩy sự rạng rỡ mới mẻ.", "Làm ướt mặt và tay. Lấy một lượng vừa đủ và tạo bọt.- Thoa kem bọt lên khắp mặt và mát xa theo chuyển động tròn đều. - Rửa sạch lại bằng nước.Sử dụng 2 lần / ngày(sáng và tối). ");
    a[124] = new sanpham(124, "image/sp124.jpg", "Dưỡng da", "Rửa mặt", "Nước hoa hồng", "Mario Badescu Glycolic Acid Toner - 236ml ", "Mario Badescu", 485000, 30, "Thương hiệu Mario Badescu được thành lập vào năm 1967. Ban đầu chỉ là một cửa tiệm nhỏ, Trải qua 50 năm Mario Badescu đã tiếp tục vươn xa, phát triển mạnh mẽ thêm các dòng sản phẩm chăm sóc da. Từ các sản phẩm hỗ trợ trị mụn cho đến các sản phẩm chống lão hóa. Mario Badescu luôn cố gắng cải thiện các phát đồ trị liệu thích hợp cho nhu cầu người sử dụng. “Simple, Gentle, and Effective Skin Care” – triết lý thương hiệu kinh doanh của Mario Badescu.", "Làm ướt mặt và tay. Lấy một lượng vừa đủ và tạo bọt.- Thoa kem bọt lên khắp mặt và mát xa theo chuyển động tròn đều. - Rửa sạch lại bằng nước.Sử dụng 2 lần / ngày(sáng và tối). ");
    a[125] = new sanpham(125, "image/sp125.jpg", "Dưỡng da", "Rửa mặt", "Nước hoa hồng", "MAMONDE ROSE WATER TONER MINI SIZE 25ml", " Mamonde", 96000, 30, "Mamonde là một thương hiệu mỹ phẩm và chăm sóc da nổi tiếng của Hàn Quốc, thuộc Tập đoàn mỹ phẩm AmorePacific được thành lập năm 1991, tên của thương hiệu bắt nguồn từ Ma Monde nghĩa là Thế giới của tôi” trong Tiếng Pháp.Mamonde đa dạng về các sản phẩm chăm sóc da và trang điểm với thành phần có nguồn gốc từ tự nhiên, chiết xuất từ hoa hồng, hoa trà, hoa sen và hoa nhài...", "Làm ướt mặt và tay. Lấy một lượng vừa đủ và tạo bọt.- Thoa kem bọt lên khắp mặt và mát xa theo chuyển động tròn đều. - Rửa sạch lại bằng nước.Sử dụng 2 lần / ngày(sáng và tối). ");
    a[126] = new sanpham(126, "image/sp126.jpg", "Dưỡng da", "Rửa mặt", "Nước hoa hồng", "PIXI Glow Tonic - 250ml ", " Pixi by Petra", 795000, 30, "Pixi là thương hiệu mỹ phẩm tầm trung rất nổi tiếng tại Anh Quốc. Sản phẩm bán chạy nhất của hãng là nước hoa hồng tẩy da chết Glow Tonic, đây là sản phẩm yêu thích của nhiều beauty blogger và đã lọt top 5 sản phẩm bán chạy nhất trên ASOS. Là một trong những sản phẩm được ưa chuộng nhất của thương hiệu Pixi, nước hoa hồng PIXI Glow Tonic 250ml hứa hẹn sẽ giúp bạn chăm sóc làn da khỏe đẹp và tươi tắn nhờ những thành phần dưỡng chất tự nhiên siêu lành tính.", "Làm ướt mặt và tay. Lấy một lượng vừa đủ và tạo bọt.- Thoa kem bọt lên khắp mặt và mát xa theo chuyển động tròn đều. - Rửa sạch lại bằng nước.Sử dụng 2 lần / ngày(sáng và tối). ");
    a[127] = new sanpham(127, "image/sp127.jpg", "Dưỡng da", "Rửa mặt", "Nước hoa hồng", "Kiehl's Calendula Herbal Extract Alcohol-Free Toner 40 ml", " Kiehl's", 199000, 30, "Kiehl's là một thương hiệu mỹ phẩm Hoa Kỳ chuyên kinh doanh sản phẩm dưỡng da, tóc và dưỡng thể cao cấp. Khởi đầu từ một hiệu thuốc đơn lẻ ở Manhattan tại Đại lộ Thứ ba và phía đông tuyến đường 13 vào năm 1851. Kiehl's bắt đầu với một mục tiêu duy nhất: đưa sản phẩm chăm sóc da chất lượng cao đến với công chúng. Kết hợp sức mạnh của thiên nhiên và đạo đức của khoa học, thương hiệu tiếp tục hài lòng với các sản phẩm mạnh mẽ, hiệu quả, trong khi vẫn bắt nguồn từ di sản lưu trữ của nó. Kiehl's đã được L'Oréal mua vào năm 2000 và hiện có hơn 250 cửa hàng bán lẻ trên toàn thế giới và hơn 1.000 điểm bán độc lập khác. Các sản phẩm từ Kiehl's luôn được sự tin dùng và ưa chuộng của khách hàng trên toàn thế giới. ", "Làm ướt mặt và tay. Lấy một lượng vừa đủ và tạo bọt.- Thoa kem bọt lên khắp mặt và mát xa theo chuyển động tròn đều. - Rửa sạch lại bằng nước.Sử dụng 2 lần / ngày(sáng và tối). ");
    a[128] = new sanpham(128, "image/sp128.jpg", "Dưỡng da", "Mặt nạ", "Mặt Nạ Giấy", "JMSOLUTION MARINE LUMINOUS PEARL DEEP BALANCING MASK 27ML", "JMsolution", 22000, 30, "Mặt Nạ Chăm Sóc Da Sáng Mịn Chiết Xuất Từ Ngọc Trai Đen Hàn Quốc JMsolution Marine Luminous Black Pearl Balancing Mask gồm ba bước chăm sóc da cơ bản theo tiêu chuẩn của người Hàn Quốc là rửa mặt, đắp mặt nạ và dưỡng ẩm cho da. Sản phẩm được chiết xuất từ ngọc trai đen, một loại nguyên liệu làm đẹp quý hiếm và cho hiệu quả tuyệt vời khi sử dụng.", "Sau khi làm sạch da mặt trải đều mặt nạ lên da rồi thư giãn 10~15 phút.  Bỏ lớp mặt nạ giấy ra rồi dùng tay vỗ nhẹ để dưỡng chất thẩm thấu tốt hơn vào da. Dùng toner và các bước dưỡng da tiếp theo mà không cần rửa lại với nước");
    a[129] = new sanpham(129, "image/sp129.jpg", "Dưỡng da", "Mặt nạ", "Mặt Nạ Giấy", "Naruko RJT Pore Minimizing and Brightening Mask ", "Naruko", 30000, 30, "Naruko được sáng lập ra bởi chuyên gia mỹ phẩm nổi tiếng, và cũng là cha đẻ của ngành mỹ phẩm Đài Loan: ông Ngưu Dục Lân. Thực chất Naruko chính là viết tắt của các từ N - Niuer ( tên nhà sáng lập ), A - Affordable ( giá cả phải chăng), R - Refine (tinh tế), U - Unique (độc đáo), K - Kindness (thái độ làm việc ân cần), O - Original (sản phẩm luôn đạt chất lượng đồng bộ không đổi).", "Làm ướt mặt và tay. Lấy một lượng vừa đủ và tạo bọt.- Thoa kem bọt lên khắp mặt và mát xa theo chuyển động tròn đều. - Rửa sạch lại bằng nước.Sử dụng 2 lần / ngày(sáng và tối). ");
    a[130] = new sanpham(130, "image/sp130.jpg", "Dưỡng da", "Mặt nạ", "Mặt Nạ Giấy", "Naruko Tea Tree Shine Control and Blemish Clear Mask ", "Naruko", 30000, 30, "Naruko được sáng lập ra bởi chuyên gia mỹ phẩm nổi tiếng, và cũng là cha đẻ của ngành mỹ phẩm Đài Loan: ông Ngưu Dục Lân. Thực chất Naruko chính là viết tắt của các từ N - Niuer ( tên nhà sáng lập ), A - Affordable ( giá cả phải chăng), R - Refine (tinh tế), U - Unique (độc đáo), K - Kindness (thái độ làm việc ân cần), O - Original (sản phẩm luôn đạt chất lượng đồng bộ không đổi", "Sau khi làm sạch da mặt trải đều mặt nạ lên da rồi thư giãn 10~15 phút.  Bỏ lớp mặt nạ giấy ra rồi dùng tay vỗ nhẹ để dưỡng chất thẩm thấu tốt hơn vào da. Dùng toner và các bước dưỡng da tiếp theo mà không cần rửa lại với nước");
    a[131] = new sanpham(131, "image/sp131.jpg", "Dưỡng da", "Mặt nạ", "Mặt Nạ Giấy", "Huxley Spa Routine Kit", " Huxley", 899000, 30, "Bắt đầu nổi lên như một thương hiệu mỹ phẩm cao cấp với các sản phẩm chăm sóc da chứa thành phần dầu hạt cây xương rồng Prickly Pear. Huxley - thương hiệu mỹ phẩm đến tứ xứ sở kim chi Hàn Quốc là một biểu tượng đương đại, khám phá những thành phần chưa được biết đến, hoàn thiện và dẫn dắt xu hướng mới của vẻ đẹp hiện đại. Thương hiệu mỹ phẩm Huxley đã học hỏi phương pháp làm đẹp cổ xưa của những người phụ nữ Berber ở xứ sở Morocco, sử dụng tinh dầu chiết xuất từ hạt của giống xương rồng Prickly Pear, có tác dụng tốt cho làn da phải luôn đối mặt với tình trạng mất nước. Theo đuổi triết lý “Less is more” và những tiến bộ về tư duy làm đẹp hiện đại, sản phẩm của Huxley ngoài sử dụng thành phần xương rồng hữu cơ và sản xuất thủ công, còn đạt tiêu chuẩn: không cồn, paraben, dầu khoáng, hương thơm tổng hợp và các chất bảo quản khác.", "Bước 1: Sau khi làm sạch da với sữa rửa mặt, cho một lượng vừa đủ mặt nạ tẩy tế bào chết Huxley Scrub Mask; Sweet Therapy lên mặt và massage nhẹ nhàng trong vòng 1 phút rồi rửa lại bằng nước sạch. Bước 2: Dùng toner để cân bằng da và bắt đầu sử dụng mặt nạ Huxley Healing Mask; Keep Calm.Thoa đều lên mặt và đợi khoảng 10 - 15 phút trước khi rửa sạch với nước . Bước 3. Dùng một lượng mặt nạ ngủ Huxley Sleep Mask; Good Night, thoa đều lên mặt, để nguyên qua đêm và rửa lại mặt vào sáng hôm sau.. Lưu ý: Mỗi tuần dùng Huxley Spa Routine Trio Set 2 lần để đạt hiệu quả.");
    a[132] = new sanpham(132, "image/sp132.jpg", "Dưỡng da", "Mặt nạ", "Mặt Nạ Giấy", "Mulbit Firming Sleeping Mask", "Mulbit", 200000, 30, "Mulbit là thương hiệu mĩ phẩm thuộc tập đoàn First Cosmetics của Hàn, đây là thương hiệu mới xuất hiện từ năm 2016 nhưng nhanh chóng có mặt tại nhiều quốc gia như Trung quốc, Nhật Bản, Thái Lan, Mĩ, Philippine và cả Việt Nam. Các sản phẩm từ Mulbit thân thiện với da được phát triển bởi các chuyên gia từ mọi tầng lớp để loại bỏ các yếu tố hóa học gây ra các vấn đề về da. Thương hiệu đạt được nhiều giải thưởng như: Asia WangHong Super Challange (2018), Asian Top Brand Award (2017), Asia First Brand Award (2016),..Đây cũng là thương hiệu được nhiều ca sĩ, diễn viên của Hàn quốc ưa chuộng sử dụng.", "Sau khi rửa mặt, vỗ cho ráo nước, cân bằng da với toner. Cẩn thận đắp miếng mặt nạ lên sao cho vừa khít với khuôn mặt. Thư giãn trong 15-20 phút.  Gỡ miếng nạ ra, không rửa mặt lại, massage để các dưỡng chất còn thừa hấp thụ hết vào da.");
    a[133] = new sanpham(133, "image/sp133.jpg", "Dưỡng da", "Mặt nạ", "Mặt Nạ Giấy", "Mặt nạ lụa sinh học OKAME Bio - cellulose Mask - Set 5 Anti - aging Masks", "OKAME Skincare", 299000, 30, "OKAME - hay còn gọi là Otafuku - là loại mặt nạ truyền thống của Nhật Bản, có nghĩa là Tortoise, một loại biểu tượng cho sự vĩnh cửu và cuộc sống lâu dài.Mặt nạ có hình ảnh khuôn mặt người phụ nữ cười rạng rỡ với một làn da tươi tắn, mang tới niềm vui cho những người xung quanh.Lấy cảm hứng từ biểu tượng văn hoá này, OKAME tự hào cho ra đời dòng mặt nạ dưỡng da vượt trội với chất liệu Bio - cellulose(lụa sinh học) với nguyện vọng mang đến cho phụ nữ Châu Á một làn da khoẻ đẹp.Các sản phẩm của OKAME được chứng nhận không chứa chất tạo màu, hương thơm nhân tạo(perfume) và chất bảo quản hoá học(parabens).", "Sau khi làm sạch da mặt trải đều mặt nạ lên da rồi thư giãn 10~15 phút.  Bỏ lớp mặt nạ giấy ra rồi dùng tay vỗ nhẹ để dưỡng chất thẩm thấu tốt hơn vào da. Dùng toner và các bước dưỡng da tiếp theo mà không cần rửa lại với nước");
    a[134] = new sanpham(134, "image/sp134.jpg", "Dưỡng da", "Mặt nạ", "Mặt Nạ Giấy", "Kiehl's Calendula & Aloe Soothing Hydration Masque 14ml", " Kiehl's", 260000, 30, "Kiehl's là một thương hiệu mỹ phẩm Hoa Kỳ chuyên kinh doanh sản phẩm dưỡng da, tóc và dưỡng thể cao cấp. Khởi đầu từ một hiệu thuốc đơn lẻ ở Manhattan tại Đại lộ Thứ ba và phía đông tuyến đường 13 vào năm 1851. Kiehl's bắt đầu với một mục tiêu duy nhất: đưa sản phẩm chăm sóc da chất lượng cao đến với công chúng. Kết hợp sức mạnh của thiên nhiên và đạo đức của khoa học, thương hiệu tiếp tục hài lòng với các sản phẩm mạnh mẽ, hiệu quả, trong khi vẫn bắt nguồn từ di sản lưu trữ của nó. Kiehl's đã được L'Oréal mua vào năm 2000 và hiện có hơn 250 cửa hàng bán lẻ trên toàn thế giới và hơn 1.000 điểm bán độc lập khác. Các sản phẩm từ Kiehl's luôn được sự tin dùng và ưa chuộng của khách hàng trên toàn thế giới", "Đắp một lượng mặt nạ vừa đủ lên da sạch và để trong 5 phút Rửa lại với nước ấm và massage nhẹ nhàng theo chuyển động trònThấm khô mặt với khăn mềm. Tránh tiếp xúc vùng mắt.Trong trường hợp tiếp túc với mắt, hãy rửa lại ngay với nước sạch. Nên sử dụng 3 lần một tuần.");
    a[135] = new sanpham(135, "image/sp135.jpg", "Dưỡng da", "Mặt nạ", "Mặt Nạ Giấy", "Laneige Water Sleeping Mask 15ml", " Laneige", 88000, 30, "Laneige là một thương hiệu mỹ phẩm của Hàn Quốc được sáng lập vào năm 1994 bởi Tập đoàn mỹ phẩm đình đám Amore Pacific- nơi sở hữu 30 nhãn hiệu mĩ phẩm từ cao cấp đến bình dân của xứ sở Kim Chi. Laneige tin rằng mọi người đều có một nét quyến rũ lấp lánh. Vẻ đẹp của chính bạn khiến bạn tỏa sáng với sự tự tin mọi lúc mọi nơi. Bắt đầu từ Hồng Kông và Thượng Hải, Trung Quốc vào năm 2002, Laneige đã xâm nhập thị trường toàn cầu và trở thành thương hiệu yêu thích của phụ nữ châu Á với các sản phẩm sáng tạo dẫn đầu xu hướng làm đẹp theo xu hướng và lối sống của phụ nữ trẻ trên toàn thế giới. ", "Sử dụng 2- 3 lần một tuần.");
    a[136] = new sanpham(136, "image/sp136.jpg", "Dưỡng da", "Mặt nạ", "Mặt Nạ Giấy", " Andalou Naturals Skin Food Mask, Avo Cocoa", " Andalou Naturals", 390000, 30, "Andalou Naturals là cái tên đã có mặt hơn 30 năm nay trên thị trường mỹ phẩm thiên nhiên và 20 năm đi đầu với dòng sản phẩm organic. Đây cũng là thương hiệu đầu tiên được nhận chứng nhận tiêu chuẩn cho các sản phẩm hữu cơ và nói không với nguyên liệu biến đổi gen độc hại. Với Andalou Naturals, được trải nghiệm những sản phẩm tự nhiên là lựa chọn mà ai cũng xứng đáng có.", "Sau khi làm sạch da mặt trải đều mặt nạ lên da rồi thư giãn 10~15 phút.  Bỏ lớp mặt nạ giấy ra rồi dùng tay vỗ nhẹ để dưỡng chất thẩm thấu tốt hơn vào da. Dùng toner và các bước dưỡng da tiếp theo mà không cần rửa lại với nước");
    a[137] = new sanpham(137, "image/sp137.jpg", "Dưỡng da", "Dưỡng ẩm", "Kem dưỡng", "CHARLOTTE TILBURY Charlotte's Magic Cream 30 ml", "Charlotte Tilbury", 1138000, 30, "Kem dưỡng da Charlotte’s Magic Cream với công thức Instant Turnaround Moisturiser Hydratant Instantané được ví như phép lạ cho làn da, Magic Cream chứa đựng bí quyết chống lão hoá, bổ sung dưỡng chất cải thiện làn da hư tổn, không đều màu thiếu sức sống trở nên rạng rỡ và ngậm nước tuyệt hảo nuôi dưỡng da từ sâu bên trong.", "Sau khi làm sạch mặt và dùng toner mỗi sáng và tối, thoa đều một lượng sản phẩm vừa đủ lên mặt, tránh vùng mắt. Nếu sản phẩm dính vào mắt, rửa sạch lại với nước.");
    a[138] = new sanpham(138, "image/sp138.jpg", "Dưỡng da", "Dưỡng ẩm", "Kem dưỡng", "OMOROVICZA REJUVENATING NIGHT CREAM 15ml", "OMOROVICZA", 700000, 30, "Stephen và Margaret-cặp vợ chồng là những bác sĩ da liễu từng đoạt giải Nobel đã phát triển hệ thống thương hiệu Healing Concentrate ™ để cung cấp các khoáng chất trị liệu, mang lại một làn da trẻ trung hơn. Các sản phẩm chứa khoáng chất với các hoạt chất tự nhiên khác như làm sạch bùn đất Hungary, các sản phẩm của Omorovicza đã có được sự sùng bái trên toàn thế giới nhờ các đặc tính chống lão hóa, phát sáng. Được kết hợp với các vitamin tốt nhất, tinh dầu và các thành phần tự nhiên khác có nguồn gốc từ khắp nơi trên thế giới, từ lòng hồ Heviz đến đỉnh núi Andes. Stephen và Margaret tin rằng sắc đẹp chỉ đến khi các sản phẩm chăm sóc da không chứa các thành phần có hại, gây bí bách cho da, cũng như vẻ đẹp đẹp hiện đại là sự kết hợp hoàn hảo của các thành phần truyền thống và các công thức khoa học tiên tiến. ", "Sau khi rửa mặt, thoa kem đều lên mặt và cổ, mát xa sâu vào da bằng chuyển động tròn.  Dành cho da khô và da hỗn hợp / loại thường.");
    a[139] = new sanpham(139, "image/sp139.jpg", "Dưỡng da", "Dưỡng ẩm", "Kem dưỡng", "Malin + Goetz Vitamin E Face Moisturizer 30ml", ": MALIN+GOETZ", 304000, 30, "Malin + Goetz Vitamin E Face Moisturizer 30ml . Kem dưỡng ẩm không chứa cặn được tổng hợp các chất chống oxy hóa như Vitamin E, B5 và hoa cúc, làm dịu da, cân bằng da kể cả da nhạy cảm ", "Sau khi làm sạch mặt và dùng toner mỗi sáng và tối, thoa đều một lượng sản phẩm vừa đủ lên mặt, tránh vùng mắt. Nếu sản phẩm dính vào mắt, rửa sạch lại với nước.");
    a[140] = new sanpham(140, "image/sp140.jpg", "Dưỡng da", "Dưỡng ẩm", "Kem dưỡng", "AHC Capture White Solution Max Cream 50ml", " AHC", 258000, 30, "Kem Dưỡng Trắng Da AHC Capture White Solution Max Cream giúp dưỡng trắng, chống oxy hóa, giảm thiệu sự hình thành nếp nhăn và dưỡng ẩm, giúp cho những làn da xỉn màu và tái nhợt trở nên trắng sáng và hồng hào, chống lại các gốc tự do xấu giúp cho làn da luôn tươi trẻ và tràn đầy sức sống.", "Bước cuối cùng trong chu trình chăm sóc da hằng ngày.. Lấy một lượng vừa đủ thoa đều lên mặt vỗ nhẹ để dưỡng chất được hấp thụ tối đa. Sử dụng hai lần sáng - tối mỗi ngày để phát huy tốt hiệu quả công dụng của sản phẩm(vào ban ngày nên sử dụng kem chống nắng để bảo vệ da khỏi tác động của ánh nắng mặt trời)");
    a[141] = new sanpham(141, "image/sp141.jpg", "Dưỡng da", "Dưỡng ẩm", "Kem dưỡng", "Some By Mi AHA BHA PHA 30 Days Miracle Cream", " Some By Mi", 353000, 30, "Some By Mi là một thương hiệu Hàn Quốc chuyên sản xuất các sản phẩm làm đẹp thiết thực nhưng vẫn hợp thời trang. Các sản phẩm của hãng được chiết xuất từ các thành phần thiên nhiên, kể cả các sản phẩm chăm sóc da đến các sản phẩm trang điểm.", "Sử dụng kem dưỡng sau khi rửa mặt sạch và thoa toner. . Thoa một lượng kem vừa đủ lên da, massage nhẹ nhàng và vỗ nhẹ để dưỡng chất thẩm thấu vào da. ");
    a[142] = new sanpham(142, "image/sp142.jpg", "Dưỡng da", "Dưỡng ẩm", "Kem dưỡng", "Dermedic ANGIO PREVENTI NANO VIT C Active anti - wrinkle night cream ", " Dermedic", 272000, 30, "Dermedic là thương hiệu dược mỹ phẩm được phát triển từ công ty dược mỹ phẩm Biogend, thành lập năm 1949. Có mặt trên thị trường hơn 15 năm, Dermedic đã trở thành thương hiệu được các chuyên gia da liễu khuyễn khích khuyên dùng. Mỗi sản phẩm của Dermedic đều đáp ứng được tiêu chí: Phù hợp với cả làn da nhạy... Kem dưỡng da ban đêm Dermedic ANGIO PREVENTI NANO VIT C active Anti - wrinkle thuộc dòng sản phẩm cao cấp ANGIO dành cho da gặp những vấn đề như mẫn đỏ hoặc hiện rõ những đường mạch máu trên bề mặt da. ", "Thoa một lượng kem lên mặt và cổ, massage nhẹ nhàng để tăng cường thẩm thấu.");
    a[143] = new sanpham(143, "image/sp143.jpg", "Dưỡng da", "Dưỡng ẩm", "Kem dưỡng", "Sunday Riley Good Genes All in One Lactic Acid Treatment 50 ml", "Sunday Riley", 3590000, 30, "Sunday Riley ra mắt thương hiệu chăm sóc da cùng tên của mình Sunday Riley Modern Skincare vào năm 2009. Gần một thập kỷ sau, thương hiệu của cô, thường được biết đến với cái tên Sunday Riley, nổi tiếng khắp thế giới với hàng loạt các sản phẩm cao cấp và được bán tại các nhà bán lẻ bao gồm Sephora, Nordstrom, Bloomingdale's và Amazon. Thương hiệu là người tiên phong trong lĩnh vực công nghệ xanh", "Được Riley mô tả trong một cuộc phỏng vấn với The Cut là khả năng đặc biệt cân bằng các hoạt chất dựa trên khoa học với thực vật học. ", "Sau khi làm sạch mặt và dùng toner mỗi sáng và tối, thoa đều một lượng sản phẩm vừa đủ lên mặt, tránh vùng mắt. Nếu sản phẩm dính vào mắt, rửa sạch lại với nước.");
    a[144] = new sanpham(144, "image/sp144.jpg", "Dưỡng da", "Dưỡng ẩm", "Sữa dưỡng", "Clinique iD™: Hydrating Jelly + Cartridge for Irritation 125ml ", " Clinique", 845000, 30, "Nhãn hiệu Clinique được thành lập sau khi cô con dâu của Estée Lauder là cô Evelyn Lauder đọc một bài trên tạp chí Vogue có tựa đề là Làm thế nào để có được một làn da hoàn hảo. Vào tháng 8 năm 1968, nhãn hiệu dưỡng da Clinique đã ra mắt với cam kết mọi sản phẩm đều được kiểm nghiệm dị ứng và 100% không pha hương liệu – điều đó rất có ý nghĩa khi dị ứng đang là mối quan tâm lớn trong điều kiện môi trường ô nhiễm hiện nay.Clinique là nhãn hiệu mỹ phẩm được phát triển bởi Bác Sĩ Da Liễu. Trước khi sản xuất các sản phẩm mới, Clinique đều tổ chức các buổi thử nghiệm với 600 người tình nguyện. Hiện nhãn hiệu này đang được tập đoàn mỹ phẩm Estée Lauder quản lý.", "Sau khi làm sạch mặt và dùng toner mỗi sáng và tối, thoa đều một lượng sản phẩm vừa đủ lên mặt, tránh vùng mắt. Nếu sản phẩm dính vào mắt, rửa sạch lại với nước.");
    a[145] = new sanpham(145, "image/sp145.jpg", "Dưỡng da", "Dưỡng ẩm", "Sữa dưỡng", "Clinique iD™: Hydrating Jelly + Cartridge for Fatigue 125ml", " Clinique", 845000, 30, "Nhãn hiệu Clinique được thành lập sau khi cô con dâu của Estée Lauder là cô Evelyn Lauder đọc một bài trên tạp chí Vogue có tựa đề là Làm thế nào để có được một làn da hoàn hảo. Vào tháng 8 năm 1968, nhãn hiệu dưỡng da Clinique đã ra mắt với cam kết mọi sản phẩm đều được kiểm nghiệm dị ứng và 100% không pha hương liệu – điều đó rất có ý nghĩa khi dị ứng đang là mối quan tâm lớn trong điều kiện môi trường ô nhiễm hiện nay.Clinique là nhãn hiệu mỹ phẩm được phát triển bởi Bác Sĩ Da Liễu. Trước khi sản xuất các sản phẩm mới, Clinique đều tổ chức các buổi thử nghiệm với 600 người tình nguyện. Hiện nhãn hiệu này đang được tập đoàn mỹ phẩm Estée Lauder quản lý.", "Sau khi làm sạch da bằng sữa rửa mặt (Clarifying Cleanser), cân bằng da với toner (Clarifying Toner) và cung cấp dưỡng chất với các sản phẩm điều trị , bạn thoa kem dưỡng kiểm soát dầu Oil-Control Mattifier SPF 15 PA++ lên toàn mặt, cổ và vùng hở ngực. Sản phẩm này chỉ dùng vào buổi sáng. Thế nên, bạn nên bổ sung kem dưỡng ẩm ban đêm dành cho da dầu Skin Perfecting Lotion vào quy trình chăm sóc da buổi tối. ");
    a[146] = new sanpham(146, "image/sp146.jpg", "Dưỡng da", "Dưỡng ẩm", "Sữa dưỡng", "Clinique iD™: Oil - Control Gel + Cartridge for Pores & Uneven Texture 125ml", "Clinique", 1300000, 30, "Nhãn hiệu Clinique được thành lập sau khi cô con dâu của Estée Lauder là cô Evelyn Lauder đọc một bài trên tạp chí Vogue có tựa đề là Làm thế nào để có được một làn da hoàn hảo. Vào tháng 8 năm 1968, nhãn hiệu dưỡng da Clinique đã ra mắt với cam kết mọi sản phẩm đều được kiểm nghiệm dị ứng và 100% không pha hương liệu – điều đó rất có ý nghĩa khi dị ứng đang là mối quan tâm lớn trong điều kiện môi trường ô nhiễm hiện nay.Clinique là nhãn hiệu mỹ phẩm được phát triển bởi Bác Sĩ Da Liễu. Trước khi sản xuất các sản phẩm mới, Clinique đều tổ chức các buổi thử nghiệm với 600 người tình nguyện. Hiện nhãn hiệu này đang được tập đoàn mỹ phẩm Estée Lauder quản lý.", "Sau khi làm sạch da bằng sữa rửa mặt (Clarifying Cleanser), cân bằng da với toner (Clarifying Toner) và cung cấp dưỡng chất với các sản phẩm điều trị , bạn thoa kem dưỡng kiểm soát dầu Oil-Control Mattifier SPF 15 PA++ lên toàn mặt, cổ và vùng hở ngực. Sản phẩm này chỉ dùng vào buổi sáng. Thế nên, bạn nên bổ sung kem dưỡng ẩm ban đêm dành cho da dầu Skin Perfecting Lotion vào quy trình chăm sóc da buổi tối. ");
    a[147] = new sanpham(147, "image/sp147.jpg", "Dưỡng da", "Dưỡng ẩm", "Sữa dưỡng", "Oribe Matte Waves Texture Lotion 15ml", " Oribe", 99000, 30, "Oribe  Matte Waves Texture Lotion 15ml", "Sau khi làm sạch da bằng sữa rửa mặt (Clarifying Cleanser), cân bằng da với toner (Clarifying Toner) và cung cấp dưỡng chất với các sản phẩm điều trị , bạn thoa kem dưỡng kiểm soát dầu Oil-Control Mattifier SPF 15 PA++ lên toàn mặt, cổ và vùng hở ngực. Sản phẩm này chỉ dùng vào buổi sáng. Thế nên, bạn nên bổ sung kem dưỡng ẩm ban đêm dành cho da dầu Skin Perfecting Lotion vào quy trình chăm sóc da buổi tối. ");
    a[148] = new sanpham(148, "image/sp148.jpg", "Dưỡng da", "Dưỡng ẩm", "Sữa dưỡng", "Dr.Dennis Gross Alpha Beta® Exfoliating Moisturizer(4 ml)", " Dr. Dennis Gross Skincare", 240000, 30, " Kem dưỡng ẩm không chứa dầu - gồm bảy axit Alpha Beta® cộng với các hoạt chất bổ sung — giúp tăng cường độ ẩm của da mà không làm tắc nghẽn lỗ chân lông và hỗ trợ trong quá trình tạo tế bào cho làn da mịn màng và rạng rỡ. Khi da được làm mới thông qua tẩy tế bào chết và sau đó bổ sung tăng cường chất làm ẩm, hiệu quả được tăng lên rất nhiều lần. Kết quả nhận được là làn da ngậm nước, kết cấu săn chắc, và cải thiện sự xuất hiện của nếp nhăn và nếp nhăn.", "Sau khi làm sạch da bằng sữa rửa mặt (Clarifying Cleanser), cân bằng da với toner (Clarifying Toner) và cung cấp dưỡng chất với các sản phẩm điều trị , bạn thoa kem dưỡng kiểm soát dầu Oil-Control Mattifier SPF 15 PA++ lên toàn mặt, cổ và vùng hở ngực. Sản phẩm này chỉ dùng vào buổi sáng. Thế nên, bạn nên bổ sung kem dưỡng ẩm ban đêm dành cho da dầu Skin Perfecting Lotion vào quy trình chăm sóc da buổi tối. ");
    a[149] = new sanpham(149, "image/sp149.jpg", "Dưỡng da", "Dưỡng ẩm", "Sữa dưỡng", "MURAD Oil - Control Mattifier SPF 15 PA++", " Murad", 1032000, 30, "Murad là thương hiệu dược mĩ phẩm với 50 năm nghiên cứu và hơn 25 năm vận hành, sáng lập bởi Bác sĩ Howard Murad - bác sĩ da liễu, dược sĩ và giáo sư lâm sàng. Ông hiện là người sáng lập của Murad Skincare Inc. và Murad Inclusive Health Spa và cũng là Chủ tịch của Đại học Y tế Hòa nhập và Phó Giáo sư Y khoa lâm sàng tại Trường Y David Geffen tại UCLA. Dr.Murad là một trong những người tiên phong trong việc hydrat hóa tế bào và tiết lộ khả năng màng tế bào giữ nước là dấu hiệu cơ bản của sức khỏe tốt trẻ trung, là cha đẻ của Phương pháp chăm sóc da từ bên trong. Murad Skincare Inc. là một hệ thống sản phẩm điều trị cấp độ Bác sĩ số 1 tại Hoa Kỳ trong lĩnh vực chăm sóc da lâm sàng, đảm bảo sẽ mang lại sự khởi sắc cho làn da vì chỉ tại Murad bạn mới tìm được sự kết hợp giữa Thành tựu khoa học tân tiến và Kinh nghiệm làm nghề của Bác sỹ da liễu để tạo nên những sản phẩm chăm sóc da có hiệu quả cao, những viên uống chức năng và những chương trình cải thiện lối sống giúp mọi người Sống Đẹp – Sống Khỏe- Sống Chất Lượng.", "Sau khi làm sạch da bằng sữa rửa mặt (Clarifying Cleanser), cân bằng da với toner (Clarifying Toner) và cung cấp dưỡng chất với các sản phẩm điều trị , bạn thoa kem dưỡng kiểm soát dầu Oil-Control Mattifier SPF 15 PA++ lên toàn mặt, cổ và vùng hở ngực. Sản phẩm này chỉ dùng vào buổi sáng. Thế nên, bạn nên bổ sung kem dưỡng ẩm ban đêm dành cho da dầu Skin Perfecting Lotion vào quy trình chăm sóc da buổi tối. ");
    a[150] = new sanpham(150, "image/sp150.jpg", "Dưỡng da", "Dưỡng ẩm", "Sữa dưỡng", "Huxley Extra Moisture Duo Set", " Huxley", 1650000, 30, "Bắt đầu nổi lên như một thương hiệu mỹ phẩm cao cấp với các sản phẩm chăm sóc da chứa thành phần dầu hạt cây xương rồng Prickly Pear. Huxley - thương hiệu mỹ phẩm đến tứ xứ sở kim chi Hàn Quốc là một biểu tượng đương đại, khám phá những thành phần chưa được biết đến, hoàn thiện và dẫn dắt xu hướng mới của vẻ đẹp hiện đại. Thương hiệu mỹ phẩm Huxley đã học hỏi phương pháp làm đẹp cổ xưa của những người phụ nữ Berber ở xứ sở Morocco, sử dụng tinh dầu chiết xuất từ hạt của giống xương rồng Prickly Pear, có tác dụng tốt cho làn da phải luôn đối mặt với tình trạng mất nước. Theo đuổi triết lý “Less is more” và những tiến bộ về tư duy làm đẹp hiện đại, sản phẩm của Huxley ngoài sử dụng thành phần xương rồng hữu cơ và sản xuất thủ công, còn đạt tiêu chuẩn: không cồn, paraben, dầu khoáng, hương thơm tổng hợp và các chất bảo quản khác.", "Sáng, tối trước bước kem dưỡng, nhỏ 1-2 giọt ra tay, thoa nhẹ lên mặt, vỗ nhẹ để tinh chất thẩm thấu vào da.");
    a[151] = new sanpham(151, "image/sp151.jpg", "Dưỡng da", "Dưỡng ẩm", "Sữa dưỡng", "Huxley Antioxidant Duo Set", " Huxley", 1400000, 30, "Huxley là thương hiệu mỹ phẩm cao cấp tại Hàn Quốc nổi tiếng với các dòng sản phẩm chăm sóc da được chiết xuất từ hạt cây xương rồng hữu cơ. Với quy trình chiết xuất khép kín, HUXLEY không chỉ là mỹ phẩm đơn thuần, Các sản phẩm của Huxley chú trọng chữa trị tận gốc các vấn đề của da bằng cách sử dụng các thành phần đã được chứng minh là có tác dụng tốt và an toàn cho làn da. Huxley hiện đang là thương hiệu mỹ phẩm được ưa chuộng tại Âu-Mỹ bởi trọng tâm của họ chính là thành phần quý giá Pricky Pear Cactus Oil. Huxley được chứng nhân ecocert về độ lành tính.", "Sau khi làm sạch da bằng sữa rửa mặt (Clarifying Cleanser), cân bằng da với toner (Clarifying Toner) và cung cấp dưỡng chất với các sản phẩm điều trị , bạn thoa kem dưỡng kiểm soát dầu Oil-Control Mattifier SPF 15 PA++ lên toàn mặt, cổ và vùng hở ngực. Sản phẩm này chỉ dùng vào buổi sáng. Thế nên, bạn nên bổ sung kem dưỡng ẩm ban đêm dành cho da dầu Skin Perfecting Lotion vào quy trình chăm sóc da buổi tối. ");
    a[152] = new sanpham(152, "image/sp152.jpg", "Dưỡng da", "Dưỡng ẩm", "Sữa dưỡng", "Huxley Cream ; More than Moist", " Huxley", 595000, 30, "Huxley là thương hiệu mỹ phẩm cao cấp tại Hàn Quốc nổi tiếng với các dòng sản phẩm chăm sóc da được chiết xuất từ hạt cây xương rồng hữu cơ. Với quy trình chiết xuất khép kín, HUXLEY không chỉ là mỹ phẩm đơn thuần, Các sản phẩm của Huxley chú trọng chữa trị tận gốc các vấn đề của da bằng cách sử dụng các thành phần đã được chứng minh là có tác dụng tốt và an toàn cho làn da. Huxley hiện đang là thương hiệu mỹ phẩm được ưa chuộng tại Âu-Mỹ bởi trọng tâm của họ chính là thành phần quý giá Pricky Pear Cactus Oil. Huxley được chứng nhân ecocert về độ lành tính.", "Sử dụng vào mỗi sáng, tối sau bước dùng tinh chất dưỡng. Lấy lượng vừa đủ kem dưỡng đánh tan trên lòng bàn tay rồi thoa lên da. Lấy 1 giọt tinh dầu Huxley Oil ; Light and More trộn cùng với kem, sau đó thoa lên da sẽ có được trải ngiệm đáng ngạc nhiên về dưỡng ẩm cho da.");
    a[153] = new sanpham(153, "image/sp153.jpg", "Dưỡng da", "Dưỡng ẩm", "Gel Dưỡng", "Neutrogena Hydro Boost Water Gel", " Neutrogena", 434000, 30, "Neutrogena là một nhãn hiệu Mỹ về dưỡng da, dưỡng tóc và mỹ phẩm có trụ sở tại Los Angeles, California. Neutrogena được Emanuel Stolaroff sáng lập vào năm 1930 và ban đầu là một công ty mỹ phẩm có tên Natone. Đây là thương hiệu chăm sóc da được khuyên dùng cho bác sĩ da liễu số 1 cung cấp nhiều loại sản phẩm chăm sóc da và tóc. Neutrogena hiện là một thương hiệu của Gia đình Công ty Tiêu dùng Johnson & Johnson Family. Thương hiệu chăm sóc da được khuyên dùng bởi bác sĩ da liễu số 1, cung cấp một số dòng sản phẩm chăm sóc sắc đẹp và chăm sóc da được yêu thích nhất thế giới, đồng thời sản xuất và tiếp thị sản phẩm tại hơn 70 quốc gia.", " Sau khi rửa mặt sạch, cho 1 lượng gel bằng hạt đậu ra lòng bàn tay, chấm gel lên vùng trán, mũi, gò má, cằm, cổ và mát - xa nhẹ nhàng cho đến khi gel thấm hết vào da. Dùng 1 ngày 2 lần vào buổi sáng và tối.Trường hợp có trang điểm bôi dưới lớp trang điểm sẽ giữ được lớp trang điểm lâu trôi và da mịn màng ăn phấn hơn.");
    a[154] = new sanpham(154, "image/sp154.jpg", "Dưỡng da", "Dưỡng ẩm", "Gel Dưỡng", "Clinique Dramatically Different Moisturising Gel with pump 125 ml", " Clinique", 1210000, 30, "Nhãn hiệu Clinique được thành lập sau khi cô con dâu của Estée Lauder là cô Evelyn Lauder đọc một bài trên tạp chí Vogue có tựa đề là Làm thế nào để có được một làn da hoàn hảo. Vào tháng 8 năm 1968, nhãn hiệu dưỡng da Clinique đã ra mắt với cam kết mọi sản phẩm đều được kiểm nghiệm dị ứng và 100% không pha hương liệu – điều đó rất có ý nghĩa khi dị ứng đang là mối quan tâm lớn trong điều kiện môi trường ô nhiễm hiện nay.Clinique là nhãn hiệu mỹ phẩm được phát triển bởi Bác Sĩ Da Liễu. Trước khi sản xuất các sản phẩm mới, Clinique đều tổ chức các buổi thử nghiệm với 600 người tình nguyện. Hiện nhãn hiệu này đang được tập đoàn mỹ phẩm Estée Lauder quản lý.", "Có thể dùng 2 lần/ngày, sáng và tối");
    a[155] = new sanpham(155, "image/sp155.jpg", "Dưỡng da", "Dưỡng ẩm", "Dầu dưỡng", "Mario Badescu Oil Free Moisturizer - 59 ml ", "Mario Badescu", 432000, 30, "Thương hiệu Mario Badescu được thành lập vào năm 1967. Ban đầu chỉ là một cửa tiệm nhỏ, Trải qua 50 năm Mario Badescu đã tiếp tục vươn xa, phát triển mạnh mẽ thêm các dòng sản phẩm chăm sóc da. Từ các sản phẩm hỗ trợ trị mụn cho đến các sản phẩm chống lão hóa. Mario Badescu luôn cố gắng cải thiện các phát đồ trị liệu thích hợp cho nhu cầu người sử dụng. “Simple, Gentle, and Effective Skin Care” – triết lý thương hiệu kinh doanh của Mario Badescu.", "Sau khi làm sạch mặt và dùng toner mỗi sáng và tối, thoa đều một lượng sản phẩm vừa đủ lên mặt, tránh vùng mắt. Nếu sản phẩm dính vào mắt, rửa sạch lại với nước.");
    a[156] = new sanpham(156, "image/sp156.jpg", "Dưỡng da", "Dưỡng ẩm", "Dầu dưỡng", "Naruko Tea Tree Purifying Essential Oil 10 ml", "Naruko", 231000, 30, "Naruko là một trong những hãng có 100% thành phần chiết xuất từ thiên nhiên, giúp điều trị và xoa dịu làn da từ sâu trong lỗ chân lông. Naruko được thành lập từ những năm 2000 với chủ sở hữu thương hiệu là một nam beauty guru. ", "Hướng dẫn sử dụng: Sau khi rửa mặt sạch và thực hiện các bước dưỡng da cơ bản, lấy sản phẩm bôi trực tiếp lên vùng da bị mụn, sử dụng kèm các sản phẩm khác trong bộ sản phẩm để đạt hiệu quả tốt hơn.");
    a[157] = new sanpham(157, "image/sp157.jpg", "Dưỡng da", "Dưỡng ẩm", "Dầu dưỡng", "Huxley Extra Moisture Duo Set", "Huxley", 1650000, 30, "Bắt đầu nổi lên như một thương hiệu mỹ phẩm cao cấp với các sản phẩm chăm sóc da chứa thành phần dầu hạt cây xương rồng Prickly Pear. Huxley - thương hiệu mỹ phẩm đến tứ xứ sở kim chi Hàn Quốc là một biểu tượng đương đại, khám phá những thành phần chưa được biết đến, hoàn thiện và dẫn dắt xu hướng mới của vẻ đẹp hiện đại. Thương hiệu mỹ phẩm Huxley đã học hỏi phương pháp làm đẹp cổ xưa của những người phụ nữ Berber ở xứ sở Morocco, sử dụng tinh dầu chiết xuất từ hạt của giống xương rồng Prickly Pear, có tác dụng tốt cho làn da phải luôn đối mặt với tình trạng mất nước. Theo đuổi triết lý “Less is more” và những tiến bộ về tư duy làm đẹp hiện đại, sản phẩm của Huxley ngoài sử dụng thành phần xương rồng hữu cơ và sản xuất thủ công, còn đạt tiêu chuẩn: không cồn, paraben, dầu khoáng, hương thơm tổng hợp và các chất bảo quản khác.", "Sử dụng vào mỗi sáng, tối sau bước dùng tinh dầu dưỡng. Lấy 1 lượng vừa đủ kem dưỡng đánh tan trên lòng bàn tay rồi thoa lên da. Trộn tinh dầu cùng với kem, sau đó thoa lên da sẽ có được trải nghiệm đáng ngạc nhiên về dưỡng ẩm cho da.");
    a[158] = new sanpham(158, "image/sp158.jpg", "Dưỡng da", "Dưỡng ẩm", "Dầu dưỡng", "Andalou Naturals Argan Oil + Omega Natural Glow 3 in 1 Treatment", "Andalou Naturals", 556000, 30, "Đây là cái tên đã có mặt hơn 30 năm nay trên thị trường mỹ phẩm thiên nhiên và 20 năm đi đầu với dòng sản phẩm organic. Đây cũng là thương hiệu đầu tiên được nhận chứng nhận tiêu chuẩn cho các sản phẩm hữu cơ và nói không với nguyên liệu biến đổi gen độc hại. Với Andalou Naturals, được trải nghiệm những sản phẩm tự nhiên là lựa chọn mà ai cũng xứng đáng có. ", "Sử dụng 2 lần/ngày vào buổi sáng và tối. Sau khi rửa mặt sạch và cân bằng với toner, bạn nhỏ từ 2-3 giọt cho dầu cho vùng da mặt và cổ, thoa đều và nhẹ nhàng massage. Sản phẩm cũng có thể dùng cho cả cơ thể và tóc.");
    a[159] = new sanpham(159, "image/sp159.jpg", "Dưỡng da", "Dưỡng ẩm", "Dầu dưỡng", "HUXLEY OIL ; LIGHT AND MORE", " Huxley", 550000, 30, "Huxley là thương hiệu mỹ phẩm cao cấp tại Hàn Quốc nổi tiếng với các dòng sản phẩm chăm sóc da được chiết xuất từ hạt cây xương rồng hữu cơ. Với quy trình chiết xuất khép kín, HUXLEY không chỉ là mỹ phẩm đơn thuần, Các sản phẩm của Huxley chú trọng chữa trị tận gốc các vấn đề của da bằng cách sử dụng các thành phần đã được chứng minh là có tác dụng tốt và an toàn cho làn da. Huxley hiện đang là thương hiệu mỹ phẩm được ưa chuộng tại Âu-Mỹ bởi trọng tâm của họ chính là thành phần quý giá Pricky Pear Cactus Oil. Huxley được chứng nhân ecocert về độ lành tính.", "Sau khi làm sạch da và cân bằng độ ẩm với nước hoa hồng, cho 1 lượng vừa đủ ra lòng bàn tay, vỗ đều khắp mặt hoặc cho ra 1 ít vào bông cotton để lau, trong quá trình lau bằng bông cotton nên ấn nhẹ bông cotton vào da mặt để sản phẩm thẩm thấu tốt hơn." );
    a[160] = new sanpham(160, "image/sp160.jpg", "Dưỡng da", "Dưỡng ẩm", "Dầu dưỡng", "Radha Argan Oil", " Radha Beauty", 500000, 30, "Radha Beauty là cái tên đang đi đầu xu hướng trên thị trường mỹ phẩm organic, tất cả các sản phẩm của hãng đều có tiêu chuẩn được công nhận bởi Bộ nông nghiệp Mỹ USDA. ", "Cho một lượng sản phẩm vừa đủ vào lòng bàn tay, xoa đều và vuốt nhẹ lên tóc.");
    a[161] = new sanpham(161, "image/sp161.jpg", "Dưỡng da", "Dưỡng ẩm", "Dầu dưỡng", "Mad Hippie Face Cream 30ml", ": Mad Hippie", 465000, 30, "Mad Hippie luôn hiểu rằng để lấy được lòng tin từ khách hàng là điều không đơn giản.Chính vì vậy chúng tôi luôn phải lựa chọn những nguyên liệu tự nhiên và an toàn nhất.Tất cả các sản phẩm của Mad Hippie đều không chứa hương liệu, chất bảo quản độc hại, parabens...Bên cạnh đó bao bì sản phẩm cũng được làm bằng vật liệu tái chế và phải đúng với tiêu chí 100 % an toàn với người sử dụng. ", "Sử dụng sau khi rửa sạch mặt và cân bằng độ ẩm với nước hoa hồng.");
    a[162] = new sanpham(162, "image/sp162.jpg", "Dưỡng da", "Dưỡng ẩm", "Dưỡng da vùng mắt", "Balance Active Formula Dragons Blood Eye Cream 15ml", " Balance Active Formula", 168000, 30, "Kem Dưỡng Mắt Máu Rồng Balance Active Formula Dragons Blood Eye Cream giúp bạn giải quyết tất cả các vấn đề về mắt như thâm bọng hay vết nhăn. Sản phẩm là sự chọn lựa vô cùng hợp lý khi bạn muốn giữ nét thanh xuân cho đôi mắt cũng như gương mặt mình.", "Sau khi làm sạch mặt và dùng toner mỗi sáng và tối, thoa đều một lượng sản phẩm vừa đủ lên mặt, tránh vùng mắt. Nếu sản phẩm dính vào mắt, rửa sạch lại với nước.");
    a[163] = new sanpham(163, "image/sp163.jpg", "Dưỡng da", "Dưỡng ẩm", "Dưỡng da vùng mắt", "AHC ANGELESS REAL EYE CREAM FOR FACE 12ml", " AHC", 96000, 30, "AHC là thương hiệu chăm sóc da Hàn Quốc ra đời năm 1999 tại Seoul, với mong muốn truyền cảm hứng và tôn vinh vẻ đẹp thuần khiết tự nhiên cho phụ nữ trên toàn thế giới. ", "Lấy 1 lượng kem thích hợp lên mu bàn tay, dùng ngón tay di nhẹ để làm ấm kem giúp kem mềm và dễ thấm vào da hơn.. Chấm kem lên vùng mắt(cả mí trên và mí dưới). Dùng ngón áp út nhẹ nhàng mát xa theo hướng từ trong ra ngoài.");
    a[164] = new sanpham(164, "image/sp164.jpg", "Dưỡng da", "Dưỡng ẩm", "Dưỡng da vùng mắt", "Mad Hippie Eye Cream 15ml", " Mad Hippie", 383000, 30, "Mad Hippie luôn hiểu rằng để lấy được lòng tin từ khách hàng là điều không đơn giản. Chính vì vậy chúng tôi luôn phải lựa chọn những nguyên liệu tự nhiên và an toàn nhất. Tất cả các sản phẩm của Mad Hippie đều không chứa hương liệu, chất bảo quản độc hại, parabens... Bên cạnh đó bao bì sản phẩm cũng được làm bằng vật liệu tái chế và phải đúng với tiêu chí 100% an toàn với người sử dụng. ", "-Dùng ngón áp út lấy kem và dặm nhẹ vùng trên, dọc theo hốc mắt và vùng xương chân mày từ trong ra ngoài theo 4 điểm ấn huyệt. Thoa nhẹ ở vùng dưới mắt, dọc theo hốc mắt từ trong ra ngoài theo 4 điểm ấn huyệt.");
    a[165] = new sanpham(165, "image/sp165.jpg", "Dưỡng da", "Dưỡng ẩm", "Xịt khoáng", "Innisfree Green Tea Mist 50 ml", " Innisfree", 128000, 30, "Innisfree là một thương hiệu mỹ phẩm được thành lập vào năm 2000 tại Hàn Quốc, thuộc thuộc Tập đoàn mỹ phẩm AmorePacific, đồng sở hữu các thương hiệu nổi tiếng như Sulwhasoo, Laneige, Mamonde, Etude House. Cái tên “Innisfree” của hãng được lấy cảm hứng từ bài thơ của nhà thơ William Butler Yeats viết vào năm 1888 là “The lake Isle of Innisfree” có nội dung ca ngợi quang cảnh thiên nhiên tuyệt đẹp ở quanh hồ Isle vùng Innisfree thuộc đất nước Ailen xinh đẹp.", "Cầm lọ cách xa mặt khoảng 20-30cm, nhắm mắt và nhẹ nhàng xịt đều lên da mặt. Sử dụng bất cứ khi nào bạn thấy da khô hoặc cần bổ sung độ ẩm cho da.");
    a[166] = new sanpham(166, "image/sp166.jpg", "Dưỡng da", "Dưỡng ẩm", "Xịt khoáng", "Mario Badescu Facial Spray with Aloe, Herbs and Rosewater", " Mario Badescu", 520000, 30, "Thương hiệu Mario Badescu được thành lập vào năm 1967. Ban đầu chỉ là một cửa tiệm nhỏ, Trải qua 50 năm Mario Badescu đã tiếp tục vươn xa, phát triển mạnh mẽ thêm các dòng sản phẩm chăm sóc da. Từ các sản phẩm hỗ trợ trị mụn cho đến các sản phẩm chống lão hóa. Mario Badescu luôn cố gắng cải thiện các phát đồ trị liệu thích hợp cho nhu cầu người sử dụng. “Simple, Gentle, and Effective Skin Care” – triết lý thương hiệu kinh doanh của Mario Badescu.", "Xịt bất cứ lúc nào da cảm thấy khô và mệt mỏi. Xịt sau khi make up để lớp make up lâu trôi và bền đẹp. ");
    a[167] = new sanpham(167, "image/sp167.jpg", "Dưỡng da", "Dưỡng ẩm", "Xịt khoáng", "OMOROVICZA QUEEN OF HUNGARY MIST - 100 ml", " OMOROVICZA", 1500000, 30, "Stephen và Margaret-cặp vợ chồng là những bác sĩ da liễu từng đoạt giải Nobel đã phát triển hệ thống thương hiệu Healing Concentrate ™ để cung cấp các khoáng chất trị liệu, mang lại một làn da trẻ trung hơn. Các sản phẩm chứa khoáng chất với các hoạt chất tự nhiên khác như làm sạch bùn đất Hungary, các sản phẩm của Omorovicza đã có được sự sùng bái trên toàn thế giới nhờ các đặc tính chống lão hóa, phát sáng. Được kết hợp với các vitamin tốt nhất, tinh dầu và các thành phần tự nhiên khác có nguồn gốc từ khắp nơi trên thế giới, từ lòng hồ Heviz đến đỉnh núi Andes. Stephen và Margaret tin rằng sắc đẹp chỉ đến khi các sản phẩm chăm sóc da không chứa các thành phần có hại, gây bí bách cho da, cũng như vẻ đẹp đẹp hiện đại là sự kết hợp hoàn hảo của các thành phần truyền thống và các công thức khoa học tiên tiến. ", "Xịt lên mặt từ khoảng cách 15-20cm , bất cứ khi nào da bạn cần sự detox ");
    a[168] = new sanpham(168, "image/sp168.jpg", "Dưỡng da", "Dưỡng ẩm", "Xịt khoáng", "Mario Badescu Facial Spray with Aloe, Cucumber and Green Tea 29ml", " Mario Badescu", 128000, 30, "Thương hiệu Mario Badescu được thành lập vào năm 1967. Ban đầu chỉ là một cửa tiệm nhỏ, Trải qua 50 năm Mario Badescu đã tiếp tục vươn xa, phát triển mạnh mẽ thêm các dòng sản phẩm chăm sóc da. Từ các sản phẩm hỗ trợ trị mụn cho đến các sản phẩm chống lão hóa. Mario Badescu luôn cố gắng cải thiện các phát đồ trị liệu thích hợp cho nhu cầu người sử dụng. “Simple, Gentle, and Effective Skin Care” – triết lý thương hiệu kinh doanh của Mario Badescu.", "Xịt bất cứ lúc nào da cảm thấy khô và mệt mỏi. Xịt sau khi make up để lớp make up lâu trôi và bền đẹp. ");
    a[169] = new sanpham(169, "image/sp169.jpg", "Dưỡng da", "Trị liệu", "Trị mụn", "Mario Badescu Acne Facial Cleanser - 177ml ", " Mario Badescu", 394000, 30, "Thương hiệu Mario Badescu được thành lập vào năm 1967. Ban đầu chỉ là một cửa tiệm nhỏ, Trải qua 50 năm Mario Badescu đã tiếp tục vươn xa, phát triển mạnh mẽ thêm các dòng sản phẩm chăm sóc da. Từ các sản phẩm hỗ trợ trị mụn cho đến các sản phẩm chống lão hóa. Mario Badescu luôn cố gắng cải thiện các phát đồ trị liệu thích hợp cho nhu cầu người sử dụng. “Simple, Gentle, and Effective Skin Care” – triết lý thương hiệu kinh doanh của Mario Badescu.", "Rửa sạch tay và làm ẩm da mặt,  Lấy một lượng sữa rửa mặt vừa đủ ra tay và tạo bọt. ");
    a[170] = new sanpham(170, "image/sp170.jpg", "Dưỡng da", "Trị liệu", "Trị mụn", "Neutrogena Oil - Free Acne Wash - 269ml", " Neutrogena", "Neutrogena là một nhãn hiệu Mỹ về dưỡng da, dưỡng tóc và mỹ phẩm có trụ sở tại Los Angeles, California. Neutrogena được Emanuel Stolaroff sáng lập vào năm 1930 và ban đầu là một công ty mỹ phẩm có tên Natone. Đây là thương hiệu chăm sóc da được khuyên dùng cho bác sĩ da liễu số 1 cung cấp nhiều loại sản phẩm chăm sóc da và tóc. Neutrogena hiện là một thương hiệu của Gia đình Công ty Tiêu dùng Johnson & Johnson Family. Thương hiệu chăm sóc da được khuyên dùng bởi bác sĩ da liễu số 1, cung cấp một số dòng sản phẩm chăm sóc sắc đẹp và chăm sóc da được yêu thích nhất thế giới, đồng thời sản xuất và tiếp thị sản phẩm tại hơn 70 quốc gia. ", "Sau khi làm sạch mặt và dùng toner mỗi sáng và tối, thoa đều một lượng sản phẩm vừa đủ lên mặt, tránh vùng mắt. Nếu sản phẩm dính vào mắt, rửa sạch lại với nước.");
    a[171] = new sanpham(171, "image/sp171.jpg", "Dưỡng da", "Trị liệu", "Trị mụn", " AHA 7 WHITEHEAD POWER LIQUID 100ML", " Cosrx", 328000, 30, "COSRX là thương hiệu mỹ phẩm Hàn Quốc được ra đời và phát triển dựa trên nền tảng số liệu nghiên cứu khách hàng trong vòng 10 năm.Với COSRX, làm đẹp không phải là mục tiêu hàng đầu mà cần ưu tiên nhất là một làn da khỏe mạnh. ", "Dùng như sản phẩm tẩy tế bào chết hóa học.Sau bước làm sạch và toner, thấm dung dịch vào miếng bông tẩy trang và lau nhẹ lên da, tránh vùng da mắt và môi.Đợi 20 phút cho sản phẩm phát huy hoàn toàn và tiếp tục với các sản phẩm tiếp theo trong chu trình dưỡng da.");
    a[172] = new sanpham(172, "image/sp172.jpg", "Dưỡng da", "Trị liệu", "Trị mụn", "SUNDAY RILEY Flash Fix Kit", " Sunday Riley", 675000, 30, "Sunday Riley ra mắt thương hiệu chăm sóc da cùng tên của mình Sunday Riley Modern Skincare vào năm 2009. Gần một thập kỷ sau, thương hiệu của cô, thường được biết đến với cái tên Sunday Riley, nổi tiếng khắp thế giới với hàng loạt các sản phẩm cao cấp và được bán tại các nhà bán lẻ bao gồm Sephora, Nordstrom, Bloomingdale's và Amazon. Thương hiệu là người tiên phong trong lĩnh vực công nghệ xanh, được Riley mô tả trong một cuộc phỏng vấn với The Cut là khả năng đặc biệt ân bằng các hoạt chất dựa trên khoa học với thực vật họ. ", "Sau khi làm sạch mặt và dùng toner mỗi sáng và tối, thoa đều một lượng sản phẩm vừa đủ lên mặt, tránh vùng mắt. Nếu sản phẩm dính vào mắt, rửa sạch lại với nước.");
    a[173] = new sanpham(173, "image/sp173.jpg", "Dưỡng da", "Trị liệu", "Kem lột", "ELEMIS Papaya Enzyme Peel 15ml", " ELEMIS", 350000, 30, "Dùng được cho mọi loại da, Enzymes tự nhiên từ trái cây (đu đủ giúp tẩy tế bào chết & dứa giúp làm dịu da), giúp da sạch & mềm mịn", "Dùng 2 lần/tuần, Bôi lên da đã rửa sạch, tránh vùng mắt. Để 10-15ph & rửa lại bằng nước");
    a[174] = new sanpham(174, "image/sp174.jpg", "Dưỡng da", "Trị liệu", "Kem lột", "So Natural Red Peel Tingle Serum", "So Natural", 399000, 30, "So’ Natural là một thương hiệu đến từ xứ sở Hàn Quốc. Với cam kết sử dụng 100% thành phần thiên nhiên, So ‘Natural hiện đang trở thành một trong những thương hiệu đình đám và khuấy đảo giới trẻ Hàn", "Sau khi rửa mặt và lau khô, apply serum lên đều khắp mặt, massage nhẹ nhàng trên da cho đến khi serum chuyển từ màu đỏ sang tím, không để quá 10', rồi rửa lại với nước ấm.");
    a[175] = new sanpham(175, "image/sp175.jpg", "Dưỡng da", "Trị liệu", "Tinh Chất", "Clinique iD™: Hydrating Jelly + Cartridge for Irritation 125ml ", " Clinique", 845000, 30, "Nhãn hiệu Clinique được thành lập sau khi cô con dâu của Estée Lauder là cô Evelyn Lauder đọc một bài trên tạp chí Vogue có tựa đề là Làm thế nào để có được một làn da hoàn hảo. Vào tháng 8 năm 1968, nhãn hiệu dưỡng da Clinique đã ra mắt với cam kết mọi sản phẩm đều được kiểm nghiệm dị ứng và 100% không pha hương liệu – điều đó rất có ý nghĩa khi dị ứng đang là mối quan tâm lớn trong điều kiện môi trường ô nhiễm hiện nay.Clinique là nhãn hiệu mỹ phẩm được phát triển bởi Bác Sĩ Da Liễu. Trước khi sản xuất các sản phẩm mới, Clinique đều tổ chức các buổi thử nghiệm với 600 người tình nguyện. Hiện nhãn hiệu này đang được tập đoàn mỹ phẩm Estée Lauder quản lý.", "Sau khi làm sạch da bằng sữa rửa mặt (Clarifying Cleanser), cân bằng da với toner (Clarifying Toner) và cung cấp dưỡng chất với các sản phẩm điều trị , bạn thoa kem dưỡng kiểm soát dầu Oil-Control Mattifier SPF 15 PA++ lên toàn mặt, cổ và vùng hở ngực. Sản phẩm này chỉ dùng vào buổi sáng. Thế nên, bạn nên bổ sung kem dưỡng ẩm ban đêm dành cho da dầu Skin Perfecting Lotion vào quy trình chăm sóc da buổi tối. ");
    a[176] = new sanpham(176, "image/sp176.jpg", "Dưỡng da", "Trị liệu", "Tinh Chất", "Clinique iD™: Hydrating Jelly + Cartridge for Fatigue 125ml", "Clinique", 845000, 30, "Nhãn hiệu Clinique được thành lập sau khi cô con dâu của Estée Lauder là cô Evelyn Lauder đọc một bài trên tạp chí Vogue có tựa đề là Làm thế nào để có được một làn da hoàn hảo.Vào tháng 8 năm 1968, nhãn hiệu dưỡng da Clinique đã ra mắt với cam kết mọi sản phẩm đều được kiểm nghiệm dị ứng và 100 % không pha hương liệu – điều đó rất có ý nghĩa khi dị ứng đang là mối quan tâm lớn trong điều kiện môi trường ô nhiễm hiện nay.Clinique là nhãn hiệu mỹ phẩm được phát triển bởi Bác Sĩ Da Liễu.Trước khi sản xuất các sản phẩm mới, Clinique đều tổ chức các buổi thử nghiệm với 600 người tình nguyện.Hiện nhãn hiệu này đang được tập đoàn mỹ phẩm Estée Lauder quản lý.", "Sau khi làm sạch da bằng sữa rửa mặt (Clarifying Cleanser), cân bằng da với toner (Clarifying Toner) và cung cấp dưỡng chất với các sản phẩm điều trị , bạn thoa kem dưỡng kiểm soát dầu Oil-Control Mattifier SPF 15 PA++ lên toàn mặt, cổ và vùng hở ngực. Sản phẩm này chỉ dùng vào buổi sáng. Thế nên, bạn nên bổ sung kem dưỡng ẩm ban đêm dành cho da dầu Skin Perfecting Lotion vào quy trình chăm sóc da buổi tối. ");
    a[177] = new sanpham(177, "image/sp177.jpg", "Dưỡng da", "Trị liệu", "Tinh Chất", "Clinique iD™: Hydrating Jelly + Cartridge for Lines & Wrinkles - Jelly 125ml", "Clinique", 845000, 30, "Nhãn hiệu Clinique được thành lập sau khi cô con dâu của Estée Lauder là cô Evelyn Lauder đọc một bài trên tạp chí Vogue có tựa đề là Làm thế nào để có được một làn da hoàn hảo.Vào tháng 8 năm 1968, nhãn hiệu dưỡng da Clinique đã ra mắt với cam kết mọi sản phẩm đều được kiểm nghiệm dị ứng và 100 % không pha hương liệu – điều đó rất có ý nghĩa khi dị ứng đang là mối quan tâm lớn trong điều kiện môi trường ô nhiễm hiện nay.Clinique là nhãn hiệu mỹ phẩm được phát triển bởi Bác Sĩ Da Liễu.Trước khi sản xuất các sản phẩm mới, Clinique đều tổ chức các buổi thử nghiệm với 600 người tình nguyện.Hiện nhãn hiệu này đang được tập đoàn mỹ phẩm Estée Lauder quản lý.", "Sau khi làm sạch da bằng sữa rửa mặt (Clarifying Cleanser), cân bằng da với toner (Clarifying Toner) và cung cấp dưỡng chất với các sản phẩm điều trị , bạn thoa kem dưỡng kiểm soát dầu Oil-Control Mattifier SPF 15 PA++ lên toàn mặt, cổ và vùng hở ngực. Sản phẩm này chỉ dùng vào buổi sáng. Thế nên, bạn nên bổ sung kem dưỡng ẩm ban đêm dành cho da dầu Skin Perfecting Lotion vào quy trình chăm sóc da buổi tối. ");
    a[178] = new sanpham(178, "image/sp178.jpg", "Dưỡng da", "Trị liệu", "Tinh Chất", "Balance Active Formula Dragon’s Blood Lifting Serum 30ml", "Balance Active Formula", 200000, 30, "Tinh chất Balance Active Formula Máu Rồng Dragon’s Blood Lifting Serum với những thành phần chuyên biệt giúp da săn chắc hơn, tăng độ đàn hồi đồng thời giảm thiểu sự xuất hiện của những đường nhăn, làm mờ những nếp nhăn, phục hồi sức sống cho làn da và đem nét tươi trẻ đến cho từng đường nét trên gương mặt bạn.", "Sau khi làm sạch da bằng sữa rửa mặt (Clarifying Cleanser), cân bằng da với toner (Clarifying Toner) và cung cấp dưỡng chất với các sản phẩm điều trị , bạn thoa kem dưỡng kiểm soát dầu Oil-Control Mattifier SPF 15 PA++ lên toàn mặt, cổ và vùng hở ngực. Sản phẩm này chỉ dùng vào buổi sáng. Thế nên, bạn nên bổ sung kem dưỡng ẩm ban đêm dành cho da dầu Skin Perfecting Lotion vào quy trình chăm sóc da buổi tối. ");
    a[179] = new sanpham(179, "image/sp179.jpg", "Dưỡng da", "Trị liệu", "Tinh Chất", "Cosrx Galactomyces 95 Tone Balancing Essence", " Cosrx", 249000, 30, "COSRX là thương hiệu mỹ phẩm Hàn Quốc được ra đời và phát triển dựa trên nền tảng số liệu nghiên cứu khách hàng trong vòng 10 năm. Với COSRX, làm đẹp không phải là mục tiêu hàng đầu mà cần ưu tiên nhất là một làn da khỏe mạnh. ", "Sau khi làm sạch da bằng sữa rửa mặt (Clarifying Cleanser), cân bằng da với toner (Clarifying Toner) và cung cấp dưỡng chất với các sản phẩm điều trị , bạn thoa kem dưỡng kiểm soát dầu Oil-Control Mattifier SPF 15 PA++ lên toàn mặt, cổ và vùng hở ngực. Sản phẩm này chỉ dùng vào buổi sáng. Thế nên, bạn nên bổ sung kem dưỡng ẩm ban đêm dành cho da dầu Skin Perfecting Lotion vào quy trình chăm sóc da buổi tối. ");
    a[180] = new sanpham(180, "image/sp180.jpg", "Dưỡng da", "Trị liệu", "Tinh Chất", "Some By Mi 30 Days Miracle Tea Tree Clear Spot Oil 10ml", " Some By Mi", 199000, 30, "Some By Mi là một thương hiệu Hàn Quốc chuyên sản xuất các sản phẩm làm đẹp thiết thực nhưng vẫn hợp thời trang. Các sản phẩm của hãng được chiết xuất từ các thành phần thiên nhiên, kể cả các sản phẩm chăm sóc da đến các sản phẩm trang điểm.", "Sau khi làm sạch da bằng sữa rửa mặt (Clarifying Cleanser), cân bằng da với toner (Clarifying Toner) và cung cấp dưỡng chất với các sản phẩm điều trị , bạn thoa kem dưỡng kiểm soát dầu Oil-Control Mattifier SPF 15 PA++ lên toàn mặt, cổ và vùng hở ngực. Sản phẩm này chỉ dùng vào buổi sáng. Thế nên, bạn nên bổ sung kem dưỡng ẩm ban đêm dành cho da dầu Skin Perfecting Lotion vào quy trình chăm sóc da buổi tối. ");
    a[181] = new sanpham(181, "image/sp181.jpg", "Dưỡng da", "Trị liệu", "Tinh Chất", "Epiconce Intense Defense Serum 12ml", " Epionce", 1020000, 30, "LIXIBOX", "Dùng 1-2 lần mỗi ngày");
    a[182] = new sanpham(182, "image/sp182.jpg", "Dưỡng da", "Trị liệu", "Tinh Chất", "Balance Active Formula Dragon’s Blood Lifting Serum 30ml", " Balance Active Formula", 200000, 30, "Tinh chất Balance Active Formula Máu Rồng Dragon’s Blood Lifting Serum với những thành phần chuyên biệt giúp da săn chắc hơn, tăng độ đàn hồi đồng thời giảm thiểu sự xuất hiện của những đường nhăn, làm mờ những nếp nhăn, phục hồi sức sống cho làn da và đem nét tươi trẻ đến cho từng đường nét trên gương mặt bạn.", "Sử dụng ngày 2 lần sáng và tối.");
    a[183] = new sanpham(183, "image/sp183.jpg", "Dưỡng da", "Trị liệu", "Tinh Chất", "HYALURONIC ACID SERUM 100 % PURE 30ml ", " Timeless", 205000, 30, "Timeless là hãng mỹ phẩm từ Mỹ, chuyên về các sản phẩm chống lão hóa, giảm nếp nhăn, trẻ hóa da và trị thâm. Timeless khẳng định rằng các sản phẩm của họ Simple and Effective - Đơn Giản và Hiệu Quả. Thật vậy, điểm đặc biệt của các sản phẩm Timeless là sử dụng các thành phần dưỡng da hữu hiệu ở nồng độ cao để đạt kết quả tốt nhất, đơn giản hóa công thức, tối ưu cấu trúc sản phẩm, đem lại kết quả tốt nhất trong thời gian nhanh nhất. Trong khi đó Timeless giữ một mức giá rất phải chăng phù hợp với người tiêu dùng nhờ sử dụng bao bì đơn giản và dễ sử dụng. Với phương châm làm đẹp hiệu quả từ thiên nhiên và Paraben-free, sản phẩm của Timeless đã được nhiều người tiêu dùng tại Mỹ bao gồm cả các blogger nổi tiếng tin dùng và đánh giá cao.", " Sản phẩm được sử dụng sau bước làm sạch và cân bằng da với toner.");
    a[184] = new sanpham(184, "image/sp184.jpg", "Dưỡng da", "Trị liệu", "Tinh Chất", "Natural Red Peel Tingle Serum", " So Natural", 399000, 30, "So’ Natural là một thương hiệu đến từ xứ sở Hàn Quốc.Với cam kết sử dụng 100 % thành phần thiên nhiên, So ‘Natural hiện đang trở thành một trong những thương hiệu đình đám và khuấy đảo giới trẻ Hàn", "Sau khi rửa mặt và lau khô, apply serum lên đều khắp mặt, massage nhẹ nhàng trên da cho đến khi serum chuyển từ màu đỏ sang tím, không để quá 10', rồi rửa lại với nước ấm.");
    a[185] = new sanpham(185, "image/sp185.jpg", "Dưỡng da", "Trị liệu", "Dưỡng mắt", "Balance Active Formula Gold Collagen Rejuvenating Eye Serum 15ml", "Balance Active Formula", 168000, 30, "Kem Vàng Trị Thâm Mắt Balance Active Formula Gold Collagen Rejuvenating Eye Serum với thành phần collagen tự nhiên của da giúp hỗ trợ cấu trúc cho da và các mô phục hồi vẻ mịn màng, đầy đặn cho vùng da mắt.", "Sau khi làm sạch da bằng sữa rửa mặt (Clarifying Cleanser), cân bằng da với toner (Clarifying Toner) và cung cấp dưỡng chất với các sản phẩm điều trị , bạn thoa kem dưỡng kiểm soát dầu Oil-Control Mattifier SPF 15 PA++ lên toàn mặt, cổ và vùng hở ngực. Sản phẩm này chỉ dùng vào buổi sáng. Thế nên, bạn nên bổ sung kem dưỡng ẩm ban đêm dành cho da dầu Skin Perfecting Lotion vào quy trình chăm sóc da buổi tối. ");
    a[186] = new sanpham(186, "image/sp186.jpg", "Dưỡng da", "Trị liệu", "Dưỡng mắt", "Balance Active Formula Gold Collagen Rejuvenating Serum 30ml", " Balance Active Formula", 199000, 30, "Tinh Chất Chống Lão Hóa Balance Active Formula Gold Collagen Rejuvenating Serum chứa nhiều thành phần quý giá, trung hòa các gốc tự do, dưỡng ẩm hoàn hảo, làm mịn da, làm chậm quá trình lão hóa của da và giúp cải thiện các vấn đề về nếp nhăn, chân chim,...", "Sử dụng ngày 2 lần sáng và tối. Rửa mặt thật sạch bằng nước hoặc sữa rửa mặt.Dùng thêm toner trước khi sử dụng serum.");
    a[187] = new sanpham(187, "image/sp187.jpg", "Dưỡng da", "Trị liệu", "Dưỡng mắt", "Dr.Dennis Gross Ferulic + Retinol Triple Corection Eye Serum 15ml", " Dr. Dennis Gross Skincare", 1622000, 30, "Dr. Dennis Gross Skincare là một thương hiệu mỹ phẩm được sáng lập bởi Dennis Gross - bác sĩ da liễu với hơn 25 năm kinh nghiệm tại New York - Mỹ. Dù không phải là một nhãn hiệu quen thuộc ở Việt Nam nhưng luôn nằm trong top những thương hiệu mỹ phẩm được yêu thích nhất tại Mỹ.", "Chấm sản phẩm lên vùng da quanh mắt, thoa đều và massage nhẹ nhàng. Nên đeo kính râm khi tiếp xúc với ánh nắng mặt trời để giảm tác động của ánh nắng xuống da.");
    a[188] = new sanpham(188, "image/sp188.jpg", "Dưỡng da", "Dưỡng Môi/ Vùng Mắt","", "Bioderma Atoderm Lèvres Stick Hydratant", "Bioderma", 80000, 30, "Son dưỡng môi Bioderma Atoderm Levres đã và đang được sự các dược sĩ tin tưởng và khuyến khích sử dụng và ngày càng đã được sự đón nhận của rất nhiều khách hàng trên toàn thế giới, bởi có những công dụng vượt trội trong việc dưỡng môi, tránh thâm môi khi đánh son nhiều.", "Thoa lượng vừa đủ lên môi, dùng ngón tay massage nhẹ nhàng");
    a[189] = new sanpham(189, "image/sp189.jpg", "Dưỡng da", "Dưỡng Môi/ Vùng Mắt","", "Carmex Lip Balm Stick SPF 15", " Carmex", 80000, 30, "CAR", "Thoa trước khi tiếp xúc ánh nắng mặt trời, gió, lạnh, sau khi bơi, hoặc để dưỡng môi.");
    a[190] = new sanpham(190, "image/sp190.jpg", "Dưỡng da", "Dưỡng Môi/ Vùng Mắt","", "innisfree Glow tint lip balm 3.5g - 01", "Innisfree", 12000, 30, "Innisfree là một thương hiệu mỹ phẩm được thành lập vào năm 2000 tại Hàn Quốc, thuộc thuộc Tập đoàn mỹ phẩm AmorePacific, đồng sở hữu các thương hiệu nổi tiếng như Sulwhasoo, Laneige, Mamonde, Etude House. Cái tên “Innisfree” của hãng được lấy cảm hứng từ bài thơ của nhà thơ William Butler Yeats viết vào năm 1888 là “The lake Isle of Innisfree” có nội dung ca ngợi quang cảnh thiên nhiên tuyệt đẹp ở quanh hồ Isle vùng Innisfree thuộc đất nước Ailen xinh đẹp.", "Trước khi tô son dưỡng môi, việc bạn cần làm là làm sạch đôi môi, lau hết vết lớp son cũ để chắc chắn rằng không có bụi bẩn bám lại, sau đó hãy thoa một lớp son dưỡng mới. Khi môi đã thoa son, hãy nhớ rằng nên trách việc tiếp xúc với thức ăn, nước uống.");
    a[191] = new sanpham(191, "image/sp191.jpg", "Dưỡng da", "Dưỡng Môi/ Vùng Mắt","", "HOONEE WATERLIP TINT BALM - PINK GUAVA", "CHOONEE", 144000, 30, "Choonee Water Lip Tint Balm Grapefruit là loại son dưỡng môi dạng sáp đến từ thương hiệu cao cấp Choonee thuộc tập đoàn IKE của Hàn Quốc, là một nhãn hàng với hình tượng xuyên suốt là  Story of a girl from countryside - đem lại những sản phảm gần gũi với nguyên liệu chính từ tự nhiên. ", "Trang điểm đôi môi trông tự nhiên bằng cách thoa lên toàn bộ môi dọc theo đường viền môi hoặc bằng cách thoa vào giữa môi.");
    a[192] = new sanpham(192, "image/sp192.jpg", "Dưỡng da", "Dưỡng Môi/ Vùng Mắt","", "Elizabeth Arden Eight Hour® Cream Intensive Moisture Hand Treatment 30ml","Elizabeth Arden", 480000, 30,  "Elizabeth Arden là một trong những cái tên danh giá trong làng mỹ phẩm thế giới chuyên về nước hoa, sản phẩm dưỡng da và mỹ phẩm. Đây là một trong những thương hiệu dẫn đầu về khía cạnh vẻ đẹp toàn diện - vẻ đẹp bắt nguồn từ làn da khỏe mạnh rạng rỡ, nhờ vào những bước đi tiên phong trong tiến bộ và đổi mới khoa học mỹ phẩm, cũng như luôn cam kết đảm bảo chất lượng đến mức tuyệt hảo từ thành phần cho đến đóng gói trong từng sản phẩm.", "Thoa kem dưỡng lên vùng da tay khi làm việc dưới mày điều hòa và khi dưỡng da buổi tối.");
    a[193] = new sanpham(193, "image/sp193.jpg", "Cơ thể", "Dưỡng thể", "Kem dưỡng da & dầu", "Dưỡng thể tẩy tế bào chết ALPHA SKINCARE - RENEWAL BODY LOTION WITH 12 % AHA, 12 OZ 340ml", "ALPHA SKINCARE", 460000, 30, "Alpha Skincare là tên mới của Alpha Hydrox - hãng mỹ phẩm đình đám với các dòng sản phẩm có chứa AHA với mức giá rất hợp lý và tiết kiệm. Với tỉ lệ phần trăm lí tưởng của AHA ở mức độ pH hiệu quả nhất, mang đến khả năng cải thiện làn da tối ưu, Alpha Skincare là một trong những thương hiệu Best Seller trên hệ thống nhà thuốc của Mỹ, cũng như được ca ngợi trên các tạp chí mỹ phẩm uy tín về hiệu quả đặc trị cho da.", "au khi tắm, lấy một lượng vừa đủ thoa đều lên da và massage nhẹ nhàng.Không cần tắm lại với nước");
    a[194] = new sanpham(194, "image/sp194.jpg", "Cơ thể", "Dưỡng thể", "Kem dưỡng da & dầu", "Mario Badescu summer shine body lotion 29 ml", " Mario Badescu", 99000, 30, "Với sự pha trộn giữ ẩm của sáp ong, dầu đậu phộng và dầu ngô, Summer Shine Body Lotion của Mario Badescu làm cho chân tay mịn màng, mềm mại và sáng bóng sau khi bôi. ", "Áp dụng trên xương đòn, vai và xuống phía trước chân của bạn để trông bóng khỏe và lung linh hơn.");
    a[195] = new sanpham(195, "image/sp195.jpg", "Cơ thể", "Sữa tắm", "Sữa tắm", "Molton Brown Bath & Shower Gel - Heavenly Gingerlily 30ml ", ": Molton Brown", 184000, 30, "Với sự pha trộn giữ ẩm của sáp ong, dầu đậu phộng và dầu ngô, Summer Shine Body Lotion của Mario Badescu làm cho chân tay mịn màng, mềm mại và sáng bóng sau khi bôi.", "Sau khi làm sạch da bằng sữa rửa mặt (Clarifying Cleanser), cân bằng da với toner (Clarifying Toner) và cung cấp dưỡng chất với các sản phẩm điều trị , bạn thoa kem dưỡng kiểm soát dầu Oil-Control Mattifier SPF 15 PA++ lên toàn mặt, cổ và vùng hở ngực. Sản phẩm này chỉ dùng vào buổi sáng. Thế nên, bạn nên bổ sung kem dưỡng ẩm ban đêm dành cho da dầu Skin Perfecting Lotion vào quy trình chăm sóc da buổi tối. ");
    a[196] = new sanpham(196, "image/sp196.jpg", "Cơ thể", "Sữa tắm", "Sữa tắm", "Shiro Waki Hime Underarm Exfoliating & Brightening Cream", " Shiro Waki Hime", 99000, 30, "Shiro Waki Hime là thương hiệu chăm sóc da đến từ Nhật Bản. Phương châm hoạt động của hãng đó là coi mỗi khách hàng là một nàng công chúa và Shiro Waki Hime chính là bí quyết đằng sau vẻ đẹp tuyệt trần.", "Rửa sạch vùng da dưới cánh tay, lấy lượng kem vừa đủ thoa đều kết hợp massage nhẹ nhàng, để trên da khoảng 3-5 phút sau đó rửa sạch với nước ấm.");
    a[197] = new sanpham(197, "image/sp197.jpg", "Tóc", "Dầu gội","", "Natural World Argan Oil of Morrocco Moisture Rich Shampoo 500ml", " NATURAL WORLD", 250000, 30, "Dầu Gội Natural World Argan Oil of Morrocco Moisture Rich 500ml được chiết xuất từ tinh dầu Argan - thứ vàng lỏng quý hiếm từ Bắc Phi và một hỗn hợp cao cấp của 4 loại tinh dầu (hương thảo, xả, cam và ngọc lan tây Ylang Ylang).", "Sau khi làm sạch da bằng sữa rửa mặt (Clarifying Cleanser), cân bằng da với toner (Clarifying Toner) và cung cấp dưỡng chất với các sản phẩm điều trị , bạn thoa kem dưỡng kiểm soát dầu Oil-Control Mattifier SPF 15 PA++ lên toàn mặt, cổ và vùng hở ngực. Sản phẩm này chỉ dùng vào buổi sáng. Thế nên, bạn nên bổ sung kem dưỡng ẩm ban đêm dành cho da dầu Skin Perfecting Lotion vào quy trình chăm sóc da buổi tối. ");
    a[198] = new sanpham(198, "image/sp198.jpg", "Tóc", "Dầu gội","", "SACHAJUAN Colour Protect Shampoo(100ml)", "Sachajuan", 224000, 30, "Với sự pha trộn giữ ẩm của sáp ong, dầu đậu phộng và dầu ngô, Summer Shine Body Lotion của Mario Badescu làm cho chân tay mịn màng, mềm mại và sáng bóng sau khi bôi.", "Sau khi làm sạch da bằng sữa rửa mặt (Clarifying Cleanser), cân bằng da với toner (Clarifying Toner) và cung cấp dưỡng chất với các sản phẩm điều trị , bạn thoa kem dưỡng kiểm soát dầu Oil-Control Mattifier SPF 15 PA++ lên toàn mặt, cổ và vùng hở ngực. Sản phẩm này chỉ dùng vào buổi sáng. Thế nên, bạn nên bổ sung kem dưỡng ẩm ban đêm dành cho da dầu Skin Perfecting Lotion vào quy trình chăm sóc da buổi tối. ");
    a[199] = new sanpham(199, "image/sp199.jpg", "Tóc", "Dầu xả","", "Natural World Argan Oil of Morrocco Moisture Rich Conditioner 500ml", "NATURAL WORLD", 250000, 30, "Dầu Xả Natural World Argan Oil of Morrocco Moisture Rich 500ml được chiết xuất từ tinh dầu Argan - thứ vàng lỏng quý hiếm từ Bắc Phi và một hỗn hợp cao cấp của 4 loại tinh dầu (hương thảo, xả, cam và ngọc lan tây Ylang Ylang).", "Sau khi làm sạch da bằng sữa rửa mặt (Clarifying Cleanser), cân bằng da với toner (Clarifying Toner) và cung cấp dưỡng chất với các sản phẩm điều trị , bạn thoa kem dưỡng kiểm soát dầu Oil-Control Mattifier SPF 15 PA++ lên toàn mặt, cổ và vùng hở ngực. Sản phẩm này chỉ dùng vào buổi sáng. Thế nên, bạn nên bổ sung kem dưỡng ẩm ban đêm dành cho da dầu Skin Perfecting Lotion vào quy trình chăm sóc da buổi tối. ");
    a[200] = new sanpham(200, "image/sp200.jpg", "Tóc", "Dầu xả","", "John Masters Rosemary & Peppermint Detangler", " John Masters Organics", 480000, 30, "Với sự pha trộn giữ ẩm của sáp ong, dầu đậu phộng và dầu ngô, Summer Shine Body Lotion của Mario Badescu làm cho chân tay mịn màng, mềm mại và sáng bóng sau khi bôi.", "Sau khi làm sạch da bằng sữa rửa mặt (Clarifying Cleanser), cân bằng da với toner (Clarifying Toner) và cung cấp dưỡng chất với các sản phẩm điều trị , bạn thoa kem dưỡng kiểm soát dầu Oil-Control Mattifier SPF 15 PA++ lên toàn mặt, cổ và vùng hở ngực. Sản phẩm này chỉ dùng vào buổi sáng. Thế nên, bạn nên bổ sung kem dưỡng ẩm ban đêm dành cho da dầu Skin Perfecting Lotion vào quy trình chăm sóc da buổi tối. ");
    a[201] = new sanpham(201, "image/sp201.jpg", "Cọ & Phụ kiện", "Cọ","", "Vasanti Eyeshadow Brush", " Vasanti", 421000, 30, "Vasanti Eyeshadow Brush được thiết kế với lông cọ mềm và dày để có thể dễ dàng tán màu mắt giúp màu mắt lên đậm và rõ nét hơn","Sử dụng cọ để tán phấn mắt màu sáng vào giữa bầu mắt như là 1 cách highlight cho mắt để làm mắt to hơn và sáng hơn");
    a[202] = new sanpham(202, "image/sp202.jpg", "Cọ & Phụ kiện", "Cọ","", "Morphe E3 Precision Pointed Powder Brush", " Morphe", 42000, 30, "Vasanti Eyeshadow Brush được thiết kế với lông cọ mềm và dày để có thể dễ dàng tán màu mắt giúp màu mắt lên đậm và rõ nét hơn", "Sử dụng cọ để tán phấn mắt màu sáng vào giữa bầu mắt như là 1 cách highlight cho mắt để làm mắt to hơn và sáng hơn");
    a[203] = new sanpham(203, "image/sp203.jpg", "Cọ & Phụ kiện", "Cọ","", "M.A.C 318 Retractable Lip Brush", " M.A.C Cosmetics", 622000, 30, "M.A.C (Make-up Art Comestic) là hãng mỹ phẩm trang điểm chuyên nghiệp nổi tiếng trên thế giới với trụ sở chính đặt tại thành phố New York. Thương hiệu này được sáng lập bởi 2 người Canada là Frank Toskan và Frank Angelo. Năm 1991, công ty mở cửa hàng đầu tiên tại New York. Ban đầu, M.A.C thiết kế sản phẩm dành cho các chuyên viên trang điểm chuyên nghiệp, tuy nhiên, hiện nay thương hiệu đã được bán cho tất cả các khách hàng trên toàn thế giới. Mỹ phẩm M.A.C nổi tiếng về độ bám màu, bảng màu sắc phong phú và đa dạng, lên hình đẹp, phù hợp cho các sàn diễn, diễn viên khi lên sân khấu, bên cạnh đó các sản phẩm của hãng được rất nhiều người phụ nữ dùng hàng ngày để làm đẹp cho bản thân.", "Sử dụng cọ để tán phấn mắt màu sáng vào giữa bầu mắt như là 1 cách highlight cho mắt để làm mắt to hơn và sáng hơn");
    a[204] = new sanpham(204, "image/sp204.jpg", "Cọ & Phụ kiện", "Cọ","", "M.A.C 210 Precise EyeLiner Brush"," M.A.C Cosmetics", 50000, 30, "M.A.C(Make - up Art Comestic) là hãng mỹ phẩm trang điểm chuyên nghiệp nổi tiếng trên thế giới với trụ sở chính đặt tại thành phố New York.Thương hiệu này được sáng lập bởi 2 người Canada là Frank Toskan và Frank Angelo.Năm 1991, công ty mở cửa hàng đầu tiên tại New York.Ban đầu, M.A.C thiết kế sản phẩm dành cho các chuyên viên trang điểm chuyên nghiệp, tuy nhiên, hiện nay thương hiệu đã được bán cho tất cả các khách hàng trên toàn thế giới.Mỹ phẩm M.A.C nổi tiếng về độ bám màu, bảng màu sắc phong phú và đa dạng, lên hình đẹp, phù hợp cho các sàn diễn, diễn viên khi lên sân khấu, bên cạnh đó các sản phẩm của hãng được rất nhiều người phụ nữ dùng hàng ngày để làm đẹp cho bản thân.", "Sử dụng cọ để tán phấn mắt màu sáng vào giữa bầu mắt như là 1 cách highlight cho mắt để làm mắt to hơn và sáng hơn");
    a[205] = new sanpham(205, "image/sp205.jpg", "Cọ & Phụ kiện", "Cọ","", "Lixibox Brush Net Guard Set 10 pcs", "Lixibox", 32000, "Hãy trở thành người dẫn đầu xu hướng với ...thương hiệu mỹ phẩm cao cấp đã có mặt tại Lixibox.Đội ngũ của chúng tôi luôn mong muốn đem đến những sản phẩm chất lượng, được chính những chuyên gia làm đẹp lựa chọn và thiết kế tới tay người tiêu dùng Việt Nam. ", "Sử dụng cọ để tán phấn mắt màu sáng vào giữa bầu mắt như là 1 cách highlight cho mắt để làm mắt to hơn và sáng hơn");
    a[206] = new sanpham(206, "image/sp206.jpg", "Cọ & Phụ kiện", "Cọ","", "Cọ Chikuhodo R - P6 Powder", " Chikuhodo", 2121000, 30, "Được thành lập vào năm 1971 bởi nghệ nhân Tesshu Yamaoka và nhờ tinh thần học hỏi đáng ngưỡng mộ, không ngừng hoàn thiện những kĩ thuật và ý tưởng chế tạo cọ trang điểm đã giúp Chikuhodo trở thành một trong những thương hiệu sản xuất cọ trang điểm hàng đầu thế giới hiện nay. Sản phẩm của Chikihodo được sản xuất từ những nguyên liệu chất lượng từ khắp nơi trên thế giới, bao gồm các quốc gia như Trung Quốc, Nga, Châu Âu và Canada.", "Sử dụng cọ để tán phấn mắt màu sáng vào giữa bầu mắt như là 1 cách highlight cho mắt để làm mắt to hơn và sáng hơn");
    a[207] = new sanpham(207, "image/sp207.jpg", "Cọ & Phụ kiện", "Cọ","", "BH Cosmetics Sculpt and Blend 2 – 10 Piece Brush Set", ": BH Cosmetics", 64000, 30, "BH Cosmetics là một hãng mỹ phẩm tầm giá bình dân tại Mỹ với các dòng sản phẩm makeup đa dạng từ phấn mắt, kẻ mày... đến những màu son đa sắc màu và đầy nổi bật.", "Sử dụng cọ để tán phấn mắt màu sáng vào giữa bầu mắt như là 1 cách highlight cho mắt để làm mắt to hơn và sáng hơn");
    a[208] = new sanpham(208, "image/sp208.jpg", "Cọ & Phụ kiện", "Bọt biển","",  " Lixibox Konjac Sponge" , " Lixibox", 59000, 30, "Miếng bọt rửa mặt giúp làm sạch nhẹ nhàng mà vẫn làm sạch sâu trong lỗ chân tông, lấy đi tế bào chết giúp da mịn màng, đàn hồi tốt hơn nhờ máu được lưu thông trong quá trình mát xa.", "Hướng dẫn sử dụng: Làm ẩm miếng bọt biển rồi tạo bọt bằng sửa rửa mặt. Dùng miếng bọt biển mát xa trên da mặt theo hình tròn, tránh vùng mắt. Rửa sạch mặt và miếng bọt biển. Chú ý để miếng bọt biển ở nơi khô ráo sau khi sử dụng");
    a[209] = new sanpham(209, "image/sp209.jpg", "Cọ & Phụ kiện", "Bọt biển", "" ,  "Bông mút trang điểm The Duo Rain Drop", " the Duo Rain drop", 99000, 30, "Set 2 miếng mút tán kem nền đa chức năng 3 trong 1 của the Duo Rain drop. Mút có thể tán kem nền mọi vùng trên khuôn mặt: che khuyết điểm, mụn, cánh mũi, bề mặt... Cho lớp nền tiệp vào da, mịn màng, tự nhiên. Sản phẩm được các beauty guru trên thế giới hết sức ưa thích . the Duo Rain drop có thể sử dụng với mọi loại mỹ phẩm từ lỏng, gel tới kem đặc.", "Hướng dẫn sử dụng: Làm ẩm miếng bọt biển rồi tạo bọt bằng sửa rửa mặt. Dùng miếng bọt biển mát xa trên da mặt theo hình tròn, tránh vùng mắt. Rửa sạch mặt và miếng bọt biển. Chú ý để miếng bọt biển ở nơi khô ráo sau khi sử dụng");
    a[210] = new sanpham(210, "image/sp210.jpg", "Nước hoa","","", "Foellie Inner Perfume - Bijou", " Foellie", 333000, 30, "Foellie Eau de Innerb Perfume – Bijou chai màu đen: Hương thơm ngọt ngào và mãnh liệt với cảm giác yêu thương thanh lịch và sâu sắc.", "Hướng dẫn sử dụng: Làm ẩm miếng bọt biển rồi tạo bọt bằng sửa rửa mặt. Dùng miếng bọt biển mát xa trên da mặt theo hình tròn, tránh vùng mắt. Rửa sạch mặt và miếng bọt biển. Chú ý để miếng bọt biển ở nơi khô ráo sau khi sử dụng");
    a[211] = new sanpham(211, "image/sp211.jpg", "Nước hoa","","", "Jo Malone Oud & Bergamot Intense 9ml", "Jo Malone London", 525000, 30, "Một mẫu nước hoa mang mùi hương ngọt và phức tạp mang tên Oud & Bergamot là một phần trong bộ sưu tập Intense Collection của thương hiệu Jo Malone và đã được ra mắt vào năm 2010. Bộ sưu tập này được lấy cảm hứng từ nghi lễ thế tục ở vùng Trung Đông. Bộ sưu tập này là đứa con tinh thần của sự hợp tác giữa Christine Nagel và văn phòng thiết kế của Jo Malone, nhằm tạo ra những chai nước hoa mang hương thơm táo bạo từ những nguyên liệu nước hoa phổ biến.", "Hướng dẫn sử dụng: Làm ẩm miếng bọt biển rồi tạo bọt bằng sửa rửa mặt. Dùng miếng bọt biển mát xa trên da mặt theo hình tròn, tránh vùng mắt. Rửa sạch mặt và miếng bọt biển. Chú ý để miếng bọt biển ở nơi khô ráo sau khi sử dụng");
    a[212] = new sanpham(212, "image/sp212.jpg", "Nước hoa","","", " Jo Malone Dark & Amber & Ginger Lily 9ml", "Jo Malone London", 525000, 30, "Một mẫu nước hoa mang mùi hương ngọt và phức tạp mang tên Oud & Bergamot là một phần trong bộ sưu tập Intense Collection của thương hiệu Jo Malone và đã được ra mắt vào năm 2010. Bộ sưu tập này được lấy cảm hứng từ nghi lễ thế tục ở vùng Trung Đông. Bộ sưu tập này là đứa con tinh thần của sự hợp tác giữa Christine Nagel và văn phòng thiết kế của Jo Malone, nhằm tạo ra những chai nước hoa mang hương thơm táo bạo từ những nguyên liệu nước hoa phổ biến.", "Hướng dẫn sử dụng: Làm ẩm miếng bọt biển rồi tạo bọt bằng sửa rửa mặt. Dùng miếng bọt biển mát xa trên da mặt theo hình tròn, tránh vùng mắt. Rửa sạch mặt và miếng bọt biển. Chú ý để miếng bọt biển ở nơi khô ráo sau khi sử dụng");
    a[213] = new sanpham(213, "image/sp213.jpg", "Nước hoa","","", " Jo Malone Tuberose & Angelica 9ml", "Jo Malone London", 525000, 30, "Một mẫu nước hoa mang mùi hương ngọt và phức tạp mang tên Oud & Bergamot là một phần trong bộ sưu tập Intense Collection của thương hiệu Jo Malone và đã được ra mắt vào năm 2010. Bộ sưu tập này được lấy cảm hứng từ nghi lễ thế tục ở vùng Trung Đông. Bộ sưu tập này là đứa con tinh thần của sự hợp tác giữa Christine Nagel và văn phòng thiết kế của Jo Malone, nhằm tạo ra những chai nước hoa mang hương thơm táo bạo từ những nguyên liệu nước hoa phổ biến.", "Hướng dẫn sử dụng: Làm ẩm miếng bọt biển rồi tạo bọt bằng sửa rửa mặt. Dùng miếng bọt biển mát xa trên da mặt theo hình tròn, tránh vùng mắt. Rửa sạch mặt và miếng bọt biển. Chú ý để miếng bọt biển ở nơi khô ráo sau khi sử dụng");
    a[214] = new sanpham(214, "image/sp214.jpg", "Nước hoa","","", " Jo Malone London Cologne Intense - Myrrh & Tonka 9ml", "Jo Malone London", 625000, 30, "Một mẫu nước hoa mang mùi hương ngọt và phức tạp mang tên Oud & Bergamot là một phần trong bộ sưu tập Intense Collection của thương hiệu Jo Malone và đã được ra mắt vào năm 2010. Bộ sưu tập này được lấy cảm hứng từ nghi lễ thế tục ở vùng Trung Đông. Bộ sưu tập này là đứa con tinh thần của sự hợp tác giữa Christine Nagel và văn phòng thiết kế của Jo Malone, nhằm tạo ra những chai nước hoa mang hương thơm táo bạo từ những nguyên liệu nước hoa phổ biến.", "Hướng dẫn sử dụng: Làm ẩm miếng bọt biển rồi tạo bọt bằng sửa rửa mặt. Dùng miếng bọt biển mát xa trên da mặt theo hình tròn, tránh vùng mắt. Rửa sạch mặt và miếng bọt biển. Chú ý để miếng bọt biển ở nơi khô ráo sau khi sử dụng");
    a[215] = new sanpham(215, "image/sp215.jpg", "Nước hoa","","", "Diptyque L'Ombre dans l'Eau Set", ": Diptyque", 2720000, 30, "Diptyque L'Ombre dans l'Eau Eau de Parfum and Baies Scented Candle Gift Set", "Hướng dẫn sử dụng: Làm ẩm miếng bọt biển rồi tạo bọt bằng sửa rửa mặt. Dùng miếng bọt biển mát xa trên da mặt theo hình tròn, tránh vùng mắt. Rửa sạch mặt và miếng bọt biển. Chú ý để miếng bọt biển ở nơi khô ráo sau khi sử dụng");
    a[216] = new sanpham(216, "image/sp216.jpg", "Nước hoa","","", "Jo Malone London Velvet Rose & Oud Cologne Intense ", " Jo Malone London", 2840000, 30, "Jo Malone London là một thương hiệu nước hoa và mỹ phẩm quốc tế được sáng lập tại Anh bởi nhà chế tác nước hoa Jo Malone. Từ năm 1999 hãng đã thuộc quyền sở hữu của tập đoàn Estée Lauder. Với tinh thần học hỏi không ngừng cùng đội ngũ tài năng sáng tạo bật nhất London, Jo Malone London đã cho ra đời nhiều dòng sản phẩm chất lượng mang đậm phong cách xứ sở sương mù Anh quốc. ", "Hướng dẫn sử dụng: Làm ẩm miếng bọt biển rồi tạo bọt bằng sửa rửa mặt. Dùng miếng bọt biển mát xa trên da mặt theo hình tròn, tránh vùng mắt. Rửa sạch mặt và miếng bọt biển. Chú ý để miếng bọt biển ở nơi khô ráo sau khi sử dụng");
    a[217] = new sanpham(217, "image/sp217.jpg", "Nước hoa","","", "LE LABO FLEUR D'ORANGER 27 eau de parfum - 50ml", " LE LABO", 4003000, 30, "Le Labo là hãng nước hoa được ra mắt tại New York vào năm 2006 và được ca ngợi bởi những sản phẩm nước hoa độc đáo. Thương hiệu quan niệm rằng mùi hương được pha chế bằng tay sẽ luôn gợi lên những kỷ niệm – điều khiến mỗi chúng ta cảm thấy ấn tượng và lưu luyến. Le Labo tự hào rằng tầm nhìn của mình sẽ được khách hàng đón nhận bởi chính sự cổ điển, đơn giản nhưng thanh lịch không phân biệt giới tính người sử dụng.", "Hướng dẫn sử dụng: Làm ẩm miếng bọt biển rồi tạo bọt bằng sửa rửa mặt. Dùng miếng bọt biển mát xa trên da mặt theo hình tròn, tránh vùng mắt. Rửa sạch mặt và miếng bọt biển. Chú ý để miếng bọt biển ở nơi khô ráo sau khi sử dụng");
    a[218] = new sanpham(218, "image/sp218.jpg", "Nước hoa","","", "LE LABO AMBRETTE 9 eau de parfum - 50ml", " LE LABO", 4003000, 30, "Le Labo là hãng nước hoa được ra mắt tại New York vào năm 2006 và được ca ngợi bởi những sản phẩm nước hoa độc đáo. Thương hiệu quan niệm rằng mùi hương được pha chế bằng tay sẽ luôn gợi lên những kỷ niệm – điều khiến mỗi chúng ta cảm thấy ấn tượng và lưu luyến. Le Labo tự hào rằng tầm nhìn của mình sẽ được khách hàng đón nhận bởi chính sự cổ điển, đơn giản nhưng thanh lịch không phân biệt giới tính người sử dụng.", "Xịt nước hoa vào những nơi lưu mùi lâu như, cổ, gáy, cổ tay.");
    a[219] = new sanpham(219, "image/sp219.jpg", "Nước hoa","","", "DIPTYQUE Eau Duelle Eau de Parfum - 75ml", " Diptyque", 3910000, 30, "Diptyque là thương hiệu nước hoa Pháp được thành lập vào năm 1961 bởi sự hợp tác của Yves Coueslant (nhà thiết kế), Desmond Knox-Leet (họa sĩ) và Christiane Gautrot (nhà thiết kế hàng dệt may). Năm 2005, công ty thuộc quyền sở hữu của tập đoàn Manzanita Capital có vốn đầu tư tư nhân đặt trụ sở tại London. Mục đích thành lập ban đầu là kinh doanh nội thất và vải in. Sau đó, hãng đã mở rộng kinh doanh sang lĩnh vực nước hoa và nhận được sự yêu thích đông đảo đã giúp Diptyque nằm trong TOP 100 hãng nước hoa nổi tiếng nhất thế giới.", "Xịt nước hoa vào những nơi lưu mùi lâu như, cổ, gáy, cổ tay.");
    a[220] = new sanpham(220, "image/sp220.jpg", "Nước hoa","","", "DIPTYQUE Fleur de Peau Eau de parfum - 75ml", " Diptyque", 3910000, 30, "Diptyque là thương hiệu nước hoa Pháp được thành lập vào năm 1961 bởi sự hợp tác của Yves Coueslant (nhà thiết kế), Desmond Knox-Leet (họa sĩ) và Christiane Gautrot (nhà thiết kế hàng dệt may). Năm 2005, công ty thuộc quyền sở hữu của tập đoàn Manzanita Capital có vốn đầu tư tư nhân đặt trụ sở tại London. Mục đích thành lập ban đầu là kinh doanh nội thất và vải in. Sau đó, hãng đã mở rộng kinh doanh sang lĩnh vực nước hoa và nhận được sự yêu thích đông đảo đã giúp Diptyque nằm trong TOP 100 hãng nước hoa nổi tiếng nhất thế giới.", "Xịt nước hoa vào những nơi lưu mùi lâu như, cổ, gáy, cổ tay.");
    a[221] = new sanpham(221, "image/sp221.jpg", "Nước hoa","","", "DIPTYQUE Volutes Eau de Parfum - 75ml ", " Diptyque", 3910000, 30, "Diptyque là thương hiệu nước hoa Pháp được thành lập vào năm 1961 bởi sự hợp tác của Yves Coueslant (nhà thiết kế), Desmond Knox-Leet (họa sĩ) và Christiane Gautrot (nhà thiết kế hàng dệt may). Năm 2005, công ty thuộc quyền sở hữu của tập đoàn Manzanita Capital có vốn đầu tư tư nhân đặt trụ sở tại London. Mục đích thành lập ban đầu là kinh doanh nội thất và vải in. Sau đó, hãng đã mở rộng kinh doanh sang lĩnh vực nước hoa và nhận được sự yêu thích đông đảo đã giúp Diptyque nằm trong TOP 100 hãng nước hoa nổi tiếng nhất thế giới.", "Xịt nước hoa vào những nơi lưu mùi lâu như, cổ, gáy, cổ tay.");
    a[222] = new sanpham(222, "image/sp222.jpg", "Nước hoa","","", "DIPTYQUE Philosykos Eau de Parfum - 75ml ", " Diptyque", 3910000, 30, "Diptyque là thương hiệu nước hoa Pháp được thành lập vào năm 1961 bởi sự hợp tác của Yves Coueslant (nhà thiết kế), Desmond Knox-Leet (họa sĩ) và Christiane Gautrot (nhà thiết kế hàng dệt may). Năm 2005, công ty thuộc quyền sở hữu của tập đoàn Manzanita Capital có vốn đầu tư tư nhân đặt trụ sở tại London. Mục đích thành lập ban đầu là kinh doanh nội thất và vải in. Sau đó, hãng đã mở rộng kinh doanh sang lĩnh vực nước hoa và nhận được sự yêu thích đông đảo đã giúp Diptyque nằm trong TOP 100 hãng nước hoa nổi tiếng nhất thế giới.", "Xịt nước hoa vào những nơi lưu mùi lâu như, cổ, gáy, cổ tay.");
    a[223] = new sanpham(223, "image/sp223.jpg", "Nước hoa","","", "DIPTYQUE L'Ombre Dans L'Eau Eau de Parfum - 75ml ", " Diptyque", 3978000, 30, "Diptyque là thương hiệu nước hoa Pháp được thành lập vào năm 1961 bởi sự hợp tác của Yves Coueslant (nhà thiết kế), Desmond Knox-Leet (họa sĩ) và Christiane Gautrot (nhà thiết kế hàng dệt may). Năm 2005, công ty thuộc quyền sở hữu của tập đoàn Manzanita Capital có vốn đầu tư tư nhân đặt trụ sở tại London. Mục đích thành lập ban đầu là kinh doanh nội thất và vải in. Sau đó, hãng đã mở rộng kinh doanh sang lĩnh vực nước hoa và nhận được sự yêu thích đông đảo đã giúp Diptyque nằm trong TOP 100 hãng nước hoa nổi tiếng nhất thế giới.", "Xịt nước hoa vào những nơi lưu mùi lâu như, cổ, gáy, cổ tay.");
    a[224] = new sanpham(224, "image/sp224.jpg", "Nước hoa","","", "Diptyque Eau Duelle Eau de Toilette - 50 ml ", " Diptyque", 2278000, 30, "Diptyque là thương hiệu nước hoa Pháp được thành lập vào năm 1961 bởi sự hợp tác của Yves Coueslant (nhà thiết kế), Desmond Knox-Leet (họa sĩ) và Christiane Gautrot (nhà thiết kế hàng dệt may). Năm 2005, công ty thuộc quyền sở hữu của tập đoàn Manzanita Capital có vốn đầu tư tư nhân đặt trụ sở tại London. Mục đích thành lập ban đầu là kinh doanh nội thất và vải in. Sau đó, hãng đã mở rộng kinh doanh sang lĩnh vực nước hoa và nhận được sự yêu thích đông đảo đã giúp Diptyque nằm trong TOP 100 hãng nước hoa nổi tiếng nhất thế giới.", "Xịt nước hoa vào những nơi lưu mùi lâu như, cổ, gáy, cổ tay.");
    a[225] = new sanpham(225, "image/sp225.jpg", "Nước hoa","","", "ATELIER COLOGNE Iris Rebelle Cologne Absolue Pure Perfume - 10 ml", " Atelier Cologne", 750000, 30, "Atelier Cologne là thương hiệu nước hoa nổi tiếng của Mỹ chuyên cung cấp nước hoa dành cho nam giới. Nước hoa Atelier Cologne nổi tiếng theo phong cách cá tính mạnh mẽ với sự pha trộn tinh tế giữa hương cam quýt và hương thảo dược mang lại mùi hương độc đáo có độ lưu hương kéo dài rất lâu. Nước hoa Atelier Cologne được hợp tác và điều chế bởi những nhà pha chế nổi tiếng như Ralf Schwieger, Jerome Epinette, Cecile Krakower. Atelier Cologne nằm trong TOP 100 hãng nước hoa nổi tiếng nhất thế giới.", "Xịt nước hoa vào những nơi lưu mùi lâu như, cổ, gáy, cổ tay.");
    a[226] = new sanpham(226, "image/sp226.jpg", "Nước hoa","","", "Jo Malone Lime Basil & Mandarin Cologne 30ml", " Jo Malone London", 1834000, 30, "Jo Malone London là một thương hiệu nước hoa và mỹ phẩm quốc tế được sáng lập tại Anh bởi nhà chế tác nước hoa Jo Malone. Từ năm 1999 hãng đã thuộc quyền sở hữu của tập đoàn Estée Lauder. Với tinh thần học hỏi không ngừng cùng đội ngũ tài năng sáng tạo bật nhất London, Jo Malone London đã cho ra đời nhiều dòng sản phẩm chất lượng mang đậm phong cách xứ sở sương mù Anh quốc. ", "Xịt nước hoa vào những nơi lưu mùi lâu như, cổ, gáy, cổ tay.");


	return a;
}

//====================================Lưu sản phẩm vào Local=================================
function Auto_luu_sanpham(){
	var a = localStorage.getItem("Array_sp");
	a = JSON.parse(a);
	if(a == null || a == ""){
		a = mangsanpham();
		localStorage.setItem("Array_sp", JSON.stringify(a));
	}
}




//=============================================== sanpham.html=================================================================
//===========================================Đây là phần Danh mục =============================================================

function an_danh_muc_sanpham(){
	//=============== Ẩn phần Trang điểm===================
	document.images['icon_trang_diem1'].src = "icon/right.png";
	document.getElementById('_mắt1').style.display = "none";
	document.getElementById('_mặt1').style.display = "none";
	document.getElementById('_moi1').style.display = "none";
	document.images['icon_mắt1'].src = "icon/right.png";
	document.getElementById('_mắt11').style.display = "none";
	document.getElementById('_mắt12').style.display = "none";
	document.getElementById('_mắt13').style.display = "none";
	document.getElementById('_mắt14').style.display = "none";
	document.getElementById('_mắt15').style.display = "none";
	document.getElementById('_mắt16').style.display = "none";
	document.images['icon_mặt1'].src = "icon/right.png";
	document.getElementById('_mặt11').style.display = "none";
	document.getElementById('_mặt12').style.display = "none";
	document.getElementById('_mặt13').style.display = "none";
	document.getElementById('_mặt14').style.display = "none";
	document.getElementById('_mặt15').style.display = "none";
	document.images['icon_moi1'].src = "icon/right.png";
	document.getElementById('_moi11').style.display = "none";
	document.getElementById('_moi12').style.display = "none";
	document.getElementById('_moi13').style.display = "none";
	document.getElementById('_moi14').style.display = "none";
	//================ Ẩn phần dưỡng da=====================
	document.images['icon_duong_da1'].src = "icon/right.png";
	document.getElementById('_rua_mat1').style.display = "none";
	document.getElementById('_mat_na1').style.display = "none";
	document.getElementById('_duong_am1').style.display = "none";
	document.getElementById('_tri_lieu1').style.display = "none";
	document.getElementById('_chong_nang1').style.display = "none";
	document.images['icon_rua_mat1'].src = "icon/right.png";
	document.getElementById('_rua_mat11').style.display = "none";
	document.getElementById('_rua_mat12').style.display = "none";
	document.getElementById('_rua_mat13').style.display = "none";
	document.getElementById('_rua_mat14').style.display = "none";
	document.getElementById('_rua_mat15').style.display = "none";
	document.images['icon_mat_na1'].src = "icon/right.png";
	document.getElementById('_mat_na11').style.display = "none";
	document.getElementById('_mat_na12').style.display = "none";
	document.images['icon_duong_am1'].src = "icon/right.png";
	document.getElementById('_duong_am11').style.display = "none";
	document.getElementById('_duong_am12').style.display = "none";
	document.getElementById('_duong_am13').style.display = "none";
	document.getElementById('_duong_am14').style.display = "none";
	document.getElementById('_duong_am15').style.display = "none";
	document.getElementById('_duong_am16').style.display = "none";
	document.images['icon_tri_lieu1'].src = "icon/right.png";
	document.getElementById('_tri_lieu11').style.display = "none";
	document.getElementById('_tri_lieu12').style.display = "none";
	document.getElementById('_tri_lieu13').style.display = "none";
	document.images['icon_chong_nang1'].src = "icon/right.png";
	document.getElementById('_chong_nang11').style.display = "none";
	document.getElementById('_chong_nang12').style.display = "none";
	//=================== Ẩn mục cơ thể=============================
	document.images['icon_co_the1'].src = "icon/right.png";
	document.getElementById('_duong_the1').style.display = "none";
	document.getElementById('_sua_tam1').style.display = "none";
	document.images['icon_duong_the1'].src = "icon/right.png";
	document.getElementById('_duong_the11').style.display = "none";
	document.getElementById('_duong_the12').style.display = "none";
	document.images['icon_sua_tam1'].src = "icon/right.png";
	document.getElementById('_sua_tam11').style.display = "none";
	document.getElementById('_sua_tam12').style.display = "none";
	//=========== ản danh mục tóc==================================
	document.images['icon_toc1'].src = "icon/right.png";
	document.getElementById('_toc11').style.display = "none";
	document.getElementById('_toc12').style.display = "none";
	document.getElementById('_toc13').style.display = "none";
	//======== ản danh mục cọ và phụ kiện=======================
	document.images['icon_co1'].src = "icon/right.png";
	document.getElementById('_co11').style.display = "none";
	document.getElementById('_co12').style.display = "none";
}

//=======================Hiện danh mục Trang điểm
function _trang_diem1(){
	an_danh_muc_sanpham();
	document.images['icon_trang_diem1'].src = "icon/down.png";
	document.getElementById('_mắt1').style.display = "block";
	document.getElementById('_mặt1').style.display = "block";
	document.getElementById('_moi1').style.display = "block";
	duyetmang("Trang điểm", "", "");
}

//===================== Hiện danh mục Mắt
function _maat1(){
	an_danh_muc_sanpham();
	document.images['icon_trang_diem1'].src = "icon/down.png";
	document.getElementById('_mắt1').style.display = "block";
	document.getElementById('_mặt1').style.display = "block";
	document.getElementById('_moi1').style.display = "block";

	document.images['icon_mắt1'].src = "icon/down.png";

	document.getElementById('_mắt11').style.display = "block";
	document.getElementById('_mắt12').style.display = "block";
	document.getElementById('_mắt13').style.display = "block";
	document.getElementById('_mắt14').style.display = "block";
	document.getElementById('_mắt15').style.display = "block";
	document.getElementById('_mắt16').style.display = "block";

	duyetmang("", "Mắt", "");
}

//====================== Hiện danh mục Mặt
function _mat1(){
	an_danh_muc_sanpham();
	document.images['icon_trang_diem1'].src = "icon/down.png";
	document.getElementById('_mắt1').style.display = "block";
	document.getElementById('_mặt1').style.display = "block";
	document.getElementById('_moi1').style.display = "block";

	document.images['icon_mặt1'].src = "icon/down.png";

	document.images['icon_mặt1'].src = "icon/down.png";
	document.getElementById('_mặt11').style.display = "block";
	document.getElementById('_mặt12').style.display = "block";
	document.getElementById('_mặt13').style.display = "block";
	document.getElementById('_mặt14').style.display = "block";
	document.getElementById('_mặt15').style.display = "block";
	
	duyetmang("", "Mặt", "");	
}

//===================== Hiện danh mục Môi
function _moi_1(){
	an_danh_muc_sanpham();
	document.images['icon_trang_diem1'].src = "icon/down.png";
	document.getElementById('_mắt1').style.display = "block";
	document.getElementById('_mặt1').style.display = "block";
	document.getElementById('_moi1').style.display = "block";

	document.images['icon_moi1'].src = "icon/down.png";

	document.getElementById('_moi11').style.display = "block";
	document.getElementById('_moi12').style.display = "block";
	document.getElementById('_moi13').style.display = "block";
	document.getElementById('_moi14').style.display = "block";

	duyetmang("", "Môi", "");
}

//=================== Hiện danh mục Dưỡng da
function _duong_da1(){
	an_danh_muc_sanpham();
	document.images['icon_duong_da1'].src = "icon/down.png";
	document.getElementById('_rua_mat1').style.display = "block";
	document.getElementById('_mat_na1').style.display = "block";
	document.getElementById('_duong_am1').style.display = "block";
	document.getElementById('_tri_lieu1').style.display = "block";
	document.getElementById('_chong_nang1').style.display = "block";
	duyetmang("Dưỡng da", "", "");
}

//=================== Hiện danh mục Rửa mặt
function _rua_mat1(){
	an_danh_muc_sanpham();
	document.images['icon_duong_da1'].src = "icon/down.png";
	document.getElementById('_rua_mat1').style.display = "block";
	document.getElementById('_mat_na1').style.display = "block";
	document.getElementById('_duong_am1').style.display = "block";
	document.getElementById('_tri_lieu1').style.display = "block";
	document.getElementById('_chong_nang1').style.display = "block";

	document.images['icon_rua_mat1'].src = "icon/down.png";

	document.getElementById('_rua_mat11').style.display = "block";
	document.getElementById('_rua_mat12').style.display = "block";
	document.getElementById('_rua_mat13').style.display = "block";
	document.getElementById('_rua_mat14').style.display = "block";
	document.getElementById('_rua_mat15').style.display = "block";

	duyetmang("", "Rửa mặt", "");
}

//==================Hiện danh mục Mặt nạ
function _mat_na1(){
	an_danh_muc_sanpham();
	document.images['icon_duong_da1'].src = "icon/down.png";
	document.getElementById('_rua_mat1').style.display = "block";
	document.getElementById('_mat_na1').style.display = "block";
	document.getElementById('_duong_am1').style.display = "block";
	document.getElementById('_tri_lieu1').style.display = "block";
	document.getElementById('_chong_nang1').style.display = "block";

	document.images['icon_mat_na1'].src = "icon/down.png";

	document.getElementById('_mat_na11').style.display = "block";
	document.getElementById('_mat_na12').style.display = "block";

	duyetmang("", "Mặt nạ", "");
}

//================Hiện danh mục Dưỡng ẩm
function _duong_am1(){
	an_danh_muc_sanpham();
	document.images['icon_duong_da1'].src = "icon/down.png";
	document.getElementById('_rua_mat1').style.display = "block";
	document.getElementById('_mat_na1').style.display = "block";
	document.getElementById('_duong_am1').style.display = "block";
	document.getElementById('_tri_lieu1').style.display = "block";
	document.getElementById('_chong_nang1').style.display = "block";

	document.images['icon_duong_am1'].src = "icon/down.png";

	document.getElementById('_duong_am11').style.display = "block";
	document.getElementById('_duong_am12').style.display = "block";
	document.getElementById('_duong_am13').style.display = "block";
	document.getElementById('_duong_am14').style.display = "block";
	document.getElementById('_duong_am15').style.display = "block";
	document.getElementById('_duong_am16').style.display = "block";

	duyetmang("", "Dưỡng ẩm", "");
}

//================Hiện danh mục Trị liệu
function _tri_lieu1(){
	an_danh_muc_sanpham();
	document.images['icon_duong_da1'].src = "icon/down.png";
	document.getElementById('_rua_mat1').style.display = "block";
	document.getElementById('_mat_na1').style.display = "block";
	document.getElementById('_duong_am1').style.display = "block";
	document.getElementById('_tri_lieu1').style.display = "block";
	document.getElementById('_chong_nang1').style.display = "block";

	document.images['icon_tri_lieu1'].src = "icon/down.png";
	document.getElementById('_tri_lieu11').style.display = "block";
	document.getElementById('_tri_lieu12').style.display = "block";
	document.getElementById('_tri_lieu13').style.display = "block";

	document.images['icon_tri_lieu1'].src = "icon/down.png";
}

//===============Hiện danh mục chống nắng
function _chong_nang1(){
	an_danh_muc_sanpham();
	document.images['icon_duong_da1'].src = "icon/down.png";
	document.getElementById('_rua_mat1').style.display = "block";
	document.getElementById('_mat_na1').style.display = "block";
	document.getElementById('_duong_am1').style.display = "block";
	document.getElementById('_tri_lieu1').style.display = "block";
	document.getElementById('_chong_nang1').style.display = "block";

	document.images['icon_chong_nang1'].src = "icon/down.png";
	document.getElementById('_chong_nang11').style.display = "block";
	document.getElementById('_chong_nang12').style.display = "block";

	duyetmang("", "Chống nắng", "");
}

//==============Hiện danh mục Cơ thể
function _co_the1(){
	an_danh_muc_sanpham();
	document.images['icon_co_the1'].src = "icon/down.png";
	document.getElementById('_duong_the1').style.display = "block";
	document.getElementById('_sua_tam1').style.display = "block";

	duyetmang("Cơ thể", "", "");
}

//===============Hiện danh mục Dưỡng thể
function _duong_the1(){
	an_danh_muc_sanpham();
	document.images['icon_co_the1'].src = "icon/down.png";
	document.getElementById('_duong_the1').style.display = "block";
	document.getElementById('_sua_tam1').style.display = "block";

	document.images['icon_duong_the1'].src = "icon/down.png";
	document.getElementById('_duong_the11').style.display = "block";
	document.getElementById('_duong_the12').style.display = "block";

	duyetmang("", "Dưỡng thể", "");
}

//================Hiện danh mục sữa tắm
function _sua_tam1(){
	an_danh_muc_sanpham();
	document.images['icon_co_the1'].src = "icon/down.png";
	document.getElementById('_duong_the1').style.display = "block";
	document.getElementById('_sua_tam1').style.display = "block";

	document.images['icon_sua_tam1'].src = "icon/down.png";
	document.getElementById('_sua_tam11').style.display = "block";
	document.getElementById('_sua_tam12').style.display = "block";

	duyetmang("", "Sữa tắm", "");
}

//================Hiện danh mục tóc
function _toc1(){
	an_danh_muc_sanpham();
	document.images['icon_toc1'].src = "icon/down.png";
	document.getElementById('_toc11').style.display = "block";
	document.getElementById('_toc12').style.display = "block";
	document.getElementById('_toc13').style.display = "block";

	duyetmang("Tóc", "", "");
}

//================Hiện danh mục cọ và phụ kiện
function _co1(){
	an_danh_muc_sanpham();
	document.images['icon_co1'].src = "icon/down.png";
	document.getElementById('_co11').style.display = "block";
	document.getElementById('_co12').style.display = "block";

	duyetmang("Cọ & Phụ kiện", "", "");
}

function _nuoc_hoa(){
	an_danh_muc_sanpham();
	duyetmang("Nước hoa", "", "");
}

//=================================================Kết thúc phần danh mục======================================================
function duyet_type(type){
	var a = localStorage.getItem("Array_sp");
	a = JSON.parse(a);
	var b = new Array();
	var i = 0;
	var j = 0;
	for(i = 0; i < a.length; i++) if(a[i].type == type){
		b[j++] = new sanpham(a[i].id, a[i].img, a[i].type, a[i].type1, a[i].type2, a[i].name, a[i].hieu, a[i].price, a[i].soluong, a[i].info, a[i].use);
	}
	return b;
}

function duyet_type1(type1){
	//var a = mangsanpham();
	var a = localStorage.getItem("Array_sp");
	a = JSON.parse(a);
	var b = new Array();
	var i = 0;
	var j = 0;
	for(i = 0; i < a.length; i++) if(a[i].type1 == type1){
		b[j++] = new sanpham(a[i].id, a[i].img, a[i].type, a[i].type1, a[i].type2, a[i].name, a[i].hieu, a[i].price, a[i].soluong, a[i].info, a[i].use);
	}
	return b;
}

function duyet_type2(type2){
	//var a = mangsanpham();
	var a = localStorage.getItem("Array_sp");
	a = JSON.parse(a);
	var b = new Array();
	var i = 0;
	var j = 0;
	for(i = 0; i < a.length; i++) if(a[i].type2 == type2){
		b[j++] = new sanpham(a[i].id, a[i].img, a[i].type, a[i].type1, a[i].type2, a[i].name, a[i].hieu, a[i].price, a[i].soluong, a[i].info, a[i].use);
	}
	return b;
}

var num_phan_trang = 1;
var b_max = 0;
var tieu_de_san_pham = "";
function duyetmang(type, type1, type2){
	num_phan_trang = sessionStorage.getItem("num_phan_trang");
	if(num_phan_trang != "" && num_phan_trang != null) num_phan_trang = parseInt(num_phan_trang);
	else num_phan_trang = 1;
	var b;
	if(type != ""){
		b = duyet_type(type);
		tieu_de_san_pham = type;
	}
	else if(type1 != ""){
		b = duyet_type1(type1); 
		tieu_de_san_pham = type1;
	}
	else if(type2 != ""){
		b = duyet_type2(type2); 
		tieu_de_san_pham = type2;
	}
	else{ 
//		b = mangsanpham();
		b = localStorage.getItem("Array_sp");
		b = JSON.parse(b);
		tieu_de_san_pham = "Tất cả sản phẩm";
	}
	save_danhmuc(tieu_de_san_pham);                  //lưu danh mục sản phẩm
	sessionStorage.setItem("PrintArray",JSON.stringify(b)); //lưu mảng sản phẩm dag hiển thị
	var i = 0;
	for(i = 0; i < 12; i++){
		document.getElementById(i).style.background = "#b7b7a7";
		document.getElementById(i).style = "hover:{background-color: red;}";
		document.getElementById(i).style.display = "none";
	}
	if(b.length <= 12){
		b_max = 1;
		phantrang(1);
		for(i = 0; i < 12; i++) document.getElementById(i).style.display = "none";
		return;
	}
	b_max = b.length/12;
	if(b.length%12 != 0) b_max++;
	b_max = parseInt(b_max);
	i = 0;
	document.getElementById(i).style.display = "block";
	document.getElementById(i).innerHTML= "<";
	for(i = 1; i <= b_max; i++){
		document.getElementById(i).style.display = "block";
		document.getElementById(i).innerHTML= i;
	}
	switch(b_max){
		case 2:{
			document.getElementById("phan_trang_sp").style = "margin-left: 34%;";
			break;
		}
		case 3:{
			document.getElementById("phan_trang_sp").style = "margin-left: 32%;";
			break;
		}
		case 4:{
			document.getElementById("phan_trang_sp").style = "margin-left: 30%;";
			break;
		}
		case 5:{
			document.getElementById("phan_trang_sp").style = "margin-left: 28%;";
			break;
		}
		case 6:{
			document.getElementById("phan_trang_sp").style = "margin-left: 26%;";
			break;
		}
		case 7:{
			document.getElementById("phan_trang_sp").style = "margin-left: 24%;";
			break;
		}
		case 8:{
			document.getElementById("phan_trang_sp").style = "margin-left: 22%;";
			break;
		}
		case 9:{
			document.getElementById("phan_trang_sp").style = "margin-left: 20%;";
			break;
		}
		case 10:{
			document.getElementById("phan_trang_sp").style = "margin-left: 18%;";
			break;
		}
		default: break;
	}
	document.getElementById(i).style.display = "block";
	document.getElementById(i).innerHTML= ">";
	document.getElementById(num_phan_trang).style.background = "red";
	if(num_phan_trang == 1) document.getElementById(0).style.display = "none";
	else if(num_phan_trang == b_max) document.getElementById((b_max+1)).style.display = "none";
	phantrang(num_phan_trang);
}


//=====================Phân trang===============

function phantrang(k){
	if(k < 0 || k > b_max+1) return;
	if (k == 0) {
		phantrang(num_phan_trang-1);
		return;
	}
	if(k == b_max+1){
		phantrang(num_phan_trang+1);
		return;
	}
	document.getElementById("san_pham").style = "height: 1110px;";
	var a = sessionStorage.getItem("PrintArray");
	a = JSON.parse(a);
	if(a == null) a = mangsanpham();
	document.getElementById('hien_sp').innerHTML = tieu_de_san_pham;	
	document.getElementById(num_phan_trang).style.background = "#b7b7a7";
	document.getElementById(num_phan_trang).style = "hover:{background-color: red;}"
	num_phan_trang = k;
	document.getElementById(num_phan_trang).style.background = "red";
	var end = num_phan_trang*12;
	var start = end - 12;
	if(end > a.length) end = a.length;
	var j = 0;
	var i = 0;
	for(j = 0; j < 12; j++) document.getElementById("khung_sp"+j).style = "display: block";
	j = 0;
	for(i = start; i < end; i++){
		document.getElementById("khung_sp"+j).innerHTML = "<img src='" + a[i].img + "' onclick='sanpham_get_id(" + j +")'/>"+
		"<div class='san_pham_phan_chu' onclick='sanpham_get_id("+ j +")'>"+
			"<p>Tên : "+ a[i].name + "</p>"+
			"<p>Nhãn hiệu : " + a[i].hieu + "</p>"+
			"<p>Giá : " + a[i].price + "đ</p>"+
		"</div>"+
		"<div class='sanpham_icon_them' onclick='sanpham_them_vao_gio(" + i +")'><img src='icon/icons8-add-basket-48.png'></div>";
		j++;
	}
	if(num_phan_trang*12 > a.length){
			for(; j < 12; j++){
			//document.getElementById("khung_sp"+j).innerHTML = "";
			//document.getElementById("khung_sp"+j).style = "border: 0px";
			document.getElementById("khung_sp"+j).style.display = "none";
		}
	}
	for(i = 0; i <= (b_max+1); i++) document.getElementById(i).style.display = "block";
	if(end - start <= 4) document.getElementById("san_pham").style = "height: 500px;";
	else if(end - start <= 8) document.getElementById("san_pham").style = "height: 813px;";
	if(num_phan_trang == 1){
		document.getElementById(0).style.display = "none";
		document.getElementById((b_max+1)).style.display = "block";
	}
	else if(num_phan_trang == b_max){
		document.getElementById(0).style.display = "block";
		document.getElementById((b_max+1)).style.display = "none";
	}
	sessionStorage.setItem("num_phan_trang",num_phan_trang.toString());
}

function xem_gio_hang(){
	window.location.href = "cart.html";
}

//=================Lấy sản phẩm để chuyển sang detail====================
function sanpham_get_id(num_khung){
	var a = sessionStorage.getItem("PrintArray");  //Lấy danh sách sản phẩm dag hiển thị và dag lưu trên sesstion
	a = JSON.parse(a);
	var i = num_khung + (num_phan_trang-1)*12;
	var b = new sanpham(a[i].id, a[i].img, a[i].type, a[i].type1, a[i].type2, a[i].name, a[i].hieu, a[i].price, a[i].soluong, a[i].info, a[i].use);
	sessionStorage.setItem("detail_sp", JSON.stringify(b));
	window.location.href = "detail.html";
}

function sanpham_them_vao_gio(index){
	var a = sessionStorage.getItem("PrintArray");
	a = JSON.parse(a);
	var b = localStorage.getItem("Cartsp");
	b = JSON.parse(b);
	if(b == null || b == ""){
		b = new Array();
		b.push(new sanpham_giohang(a[index].id, a[index].img, a[index].type, a[index].type1, a[index].type2, a[index].name, a[index].hieu, a[index].price, 1, a[index].soluong, a[index].info, a[index].use));
		localStorage.setItem("Cartsp", JSON.stringify(b));
		Auto_hien_thi_soluong_sp();
		alert("Đã thêm vào giỏ hàng.");
		return;
	}
	for(let i = 0; i < b.length; i++) if(a[index].id == b[i].id){
		alert("Sản phẩm đã có trong giỏ.");
		return;
	}

	b[b.length] = new sanpham_giohang(a[index].id, a[index].img, a[index].type, a[index].type1, a[index].type2, a[index].name, a[index].hieu, a[index].price, 1, a[index].soluong, a[index].info, a[index].use);
	localStorage.setItem("Cartsp", JSON.stringify(b));
	Auto_hien_thi_soluong_sp();
	alert("Đã thêm vào giỏ hàng.");
}

//================================================detail.html=============================================================

function detail_kt_soluong(){
	var x = document.getElementById('input_soluong');
	var info = x.value;
	var str = /\D/g;
	if(str.test(info) == true){
		info = "";
		for(let i = 0; i < x.value.length; i++) if(parseInt(x.value[i]) >= 0) info = info + parseInt(x.value[i]);
		x.value = parseInt(info);
		return;
	}
	document.getElementById("detail_chuthich").innerHTML = "";
	if(info == ""){
		x.value = 1;
		return;
	}
	info = parseInt(info);
	var detail = sessionStorage.getItem("detail_sp");
	detail = JSON.parse(detail);
	if(info > detail.soluong) x.value = detail.soluong;
	else if(info < 1) x.value = 1;
	return;
}

function detail_sub(){
	var x = document.getElementById('input_soluong');
	var info = x.value;
	info = parseInt(info);
	if(info-1 > 0) info = info-1;
	x.value = info;
}

function detail_add(){
	var x = document.getElementById('input_soluong');
	var info = x.value;
	info = parseInt(info);
	var detail = sessionStorage.getItem("detail_sp");
	detail = JSON.parse(detail);
	if(info+1 <= detail.soluong) info = info+1;
	x.value = info;
}

function chay_detail(){
	var sp = sessionStorage.getItem("detail_sp");
	sp = JSON.parse(sp);
	if(typeof sp.max != "undefined"){
		var x = document.getElementById("input_soluong");
		x.value = sp.soluong;
		sp = new sanpham(sp.id, sp.img, sp.type, sp.type1, sp.type2, sp.name, sp.hieu, sp.price, sp.max, sp.info, sp.use);
		sessionStorage.setItem("detail_sp", JSON.stringify(sp));
	}
	document.getElementById("img_sp").innerHTML = "<img src='" + sp.img + "' id='hinh_anh'>";
	document.getElementById("detail_name").innerHTML = sp.name;
	document.getElementById("detail_nhanhieu").innerHTML = sp.hieu;
	document.getElementById("detail_gia").innerHTML = sp.price+"đ";
	if(sp.soluong > 0)  document.getElementById("detail_soluong").innerHTML = "Chỉ còn "+sp.soluong+" sản phẩm.";
	else document.getElementById("detail_soluong").innerHTML = "Đã hết hàng.";
	document.getElementById("detail_infor1").innerHTML = sp.info;
	document.getElementById("detail_use1").innerHTML = sp.use;
}

function detail_xoa_khoi_gio(){
	var a = localStorage.getItem("Cartsp");
	a = JSON.parse(a);
	var b = sessionStorage.getItem("detail_sp");
	b = JSON.parse(b);
	for(let i = 0; i < a.length; i++) if(a[i].id == b.id){
		a.splice(i, 1);
		localStorage.setItem("Cartsp", JSON.stringify(a));
		Auto_hien_thi_soluong_sp();
		alert("Đã xóa sản phẩm khỏi giỏ hàng");
		return;
	}
}


//=============mảng sản phẩm cho giỏ hàng===============
function sanpham_giohang(id, img, type, type1, type2, name, hieu, price, soluong, max, info, use){
	this.id = id;
	this.img = img;
	this.type = type;
	this.type1 = type1;
	this.type2 = type2;
	this.name = name;
	this.hieu = hieu;
	this.price = price;
	this.soluong = soluong;
	this.max = max;
	this.info = info;
	this.use = use;
}

//===========thêm sản phẩm vào giỏ hàng ở detail
function detail_cartadd(){
	var a = localStorage.getItem("Cartsp");
	a = JSON.parse(a);
	var b = sessionStorage.getItem("detail_sp");
	b = JSON.parse(b);
	if(b.soluong <= 0){
		alert("Sản phẩm đã hết hàng. Không thể thêm vào giỏ!");
		return;
	}
	var soluong = document.getElementById('input_soluong');
	if(a == null){
		a = new Array();
		a.push(new sanpham_giohang(b.id, b.img, b.type, b.type1, b.type2, b.name, b.hieu, b.price, parseInt(soluong.value), b.soluong, b.info, b.use));
		localStorage.setItem("Cartsp", JSON.stringify(a));
		Auto_hien_thi_soluong_sp();
		alert("Đã thêm vào giỏ");
	}
	else{
		var t = -1;
		for(let i = 0; i < a.length; i++) if(a[i].id == b.id){
			if(a[i].soluong != parseInt(soluong.value)){
				a[i].soluong = parseInt(soluong.value);
				alert("Đã thay đổi số lượng sản phẩm.");
				localStorage.setItem("Cartsp", JSON.stringify(a));
				Auto_hien_thi_soluong_sp();
				return;
			}
			t = i;
			break;
		}
		if(t < 0){
			a.push(new sanpham_giohang(b.id, b.img, b.type, b.type1, b.type2, b.name, b.hieu, b.price, parseInt(soluong.value), b.soluong, b.info, b.use));
			alert("Đã thêm vào giỏ");
		}
		else{
			alert("Sản phẩm đã có trong giỏ hàng.");
		}
		localStorage.setItem("Cartsp", JSON.stringify(a));
		Auto_hien_thi_soluong_sp(); 
	}
}

//=============================================cart.html==========================================================

//==============================mảng giỏ hàng===============================
function ArrayCart(id, user, sp, name, phone, address, tt){
	this.id = id;
	this.user = user;
	this.sp = sp;
	this.name = name;
	this.phone = phone;
	this.address = address;
	this.tt = tt;
}

function reset_soluong_sp(){
	var a = localStorage.getItem("Cartsp");
	a = JSON.parse(a);
	var b = localStorage.getItem("Array_sp");
	b = JSON.parse(b);
	var i, j;
	for(i = 0; i < a.length; i++){
		for(j = 0; j < b.length; j++) if(a[i].id == b[j].id){
			b[j].soluong = b[j].soluong - a[i].soluong;
			break;
		}
	}
	localStorage.setItem("Array_sp", JSON.stringify(b));
	b = sessionStorage.getItem("PrintArray");
	b = JSON.parse(b);
	for(i = 0; i < a.length; i++){
		for(j = 0; j < b.length; j++) if(a[i].id == b[j].id){
			b[j].soluong = b[j].soluong - a[i].soluong;
			break;
		}
	}
	sessionStorage.setItem("PrintArray", JSON.stringify(b));
}

function Dat_hang(){
	var a = localStorage.getItem("CurAccount");
	a = JSON.parse(a);
	if(a == null || a == ""){
		alert("Bạn chưa đăng nhập!");
		return;
	}
	var b = localStorage.getItem("Cartsp");
	b = JSON.parse(b);
	if(b == null || b == ""){
		alert("Giỏ hàng rỗng!");
		return;
	}
	var s = localStorage.getItem("ArrayCart");
	s = JSON.parse(s);
	if(s == null || s == ""){
		s = new Array();
		s.push(new ArrayCart(0, a.user, b, a.name, a.phone, a.address, "Đang xử lý"));
	}
	else{
		s.push(new ArrayCart((s[s.length-1].id + 1), a.user, b, a.name, a.phone, a.address, "Đang xử lý"));
	}
	localStorage.setItem("ArrayCart", JSON.stringify(s));
	//==============Thêm giỏ hàng vào CurAccount và ExCount=====================
	var i, j;
	if(a.cart == null || a.cart == ""){
		a.cart = new Array();
		a.cart.push(new ArrayCart(s[s.length-1].id, s[s.length-1].user, s[s.length-1].sp, s[s.length-1].name, s[s.length-1].phone, s[s.length-1].address, "Đang xử lý"));
	}
	else{
		a.cart.push(new ArrayCart(s[s.length-1].id, s[s.length-1].user, s[s.length-1].sp, s[s.length-1].name, s[s.length-1].phone, s[s.length-1].address, "Đang xử lý"));
	}
	b = localStorage.getItem("ExAccount");
	b = JSON.parse(b);
	for(i = 0; i < b.length; i++) if(b[i].user == a.user){
		b[i].cart = a.cart;
	}
	localStorage.setItem("CurAccount", JSON.stringify(a));
	localStorage.setItem("ExAccount", JSON.stringify(b));
	//===============Giảm số lượng sản phẩm xuống======================
	reset_soluong_sp();
	alert("Đã đặt hàng.");
	var user_danhmuc = localStorage.getItem("user_danhmuc");
	user_danhmuc = JSON.parse(user_danhmuc);
	user_danhmuc = 4;
	localStorage.setItem("user_danhmuc", JSON.parse(user_danhmuc));
	localStorage.removeItem("Cartsp");
	window.location.href = "user.html";
}

var cart_tong_sp = 0;
var cart_gia_thanh = 0;
var cart_num_phan_trang = 1;
function chay_gio_hang(page){
	var a = localStorage.getItem("Cartsp");
	a = JSON.parse(a);
	cart_tong_sp = 0;
	cart_gia_thanh = 0;
	s = "";
	if(a == null || a == "") return;
	var sotrang, begin, end;
	sotrang = a.length/10;
	if(parseInt(sotrang) < sotrang) sotrang = parseInt(sotrang)+1;
	if(page == 0){
		if(cart_num_phan_trang != 1) cart_num_phan_trang--;
		else return;
	}
	else if(page == sotrang+1){
		if(cart_num_phan_trang != sotrang) cart_num_phan_trang++;
		else return;
	}
	else cart_num_phan_trang = page;
	end = cart_num_phan_trang*10;
	begin = end-10;
	if(end > a.length) end = a.length;
	for(let i = 0; i < a.length; i++){
		cart_tong_sp = cart_tong_sp + a[i].soluong;
		cart_gia_thanh = cart_gia_thanh + (a[i].price*a[i].soluong);
	}
	for(let i = begin; i < end; i++){
		s = s + "<div class='cart_info'>"+
					"<div class='cart_img'>"+
						"<img src='" + a[i].img +"' class='cart_hinh_anh'>"+
					"</div>"+
					"<div class='cart_infos'>"+
						"<div class='cart_name' onclick = 'cart_to_detail(" + i +")'>"+
							a[i].name +
						"</div>"+
						"<div class='cart_hieu'>"+
							"Nhãn hiệu: " + a[i].hieu+
						"</div>"+
						"<div class='cart_price'>"+
							"Giá: " + a[i].price + "đ/1 sản phẩm"+
						"</div>"+
					"</div>"+
					"<div class='cart_money'>"+
						"<div class='cart_khung_tang_giam'>"+
							"<button class='cart_giam' onclick='cart_sub("+ i +")'><img src='icon/icons8-subtract-30.png' class='cart_icon_tang_giam'></button>"+
							"<input type='text' name='soluong' onkeyup='cart_kt_soluong("+ i +")' class='cart_input_soluong' id='cart_input_soluong" + i +"' value=" + a[i].soluong +">"+
							"<button class='cart_tang' onclick='cart_add("+ i +")'><img src='icon/icons8-plus-math-30.png' class='cart_icon_tang_giam'></button>"+
						"</div>"+
						"<div class='cart_nut_xoa' id='cart_xoa"+i+"' onclick = 'cart_xoa_sp(" + i +")'>"+
							"<img src='icon/icons8-close-window-50_1.png'>"+
						"</div>"+
						"<div class='cart_tong_1sp'>"+
							"<span id='tongi"+ i +"'>Tổng: " + (a[i].soluong*a[i].price) + "đ</span>"+
						"</div>"+
					"</div>"+
				"</div>";
	}
	s = s + "<div id='cart_phan_trang'></div>";
	document.getElementById("cart_so_luong_sp").innerHTML = "("+cart_tong_sp+" sản phẩm)";
	document.getElementById("cart_tong_gia").innerHTML = cart_gia_thanh + "đ";
	document.getElementById("cart_cho_sua_code").innerHTML = s;
	s = "";
	switch(sotrang){
		case 1:{
			break;
		}
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:{
			if(sotrang == 2) document.getElementById("cart_phan_trang").style = "margin-left: 40%;";
			else{
				document.getElementById("cart_phan_trang").style = "margin-left: " + (40-2*(sotrang-2)) + "%;";
			}
			s = s + "<div type='button' id='0' onclick='chay_gio_hang(0)'><</div>";
			for(i = 1; i <= sotrang; i++) s = s + "<div type='button' id="+ i +" onclick='chay_gio_hang("+ i +")'>"+ i +"</div>";
					s = s + "<div type='button' id="+ i +" onclick='chay_gio_hang("+ i +")'>></div>";
			document.getElementById("cart_phan_trang").innerHTML = s;
			document.getElementById(cart_num_phan_trang).style = "background-color: red;";
			break;
		}
		default:{
			document.getElementById("cart_phan_trang").style = "margin-left: 22%;";
			if(1 <= cart_num_phan_trang && cart_num_phan_trang <= 6){
				s = s + "<div type='button' id='0' onclick='chay_gio_hang(0)'><</div>";
				for(i = 1; i <= 9; i++) s = s + "<div type='button' id="+ i +" onclick='chay_gio_hang("+ i +")'>"+ i +"</div>";
				s = s + "<div type='button' id="+ i +">...</div>";
				i++;
				s = s + "<div type='button' id="+ sotrang +" onclick='chay_gio_hang("+ sotrang +")'>"+ sotrang +"</div>";
				s = s + "<div type='button' id="+ (sotrang+1) +" onclick='chay_gio_hang("+ (sotrang+1) +")'>></div>";
			}
			else if(user_num_phan_trang > 6 && user_num_phan_trang < (sotrang-6+1)){
				s = s + "<div type='button' id='0' onclick='chay_gio_hang(0)'><</div>";
				s = s + "<div type='button' id='1' onclick='chay_gio_hang(1)'>1</div>";
				s = s + "<div type='button' id='2'>...</div>";
				for(i = user_num_phan_trang - 3; i <= user_num_phan_trang+3; i++) s = s + "<div type='button' id="+ i +" onclick='chay_gio_hang("+ i +")'>"+ i +"</div>";
				s = s + "<div type='button' id="+ i +">...</div>";
				i++;
				s = s + "<div type='button' id="+ sotrang +" onclick='chay_gio_hang("+ sotrang +")'>"+ sotrang +"</div>";
				s = s + "<div type='button' id="+ (sotrang+1) +" onclick='chay_gio_hang("+ (sotrang+1) +")'>></div>";
			}
			else{
				s = s + "<div type='button' id='0' onclick='chay_gio_hang(0)'><</div>";
				s = s + "<div type='button' id='1' onclick='chay_gio_hang(1)'>1</div>";
				s = s + "<div type='button' id='2'>...</div>";
				for(i = sotrang-8; i <= sotrang; i++) s = s + "<div type='button' id="+ i +" onclick='chay_gio_hang("+ i +")'>"+ i +"</div>";
				s = s + "<div type='button' id="+ i +" onclick='chay_gio_hang("+ i +")'>></div>";
			}
			document.getElementById("cart_phan_trang").innerHTML = s;
			document.getElementById(cart_num_phan_trang).style = "background-color:red;";
			break;
		}
	}
	if(cart_num_phan_trang == 1){
		document.getElementById(0).style = "display:none;";
	}
	else if(cart_num_phan_trang == sotrang){
		document.getElementById((sotrang+1)).style = "display:none;";
	}
}

function cart_to_detail(index){
	var a = localStorage.getItem("Cartsp");
	a = JSON.parse(a);
	sessionStorage.removeItem("detail_sp");
	var b = new sanpham_giohang(a[index].id, a[index].img, a[index].type, a[index].type1, a[index].type2, a[index].name, a[index].hieu, a[index].price, a[index].soluong, a[index].max, a[index].info, a[index].use);
	sessionStorage.setItem("detail_sp",JSON.stringify(b));
	window.location.href = "detail.html";
}

function cart_xoa_sp(index){
	a = localStorage.getItem("Cartsp");
	a = JSON.parse(a);
//	index = parseInt(index);
	a.splice(index, 1);
	localStorage.setItem("Cartsp", JSON.stringify(a));
	window.location.href = "cart.html";
}

function cart_sub(index){
	a = localStorage.getItem("Cartsp");
	a = JSON.parse(a);
	var x = document.getElementById('cart_input_soluong'+index);
	var info = x.value;
	info = parseInt(info);
	if(info-1 > 0){
		info = info-1;
		x.value = info;
		document.getElementById("tongi"+index).style = "color: black;";
		document.getElementById('tongi'+index).innerHTML = "Tổng: " + (a[index].price*info) + "đ";
		cart_tong_sp = cart_tong_sp-1;
		document.getElementById('cart_so_luong_sp').innerHTML = "(" + cart_tong_sp + " sản phẩm)";
		cart_gia_thanh = cart_gia_thanh-a[index].price;
		document.getElementById("cart_tong_gia").innerHTML = cart_gia_thanh + "đ";
//		a[index].soluong = parseInt(a[index].soluong)-1;
		a[index].soluong = a[index].soluong-1;
		localStorage.setItem("Cartsp", JSON.stringify(a));
		Auto_hien_thi_soluong_sp();
	}
}

function cart_add(index){
	a = localStorage.getItem("Cartsp");
	a = JSON.parse(a);
	var x = document.getElementById('cart_input_soluong'+index);
	var info = x.value;
	info = parseInt(info);
	index = index;
	if(info+1 <= a[index].max){
		info = info+1;
		x.value = info;
		document.getElementById("tongi"+index).style = "color: black;";
		document.getElementById("tongi"+index).innerHTML = "Tổng: " + (a[index].price*info) + "đ";
		cart_tong_sp = cart_tong_sp+1;
		document.getElementById('cart_so_luong_sp').innerHTML = "(" + cart_tong_sp + " sản phẩm)";
		cart_gia_thanh = cart_gia_thanh + a[index].price;
		document.getElementById("cart_tong_gia").innerHTML = cart_gia_thanh + "đ";
//		a[index].soluong = parseInt(a[index].soluong)+1;
		a[index].soluong = a[index].soluong+1;
		localStorage.setItem("Cartsp", JSON.stringify(a));
		Auto_hien_thi_soluong_sp();
	}
}

function cart_kt_soluong(index){
	a = localStorage.getItem("Cartsp");
	a = JSON.parse(a);
	var x = document.getElementById('cart_input_soluong'+index);
	var info = x.value;
	var str = /\D/g; 
	if(str.test(info) == true){
		document.getElementById("tongi"+index).style = "color: red;";
		document.getElementById("tongi"+index).innerHTML = "Lỗi nhập";

	}
	else if(info == "" || info < 1){
		x.value = 1;
		document.getElementById("tongi"+index).style = "color: black;";
		document.getElementById("tongi"+index).innerHTML = "Tổng: " + a[index].price + "đ";
		cart_tong_sp = 0;
		cart_gia_thanh = 0;
		for(let i = 0; i < a.length; i++) if(i != index){
			cart_tong_sp = cart_tong_sp + a[i].soluong;
			cart_gia_thanh = cart_gia_thanh + a[i].soluong*a[i].price;
		}
		cart_tong_sp = cart_tong_sp +1;
		cart_gia_thanh = cart_gia_thanh + a[index].price;
		document.getElementById('cart_so_luong_sp').innerHTML = "(" + cart_tong_sp + " sản phẩm)";
		document.getElementById("cart_tong_gia").innerHTML = cart_gia_thanh + "đ";
		a[index].soluong = 1;
		localStorage.setItem("Cartsp", JSON.stringify(a));
		Auto_hien_thi_soluong_sp();
	}
	else if(info > a[index].max){
		x.value = a[index].max;
		document.getElementById("tongi"+index).style = "color: black;";
		document.getElementById("tongi"+index).innerHTML = "Tổng: " + (a[index].price*a[index].max) + "đ";
		cart_tong_sp = 0;
		cart_gia_thanh = 0;
		for(let i = 0; i < a.length; i++) if(i != index){
			cart_tong_sp = cart_tong_sp + a[i].soluong;
			cart_gia_thanh = cart_gia_thanh + a[i].soluong*a[i].price;
		}
		cart_tong_sp = cart_tong_sp + a[index].max;
		cart_gia_thanh = cart_gia_thanh + a[index].max*a[index].price;
		document.getElementById('cart_so_luong_sp').innerHTML = "(" + cart_tong_sp + " sản phẩm)";
		document.getElementById("cart_tong_gia").innerHTML = cart_gia_thanh + "đ";
		a[index].soluong = a[index].max;
		localStorage.setItem("Cartsp", JSON.stringify(a));
		Auto_hien_thi_soluong_sp();
	}
	else{
		a[index].soluong = parseInt(x.value);
		document.getElementById("tongi"+index).style = "color: black;";
		document.getElementById("tongi"+index).innerHTML = "Tổng: " + (a[index].price*a[index].soluong) + "đ";
		cart_tong_sp = 0;
		cart_gia_thanh = 0;
		for(let i = 0; i < a.length; i++){
			cart_tong_sp = cart_tong_sp + a[i].soluong;
			cart_gia_thanh = cart_gia_thanh + a[i].soluong*a[i].price;
		}
		document.getElementById('cart_so_luong_sp').innerHTML = "(" + cart_tong_sp + " sản phẩm)";
		document.getElementById("cart_tong_gia").innerHTML = cart_gia_thanh + "đ";
		localStorage.setItem("Cartsp", JSON.stringify(a));
		Auto_hien_thi_soluong_sp();
	}
}

function Auto_hien_thi_soluong_sp(){
	var a = localStorage.getItem("Cartsp");
	a = JSON.parse(a);
	if(a == null || a.length == 0){
		document.getElementById("iconsp_in_cart").style.display = "none";
		return;
	}
	var soluong = 0;
	for(let i = 0; i < a.length; i++){
		soluong = soluong + a[i].soluong;
	}
	document.getElementById("iconsp_in_cart").style.display = "block";
	document.getElementById("iconsp_in_cart").innerHTML = soluong;
}

//=========================================user.html=========================================================//
var user_num_phan_trang = 1;

function Auto_hien_user(){
	var cc = localStorage.getItem("CurAccount");
	cc = JSON.parse(cc);
	if(cc == null || cc == ""){
		window.location.href = "index.html";
		return;
	}
	cc = sessionStorage.getItem("user_num_phan_trang");
	if(cc != "" && cc != null) user_num_phan_trang = parseInt(cc);
	var user_danhmuc = localStorage.getItem("user_danhmuc");
	user_danhmuc = JSON.parse(user_danhmuc);
	if(user_danhmuc == null || user_danhmuc == ""){
		user_danhmuc = 1;
		localStorage.setItem("user_danhmuc", JSON.stringify(user_danhmuc));
	}
	switch(user_danhmuc){
		case 1:{
			document.getElementById("user_content").style = "height: "+ 500 + "px;";
			document.getElementById("user_noi_dung").style = "height: "+ 500 + "px;";
			document.getElementById('user_tieu_de').innerHTML = "Quản lí tài khoản";
			var a = localStorage.getItem("CurAccount");
			a = JSON.parse(a);
			var s = "<div class='chia_qltk'>"+
							"<div class='chia_qltk_tieu_de'>"+
								"Thông tin cá nhân |"+
								"<span onclick = 'user_chuyen_danh_muc(2)'>Chỉnh sửa</span>"+
							"</div>"+
							"<div id='chia_qltk_tieu_de_ten'>"+ a.name +"</div>"+
						"</div>"+
						"<div class='chia_qltk'>"+
							"<div class='chia_qltk_tieu_de'>"+
								"Số địa chỉ |"+
								"<span onclick = 'user_chuyen_danh_muc(3)'>Chỉnh sửa</span>"+
							"</div>"+
							"<div class='dia_chi_mac_dinh'>Địa chỉ nhận hàng mặc định</div>"+
							"<div id='so_dia_chi_ten'>"+ a.name +"</div>"+
							"<div class='chia_qltk_address'>"+
								"<span>"+ a.address +"</span><br>"+
								"<span>(+84)"+ a.phone +"</span>"+
							"</div>"+
						"</div>"+
						"<div class='chia_qltk'>"+
							"<div class='chia_qltk_tieu_de'></div>"+
							"<div class='dia_chi_mac_dinh'>Địa chỉ nhận hàng mặc định</div>"+
							"<div id='mac_dinh_dia_chi'>"+ a.name +"</div>"+
							"<div class='chia_qltk_address'>"+
								"<span>"+ a.address +"</span><br>"+
								"<span>(+84)"+ a.phone +"</span>"+
							"</div>"+
						"</div>";
			document.getElementById('user_nd').innerHTML = s;
			break;
		}
		case 2 :{
			document.getElementById("user_content").style = "height: "+ 500 + "px;";
			document.getElementById("user_noi_dung").style = "height: "+ 500 + "px;";
			var a = localStorage.getItem("CurAccount");
			a = JSON.parse(a);
			document.getElementById('user_tieu_de').innerHTML = "Thông tin cá nhân";
			var s = "<div id='thong_tin_ca_nhan'>"+
							"<div id='info_body'>"+
								"<div class='user_class'>"+
									"<div class='user_class_ko_doi'>Họ tên: </div>"+
									"<span id='info_body_ten' class='user_class_sua'>"+ a.name +"</span>"+
									"<div class='user_class_ko_doi'>Ngày sinh: </div>"+
									"<span id='info_body_born_date' class='user_class_sua'>"+ a.born +"</span>"+
								"</div>"+
								"<div class='user_class'>"+
									"<div class='user_class_ko_doi'>Thư điện tử: </div>"+
									"<span id='info_body_email' class='user_class_sua'>"+ a.email +"</span>"+
									"<div class='user_class_ko_doi'>Giới tính: </div>"+
									"<span id='info_body_sex' class='user_class_sua'>"+ a.sex +"</span>"+
								"</div>"+
								"<div class='user_class'>"+
									"<div class='user_class_ko_doi'>Số điện thoại: </div>"+
									"<span id='info_body_phone' class='user_class_sua'>(+84)"+ a.phone +"</span>"+
								"</div>"+
							"</div>"+
							"<div id='info_sua'>"+
								"<button type='button' id='user_button_sua_thong_tin' value = 'SỬA THÔNG TIN' onclick = 'sua_thong_tin()'>SỬA THÔNG TIN</button>"+
								"<button type='button' id='user_button_doi_mat_khau' value= 'THAY ĐỔI MẬT KHẨU' onclick='thay_doi_mk()'>THAY ĐỔI MẬT KHẨU</button>"+
							"</div>"+
						"</div>";
			document.getElementById('user_nd').innerHTML = s;			
			break;
		}
		case 3 :{
			document.getElementById("user_content").style = "height: "+ 500 + "px;";
			document.getElementById("user_noi_dung").style = "height: "+ 500 + "px;";
			var a = localStorage.getItem("CurAccount");
			a = JSON.parse(a);
			document.getElementById('user_tieu_de').innerHTML = "Số địa chỉ"; 
			var s = "<div id='so_dia_chi'>"+
							"<div id='so_dia_chi_line1'>"+
								"<div class='so_dia_chi_line1_ten'>Tên</div>"+
								"<div id='so_dia_chi_line1_diachi'>Địa chỉ</div>"+
								"<div class='so_dia_chi_line1_ten'>Số điện thoại</div>"+
								"<div class='so_dia_chi_line1_ten'></div>"+
							"</div>"+
							"<div class='so_dia_chi_line'>"+
								"<div class='so_dia_chi_line_ten'>"+ a.name +"</div>"+
								"<div class='so_dia_chi_line_diachi'>"+ a.address +"</div>"+
								"<div class='so_dia_chi_line_ten'>(+84)"+ a.phone +"</div>"+
								"<div class='so_dia_chi_line_ten'>Địa chỉ nhận hàng mặc định</div>"+
							"</div>"+
							"<div class='so_dia_chi_line'>"+
								"<div class='so_dia_chi_line_ten'>"+ a.name +"</div>"+
								"<div class='so_dia_chi_line_diachi'>"+ a.address +"</div>"+
								"<div class='so_dia_chi_line_ten'>(+84)"+ a.phone +"</div>"+
								"<div class='so_dia_chi_line_ten'>Địa chỉ thanh toán mặc định</div>"+
							"</div>"+
							"<button type='button'>Sửa địa chỉ</button>"+
						"</div>";
			document.getElementById('user_nd').innerHTML = s;			
			break;
		}
		case 4 :{
			var a = localStorage.getItem("CurAccount");
			a = JSON.parse(a);
			a = a.cart;
			if(a == null || a == ""){
				document.getElementById("user_content").style = "height: "+ 300 + "px;";
				document.getElementById('user_tieu_de').innerHTML = "Đơn hàng của tôi: Rỗng!";
				document.getElementById("user_nd").innerHTML = "";
			}
			else {
				document.getElementById('user_tieu_de').innerHTML = "Đơn hàng của tôi";
				var s = "<div id='don_hang_cua_toi'>"+
							"<div class='don_hang_cua_toi_madon'>"+
								"<div id='ma_hoa_don'>Mã hóa đơn</div>"+
								"<div id='so_luong_san_pham'>Số lượng sản phẩm</div>"+
								"<div id='thanh_tien'>Thành tiền</div>"+
								"<div id='trang_thai'>Trạng thái</div>"+
							"</div>"+
							"<div id='user_chinh_sua'></div>"+
							"<div id='user_phan_trang'></div>"+
						"</div>";
				document.getElementById("user_nd").innerHTML = s;
				user_phantrang(user_num_phan_trang);
			}
			break;
		}
		default: break;
	}
}

function user_phantrang(k){
	var a = localStorage.getItem("CurAccount");
	a = JSON.parse(a);
	a = a.cart;
	var sotrang = a.length/10;
	if(sotrang > parseInt(sotrang)) sotrang = parseInt(sotrang)+1;
	
	if(k == 0) {
		if(user_num_phan_trang  != 1) user_num_phan_trang--;
		else return;
	}
	else if(k == sotrang+1){
		if(user_num_phan_trang != sotrang) user_num_phan_trang++;
		else return;
	}
	else user_num_phan_trang = k;
	var begin, end, soluong, thanhtien;
	var s = "";
	end = user_num_phan_trang*10;
	begin = end - 10;
	if(end > a.length) end = a.length;
	if(end-begin > 2){
		document.getElementById("user_content").style = "height: "+ (400 + (end-begin-2)*70) + "px;";
		document.getElementById("don_hang_cua_toi").style = "height: "+ (250 + (end-begin-2)*70) + "px;";
		document.getElementById("user_noi_dung").style = "height: "+ (400 + (end-begin-2)*70) + "px;";
	}
	else{
		document.getElementById("user_content").style = "height: "+ 400 + "px;";
		document.getElementById("don_hang_cua_toi").style = "height: "+ 250 + "px;";
		document.getElementById("user_noi_dung").style = "height: "+ 400 + "px;";
	}
	for(let i = begin; i < end; i++){
		soluong = 0;
		thanhtien = 0;
		for(j = 0; j < a[i].sp.length; j++){
			soluong = soluong + a[i].sp[j].soluong;
			thanhtien = thanhtien + a[i].sp[j].soluong*a[i].sp[j].price;
		}
		s = s + "<div id='don_hang_1_"+ i +"' class='don_hang_cua_toi_mathang' onclick = 'user_to_ctdonhang("+i+")'>"+
								"<div class='ma_hoa_don'>"+ a[i].id +"</div>"+
								"<div class='so_luong_san_pham'>"+ soluong +"</div>"+
								"<div class='thanh_tien'>"+ thanhtien +"đ</div>"+
								"<div class='trang_thai'>"+ a[i].tt +"</div>"+
							"</div>";
	}
	document.getElementById('user_chinh_sua').innerHTML = s;
	s = "";
	switch(sotrang){
		case 1:{
			break;
		}
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:{
			if(sotrang == 2) document.getElementById("user_phan_trang").style = "margin-left: 40%;";
			else{
				document.getElementById("user_phan_trang").style = "margin-left: " + (40-2*(sotrang-2)) + "%;";
			}
			s = s + "<div type='button' id='0' onclick='user_phantrang(0)'><</div>";
			for(i = 1; i <= sotrang; i++) s = s + "<div type='button' id="+ i +" onclick='user_phantrang("+ i +")'>"+ i +"</div>";
					s = s + "<div type='button' id="+ i +" onclick='user_phantrang("+ i +")'>></div>";
			document.getElementById("user_phan_trang").innerHTML = s;
			document.getElementById(user_num_phan_trang).style = "background-color: red;";
			break;
		}
		default:{
			document.getElementById("user_phan_trang").style = "margin-left: 22%;";
			if(1 <= user_num_phan_trang && user_num_phan_trang <= 6){
				s = s + "<div type='button' id='0' onclick='user_phantrang(0)'><</div>";
				for(i = 1; i <= 9; i++) s = s + "<div type='button' id="+ i +" onclick='user_phantrang("+ i +")'>"+ i +"</div>";
				s = s + "<div type='button' id="+ i +">...</div>";
				i++;
				s = s + "<div type='button' id="+ sotrang +" onclick='user_phantrang("+ sotrang +")'>"+ sotrang +"</div>";
				s = s + "<div type='button' id="+ (sotrang+1) +" onclick='user_phantrang("+ (sotrang+1) +")'>></div>";
			}
			else if(user_num_phan_trang > 6 && user_num_phan_trang < (sotrang-6+1)){
				s = s + "<div type='button' id='0' onclick='user_phantrang(0)'><</div>";
				s = s + "<div type='button' id='1' onclick='user_phantrang(1)'>1</div>";
				s = s + "<div type='button' id='2'>...</div>";
				for(i = user_num_phan_trang - 3; i <= user_num_phan_trang+3; i++) s = s + "<div type='button' id="+ i +" onclick='user_phantrang("+ i +")'>"+ i +"</div>";
				s = s + "<div type='button' id="+ i +">...</div>";
				i++;
				s = s + "<div type='button' id="+ sotrang +" onclick='user_phantrang("+ sotrang +")'>"+ sotrang +"</div>";
				s = s + "<div type='button' id="+ (sotrang+1) +" onclick='user_phantrang("+ (sotrang+1) +")'>></div>";
			}
			else{
				s = s + "<div type='button' id='0' onclick='user_phantrang(0)'><</div>";
				s = s + "<div type='button' id='1' onclick='user_phantrang(1)'>1</div>";
				s = s + "<div type='button' id='2'>...</div>";
				for(i = sotrang-8; i <= sotrang; i++) s = s + "<div type='button' id="+ i +" onclick='user_phantrang("+ i +")'>"+ i +"</div>";
				s = s + "<div type='button' id="+ i +" onclick='user_phantrang("+ i +")'>></div>";
			}
			document.getElementById("user_phan_trang").innerHTML = s;
			document.getElementById(user_num_phan_trang).style = "background-color:red;";
			break;
		}
	}
	if(user_num_phan_trang == 1){
		document.getElementById(0).style = "display:none;";
		document.getElementById((sotrang+1)).style = "display:block;";
	}
	else if(user_num_phan_trang == sotrang){
		document.getElementById(0).style = "display:block;";
		document.getElementById((sotrang+1)).style = "display:none;";
	}
	sessionStorage.setItem("user_num_phan_trang", user_num_phan_trang.toString());
}

function user_to_ctdonhang(index){
	var a = localStorage.getItem("CurAccount");
	a = JSON.parse(a);
	a = a.cart;
	localStorage.setItem("ctdonhang", JSON.stringify(a[index]));
	location.href = "ctdonhang.html";
}

function sua_thong_tin(){
	var a = localStorage.getItem("CurAccount");
	a = JSON.parse(a);
	var s = "<div id='thong_tin_ca_nhan'>"+
							"<div id='info_body'>"+
								"<div class='user_class'>"+
									"<div class='user_class_ko_doi'>Họ tên: </div>"+
									"<div class='user_class_sua'><input tyoe = 'text' id='info_body_ten' value='"+ a.name +"'><div class='sai' id='user_sai_1'></div></div>"+
									"<div class='user_class_ko_doi'>Ngày sinh: </div>"+
									"<div class='user_class_sua'><input type='date' id='info_body_born_date' value='"+ a.born +"'><div class='sai' id='user_sai_2'></div></div>"+
								"</div>"+
								"<div class='user_class'>"+
									"<div class='user_class_ko_doi'>Thư điện tử: </div>"+
									"<div class='user_class_sua'><input id='info_body_email' type='email' value='"+ a.email +"'><div class='sai' id='user_sai_3'></div></div>"+
									"<div class='user_class_ko_doi'>Giới tính: </div>"+
									"<div class='user_class_sua'><input type='text' id='info_body_sex' value='"+ a.sex +"'><div class='sai' id='user_sai_4'></div></div>"+
								"</div>"+
								"<div class='user_class'>"+
									"<div class='user_class_ko_doi'>Số điện thoại: </div>"+
									"<div class='user_class_sua'><input type='text' id='info_body_phone' value='"+ a.phone +"'><div class='sai' id='user_sai_5'></div></div>"+
								"</div>"+
							"</div>"+
							"<div id='info_sua'>"+
								"<button type='button' onclick='luu_thay_doi()'>LƯU THAY ĐỔI</button>"+
							"</div>"+
						"</div>";
	document.getElementById("user_nd").innerHTML = s;
	document.getElementById("user_nd").style = "opacity: 1";
}

function luu_thay_doi(){
	var t = true;
	var name = document.getElementById("info_body_ten").value;
	if(name == ""){
		t = false;
		document.getElementById("user_sai_1").innerHTML = "Họ và tên không được rỗng!";
	}
	//=ngày sinh
	var date = document.getElementById("info_body_born_date").value;
	if(date == ""){
		document.getElementById('user_sai_2').innerHTML = "Ngày sinh không được rỗng!";
		t = false;
	}
	//====mail
	var mail = document.getElementById("info_body_email").value;
	if(mail == ""){
		document.getElementById('user_sai_3').innerHTML = "Email không được rỗng!";
		t = false;
	}
	else if(mail.length < 5){
		document.getElementById('user_sai_3').innerHTML = "Email quá ngắn!";
		t = false;
	}
	else{
		format = /[A-Z0-9._%+-]{6,30}@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
		if(!format.test(mail)){
			document.getElementById('user_sai_3').innerHTML = "Email không hợp lệ!";
			t = false;
		}
	}
	//=====giới tính===
	var sex = document.getElementById("info_body_sex").value;
	sex = sex.toUpperCase();
	if(sex == ""){
		document.getElementById("user_sai_4").innerHTML = "Giới tính không được rỗng!";
		t =false;
	}
	else if(sex != "NAM" && sex != "NỮ"){
		document.getElementById("user_sai_4").innerHTML = "Lỗi nhập giới tính!";
		t =false;
	}
	//======số điện thoại
	var phone = document.getElementById("info_body_phone").value;
	if(phone == ""){
		document.getElementById('user_sai_5').innerHTML = "Số điện thoại không được rỗng!";
		t = false;
	}
	else{
		format = /\D/g;
		if(format.test(phone)){
			document.getElementById('user_sai_5').innerHTML = "Số điện thoại phải là chữ số!";
			t = false;
		}
		else if(phone.length < 10 || phone.length > 11){
			document.getElementById('user_sai_5').innerHTML = "Số điện thoại không phù hợp!";
			t = false;
		}
	}
	if(!t) return;
	var a = localStorage.getItem("CurAccount");
	a = JSON.parse(a);
	a.name = name;
	a.born = date;
	a.email = mail;
	a.sex = sex;
	a.phone = phone;
	localStorage.setItem("CurAccount", JSON.stringify(a))
	var b = localStorage.getItem("ExAccount");
	b = JSON.parse(b);
	for(let i = 0; i < b.length; i++) if(b[i].user == a.user){
		b[i].name = name;
		b[i].born = date;
		b[i].email = mail;
		b[i].sex = sex;
		b[i].phone = phone;
		break;
	}
	localStorage.setItem("ExAccount", JSON.stringify(b));
	location.reload();
}

function thay_doi_mk(){
	var s = "<div id='thong_tin_ca_nhan'>"+
							"<div id='doi_mk'>"+
								"<div>Mật khẩu hiện tại</div>"+
								"<input id='doi_mk_truong_1' type='password' class='user_mk' placeholder='Vui lòng nhập mật khẩu hiện tại của bạn'>"+
								"<div id='doi_mk_1'></div>"+
								"<div>Mật khẩu mới</div>"+
								"<input id='doi_mk_truong_2' type='password' class='user_mk' placeholder='Vui lòng nhập mật khẩu mới'>"+
								"<div id='doi_mk_2'></div>"+
								"<div>Nhập lại mật khẩu mới</div>"+
								"<input id='doi_mk_truong_3' type='password' class='user_mk' placeholder='Vui lòng nhập lại mật khẩu mới'>"+
								"<div id='doi_mk_3'></div>"+
								"<button type='button' onclick='luu_thay_doi_1()'>LƯU THAY ĐỔI</button>"+
							"</div>"+
						"</div>";
	document.getElementById("user_nd").innerHTML = s;
}

function luu_thay_doi_1(){
	var a = localStorage.getItem("CurAccount");
	a = JSON.parse(a);
	var t = true;
	var pass = document.getElementById("doi_mk_truong_1").value;
	var newpass = document.getElementById("doi_mk_truong_2").value;
	var repass = document.getElementById("doi_mk_truong_3").value;
	document.getElementById("doi_mk_1").innerHTML = "";
	document.getElementById("doi_mk_2").innerHTML = "";
	document.getElementById("doi_mk_3").innerHTML = "";
	if(pass == ""){
		t = false;
		document.getElementById("doi_mk_1").innerHTML = "Mật khẩu không được rỗng!";
	}
	else if(pass != a.pass){
		t = false;
		document.getElementById("doi_mk_1").innerHTML = "Mật khẩu sai!";
	}
	if(newpass == ""){
		t = false;
		document.getElementById("doi_mk_2").innerHTML = "Mật khẩu không được rỗng!";
	}
	else if(newpass.length < 5){
		document.getElementById('doi_mk_2').innerHTML = "Mật khẩu phải bằng hoặc hơn 5 kí tự!";
		t = false;
	}
	if(repass == ""){
		document.getElementById('doi_mk_3').innerHTML = "Nhập lại mật khẩu không được rỗng!";
		t = false;
	}
	else if(repass != newpass){
		document.getElementById('doi_mk_3').innerHTML = "Xác nhận mật khẩu không khớp!";
		t = false;
	}
	if(!t) return;
	a.pass = newpass;
	var b = localStorage.getItem("ExAccount");
	b = JSON.parse(b);
	for(let i = 0; i < b.length; i++) if(b[i].user == a.user){
		b[i].pass = a.pass;
		break;
	}
	localStorage.setItem("ExAccount", JSON.stringify(b));
	localStorage.setItem("CurAccount", JSON.stringify(a));
	location.reload();
}


function user_chuyen_danh_muc(index_user){
	var user_danhmuc = localStorage.getItem("user_danhmuc");
	user_danhmuc = JSON.parse(user_danhmuc);
	switch(index_user){
		case 1:{
			user_danhmuc = 1;
			break;
		}
		case 2:{
			user_danhmuc = 2;
			break;
		}
		case 3:{
			user_danhmuc = 3;
			break;
		}
		case 4:{
			user_danhmuc = 4;
			break;
		}
		default: break;
	}
	localStorage.setItem("user_danhmuc", JSON.stringify(user_danhmuc));
	Auto_hien_user();
}

function to_user(){
	var s = localStorage.getItem("CurAccount");
	if(s == "admin"){
		window.location.href = "admin.html";
		return;
	}
	s = JSON.parse(s);
	window.location.href = "user.html";
}

//========================================search.html==============================
//============================================hàm viết thông tin thanh tìm kiếm======================================
function addSearch(){
	var info = document.getElementById("search1");
	if ( info.value == "" ){
		alert("Nhập thông tin sản phẩm cần tìm");
		info.focus();
		return;
	}
	sessionStorage.setItem("Search",info.value);
	save_printarray_search();
	location.href = "search.html";
}

//===========================================hàm truy xuất tên sản phẩm tìm kiếm==========================================
function save_printarray_search(){
	var info = sessionStorage.getItem("Search");
	info = info.toLowerCase();
	var a = localStorage.getItem("Array_sp");
	a = JSON.parse(a);
	var b = new Array();
	var j = 0;
	var str;
	for(let i = 0; i < a.length; i++){
		str = a[i].name.toLowerCase();
		if (str.includes(info)){
			b[j++] = new sanpham(a[i].id, a[i].img, a[i].type, a[i].type1, a[i].type2, a[i].name, a[i].hieu, a[i].price, a[i].soluong, a[i].info, a[i].use);
		}
	}
	sessionStorage.setItem("PrintArray",JSON.stringify(b));
}

function search_get_id(index){
	var a = sessionStorage.getItem("PrintArray");  //Lấy danh sách sản phẩm dag hiển thị và dag lưu trên sesstion
	a = JSON.parse(a);
	var b = new sanpham(a[index].id, a[index].img, a[index].type, a[index].type1, a[index].type2, a[index].name, a[index].hieu, a[index].price, a[index].soluong, a[index].info, a[index].use);
	sessionStorage.setItem("detail_sp", JSON.stringify(b));
	window.location.href = "detail.html";
}
var search_page = 1;

function duyetmang_search(page){
	document.getElementById("phan_trang_sp").innerHTML = "";
	var a = sessionStorage.getItem("PrintArray");
	a = JSON.parse(a);
	var c = sessionStorage.getItem("Search");
	var s = "", i, sotrang, end, begin;
	sotrang = a.length/12;
	if(sotrang > parseInt(sotrang)) sotrang = parseInt(sotrang) + 1;
	if(page == 0){
		if(search_page != 1) page = search_page-1;
		else return;
	}
	else{
		if(page == (sotrang+1)){
			if(search_page != sotrang) page = search_page+1;
			else return;
		}
	}
	document.getElementById("san_pham").style = "height: 1110px";
	document.getElementById("search_danh_muc").style = "height:1110px";
	search_page = page;
	end = page*12;
	begin = end - 12;
	if(end > a.length) end = a.length;
	if(end - begin <= 4){
		document.getElementById("san_pham").style = "height: 500px";
		document.getElementById("search_danh_muc").style = "height:500px";
	}
	else if(end - begin <= 8){
		document.getElementById("san_pham").style = "height: 813px";
		document.getElementById("search_danh_muc").style = "height:813px";
	}
	for(i = begin; i < end; i++){
		s = s + "<div class='khung_sp' id='khung_sp"+ i +"'>"+
			"<img src='" + a[i].img + "' onclick='search_get_id(" + i +")'/>"+
			"<div class='san_pham_phan_chu' onclick='search_get_id("+ i +")'>"+
				"<p class='sanpham_phan_chia_chu'>Tên : "+ a[i].name + "</p>"+
				"<p class='sanpham_phan_chia_chu'>Nhãn hiệu : " + a[i].hieu + "</p>"+
				"<p>Giá : " + a[i].price + "đ</p>"+
			"</div>"+
			"<div class='sanpham_icon_them' onclick='sanpham_them_vao_gio(" + i +")'><img src='icon/icons8-add-basket-48.png'></div>"+
		"</div>";
	}
	switch(c){
		case "true_search_price":{
			document.getElementById("hien_sp").innerHTML = "Kết quả tìm kiếm theo giá";
			break;
		}
		case "true_search_type":{
			var xx = document.getElementById("search_select_danhmuc").value;
			xx = xx.split("-");
			for(let k = 0; k < xx.length; k++) if(xx[k] != "null"){
				xx = xx[k];
				break;
			} 
			document.getElementById("hien_sp").innerHTML = xx;
			break;
		}
		default:{
			document.getElementById("hien_sp").innerHTML = "Kết quả tìm kiếm \"" + c + "\"";
			break;
		}
	}
	document.getElementById("list_sp").innerHTML = s;
	s = "";
	switch(sotrang){
		case 1:{
			break;
		}
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:{
			if(sotrang == 2){
				document.getElementById("phan_trang_sp").style = "margin-left: 40%;";
			}
			else{
				document.getElementById("phan_trang_sp").style = "margin-left: "+(40 - (sotrang-2)*2)+"%;";
			}
			s = s + "<div type='button' id='0' onclick='duyetmang_search(0)'><</div>"
			for(i = 1; i <= sotrang; i++) s = s + "<div type='button' id="+ i +" onclick='duyetmang_search("+ i +")'>"+ i +"</div>";
			s = s + "<div type='button' id="+ i +" onclick='duyetmang_search("+ i +")'>></div>";
			document.getElementById("phan_trang_sp").innerHTML = s;
			document.getElementById(page).style = "background-color:red;";
			break;
		}
		default:{
			document.getElementById("phan_trang_sp").style = "margin-left: 22%;";
			if(1 <= page && page <= 6){
				s = s + "<div type='button' id='0' onclick='duyetmang_search(0)'><</div>";
				for(i = 1; i <= 9; i++) s = s + "<div type='button' id="+ i +" onclick='duyetmang_search("+ i +")'>"+ i +"</div>";
				s = s + "<div type='button' id="+ i +"'>...</div>";
				s = s + "<div type='button' id="+ sotrang +" onclick='duyetmang_search("+ sotrang +")'>"+ sotrang +"</div>";
				s = s + "<div type='button' id="+ (sotrang+1) +" onclick='duyetmang_search("+ (sotrang+1) +")'>></div>";
			}
			else if(page > 6 && page < (sotrang-6+1)){
				s = s + "<div type='button' id='0' onclick='duyetmang_search(0)'><</div>";
				s = s + "<div type='button' id='1' onclick='duyetmang_search(1)'>1</div>";
				s = s + "<div type='button' id='2'>...</div>";
				for(i = page - 3; i <= page+3; i++) s = s + "<div type='button' id="+ i +" onclick='duyetmang_search("+ i +")'>"+ i +"</div>";
				s = s + "<div type='button' id="+ i +"'>...</div>";
				s = s + "<div type='button' id="+ sotrang +" onclick='duyetmang_search("+ sotrang +")'>"+ sotrang +"</div>";
				s = s + "<div type='button' id="+ (sotrang+1) +" onclick='duyetmang_search("+ (sotrang+1) +")'>></div>";
			}
			else{
				s = s + "<div type='button' id='0' onclick='duyetmang_search(0)'><</div>";
				s = s + "<div type='button' id='1' onclick='duyetmang_search(1)'>1</div>";
				s = s + "<div type='button' id='2'>...</div>";
				for(i = sotrang-8; i <= sotrang; i++) s = s + "<div type='button' id="+ i +" onclick='duyetmang_search("+ i +")'>"+ i +"</div>";
				s = s + "<div type='button' id='"+i+"' onclick='duyetmang_search("+i+")'>></div>"
			}
			document.getElementById("phan_trang_sp").innerHTML = s;
			document.getElementById(page).style = "background-color:red;";
		}
	}
	if(page == 1){
		document.getElementById(0).style = "display:none;";
		document.getElementById((sotrang+1)).style = "display:block;";
	}
	else if(page == sotrang){
		document.getElementById(0).style = "display:block;";
		document.getElementById((sotrang+1)).style = "display:none;";
	}
}


function search_price(){
	var price_begin, price_end;
	price_begin = document.getElementById("price_begin").value;
	price_end = document.getElementById("price_end").value;
	price_begin = parseInt(price_begin);
	price_end = parseInt(price_end);
	var b = new Array();
	var a = localStorage.getItem("Array_sp");
	a = JSON.parse(a);
	var j = 0;
	for(let i = 0; i < a.length; i++) if(a[i].price >= price_begin && a[i].price <= price_end){
		b[j++] = new sanpham(a[i].id, a[i].img, a[i].type, a[i].type1, a[i].type2, a[i].name, a[i].hieu, a[i].price, a[i].soluong, a[i].info, a[i].use);
	}
	sessionStorage.setItem("PrintArray", JSON.stringify(b));
	sessionStorage.setItem("Search", "true_search_price");
	duyetmang_search(1);
}

function search_type(){
	sessionStorage.setItem("Search", "true_search_type");
	var x = document.getElementById("search_select_danhmuc").value;
	var cc = x.split("-");
	for(let i = 0; i < cc.length; i++) if(cc[i] == "null") cc[i] = "";
	var b;
	if(cc[0] != ""){
		b = duyet_type(cc[0]);
	}
	else if(cc[1] != ""){
		b = duyet_type1(cc[1]); 
	}
	else if(cc[2] != ""){
		b = duyet_type2(cc[2]); 
	}
	else{
		b = localStorage.getItem("Array_sp");
		b = JSON.parse(b);
	}
	sessionStorage.setItem("PrintArray", JSON.stringify(b));
	duyetmang_search(1);
}

function search_kt_price(id){
	var str = /\D/g;
	var x = document.getElementById(id);
	var info = x.value;
	if(str.test(info) == true){
		info = "";
		for(let i = 0; i < x.value.length; i++) if(parseInt(x.value[i]) >= 0) info = info + parseInt(x.value[i]);
	}
	x.value = parseInt(info);
	
}

//============================================================admin.html===================================================================
function Auto_hien_admin(){
	var a = localStorage.getItem("CurAccount");
	if(a != "admin") window.location.href = "index.html";
	a = sessionStorage.getItem("Admin_QL");
	if(a == null || a == ""){
		a = "Quản lý sản phẩm";
	}
	switch(a){
		case "Quản lý sản phẩm":{
			admin_qlsp();
			break;
		}
		case "Quản lý đơn hàng":{
			admin_qldh();
			break;
		}
		case "Quản lý tài khoản":{
			admin_qltk();
			break;
		}
		default: break;
	}
	sessionStorage.setItem("Admin_QL", a);
}
var admin_page = 1;

function admin_qlsp(){
	sessionStorage.setItem("Admin_QL", "Quản lý sản phẩm");
	document.getElementById("admin_tieu_de").innerHTML = "Quản lý sản phẩm";
	var a = localStorage.getItem("Array_sp");
	a = JSON.parse(a);
	var so_trang = a.length/10;
	so_trang = parseInt(so_trang);
	if(so_trang < a.length/10) so_trang++;
	var s = "";
	s = s + "<div id='admin_truong'>"+
							"<div id='admin_truong_img'>Hình ảnh</div>"+
							"<div id='admin_truong_name'>Tên sản phẩm</div>"+
							"<div id='admin_truong_price'>Giá</div>"+
							"<div id='admin_truong_id'>Mã sản phẩm</div>"+
						"</div>"+
						"<div id='admin_nd_can_sua_1'></div>"+
						"<div id='phan_trang_sp'></div>	"+
						"<div id='search_add_sp'><button type='button' onclick='qlsp_add()'>Thêm</button></div>"+
					"</div>";
	document.getElementById("admin_nd").innerHTML = s;
	admin_chay_sp(admin_page);
}

function admin_chay_sp(page){
	var a = localStorage.getItem("Array_sp");
	a = JSON.parse(a);
	var sotrang = a.length/10;
	if(sotrang > parseInt(sotrang)) sotrang = parseInt(sotrang) + 1;
	if(page == 0){
		if(admin_page != 1) page = admin_page-1;
		else return;
	}
	else{
		if(page == (sotrang+1)){
			if(admin_page != sotrang) page = admin_page+1;
			else return;
		}
	}
	admin_page = page;
	var end = page*10;
	var start = end-10;
	if(end > a.length) end = a.length;
	var i, s = "";
	for(i = start; i < end; i++){
		s = s + "<div class='admin_sp' onclick = 'table_qlsp("+ i +")'>"+
							"<div class='admin_sp_img'><img src='"+ a[i].img +"'></div>"+
							"<div class='admin_sp_name'>"+ a[i].name +"</div>"+
							"<div class='admin_sp_price'>"+ a[i].price +"đ</div>"+
							"<div class='admin_sp_id'>"+ a[i].id +"</div>"+
						"</div>";
	}
	document.getElementById("admin_nd_can_sua_1").innerHTML = s;
	document.getElementById("main").style = "height: 700px";
	document.getElementById("admin_nd").style = "height: 370px";
	if((end-start) > 1){
		document.getElementById("main").style = "height: " + (700 + 130*(end-start-1)) + "px";
		document.getElementById("admin_nd").style = "height: " + (370 + 130*(end-start-1)) + "px";
	}
	s = "";
	switch(sotrang){
		case 1:{
			break;
		}
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:{
			if(sotrang == 2) document.getElementById("phan_trang_sp").style = "margin-left: 42%;";
			else{
				document.getElementById("phan_trang_sp").style = "margin-left: " + (42-1.667*(sotrang-2)) + "%;";
			}
			s = s + "<div type='button' id='0' onclick='admin_chay_sp(0)'><</div>";
			for(i = 1; i <= sotrang; i++) s = s + "<div type='button' id="+ i +" onclick='admin_chay_sp("+ i +")'>"+ i +"</div>";
					s = s + "<div type='button' id="+ i +" onclick='admin_chay_sp("+ i +")'>></div>";
			document.getElementById("phan_trang_sp").innerHTML = s;
			document.getElementById(page).style = "background-color: red;";
			break;
		}
		default:{
			document.getElementById("phan_trang_sp").style = "margin-left: 27.06%;";
			if(1 <= page && page <= 6){
				s = s + "<div type='button' id='0' onclick='admin_chay_sp(0)'><</div>";
				for(i = 1; i <= 9; i++) s = s + "<div type='button' id="+ i +" onclick='admin_chay_sp("+ i +")'>"+ i +"</div>";
				s = s + "<div type='button' id="+ i +">...</div>";
				i++;
				s = s + "<div type='button' id="+ sotrang +" onclick='admin_chay_sp("+ sotrang +")'>"+ sotrang +"</div>";
				s = s + "<div type='button' id="+ (sotrang+1) +" onclick='admin_chay_sp("+ (sotrang+1) +")'>></div>";
			}
			else if(page > 6 && page < (sotrang-6+1)){
				s = s + "<div type='button' id='0' onclick='admin_chay_sp(0)'><</div>";
				s = s + "<div type='button' id='1' onclick='admin_chay_sp(1)'>1</div>";
				s = s + "<div type='button' id='2'>...</div>";
				for(i = page - 3; i <= page+3; i++) s = s + "<div type='button' id="+ i +" onclick='admin_chay_sp("+ i +")'>"+ i +"</div>";
				s = s + "<div type='button' id="+ i +">...</div>";
				i++;
				s = s + "<div type='button' id="+ sotrang +" onclick='admin_chay_sp("+ sotrang +")'>"+ sotrang +"</div>";
				s = s + "<div type='button' id="+ (sotrang+1) +" onclick='admin_chay_sp("+ (sotrang+1) +")'>></div>";	
			}
			else{
				s = s + "<div type='button' id='0' onclick='admin_chay_sp(0)'><</div>";
				s = s + "<div type='button' id='1' onclick='admin_chay_sp(1)'>1</div>";
				s = s + "<div type='button' id='2'>...</div>";
				for(i = sotrang-8; i <= sotrang; i++) s = s + "<div type='button' id="+ i +" onclick='admin_chay_sp("+ i +")'>"+ i +"</div>";
				s = s + "<div type='button' id="+ i +" onclick='admin_chay_sp("+ i +")'>></div>";
			}
			document.getElementById("phan_trang_sp").innerHTML = s;
			document.getElementById(page).style = "background-color:red;";
			break;
		}
	}
	if(page == 1){
		document.getElementById(0).style = "display: none;";
	}
	else if(page == sotrang){
		document.getElementById((sotrang+1)).style = "display: none;";
	}
}

function table_qlsp(index){
	var a = localStorage.getItem("Array_sp");
	a = JSON.parse(a);
	document.getElementById("table_qlsp").style = "display:block;";
	for(let i = 1; i <= 9; i++) document.getElementById("chuthich_" + i).innerHTML = "";
	document.getElementById("table_qlsp_input_id").innerHTML = a[index].id;
	document.getElementById("name_sp").value = a[index].name;
	document.getElementById("price_sp").value = a[index].price;
	document.getElementById("nhan_hieu").value = a[index].hieu;
	document.getElementById("so_luong").value = a[index].soluong;
	document.getElementById("infomation").value = a[index].info;
	document.getElementById("use").value = a[index].use;
	document.getElementById("table_qlsp_loai_1").value = a[index].type;
	onchangetype2();
	if(a[index].type1 != "") document.getElementById("table_qlsp_loai_2").value = a[index].type1;
	else{
		document.getElementById("table_qlsp_loai_2").innerHTML = "";
	}
	onchangetype3();
	if(a[index].type2 != "") document.getElementById("table_qlsp_loai_3").value = a[index].type2;
	else{
		document.getElementById("table_qlsp_loai_3").innerHTML = "";
	}
}

function ap_kt_number_sp(id){
	var x = document.getElementById(id);
	if(x.value == ""){
		x.value = 0;
		return;
	}
	x.value = parseInt(x.value);
}

function nutsuasp(){
	var t = true;
	var id = document.getElementById("table_qlsp_input_id").innerHTML;
	var name_sp = document.getElementById("name_sp").value;
	if(name_sp == ""){
		t = false;
		document.getElementById("chuthich_2").innerHTML = "Tên sản phẩm không được bỏ trống!";
	}
	else document.getElementById("chuthich_2").innerHTML = "";
	var price = document.getElementById("price_sp").value;
	if(price == "" || price == null){
		t = false;
		document.getElementById("chuthich_3").innerHTML = "Giá không được bỏ trống!";
	}
	else document.getElementById("chuthich_3").innerHTML = "";
	var type = document.getElementById("table_qlsp_loai_1").value;
	var type1 = document.getElementById("table_qlsp_loai_2").value;
	var type2 = document.getElementById("table_qlsp_loai_3").value;
	var hieu = document.getElementById("nhan_hieu").value;
	var soluong = document.getElementById("so_luong").value;
	if(soluong == "" || soluong == null){
		t = false;
		document.getElementById("chuthich_6").innerHTML = "Số lượng không được bỏ trống!";
	}
	else document.getElementById("chuthich_6").innerHTML = "";
	var info = document.getElementById("infomation").value;
	if(info == "" || info == null){
		t = false;
		document.getElementById("chuthich_7").innerHTML = "Thông tin không được bỏ trống!";
	}
	else document.getElementById("chuthich_7").innerHTML = "";
	var use = document.getElementById("use").value;
	if(use == "" || use == null){
		t = false;
		document.getElementById("chuthich_8").innerHTML = "Cách sử tin không được bỏ trống!";
	}
	else document.getElementById("chuthich_8").innerHTML = "";
	var hinh_anh = document.getElementById("hinh_anh").value;
	if(hinh_anh == "" || hinh_anh == null){
		t = false;
		document.getElementById("chuthich_9").innerHTML = "Hình ảnh không được bỏ trống!";
	}
	else 
		document.getElementById("chuthich_9").innerHTML = "";
	if(t){
		var a =localStorage.getItem("Array_sp");
		a = JSON.parse(a);
		id = parseInt(id);
		for(let i = 0; i < a.length; i++) if(a[i].id == id){
			a[i].id = id;
			a[i].name = name_sp;
			a[i].price = parseInt(price);
			a[i].hieu = hieu;
			a[i].soluong = parseInt(soluong);
			a[i].info = info;
			a[i].use = use;
			a[i].img = hinh_anh;
			break;
		}
		localStorage.setItem("Array_sp", JSON.stringify(a));
		alert("Sửa thành công!");
		location.reload();
	}
}

function nutxoasp(){
	var id = document.getElementById("table_qlsp_input_id").innerHTML;
	var a = localStorage.getItem("Array_sp");
	a = JSON.parse(a);
	var i = 0;
	for(i = 0; i < a.length; i++) if(a[i].id == id) break;
	if(i < a.length){
		a.splice(i, 1);
		localStorage.setItem("Array_sp", JSON.stringify(a));
	}
	a = sessionStorage.getItem("PrintArray");
	a = JSON.parse(a);
	if(a != "" || a != null){
		for(i = 0; i < a.length; i++) if(a[i].id == id) break;
		if(i < a.length){
			a.splice(i, 1);
			sessionStorage.setItem("PrintArray", JSON.stringify(a));
		}
	}
	a = localStorage.getItem("Cartsp");
	a = JSON.parse(a);
	if(a != "" && a != null){
		for(i = 0; i < a.length; i++) if(a[i].id == id) break;
		if(i < a.length){
			a.splice(i, 1);
			localStorage.setItem("Cartsp", JSON.stringify(a));
		}
	}
	alert("Xóa sản phẩm thành công!");
	location.reload();
}

function nutxoatk(){
	var user = document.getElementById("table_qltk_user").innerHTML;
	var a = localStorage.getItem("ExAccount");
	a = JSON.parse(a);
	var i = 0;
	for(i = 0; i < a.length; i++) if(a[i].user == user) break;
	if(i < a.length){
		a.splice(i, 1);
		localStorage.setItem("ExAccount", JSON.stringify(a));
	}
	a = localStorage.getItem("ArrayCart");
	a = JSON.parse(a);
	for(i = 0; i < a.length; i++) if(a[i].user == user){
		a.splice(i, 1);
		i--;
	}
	localStorage.setItem("ArrayCart", JSON.stringify(a));
	a = localStorage.getItem("ctdonhang");
	a = JSON.parse(a);
	if(a.user == user) localStorage.removeItem("ctdonhang");
	a = localStorage.getItem("CurAccount");
	a = JSON.parse(a);
	if(a.user == user) localStorage.removeItem("CurAccount");
	
	alert("Xóa thành công!");
	location.reload();
}

function admin_qldh(){
	sessionStorage.setItem("Admin_QL", "Quản lý đơn hàng");
	document.getElementById("admin_tieu_de").innerHTML = "Quản lý đơn hàng";
	var a = localStorage.getItem("ArrayCart");
	a = JSON.parse(a);
	document.getElementById("admin_nd").innerHTML = "<div id='admin_truong'>"+
								"<div id='qldh_ma_hoa_don'>Mã hóa đơn</div>"+
								"<div id='qldh_tk'>Tài khoản</div>"+
								"<div id='qldh_soluong'>Số lượng</div>"+
								"<div id='qldh_thanh_tien'>Thành tiền</div>"+
								"<div id='qldh_tt'>Trạng thái</div>"+
								"</div>"+
							"<div id='admin_nd_can_sua_1'></div>"+
							"<div id='phan_trang_sp'></div>";
	admin_chay_dh(1);
}


function admin_chay_dh(page){
	var a = localStorage.getItem("ArrayCart");
	if(a == null || a == ""){
		document.getElementById("main").style = "height: 600px";
		document.getElementById("admin_nd").style = "height: 270px";
		return;
	}
	a = JSON.parse(a);
	var sotrang = a.length/10;
	if(sotrang > parseInt(sotrang)) sotrang = parseInt(sotrang) + 1;
	if(page == 0){
		if(admin_page != 1) page = admin_page-1;
		else return;
	}
	else{
		if(page == (sotrang+1)){
			if(admin_page != sotrang) page = admin_page+1;
			else return;
		}
	}
	admin_page = page;
	var end = page*10;
	var start = end-10;
	if(end > a.length) end = a.length;
	var i, s = "", j, soluong, thanhtien;
	for(i = start; i < end; i++){
		soluong = 0;
		thanhtien = 0;
		for(j = 0; j < a[i].sp.length; j++){
			soluong = soluong + a[i].sp[j].soluong;
			thanhtien = thanhtien + (a[i].sp[j].soluong*a[i].sp[j].price);
		}
		s = s + "<div class='admin_dh' onclick = 'admin_dh_to_ctdh("+ i +")'>"+
							"<div class='admin_dh_mhd'>"+ a[i].id +"</div>"+
							"<div class='admin_dh_tk'>"+ a[i].user +"</div>"+
							"<div class='admin_dh_soluong'>"+ soluong +"</div>"+
							"<div class='admin_dh_thanh_tien'>"+ thanhtien +"đ</div>"+
							"<div class='admin_dh_tt'>"+ a[i].tt +"</div>"+
						"</div>";
	}
	document.getElementById("admin_nd_can_sua_1").innerHTML = s;
	document.getElementById("main").style = "height: 600px";
	document.getElementById("admin_nd").style = "height: 270px";
	if((end-start) > 1){
		document.getElementById("main").style = "height: " + (600 + 70*(end-start-1)) + "px";
		document.getElementById("admin_nd").style = "height: " + (270 + 70*(end-start-1)) + "px";
	}
	s = "";
	switch(sotrang){
		case 1:{
			break;
		}
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:{
			if(sotrang == 2) document.getElementById("phan_trang_sp").style = "margin-left: 42%;";
			else{
				document.getElementById("phan_trang_sp").style = "margin-left: " + (42-1.667*(sotrang-2)) + "%;";
			}
			s = s + "<div type='button' id='0' onclick='admin_chay_dh(0)'><</div>";
			for(i = 1; i <= sotrang; i++) s = s + "<div type='button' id="+ i +" onclick='admin_chay_dh("+ i +")'>"+ i +"</div>";
					s = s + "<div type='button' id="+ i +" onclick='admin_chay_dh("+ i +")'>></div>";
			document.getElementById("phan_trang_sp").innerHTML = s;
			document.getElementById(page).style = "background-color: red;";
			break;
		}
		default:{
			document.getElementById("phan_trang_sp").style = "margin-left: 27.06%;";
			if(1 <= page && page <= 6){
				s = s + "<div type='button' id='0' onclick='admin_chay_dh(0)'><</div>";
				for(i = 1; i <= 9; i++) s = s + "<div type='button' id="+ i +" onclick='admin_chay_dh("+ i +")'>"+ i +"</div>";
				s = s + "<div type='button' id="+ i +">...</div>";
				i++;
				s = s + "<div type='button' id="+ sotrang +" onclick='admin_chay_dh("+ sotrang +")'>"+ sotrang +"</div>";
				s = s + "<div type='button' id="+ (sotrang+1) +" onclick='admin_chay_dh("+ (sotrang+1) +")'>></div>";
			}
			else if(page > 6 && page < (sotrang-6+1)){
				s = s + "<div type='button' id='0' onclick='admin_chay_dh(0)'><</div>";
				s = s + "<div type='button' id='1' onclick='admin_chay_dh(1)'>1</div>";
				s = s + "<div type='button' id='2'>...</div>";
				for(i = page - 3; i <= page+3; i++) s = s + "<div type='button' id="+ i +" onclick='admin_chay_dh("+ i +")'>"+ i +"</div>";
				s = s + "<div type='button' id="+ i +">...</div>";
				i++;
				s = s + "<div type='button' id="+ sotrang +" onclick='admin_chay_dh("+ sotrang +")'>"+ sotrang +"</div>";
				s = s + "<div type='button' id="+ (sotrang+1) +" onclick='admin_chay_dh("+ (sotrang+1) +")'>></div>";	
			}
			else{
				s = s + "<div type='button' id='0' onclick='admin_chay_dh(0)'><</div>";
				s = s + "<div type='button' id='1' onclick='admin_chay_dh(1)'>1</div>";
				s = s + "<div type='button' id='2'>...</div>";
				for(i = sotrang-8; i <= sotrang; i++) s = s + "<div type='button' id="+ i +" onclick='admin_chay_dh("+ i +")'>"+ i +"</div>";
				s = s + "<div type='button' id="+ i +" onclick='admin_chay_dh("+ i +")'>></div>";
			}
			document.getElementById("phan_trang_sp").innerHTML = s;
			document.getElementById(page).style = "background-color:red;";
			break;
		}
	}
	if(page == 1){
		document.getElementById(0).style = "display: none;";
	}
	else if(page == sotrang){
		document.getElementById((sotrang+1)).style = "display: none;";
	}
}

function admin_dh_to_ctdh(index){
	var a = localStorage.getItem("ArrayCart");
	a = JSON.parse(a);
	a = a[index];
	localStorage.setItem("ctdonhang", JSON.stringify(a));
	location.href = "ctdonhang.html";
}

function admin_qltk() {
	sessionStorage.setItem("Admin_QL", "Quản lý tài khoản");
	document.getElementById("admin_tieu_de").innerHTML = "Quản lý tài khoản";
	var a = localStorage.getItem("ExAccount");
	a = JSON.parse(a);
	document.getElementById("admin_nd").innerHTML = "<div id='admin_truong'>"+
								"<div id='qltk_user'>Tài khoản</div>"+
								"<div id='qltk_pass'>Mật khẩu</div>"+
								"<div id='qltk_email'>Thư điện tử</div>"+
								"<div id='qltk_name'>Tên</div>"+
								"</div>"+
							"<div id='admin_nd_can_sua_1'></div>"+
							"<div id='phan_trang_sp'></div>";
	admin_chay_tk(1);
}

function admin_chay_tk(page) {
	var a = localStorage.getItem("ExAccount");
	if(a == null || a == "") return;
	a = JSON.parse(a);
	var sotrang = a.length/10;
	if(sotrang > parseInt(sotrang)) sotrang = parseInt(sotrang) + 1;
	if(page == 0){
		if(admin_page != 1) page = admin_page-1;
		else return;
	}
	else{
		if(page == (sotrang+1)){
			if(admin_page != sotrang) page = admin_page+1;
			else return;
		}
	}
	admin_page = page;
	var end = page*10;
	var start = end-10;
	if(end > a.length) end = a.length;
	var i, s = "", j;
	for(i = start; i < end; i++){
		s = s + "<div class='admin_dh' onclick = 'table_qltk("+ i +")'>"+
							"<div class='admin_tk_user'>"+ a[i].user +"</div>"+
							"<div class='admin_tk_pass'>"+ a[i].pass +"</div>"+
							"<div class='admin_tk_email'>"+ a[i].email +"</div>"+
							"<div class='admin_tk_name'>"+ a[i].name +"</div>"+
						"</div>";
	}
	document.getElementById("admin_nd_can_sua_1").innerHTML = s;
	document.getElementById("main").style = "height: 600px";
	document.getElementById("admin_nd").style = "height: 270px";
	if((end-start) > 1){
		document.getElementById("main").style = "height: " + (600 + 70*(end-start-1)) + "px";
		document.getElementById("admin_nd").style = "height: " + (270 + 70*(end-start-1)) + "px";
	}
	s = "";
	switch(sotrang){
		case 1:{
			break;
		}
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:{
			if(sotrang == 2) document.getElementById("phan_trang_sp").style = "margin-left: 42%;";
			else{
				document.getElementById("phan_trang_sp").style = "margin-left: " + (42-1.667*(sotrang-2)) + "%;";
			}
			s = s + "<div type='button' id='0' onclick='admin_chay_tk(0)'><</div>";
			for(i = 1; i <= sotrang; i++) s = s + "<div type='button' id="+ i +" onclick='admin_chay_tk("+ i +")'>"+ i +"</div>";
					s = s + "<div type='button' id="+ i +" onclick='admin_chay_tk("+ i +")'>></div>";
			document.getElementById("phan_trang_sp").innerHTML = s;
			document.getElementById(page).style = "background-color: red;";
			break;
		}
		default:{
			document.getElementById("phan_trang_sp").style = "margin-left: 27.06%;";
			if(1 <= page && page <= 6){
				s = s + "<div type='button' id='0' onclick='admin_chay_tk(0)'><</div>";
				for(i = 1; i <= 9; i++) s = s + "<div type='button' id="+ i +" onclick='admin_chay_tk("+ i +")'>"+ i +"</div>";
				s = s + "<div type='button' id="+ i +">...</div>";
				i++;
				s = s + "<div type='button' id="+ sotrang +" onclick='admin_chay_tk("+ sotrang +")'>"+ sotrang +"</div>";
				s = s + "<div type='button' id="+ (sotrang+1) +" onclick='admin_chay_tk("+ (sotrang+1) +")'>></div>";
			}
			else if(page > 6 && page < (sotrang-6+1)){
				s = s + "<div type='button' id='0' onclick='admin_chay_tk(0)'><</div>";
				s = s + "<div type='button' id='1' onclick='admin_chay_tk(1)'>1</div>";
				s = s + "<div type='button' id='2'>...</div>";
				for(i = page - 3; i <= page+3; i++) s = s + "<div type='button' id="+ i +" onclick='admin_chay_tk("+ i +")'>"+ i +"</div>";
				s = s + "<div type='button' id="+ i +">...</div>";
				i++;
				s = s + "<div type='button' id="+ sotrang +" onclick='admin_chay_tk("+ sotrang +")'>"+ sotrang +"</div>";
				s = s + "<div type='button' id="+ (sotrang+1) +" onclick='admin_chay_tk("+ (sotrang+1) +")'>></div>";	
			}
			else{
				s = s + "<div type='button' id='0' onclick='admin_chay_tk(0)'><</div>";
				s = s + "<div type='button' id='1' onclick='admin_chay_tk(1)'>1</div>";
				s = s + "<div type='button' id='2'>...</div>";
				for(i = sotrang-8; i <= sotrang; i++) s = s + "<div type='button' id="+ i +" onclick='admin_chay_tk("+ i +")'>"+ i +"</div>";
				s = s + "<div type='button' id="+ i +" onclick='admin_chay_tk("+ i +")'>></div>";
			}
			document.getElementById("phan_trang_sp").innerHTML = s;
			document.getElementById(page).style = "background-color:red;";
			break;
		}
	}
	if(page == 1){
		document.getElementById(0).style = "display: none;";
	}
	else if(page == sotrang){
		document.getElementById((sotrang+1)).style = "display: none;";
	}
}

function table_qltk(index){
	var a = localStorage.getItem("ExAccount");
	a = JSON.parse(a);
	document.getElementById("table_qltk").style = "display: block;";
	document.getElementById("table_qltk_user").innerHTML = a[index].user;
	document.getElementById("table_qltk_pass").value = a[index].pass;
	document.getElementById("table_qltk_name").value = a[index].name;
	document.getElementById("table_qltk_sex").value = a[index].sex;
	document.getElementById("table_qltk_phone").value = a[index].phone;
	document.getElementById("table_qltk_email").value = a[index].email;
	document.getElementById("table_qltk_born").value = a[index].born;
	document.getElementById("table_qltk_address").value = a[index].address;
}

//===================================================ctdonhang.html======================================
var ctdonhang_num_phan_trang = 1;
function chay_don_hang(page){
	var donhang = localStorage.getItem("ctdonhang");
	donhang = JSON.parse(donhang);
	var donhang_tong_sp = 0;
	var donhang_gia_thanh = 0;
	s = "";
	if(donhang == null || donhang == ""){
		location.href = "index.html";
		return;
	}
	var a = donhang.sp, sotrang, begin, end;
	sotrang = a.length/10;
	if(parseInt(sotrang) < sotrang) sotrang = parseInt(sotrang)+1;

	if(page == 0){
		if(ctdonhang_num_phan_trang != 1) ctdonhang_num_phan_trang--;
		else return;
	}
	else if(page == sotrang+1){
		if(ctdonhang_num_phan_trang != sotrang) ctdonhang_num_phan_trang++;
		else return;
	}
	else ctdonhang_num_phan_trang = page;
	end = ctdonhang_num_phan_trang*10;
	begin = end-10;
	if(end > a.length) end = a.length;
	
	for(let i = 0; i < a.length; i++){
		donhang_tong_sp = donhang_tong_sp + a[i].soluong;
		donhang_gia_thanh = donhang_gia_thanh + (a[i].price*a[i].soluong);
	}
	for(let i = begin; i < end; i++){
		s = s + "<div class='donhang_info'>"+
					"<div class='donhang_img'>"+
						"<img src='" + a[i].img +"' class='donhang_hinh_anh'>"+
					"</div>"+
					"<div class='donhang_infos'>"+
						"<div class='donhang_name' onclick = 'donhang_to_detail(" + i +")'>"+
							a[i].name +
						"</div>"+
						"<div class='donhang_hieu'>"+
							"Nhãn hiệu: " + a[i].hieu+
						"</div>"+
						"<div class='donhang_price'>"+
							"Giá: " + a[i].price + "đ/1 sản phẩm"+
						"</div>"+
					"</div>"+
					"<div class='donhang_money'>"+
						"<div class='donhang_khung_tang_giam'>"+
							"<span id='donhang_soluong"+ i +"'>Số lượng: " + a[i].soluong + "đ</span>"+
						"</div>"+
						"<div class='donhang_tong_1sp'>"+
							"<span id='tongi"+ i +"'>Tổng: " + (a[i].soluong*a[i].price) + "đ</span>"+
						"</div>"+
					"</div>"+
				"</div>";
	}
	s = s + "<div id='ctdonhang_phan_trang'></div>";
	document.getElementById("donhang_so_luong_sp").innerHTML = "("+donhang_tong_sp+" sản phẩm)";
	document.getElementById("donhang_tong_gia").innerHTML = donhang_gia_thanh + "đ";
	document.getElementById("donhang_cho_sua_code").innerHTML = s;
	s = "";
	switch(sotrang){
		case 1:{
			break;
		}
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:{
			if(sotrang == 2) document.getElementById("ctdonhang_phan_trang").style = "margin-left: 40%;";
			else{
				document.getElementById("ctdonhang_phan_trang").style = "margin-left: " + (40-2*(sotrang-2)) + "%;";
			}
			s = s + "<div type='button' id='0' onclick='chay_don_hang(0)'><</div>";
			for(i = 1; i <= sotrang; i++) s = s + "<div type='button' id="+ i +" onclick='chay_don_hang("+ i +")'>"+ i +"</div>";
					s = s + "<div type='button' id="+ i +" onclick='chay_don_hang("+ i +")'>></div>";
			document.getElementById("ctdonhang_phan_trang").innerHTML = s;
			document.getElementById(ctdonhang_num_phan_trang).style = "background-color: red;";
			break;
		}
		default:{
			document.getElementById("ctdonhang_phan_trang").style = "margin-left: 22%;";
			if(1 <= ctdonhang_num_phan_trang && ctdonhang_num_phan_trang <= 6){
				s = s + "<div type='button' id='0' onclick='chay_don_hang(0)'><</div>";
				for(i = 1; i <= 9; i++) s = s + "<div type='button' id="+ i +" onclick='chay_don_hang("+ i +")'>"+ i +"</div>";
				s = s + "<div type='button' id="+ i +">...</div>";
				i++;
				s = s + "<div type='button' id="+ sotrang +" onclick='chay_don_hang("+ sotrang +")'>"+ sotrang +"</div>";
				s = s + "<div type='button' id="+ (sotrang+1) +" onclick='chay_don_hang("+ (sotrang+1) +")'>></div>";
			}
			else if(user_num_phan_trang > 6 && user_num_phan_trang < (sotrang-6+1)){
				s = s + "<div type='button' id='0' onclick='chay_don_hang(0)'><</div>";
				s = s + "<div type='button' id='1' onclick='chay_don_hang(1)'>1</div>";
				s = s + "<div type='button' id='2'>...</div>";
				for(i = user_num_phan_trang - 3; i <= user_num_phan_trang+3; i++) s = s + "<div type='button' id="+ i +" onclick='chay_don_hang("+ i +")'>"+ i +"</div>";
				s = s + "<div type='button' id="+ i +">...</div>";
				i++;
				s = s + "<div type='button' id="+ sotrang +" onclick='chay_don_hang("+ sotrang +")'>"+ sotrang +"</div>";
				s = s + "<div type='button' id="+ (sotrang+1) +" onclick='chay_don_hang("+ (sotrang+1) +")'>></div>";
			}
			else{
				s = s + "<div type='button' id='0' onclick='chay_don_hang(0)'><</div>";
				s = s + "<div type='button' id='1' onclick='chay_don_hang(1)'>1</div>";
				s = s + "<div type='button' id='2'>...</div>";
				for(i = sotrang-8; i <= sotrang; i++) s = s + "<div type='button' id="+ i +" onclick='chay_don_hang("+ i +")'>"+ i +"</div>";
				s = s + "<div type='button' id="+ i +" onclick='chay_don_hang("+ i +")'>></div>";
			}
			document.getElementById("ctdonhang_phan_trang").innerHTML = s;
			document.getElementById(ctdonhang_num_phan_trang).style = "background-color:red;";
			break;
		}
	}
	if(sotrang != 1){
		if(ctdonhang_num_phan_trang == 1){
			document.getElementById(0).style = "display:none;";
		}
		else if(ctdonhang_num_phan_trang == sotrang){
			document.getElementById((sotrang+1)).style = "display:none;";
		}
	}

	a = localStorage.getItem("CurAccount");
	if(a != "admin"){
		s = "";
		var money = document.getElementById("donhang_tong_gia").innerHTML;
		s = s + "<div>Thành tiền: <span id='donhang_tong_gia'>"+money+"</span></div>"+
					"<span id='ctdonhang_tt1'>Trạng thái: "+donhang.tt+"</span>";
		document.getElementById("donhang_thanh_tien").innerHTML = s;
	}
	else document.getElementById("ctdonhang_tt").value = donhang.tt;
}

function donhang_to_detail(index){
	var donhang = localStorage.getItem("ctdonhang");
	donhang = JSON.parse(donhang);
	var a = donhang.sp;
	sessionStorage.removeItem("detail_sp");
	var b = new sanpham_giohang(a[index].id, a[index].img, a[index].type, a[index].type1, a[index].type2, a[index].name, a[index].hieu, a[index].price, a[index].soluong, a[index].max, a[index].info, a[index].use);
	sessionStorage.setItem("detail_sp",JSON.stringify(b));
	window.location.href = "detail.html";
}

function thay_doi_trang_thai(){
	var donhang = localStorage.getItem("ctdonhang");
	donhang = JSON.parse(donhang);
	donhang.tt = document.getElementById("ctdonhang_tt").value;
	localStorage.setItem("ctdonhang", JSON.stringify(donhang));
	var b;
	b = localStorage.getItem("ArrayCart");
	b = JSON.parse(b);
	var i = 0, j = 0;
	for(i = 0; i < b.length; i++) if(b[i].id == donhang.id){
		b[i].tt = donhang.tt;
		localStorage.setItem("ArrayCart", JSON.stringify(b));
		break;
	}
	b = localStorage.getItem("ExAccount");
	b = JSON.parse(b);
	for(i = 0; i < b.length; i++) if(b[i].user == donhang.user) break;
	if(i < b.length){
		for(j = 0; j < b[i].cart.length; j++) if(donhang.id == b[i].cart[j].id) break;
		if(j < b[i].cart.length){
			b[i].cart[j].tt = donhang.tt;
			localStorage.setItem("ExAccount", JSON.stringify(b));
		}
	}
	b = localStorage.getItem("CurAccount");
	b = JSON.parse(b);
	if(b.user == donhang.user){
		for(i = 0; i < b.cart.length; i++) if(donhang.id == b.cart[i].id){
			b.cart[i].tt = donhang.tt;
			localStorage.setItem("CurAccount", JSON.stringify(b));
			break;
		}
	}
	location.reload();
}

function don_hang_xoa(){
	var donhang = localStorage.getItem("ctdonhang");
	donhang = JSON.parse(donhang);
	b = localStorage.getItem("ArrayCart");
	b = JSON.parse(b);
	var i = 0, j = 0;
	for(i = 0; i < b.length; i++) if(b[i].id == donhang.id){
		b.splice(i, 1);
		localStorage.setItem("ArrayCart", JSON.stringify(b));
		break;
	}
	b = localStorage.getItem("ExAccount");
	b = JSON.parse(b);
	for(i = 0; i < b.length; i++) if(b[i].user == donhang.user) break;
	if(i < b.length){
		for(j = 0; j < b[i].cart.length; j++) if(donhang.id == b[i].cart[j].id) break;
		if(j < b[i].cart.length){
			b[i].cart.splice(j, 1);
			localStorage.setItem("ExAccount", JSON.stringify(b));
		}
	}
	b = localStorage.getItem("CurAccount");
	b = JSON.parse(b);
	if(b.user == donhang.user){
		for(i = 0; i < b.cart.length; i++) if(donhang.id == b.cart[i].id){
			b.cart.splice(i, 1);
			localStorage.setItem("CurAccount", JSON.stringify(b));
			break;
		}
	}
	localStorage.removeItem("ctdonhang");
	location.href = "admin.html";
}

function onchangetype2(){
	var x = document.getElementById("table_qlsp_loai_1").value;
	var s = "";
	switch(x){
		case "Trang điểm":{
			s = s + "<option value='Mắt'>Mắt</option>"+
					"<option value='Mặt'>Mặt</option>"+
					"<option value='Môi'>Môi</option>";
			break;
		}
		case "Dưỡng da":{
			s = s + "<option value='Rửa mặt'>Rửa mặt</option>"+
					"<option value='Mặt nạ'>Mặt nạ</option>"+
					"<option value='Dưỡng ẩm'>Dưỡng ẩm</option>"+
					"<option value='Trị liệu'>Trị liệu</option>"+
					"<option value='Chống nắng'>Chống nắng</option>";
					break;
		}
		case "Cơ thể":{
			s = s + "<option value='Dưỡng thể'>Dưỡng thể</option>"+
					"<option value='Sữa tắm'>Sữa tắm</option>";
					break;
		}
		case "Tóc":{
			s = s + "<option value='Dầu gội'>Dầu gội</option>"+
					"<option value='Dầu xả'>Dầu xả</option>"+
					"<option value='Dưỡng tóc'>Dưỡng tóc</option>";
			break;
		}
		case "Cọ & Phụ kiện":{
			s = s + "<option value='Cọ'>Cọ</option>"+
					"<option value='Bọt biển'>Bọt biển</option>";
			break;
		}
		case "Nước hoa":{
			break;
		}
		default: break;
	}
	document.getElementById("table_qlsp_loai_2").innerHTML = s;
	onchangetype3();
}

function onchangeaddtype2(){
	var x = document.getElementById("table_qlsp_add_loai_1").value;
	var s = "";
	switch(x){
		case "Trang điểm":{
			s = s + "<option value='Mắt'>Mắt</option>"+
					"<option value='Mặt'>Mặt</option>"+
					"<option value='Môi'>Môi</option>";
			break;
		}
		case "Dưỡng da":{
			s = s + "<option value='Rửa mặt'>Rửa mặt</option>"+
					"<option value='Mặt nạ'>Mặt nạ</option>"+
					"<option value='Dưỡng ẩm'>Dưỡng ẩm</option>"+
					"<option value='Trị liệu'>Trị liệu</option>"+
					"<option value='Chống nắng'>Chống nắng</option>";
					break;
		}
		case "Cơ thể":{
			s = s + "<option value='Dưỡng thể'>Dưỡng thể</option>"+
					"<option value='Sữa tắm'>Sữa tắm</option>";
					break;
		}
		case "Tóc":{
			s = s + "<option value='Dầu gội'>Dầu gội</option>"+
					"<option value='Dầu xả'>Dầu xả</option>"+
					"<option value='Dưỡng tóc'>Dưỡng tóc</option>";
			break;
		}
		case "Cọ & Phụ kiện":{
			s = s + "<option value='Cọ'>Cọ</option>"+
					"<option value='Bọt biển'>Bọt biển</option>";
			break;
		}
		case "Nước hoa":{
			break;
		}
		default: break;
	}
	document.getElementById("table_qlsp_add_loai_2").innerHTML = s;
	onchangeaddtype3();
}

function onchangetype3(){
	var x = document.getElementById("table_qlsp_loai_2").value;
	var s = "";
	switch(x){
		case "Mắt":{
			s = s + "<option value='Lót mắt'>Lót mắt</option>"+
					"<option value='Phấn mắt'>Phấn mắt</option>"+
					"<option value='Chuốt mi'>Chuốt mi</option>"+
					"<option value='Kẻ mắt'>Kẻ mắt</option>"+
					"<option value='Chân mày'>Chân mày</option>"+
					"<option value='Tẩy trang mắt'>Tẩy trang mắt</option>";
			break;
		}
		case "Mặt":{
			s = s + "<option value='Kem lót'>Kem lót</option>"+
					"<option value='Kem/Phấn nền'>Kem/Phấn nền</option>"+
					"<option value='Phấn phủ'>Phấn phủ</option>"+
					"<option value='Phấn má'>Phấn má</option>"+
					"<option value='Tạo khối'>Tạo khối</option>";
					break;
		}
		case "Môi":{
			s = s + "<option value='Son dưỡng môi & điều trị'>Son dưỡng môi & điều trị</option>"+
					"<option value='Son kem'>Son kem</option>"+
					"<option value='Son bóng'>Son bóng</option>"+
					"<option value='Viền môi'>Viền môi</option>";
					break;
		}
		case "Rửa mặt":{
			s = s + "<option value='Tẩy trang'>Tẩy trang</option>"+
					"<option value='Tẩy da chết'>Tẩy da chết</option>"+
					"<option value='Sữa rửa mặt'>Sữa rửa mặt</option>"+
					"<option value='Dụng cụ rửa mặt'>Dụng cụ rửa mặt</option>"+
					"<option value='Nước hoa hồng'>Nước hoa hồng</option>";
			break;
		}
		case "Mặt nạ":{
			s = s + "<option value='Mặt Nạ Giấy'>Mặt Nạ Giấy</option>"+
					"<option value='Mặt nạ'>Mặt nạ</option>";
			break;
		}
		case "Trang điểm":{
			s = s + "<option value='Mắt'>Mắt</option>"+
					"<option value='Mặt'>Mặt</option>"+
					"<option value='Môi'>Môi</option>";
			break;
		}
		case "Dưỡng ẩm":{
			s = s + "<option value='Kem dưỡng'>Kem dưỡng</option>"+
					"<option value='Sữa dưỡng'>Sữa dưỡng</option>"+
					"<option value='Dầu dưỡng'>Dầu dưỡng</option>"+
					"<option value='Dưỡng da vùng mắt'>Dưỡng da vùng mắt</option>"+
					"<option value='Dưỡng da vùng cổ'>Dưỡng da vùng cổ</option>"+
					"<option value='Xịt khoáng'>Xịt khoáng</option>";
			break;
		}
		case "Trị liệu":{
			s = s + "<option value='Trị mụn'>Trị mụn</option>"+
					"<option value='Kem lột'>Kem lột</option>"+
					"<option value='Dưỡng mắt'>Dưỡng mắt</option>";
			break;
		}
		case "Chống nắng":{
			s = s + "<option value='Kem chống nắng cho mặt'>Kem chống nắng cho mặt</option>"+
					"<option value='Kem chống nắng cho body'>Kem chống nắng cho body</option>";
			break;
		}
		case "Dưỡng thể":{
			s = s + "<option value='Kem dưỡng da & dầu'>Kem dưỡng da & dầu</option>"+
					"<option value='Dưỡng chân tay'>Dưỡng chân tay</option>";
			break;
		}
		case "Sữa tắm":{
			s = s + "<option value='Tẩy da chết'>Tẩy da chết</option>"+
					"<option value='Sữa tắm'>Sữa tắm</option>";
			break;
		}
		case "Dầu gội":{
			break;
		}
		case "Dầu xả":{
			break;
		}
		case "Dưỡng tóc":{
			break;
		}
		case "Cọ":{
			break;
		}
		case "Bọt biển":{
			break;
		}
		default: break;
	}
	document.getElementById("table_qlsp_loai_3").innerHTML = s;
}

function onchangeaddtype3(){
	var x = document.getElementById("table_qlsp_add_loai_2").value;
	var s = "";
	switch(x){
		case "Mắt":{
			s = s + "<option value='Lót mắt'>Lót mắt</option>"+
					"<option value='Phấn mắt'>Phấn mắt</option>"+
					"<option value='Chuốt mi'>Chuốt mi</option>"+
					"<option value='Kẻ mắt'>Kẻ mắt</option>"+
					"<option value='Chân mày'>Chân mày</option>"+
					"<option value='Tẩy trang mắt'>Tẩy trang mắt</option>";
			break;
		}
		case "Mặt":{
			s = s + "<option value='Kem lót'>Kem lót</option>"+
					"<option value='Kem/Phấn nền'>Kem/Phấn nền</option>"+
					"<option value='Phấn phủ'>Phấn phủ</option>"+
					"<option value='Phấn má'>Phấn má</option>"+
					"<option value='Tạo khối'>Tạo khối</option>";
					break;
		}
		case "Môi":{
			s = s + "<option value='Son dưỡng môi & điều trị'>Son dưỡng môi & điều trị</option>"+
					"<option value='Son kem'>Son kem</option>"+
					"<option value='Son bóng'>Son bóng</option>"+
					"<option value='Viền môi'>Viền môi</option>";
					break;
		}
		case "Rửa mặt":{
			s = s + "<option value='Tẩy trang'>Tẩy trang</option>"+
					"<option value='Tẩy da chết'>Tẩy da chết</option>"+
					"<option value='Sữa rửa mặt'>Sữa rửa mặt</option>"+
					"<option value='Dụng cụ rửa mặt'>Dụng cụ rửa mặt</option>"+
					"<option value='Nước hoa hồng'>Nước hoa hồng</option>";
			break;
		}
		case "Mặt nạ":{
			s = s + "<option value='Mặt Nạ Giấy'>Mặt Nạ Giấy</option>"+
					"<option value='Mặt nạ'>Mặt nạ</option>";
			break;
		}
		case "Trang điểm":{
			s = s + "<option value='Mắt'>Mắt</option>"+
					"<option value='Mặt'>Mặt</option>"+
					"<option value='Môi'>Môi</option>";
			break;
		}
		case "Dưỡng ẩm":{
			s = s + "<option value='Kem dưỡng'>Kem dưỡng</option>"+
					"<option value='Sữa dưỡng'>Sữa dưỡng</option>"+
					"<option value='Dầu dưỡng'>Dầu dưỡng</option>"+
					"<option value='Dưỡng da vùng mắt'>Dưỡng da vùng mắt</option>"+
					"<option value='Dưỡng da vùng cổ'>Dưỡng da vùng cổ</option>"+
					"<option value='Xịt khoáng'>Xịt khoáng</option>";
			break;
		}
		case "Trị liệu":{
			s = s + "<option value='Trị mụn'>Trị mụn</option>"+
					"<option value='Kem lột'>Kem lột</option>"+
					"<option value='Dưỡng mắt'>Dưỡng mắt</option>";
			break;
		}
		case "Chống nắng":{
			s = s + "<option value='Kem chống nắng cho mặt'>Kem chống nắng cho mặt</option>"+
					"<option value='Kem chống nắng cho body'>Kem chống nắng cho body</option>";
			break;
		}
		case "Dưỡng thể":{
			s = s + "<option value='Kem dưỡng da & dầu'>Kem dưỡng da & dầu</option>"+
					"<option value='Dưỡng chân tay'>Dưỡng chân tay</option>";
			break;
		}
		case "Sữa tắm":{
			s = s + "<option value='Tẩy da chết'>Tẩy da chết</option>"+
					"<option value='Sữa tắm'>Sữa tắm</option>";
			break;
		}
		case "Dầu gội":{
			break;
		}
		case "Dầu xả":{
			break;
		}
		case "Dưỡng tóc":{
			break;
		}
		case "Cọ":{
			break;
		}
		case "Bọt biển":{
			break;
		}
		default: break;
	}
	document.getElementById("table_qlsp_add_loai_3").innerHTML = s;
}

function qlsp_add(){
	document.getElementById("table_qlsp_add").style = "display: block;";
}

function nutaddsp(){
	var i = 0;
	for(i = 1; i <= 9; i++) document.getElementById("chuthichadd_"+i).innerHTML = "";
	var t = true;
	var a = localStorage.getItem("Array_sp");
	a = JSON.parse(a);
	var id = document.getElementById("table_qlsp_add_id").value;
	if(id == "" || id == null){
		t = false;
		document.getElementById("chuthichadd_1").innerHTML = "Mã sản phẩm không được bỏ trống!";
	}
	else{
		id = parseInt(id);
		for(i = 0; i < a.length; i++) if(a[i].id == id){
			t = false;
			document.getElementById("chuthichadd_1").innerHTML = "Mã sản phẩm bị trùng!";
			break;
		}
	}
	var name = document.getElementById("name_sp_add").value;
	if(name == "" || name == null) document.getElementById("chuthichadd_2").innerHTML = "Tên sản phẩm không được bỏ trống!";
	var price = document.getElementById("price_sp_add").value;
	price = parseInt(price);
	if(price == 0){
		t = false;
		document.getElementById("chuthichadd_3").innerHTML = "Giá sản phẩm phải khác 0!";
	}
	var type = document.getElementById("table_qlsp_add_loai_1").value;
	var type1 = document.getElementById("table_qlsp_add_loai_2").value;
	var type2 = document.getElementById("table_qlsp_add_loai_3").value;
	var hieu = document.getElementById("nhan_hieu_add").value;
	var soluong = document.getElementById("so_luong_add").value;
	soluong = parseInt(soluong);
	if(soluong == 0){
		t = false;
		document.getElementById("chuthichadd_6").innerHTML = "Số lượng sản phẩm phải khác 0!";
	}
	var info = document.getElementById("infomationadd").value;
	if(info == "" || info == null){
		t = false;
		document.getElementById("chuthichadd_7").innerHTML = "Thông tin không được rỗng!";
	}
	var use = document.getElementById("use_add").value;
	if(use == "" || use == null){
		t = false;
		document.getElementById("chuthichadd_8").innerHTML = "Cách sử không được rỗng!";
	}
	var img = document.getElementById("hinh_anh_add").value;
	if(img == "" || img == null){
		t =false;
		document.getElementById("chuthichadd_9").innerHTML = "Hình ảnh không được bỏ trống!";
	}
	if(t){
		a.push(new sanpham(id, img, type, type1, type2, name, hieu, price, soluong, info, use));
		localStorage.setItem("Array_sp", JSON.stringify(a));
		alert("Thêm sản phẩm thành công!");
		location.reload();
	}
}


window.onload = function(){
	Auto_luu_sanpham();
	loginStatus();
	Auto_hien_thi_soluong_sp();
	var s = location.href;
	if(s.indexOf("index.html") != -1){
		setTimeout("switch_Image()", 3000);
		Auto_sp_ban_chay();
		Auto_tim_kiem_pho_bien();
		Auto_mua_le();
		sp_ban_chay(1);
		sp_mua_le(1);
		sp_tk_phobien(1);
	}
	if(s.indexOf("sanpham.html") != -1){
		chay_danhmuc();
	}
	if(s.indexOf("detail.html") != -1){
		chay_detail();
	}
	if(s.indexOf("cart.html") != -1){
		chay_gio_hang(1);
	}
	if(s.indexOf("user.html") != -1){
		Auto_hien_user();
	}
	if(s.indexOf("admin.html") != -1){
		Auto_hien_admin();
	}
	if(s.indexOf("search.html") != -1){
		duyetmang_search(search_page);
	}
	if(s.indexOf("ctdonhang.html") != -1){
		chay_don_hang(1);
	}
}

