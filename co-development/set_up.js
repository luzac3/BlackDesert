function create_item(){
	var item_kind=$("[name=item_kind]:checked").val()
	var character_class=document.getElementById("character_class");
	if(item_kind=="helm" || item_kind=="armour" || item_kind=="globe" || item_kind=="shoose"){
		character_class.disabled=true;
			protecter_select();
				return;
			
			
	}else{
		character_class.disabled=false;
			if(item_kind=="weapon"){
				weapon_select();
			}else{
				sub_weapon_select();
			}
			
	}
	


}

function protecter_select(){
	var RC=document.getElementById("item").getElementsByTagName("option");
	var select=document.getElementById("item");
		for(var i=RC.length-1; i>=0; -- i){
			var parent=RC[i].parentNode;
			parent.removeChild(RC[i]);
		}
		var item={
				'azeri' : 'アゼリアーナ',
				'glnil' : 'グルニル',
				'zales' : 'ザレス',
				'taris' : 'タリス',
				'talotas' : 'タロタス',
				'febo' : 'フィーボ',
				'foltoona' : 'フォルトゥーナ',
				'hercules' : 'ヘラクレス',
				'reblas' : 'レブラス',
				'locaba' : 'ロカバ',
		};
				
		for (var i in item){
			var option=document.createElement('option')
			option.setAttribute('value',i);
			option.innerHTML=item[i];				
			
			select.appendChild(option);
		}

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
			elem.id="maskan";
			document.getElementById("item").appendChild(elem);
			document.getElementById("maskan").innerHTML="マスカン";
		}
result();
}

function weapon_select(){
	var select=document.getElementById("item");
	var RC=document.getElementById("item").getElementsByTagName("option");
		for(var i=RC.length-1; i>=0; -- i){
			var parent=RC[i].parentNode;
			parent.removeChild(RC[i]);
		}


		var item={
				'eine' : 'アイン',
				'ceres' : 'セレス',
				'elsh' : 'エルシュ',
				'aswel' : 'アズウェル',
				'kallis' : 'カリス',
				'bales' : 'バレス',
				'yuria' : 'ユリア',
				'kurea' : 'クレア',
				'ribelt' : 'リベルト',
				'kuzaka' : 'クザカ',
		};
				
		for (var i in item){
			var option=document.createElement('option')
			option.setAttribute('value',i);
			option.innerHTML=item[i];				
			
			select.appendChild(option);
		}
		
		

result();
}

function sub_weapon_select(){
	var select=document.getElementById("item");
	var RC=document.getElementById("item").getElementsByTagName("option");
		for(var i=RC.length-1; i>=0; -- i){
			var parent=RC[i].parentNode;
			parent.removeChild(RC[i]);
		}

		var character_class=$("#character_class").val()
		
		
			if(character_class=="warrior" || character_class=="valkyrie"){
			
				var item={
				'round' : '円形',
				'militia' : '民兵',
				'bengats' : 'ベンガッツ',
				'eccion' : 'エクシオン',
				'kyte' : 'カイト',
				
		};
				
		for (var i in item){
			var option=document.createElement('option')
			option.setAttribute('value',i);
			option.innerHTML=item[i];				
			
			select.appendChild(option);
		}
		
			}else if(character_class=="ranger" || character_class=="wiz"){
			
			
				var item={
				'dagger' : 'ダガー',
				'militia' : '民兵',
				'iron' : '鋼鉄',
				'pelin' : 'ペリン',
				
		};
				
		for (var i in item){
			var option=document.createElement('option')
			option.setAttribute('value',i);
			option.innerHTML=item[i];				
			
			select.appendChild(option);
		}
				
			}else if(character_class=="sorceress"){
			
				var item={
				'cule' : 'キュール',
				'militia' : '民兵',
				'herick' : 'リック',
				'juvle' : 'ジュヴル',
				'lick' : 'リック',
				
		};
				
		for (var i in item){
			var option=document.createElement('option')
			option.setAttribute('value',i);
			option.innerHTML=item[i];				
			
			select.appendChild(option);
		}
			
			}else if(character_class=="giant"){
			
				var item={
					'cloth' : '布',
					'militia' : '民兵',
					'seya' : 'セイヤ',
					'olos' : 'オロス',
					'teos' : 'テオス',
				
				};
				
		for (var i in item){
			var option=document.createElement('option')
			option.setAttribute('value',i);
			option.innerHTML=item[i];				
			
			select.appendChild(option);
		}
				
			}else if(character_class=="little_summoner"){
			
				var item={
					'normal' : '装身具',
					'asa' : '麻',
					'kaori' : '香り箱',
					'bag' : '寝袋',
					'long' : '長刀',
				
				};
				
		for (var i in item){
			var option=document.createElement('option')
			option.setAttribute('value',i);
			option.innerHTML=item[i];				
			
			select.appendChild(option);
		}
				
			}else if(character_class=="blader" || character_class=="tsubaki"){
			
				var item={
					'horn' : '角弓',
					'black' : '黒',
					'whitearm' : '白角軍',
					'white' : '白',
					'blackarm' : '黒角',
				
				};
				
		for (var i in item){
			var option=document.createElement('option')
			option.setAttribute('value',i);
			option.innerHTML=item[i];				
			
			select.appendChild(option);
		}
				
			}else{
				var item={
					'old' : '古い',
					'asa' : '麻',
					'militia' : '民兵',
					'quiter' : 'クイター',
					'esteeq' : 'エスティーク',
					'tade' : 'タデ',
				
				};
				
		for (var i in item){
			var option=document.createElement('option')
			option.setAttribute('value',i);
			option.innerHTML=item[i];				
			
			select.appendChild(option);
		}
				
			
			}
			
		var item={
					'clea' : 'クレア',
					'rosal' : 'ロサル',
					'nubel' : 'ヌーベル',
				
				};
				
		for (var i in item){
			var option=document.createElement('option')
			option.setAttribute('value',i);
			option.innerHTML=item[i];				
			
			select.appendChild(option);
		}
		
		

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
function force(){
	var force=$("[name=force]").prop("checked")
	if(force==true){
			document.getElementById("tatake").disabled=true;
			//成功するまで叩く必要はないので消去
	
	}else{
		document.getElementById("tatake").disabled=false;
			//はずしたら開放されるように
	}
}



function set_up(){
var RC=document.getElementById("senzai").getElementsByTagName("option");
		for(var i=RC.length-1; i>=0; -- i){
			var parent=RC[i].parentNode;
			parent.removeChild(RC[i]);
		}
	for(var i=0; i<16; i++){
		var elem=document.createElement("option")
		elem.value=i;
		elem.innerHTML=i;
		document.getElementById("senzai").appendChild(elem);
		
		}
	var select=document.getElementById("senzai");
	var elem_box={
		'16' : '真Ⅰ',
		'17' : '真Ⅱ',
		'18' : '真Ⅲ',
		'19' : '真Ⅳ',
		'20' : '真Ⅴ',
	};
				
		for (var k in elem_box){
			var elem=document.createElement("option")
			elem.setAttribute('value',k);
			elem.innerHTML=elem_box[k];				
			
			select.appendChild(elem);
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



	var data={
					'stack_data' : '0',
					'kyoukati_data' : '0',
					'count_data' : '0',
					'count_true_data' : '0',
					'senzai_data' : '0',
					'volcs_count_data' : '0',
					'taikyu_data' : '100',
					'memory_data' : '0',
					'same_data' : '0',
				
				};
				
		for (var i in data){
			var div=document.createElement('div')
			div.id=i;
			div.value=data[i];
			document.getElementById("data_store").appendChild(div);
		}

create_item();
	
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


