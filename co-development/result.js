function result(){
	var item_kind=$("[name=item_kind]:checked").val()
	//ラジオボタンのアイテム種類をチェック
	var character_class=$("#character_class").val()
	//キャラクタークラスをチェック
	var item=$("#item option:selected").text();
	//itemの名前をチェック(クザカなど)
		var stack=$("#stack_data").val()
		var taikyu=$("#taikyu_data").val()
		var senzai=$("#senzai_data").val()
		var count=$("#count_data").val()
		var count_true=$("#count_true_data").val()
		var memory=$("#memory_data").val()
		var vol=$("#volcs_count_data").val()
		var same=$("#same_data").val()
	if(senzai<6 || item_kind=="weapon" && senzai<8 || item_kind=="sub_weapon" && senzai<8){
		document.getElementById("force").disabled=true;
			//強制突破できるように
	}else{
		document.getElementById("force").disabled=false;
	
	}
		//ここから下、値段入力位置
			var bs_ds=270000;
			var bs_ds_c=[bs_ds].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
			var bs_dts=3500000;
			var bs_dts_c=[bs_dts].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
			var bs_ws=27000;
			var bs_ws_c=[bs_ws].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
			var bs_wts=7800000;
			var bs_wts_c=[bs_wts].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
			var memory_s=750000;
			var memory_s_c=[bs_ds].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
			var same_s=0;//未実装です。なんか考える
			//このまま計算してうまくいくわけがないので、合計値を別に関数インしてください
		
			var bs_ds_all=0;
			var bs_dts_all=0;
			var bs_ws_all=0;
			var bs_wts_all=0;
			var memory_s_all=0;
			//とりあえず全部0にしておく。
		//ここまで
		
		//各種データを読み込み
		if(senzai==0){
			var senzai_appear="";
		}else if(senzai<6 || item_kind=="weapon" && senzai<8 || item_kind=="sub_weapon" && senzai<8){
			var senzai_appear="＋"+senzai;
			document.getElementById("force").disabled=true;
			//強制突破できないように
		}else if(senzai==15){
			var senzai_appear="＋"+senzai;
			document.getElementById("force").disabled=true;
			//強制突破できないように
			document.getElementById("tatake").disabled=false;
			//成功するまで叩くのは可能に
		}else if(senzai==16){
			var senzai_appear="真Ⅰ";
			document.getElementById("force").disabled=true;
			//強制突破できないように
			document.getElementById("tatake").disabled=false;
			//成功するまで叩くのは可能に
		}else if(senzai==17){
			var senzai_appear="真Ⅱ";
			document.getElementById("force").disabled=true;
			//強制突破できないように
			document.getElementById("tatake").disabled=true;
			//成功するまで叩くのは失敗した後おかしくなるので不可に
		}else if(senzai==18){
			var senzai_appear="真Ⅲ";
			document.getElementById("force").disabled=true;
			//強制突破できないように
			document.getElementById("tatake").disabled=true;
			//成功するまで叩くのは失敗した後おかしくなるので不可に
		}else if(senzai==19){
			var senzai_appear="真Ⅳ";
			document.getElementById("force").disabled=true;
			//強制突破できないように
			document.getElementById("tatake").disabled=true;
			//成功するまで叩くのは失敗した後おかしくなるので不可に
		}else if(senzai==20){
			var senzai_appear="真Ⅴ";
			document.getElementById("force").disabled=true;
			//強制突破できないように
			document.getElementById("tatake").disabled=true;
			//成功するまで叩くのは失敗した後おかしくなるので不可に
		}else{
			var senzai_appear="＋"+senzai;
			document.getElementById("force").disabled=false;
			document.getElementById("tatake").disabled=false;
			//どちらも開放
		}
		document.getElementById("result_stack").innerHTML="現在のスタック数："+stack;
		document.getElementById("result_taikyu").innerHTML="耐久値："+taikyu+"/100";
		
	
	if(item_kind=="weapon"){
	//武器の場合、アイテムは固定、＋キャラクタークラスごとの武器名で表示
		if(character_class=="warrior" || character_class=="valkyrie"){
			document.getElementById("item_name").innerHTML=senzai_appear+item+"ソード";
		}else if(character_class=="ranger"){
				document.getElementById("item_name").innerHTML=senzai_appear+item+"ロングボウ";
		}else if(character_class=="sorceress"){
			document.getElementById("item_name").innerHTML=senzai_appear+item+"護符";
		}else if(character_class=="giant"){
			document.getElementById("item_name").innerHTML=senzai_appear+item+"アックス";
		}else if(character_class=="little_summoner" || character_class=="kunoichi" || character_class=="ninja"){
			
				document.getElementById("item_name").innerHTML=senzai_appear+item+"小剣";
		}else if(character_class=="blader" || character_class=="tsubaki"){
				document.getElementById("item_name").innerHTML=senzai_appear+item+"刀剣";
		}else if(character_class=="wiz"){
				document.getElementById("item_name").innerHTML=senzai_appear+item+"スタッフ";
		}
		var bs_ws_all=bs_ws*count;
		var bs_wts_all=bs_wts*count_true;
		var bs_ws_all_c=[bs_ws_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		var bs_wts_all_c=[bs_wts_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		document.getElementById("bs_w").innerHTML="消費した武器石("+bs_ws_c+")："+count+"個="+bs_ws_all_c+"S";
		document.getElementById("bs_tw").innerHTML="消費した真武器石("+bs_wts_c+")："+count_true+"個="+bs_wts_all_c+"S";
		
	
	}else if(item_kind=="sub_weapon"){
		if(character_class=="warrior" || character_class=="valkyrie"){
			if(item=="円形" ||item=="民兵"){
				document.getElementById("item_name").innerHTML=senzai_appear+item+"の盾";
			}else{
				document.getElementById("item_name").innerHTML=senzai_appear+item+"シールド";
			}
		}else if(character_class=="ranger" || character_class=="wiz"){
			if(item=="ダガー"){
				document.getElementById("item_name").innerHTML=senzai_appear+item+"";
			}else{
				document.getElementById("item_name").innerHTML=senzai_appear+item+"ダガー";
			}
		}else if(character_class=="sorceress"){
			document.getElementById("item_name").innerHTML=senzai_appear+item+"タリスマン";
		}else if(character_class=="giant"){
			document.getElementById("item_name").innerHTML=senzai_appear+item+"組み糸飾り";
		}else if(character_class=="little_summoner"){
			if(item=="装身具"){
				document.getElementById("item_name").innerHTML=senzai_appear+item+"";
			}else{
				document.getElementById("item_name").innerHTML=senzai_appear+item+"装身具";
			}
		}else if(character_class=="blader" || character_class=="tsubaki"){
			if(item=="クレア"){
				document.getElementById("item_name").innerHTML=senzai_appear+item+"軍弓";
			}else{
				document.getElementById("item_name").innerHTML=senzai_appear+item+"弓";
			}
		}else if(character_class=="kunoichi" || character_class=="ninja"){
			
				document.getElementById("item_name").innerHTML=senzai_appear+item+"苦無/手裏剣";
		}
		
		var bs_ws_all=bs_ws*count;
		var bs_wts_all=bs_wts*count_true;
		var bs_ws_all_c=[bs_ws_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		var bs_wts_all_c=[bs_wts_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		document.getElementById("bs_w").innerHTML="消費した武器石("+bs_ws_c+")："+count+"個="+bs_ws_all_c+"S";
		document.getElementById("bs_tw").innerHTML="消費した真武器石("+bs_wts_c+")："+count_true+"個="+bs_wts_all_c+"S";
	
	}else if(item_kind=="helm"){
		if(item=="フィーボ"){
			document.getElementById("item_name").innerHTML=senzai_appear+"フィーボのスタミナヘルム";
		}else if(item=="フォルトゥーナ"){
			document.getElementById("item_name").innerHTML=senzai_appear+"フォルトゥーナの幸運ヘルム";
		}else if(item=="ヘラクレス"){
			document.getElementById("item_name").innerHTML=senzai_appear+"ヘラクレスのオーラヘルム";
		}else if(item=="ギアス"){
			document.getElementById("item_name").innerHTML=senzai_appear+"ギアスのヘルム";
		}else{
			document.getElementById("item_name").innerHTML=senzai_appear+item+"ヘルム";
		}
		var bs_ds_all=bs_ds*count;
		var bs_dts_all=bs_dts*count_true;
		var bs_ds_all_c=[bs_ws_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		var bs_dts_all_c=[bs_wts_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		document.getElementById("bs_d").innerHTML="消費した防具石("+bs_ds_c+")："+count+"個="+bs_ds_all_c+"S";
		document.getElementById("bs_td").innerHTML="消費した真防具石("+bs_dts_c+")："+count_true+"個="+bs_dts_all_c+"S";
	}else if(item_kind=="armour"){
		if(item=="フィーボ"){
			document.getElementById("item_name").innerHTML=senzai_appear+"フィーボのスタミナアーマー";
		}else if(item=="フォルトゥーナ"){
			document.getElementById("item_name").innerHTML=senzai_appear+"フォルトゥーナの幸運アーマー";
		}else if(item=="ヘラクレス"){
			document.getElementById("item_name").innerHTML=senzai_appear+"ヘラクレスのオーラアーマー";
		}else if(item=="レッドノーズ"){
			document.getElementById("item_name").innerHTML=senzai_appear+"レッドノーズのアーマー";
		}else if(item=="愚鈍な木の精霊"){
			document.getElementById("item_name").innerHTML=senzai_appear+"愚鈍な木の精霊の鎧";
		}else{
			document.getElementById("item_name").innerHTML=senzai_appear+item+"アーマー";
		}
		
		var bs_ds_all=bs_ds*count;
		var bs_dts_all=bs_dts*count;
		var bs_ds_all_c=[bs_ws_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		var bs_dts_all_c=[bs_wts_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		document.getElementById("bs_d").innerHTML="消費した防具石("+bs_ds_c+")："+count+"個="+bs_ds_all_c*+"S";
		document.getElementById("bs_td").innerHTML="消費した真防具石("+bs_dts_c+")："+count_true+"個="+bs_dts_all_c+"S";
	}else if(item_kind=="globe"){
		if(item=="フィーボ"){
			document.getElementById("item_name").innerHTML=senzai_appear+"フィーボのスタミナグローブ";
		}else if(item=="フォルトゥーナ"){
			document.getElementById("item_name").innerHTML=senzai_appear+"フォルトゥーナの幸運グローブ";
		}else if(item=="ヘラクレス"){
			document.getElementById("item_name").innerHTML=senzai_appear+"ヘラクレスのオーラグローブ";
		}else if(item=="ベグ"){
			document.getElementById("item_name").innerHTML=senzai_appear+"ベグのグローブ";
		}else{
			document.getElementById("item_name").innerHTML=senzai_appear+item+"グローブ";
		}
		var bs_ds_all=bs_ds*count;
		var bs_dts_all=bs_dts*count_true;
		var bs_ds_all_c=[bs_ws_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		var bs_dts_all_c=[bs_wts_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		document.getElementById("bs_d").innerHTML="消費した防具石("+bs_ds_c+")："+count+"個="+bs_ds_all_c+"S";
		document.getElementById("bs_td").innerHTML="消費した真防具石("+bs_dts_c+")："+count_true+"個="+bs_dts_all_c+"S";
	}else if(item_kind=="shoose"){
		if(item=="フィーボ"){
			document.getElementById("item_name").innerHTML=senzai_appear+"フィーボのスタミナシューズ";
		}else if(item=="フォルトゥーナ"){
			document.getElementById("item_name").innerHTML=senzai_appear+"フォルトゥーナの幸運シューズ";
		}else if(item=="ヘラクレス"){
			document.getElementById("item_name").innerHTML=senzai_appear+"ヘラクレスのオーラシューズ";
		}else if(item=="マスカン"){
			document.getElementById("item_name").innerHTML=senzai_appear+"マスカンのシューズ";
		}else{
			document.getElementById("item_name").innerHTML=senzai_appear+item+"シューズ";
		}
		var bs_ds_all=bs_ds*count;
		var bs_dts_all=bs_dts*count_true;
		var bs_ds_all_c=[bs_ws_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		var bs_dts_all_c=[bs_wts_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		document.getElementById("bs_d").innerHTML="消費した防具石("+bs_ds_c+")："+count+"個="+bs_ds_all_c+"S";
		document.getElementById("bs_td").innerHTML="消費した真防具石("+bs_dts_c+")："+count_true+"個="+bs_dts_all_c+"S";
	}
	var memory_s_all=memory_s*memory;
	var all_silver=bs_ds_all+bs_dts_all+bs_ws_all+bs_wts_all+memory_s_all;
	var all_silver_c=[all_silver].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
	var sale=all_silver*0.7;
	var sale_c=[sale].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
	var plemium=sale*1.25;
	var plemium_c=[plemium].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
	
	document.getElementById("used_memory").innerHTML="消費した記憶の欠片("+memory_s+")："+memory+"="+memory_s_all+"S";
	document.getElementById("used_vol").innerHTML="消費したヴォルクスの叫び："+vol;
	document.getElementById("used_same").innerHTML="消費した同種アイテム"+same;
	document.getElementById("all_silver").innerHTML="総額："+all_silver_c+"S";
	document.getElementById("sale").innerHTML="拾ったアイテムを売っていたら："+sale_c+"S";
	document.getElementById("plemium").innerHTML="プレパケ適用で："+plemium_c+"S";
	

}


