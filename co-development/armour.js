function protecter_select(){
	var RC=document.getElementById("item").getElementsByTagName("option");
		for(var i=RC.length-1; i>=0; -- i){
			var parent=RC[i].parentNode;
			parent.removeChild(RC[i]);
		}

		document.getElementById("item").innerHTML="<option value='azeri'>"+"アゼリアーナ"+"</option>"+"<option value='glnil'>"+"グルニル"+"</option>"+"<option value='zales'>"+"ザレス"+"</option>"+"<option value='taris'>"+"タリス"+"</option>"+"<option value='talotas'>"+"タロタス"+"</option>"+"<option value='febo'>"+"フィーボ"+"</option>"+"<option value='foltoona'>"+"フォルトゥーナ"+"</option>"+"<option value='hercules'>"+"ヘラクレス"+"</option>"+"<option value='reblas'>"+"レブラス"+"</option>"+"<option value='locaba'>"+"ロカバ"+"</option>";
		var item_kind=$("[name=item_kind]:checked").val()
		//ラジオボタンのアイテム種類をチェック
		if(item_kind=="helm"){
			var elem=document.createElement("option");
			elem.value="gias";
			elem.id="gias";
			document.getElementById("item").appendChild(elem);
			document.getElementById("gias").innerHTML="ギアス";
		}else if(item_kind=="armour"){
			var elem=document.createElement("option");
			elem.value="nose";
			elem.id="nose";
			document.getElementById("item").appendChild(elem);
			document.getElementById("nose").innerHTML="レッドノーズ";
			
			var elem=document.createElement("option");
			elem.value="gudon";
			elem.id="gudon";
			document.getElementById("item").appendChild(elem);
			document.getElementById("gudon").innerHTML="愚鈍な木の精霊";
		}else if(item_kind=="globe"){
			var elem=document.createElement("option");
			elem.value="beg";
			elem.id="beg";
			document.getElementById("item").appendChild(elem);
			document.getElementById("beg").innerHTML="ベグ";
		}else if(item_kind=="shoose"){
			var elem=document.createElement("option");
			elem.value="maskan";
			elem.id="maskna";
			document.getElementById("item").appendChild(elem);
			document.getElementById("maskan").innerHTML="マスカン";
		}
result();
}

function weapon_select(){
	var RC=document.getElementById("item").getElementsByTagName("option");
		for(var i=RC.length-1; i>=0; -- i){
			var parent=RC[i].parentNode;
			parent.removeChild(RC[i]);
		}

		document.getElementById("item").innerHTML="<option value='eine'>"+"アイン"+"</option>"+"<option value='ceres'>"+"セレス"+"</option>"+"<option value='elsh'>"+"エルシュ"+"</option>"+"<option value='aswel'>"+"アズウェル"+"</option>"+"<option value='kallis'>"+"カリス"+"</option>"+"<option value='bales'>"+"バレス"+"</option>"+"<option value='yuria'>"+"ユリア"+"</option>"+"<option value='kurea'>"+"クレア"+"</option>"+"<option value='ribelt'>"+"リベルト"+"</option>"+"<option value='kuzaka'>"+"クザカ"+"</option>";
		

result();
}

function sub_weapon_select(){
	var RC=document.getElementById("item").getElementsByTagName("option");
		for(var i=RC.length-1; i>=0; -- i){
			var parent=RC[i].parentNode;
			parent.removeChild(RC[i]);
		}

		var character_class=$("#character_class").val()
		
		
			if(character_class=="warrior" || character_class=="valkyrie"){
				document.getElementById("item").innerHTML="<option value='round'>"+"円形"+"</option>"+"<option value='militia'>"+"民兵"+"</option>"+"<option value='bengats'>"+"ベンガッツ"+"</option>"+"<option value='eccion'>"+"エクシオン"+"</option>"+"<option value='kyte'>"+"カイト"+"</option>";
		
			}else if(character_class=="ranger" || character_class=="wiz"){
				document.getElementById("item").innerHTML="<option value='dagger'>"+"ダガー"+"</option>"+"<option value='militia'>"+"民兵"+"</option>"+"<option value='iron'>"+"鋼鉄"+"</option>"+"<option value='pelin'>"+"ペリン"+"</option>";
			}else if(character_class=="sorceress"){
				document.getElementById("item").innerHTML="<option value='cule'>"+"キュール"+"</option>"+"<option value='militia'>"+"民兵"+"</option>"+"<option value='herick'>"+"へリック"+"</option>"+"<option value='juvle'>"+"ジュヴル"+"<option value='lick'>"+"リック"+"</option>";
			}else if(character_class=="giant"){
				document.getElementById("item").innerHTML="<option value='cloth'>"+"布"+"</option>"+"<option value='militia'>"+"民兵"+"</option>"+"<option value='seya'>"+"セイヤ"+"</option>"+"<option value='olos'>"+"オロス"+"<option value='teos'>"+"テオス"+"</option>";
			}else if(character_class=="little_summoner"){
				document.getElementById("item").innerHTML="<option value='normal'>"+"装身具"+"</option>"+"<option value='asa'>"+"麻"+"</option>"+"<option value='kaori'>"+"香り箱"+"</option>"+"<option value='bag'>"+"寝袋"+"<option value='long'>"+"長刀"+"</option>";
			}else if(character_class=="blader" || character_class=="tsubaki"){
				document.getElementById("item").innerHTML="<option value='horn'>"+"角弓"+"</option>"+"<option value='black'>"+"黒"+"</option>"+"<option value='whitearm'>"+"白角軍"+"</option>"+"<option value='white'>"+"白"+"<option value='blackarm'>"+"黒角"+"</option>";
			}else{
				document.getElementById("item").innerHTML="<option value='old'>"+"古い"+"</option>"+"<option value='asa'>"+"麻"+"</option>"+"<option value='militia'>"+"民兵"+"</option>"+"<option value='quiter'>"+"クイター"+"<option value='esteeq'>"+"エスティーク"+"</option>"+"<option value='tade'>"+"タデ"+"</option>";
			
			}
		var elem=document.createElement("option");
		elem.value="clea";
		elem.id="clea";
		document.getElementById("item").appendChild(elem);
		document.getElementById("clea").innerHTML="クレア";
		
		var elem=document.createElement("option");
		elem.value="rosal";
		elem.id="rosal";
		document.getElementById("item").appendChild(elem);
		document.getElementById("rosal").innerHTML="ロサル";
		
		var elem=document.createElement("option");
		elem.value="nubel";
		elem.id="nubel";
		document.getElementById("item").appendChild(elem);
		document.getElementById("nubel").innerHTML="ヌーベル";

result();
}

function change_stack(){//スタック値が変更されたときに起動
	var stack_data=parseInt($("#stack").val())
	$("#stack_data").val(stack_data)
	//データ格納領域のスタックvalを変更したスタック値に書き換え
	result();
	//表示領域に適応
}	

function change_taikyu(){//耐久が変更されたら起動
	var taikyu_data=parseInt($("#taikyu").val())
	$("#taikyu_data").val(taikyu_data)
	result();
}

function change_senzai(){//潜在が変更されたら起動
	var senzai_data=parseInt($("#senzai").val())
	$("#senzai_data").val(senzai_data)
	result();
}
function set_number(){
var RC=document.getElementById("senzai").getElementsByTagName("option");
		for(var i=RC.length-1; i>=0; -- i){
			var parent=RC[i].parentNode;
			parent.removeChild(RC[i]);
		}
	var elem=document.createElement("option")
	for(var i=0; i<200; i++){
		var elem=document.createElement("option")
		elem.value=i;
		elem.innerHTML=i;
		document.getElementById("senzai").appendChild(elem);
}
	
var RC=document.getElementById("stack").getElementsByTagName("option");
		for(var i=RC.length-1; i>=0; -- i){
			var parent=RC[i].parentNode;
			parent.removeChild(RC[i]);
		}
	for(var i=0; i<201; i++){
		var elem=document.createElement("option")
		elem.value=i;
		elem.innerHTML=i;
		document.getElementById("stack").appendChild(elem);
	}
	
var RC=document.getElementById("vol").getElementsByTagName("option");
		for(var i=RC.length-1; i>=0; -- i){
			var parent=RC[i].parentNode;
			parent.removeChild(RC[i]);
		}
	for(var i=10; i>-1; i=i-1){
		var elem=document.createElement("option")
		elem.value=i;
		elem.innerHTML=i;
		document.getElementById("vol").appendChild(elem);
	}
	document.getElementById("vol").disabled=true;
	//初期状態でヴォルクスは不使用です




var RC=document.getElementById("max").getElementsByTagName("option");
		for(var i=RC.length-1; i>=0; -- i){
			var parent=RC[i].parentNode;
			parent.removeChild(RC[i]);
		}
	for(var i=100; i>19; i=i-1){
		var elem=document.createElement("option")
		elem.value=i;
		elem.innerHTML=i;
		document.getElementById("max").appendChild(elem);
	}

var RC=document.getElementById("taikyu").getElementsByTagName("option");
		for(var i=RC.length-1; i>=0; -- i){
			var parent=RC[i].parentNode;
			parent.removeChild(RC[i]);
		}
	for(var i=100; i>-1; i--){
		var elem=document.createElement("option")
		elem.value=i;
		elem.innerHTML=i;
		document.getElementById("taikyu").appendChild(elem);
	}


	var elem=document.createElement("div");
	elem.value=0;
	elem.id="stack_data";
	document.getElementById("data_store").appendChild(elem);
	//データ格納用のスペースにスタック値を放り込む。中身はない。必要に応じて読み出し
	//読み込んだときは０
	var elem=document.createElement("div");
	elem.value=0;
	elem.id="kyoukati_data";
	document.getElementById("data_store").appendChild(elem);
	//強化値
	var elem=document.createElement("div");
	elem.value=0;
	elem.id="count_data";
	document.getElementById("data_store").appendChild(elem);
	//強化した回数の記録
	var elem=document.createElement("div");
	elem.value=0;
	elem.id="count_true_data";
	document.getElementById("data_store").appendChild(elem);
	//真強化した回数の記録
	var elem=document.createElement("div");
	elem.value=0;
	elem.id="senzai_data";
	document.getElementById("data_store").appendChild(elem);
	//潜在の現在値、読み込んだときは0
	var elem=document.createElement("div");
	elem.value=0;
	elem.id="volcs_count_data";
	document.getElementById("data_store").appendChild(elem);
	//ヴォルクスの叫びデータ。初期状態では使用しないので0
	var elem=document.createElement("div");
	elem.value=100;
	elem.id="taikyu_data";
	document.getElementById("data_store").appendChild(elem);
	//まさかの耐久書き忘れである。
	var elem=document.createElement("div");
	elem.value=0;
	elem.id="memory_data";
	document.getElementById("data_store").appendChild(elem);
	//記憶の欠片を使った数。当然初期は0
	var elem=document.createElement("div");
	elem.value=0;
	elem.id="same_data";
	document.getElementById("data_store").appendChild(elem);
	//同アイテムで修理した数。同上
//グローバル関数を使わず、データ格納用のdivを作って対応する

}

function go_volcs(){
//ヴォルクスの叫びを使用可能にします
	var vol=$("[name=vol]").prop("checked")
	
		if(vol==true){
			document.getElementById("vol").disabled=false;
		}else{
			document.getElementById("vol").disabled=true;
		}


}


