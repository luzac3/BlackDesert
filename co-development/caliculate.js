function repair(){
	var taikyu=$("#taikyu_data").val()
	//耐久をチェック
	var successive_repair=$("[name=successive_repair]").prop("checked")
	//連続修理を有効にしてあるかどうかチェック
	var repair_count=$("#max").val()
	//連続修理の設定耐久をチェック
	var memory=$("#memory_data").val();
	//データ領域から記憶データを読み出し
	var same=$("#same_data").val()
	//処理がおかしくなりそうなのでSameも一緒に読み出し
	if(successive_repair==true){
	//連続修理が有効な場合、オートリペアを呼び出す
		auto_repair(taikyu,repair_count);
	}else{
	//連続修理が有効でない場合
		var item=$("#item").val()
		//アイテムをチェック。回復量が違うので
		var repair=$("[name=repair]:checked").val()
		//耐久回復用アイテムのチェック
		if(repair=="memory" && item=="クザカ"){
		//記憶を選択
			taikyu++;
			memory++;
			//耐久と記憶の使用量をプラスして終了
		}else if(repair=="memory" && item=="リベルト"){
			var taikyu=taikyu+5;
			memory++;
		}else if(repair=="memory" && item !="リベルト"&& item!="クザカ"){
			var taikyu=taikyu+10;
			memory++;
		}else{
			var taikyu=taikyu+10;
			same++;
		}
	}
	if(taikyu>100){
		var taikyu=100;
		//耐久は100より大きくならない
	}
$("#taikyu_data").val(taikyu)
$("#memory_data").val(memory)
$("#same_data").val(same)
}
function auto_repair(taikyu,repair_count){
	var item=$("#item").val()
	//アイテムをチェック。回復量が違うので
	var repair=$("[name=repair]:checked").val()
	//耐久回復用アイテムのチェック
	var memory=$("#memory_data").val()
	//データ領域から記憶データを読み出し
	var same=$("#same_data").val()
	//処理がおかしくなりそうなのでSameも一緒に読み出し
	//定義しておかないと変数を認識しないよね
	if(repair=="memory" && item=="クザカ"){
		//記憶を選択
		while(taikyu<repair_count){
			taikyu++;
			memory++;
		}
	}else if(repair=="memory" && item=="リベルト"){
		while(taikyu<repair_count){
			var taikyu=taikyu+5;
			memory++;
		}
	}else if(repair=="memory" && item!="リベルト" && item!="クザカ"){
		while(taikyu<repair_count){
			var taikyu=taikyu+10;
			memory++;
		}
	}else{
		while(taikyu<repair_count){
			var taikyu=taikyu+10;
			same++;
		}
	}
	
	if(taikyu>100){
		var taikyu=100;
		//耐久は100より大きくならない
	}
$("#taikyu_data").val(taikyu)
$("#memory_data").val(memory)
$("#same_data").val(same)
}
function calculate(){

	var item_kind=$("[name=item_kind]:checked").val()
	//ラジオボタンのアイテム種類をチェック
	var character_class=$("#character_class").val()
	//キャラクタークラスをチェック
	var item=$("#item").val()
	//itemの名前をチェック(クザカなど)
	var stack=parseInt($("#stack_data").val())//スタック
	var taikyu=parseInt($("#taikyu_data").val())//耐久
	var auto_repair_v=$("[name=auto_repair]").prop("checked")
	//オートリペアのチェックを確認
	var successive_repair=$("[name=successive_repair]").prop("checked")
	//連続修理のチェックを確認
	var repair_count=parseInt($("#max").val())
	//連続修理の設定耐久をチェック
	var senzai=parseInt($("#senzai_data").val())
	//潜在値を確認
	var count=parseInt($("#count_data").val())
	var count_true=parseInt($("#count_true_data").val())
	//回数を記録
	
	var clon=$("[name=clon]").prop("checked")
	var force=$("[name=force]").prop("checked")
	var tatake=$("[name=tatake]").prop("checked")
	if ($("[id=vol]").prop("checked")){
		var vol=$("#vol").val()
	}
	//クロン石、成功するまで叩くの特殊部分チェック
	//強制突破には強制用関数を使用し、ブレイクする。
	
	while(taikyu>0){
		if(taikyu<repair_count && auto_repair_v==true && successive_repair==true){
			//オートリペアと連続修理の両方にチェックがあり、耐久が設定数値以下
			auto_repair(taikyu,repair_count);
			var taikyu=parseInt($("#taikyu_data").val())//耐久
		}else if(taikyu<20 && auto_repair_v==true && successive_repair==false){
			//オートリペアのみチェックされている。
			auto_repair(taikyu,20);
			var taikyu=parseInt($("#taikyu_data").val())//耐久
		}else if(taikyu>19){
			//何もしない
		}else{
			//オートリペアなし、耐久も20未満
			alert("耐久が低すぎます！修理してください")
			break;
			//強制停止
		}
		var count_inner=count+1;
		var count_true_inner=count_true+0;
		var stack_inner=stack+1;
		var taikyu_inner=taikyu-5;
		//内部値用の変数を用意。そうでないと毎回記録されてしまう。
		var through=0;
		var toppa=Math.random();
		var succesefull=1;
		//成功数値の設定。無印・強制は確定
		var low=0;
		var failed_alert=0;
		//低下用の内部数値。フラグに近い
		if(clon==true){
			//クロン石を使う場合、スタックは増えない
			var stack_inner=stack+0;
		}
		if(force==true && item_kind=="weapon" || force==true && item_kind=="sub_weapon"){
		
				if(senzai==7){
					var count_inner=count+2;
					var taikyu_inner=taikyu-10;
					var success="突破成功！　潜在7→8";
				}else if(senzai==8){
					var count_inner=count+3;
					var taikyu_inner=taikyu-20;
					var success="突破成功！　潜在8→9";
				}else if(senzai==9){
					var count_inner=count+5;
					var taikyu_inner=taikyu-30;
					var success="突破成功！　潜在9→10";
				}else if(senzai==10){
					var count_inner=count+7;
					var taikyu_inner=taikyu-40;
					var success="突破成功！　潜在10→11";
				}else if(senzai==11){
					var count_inner=count+11;
					var taikyu_inner=taikyu-50;
					var success="突破成功！　潜在11→12";
				}else if(senzai==12){
					var count_inner=count+17;
					var taikyu_inner=taikyu-60;
					var success="突破成功！　潜在12→13";
				}else if(senzai==13){
					var count_inner=count+27;
					var taikyu_inner=taikyu-70;
					var success="突破成功！　潜在13→14";
				}else if(senzai==14){
					var count_inner=count+29;
					var taikyu_inner=taikyu-100;
					var success="突破成功！　潜在14→15";
				}
			
		
		}else if (item_kind=="weapon" || item_kind=="sub_weapon"){
				//強化値が違うからね。ここで分岐させる
					if (senzai<7){
					var through=0;
					//特に条件はない
				}else if(senzai==7){
					//ここからが本番。確率論の世界
					var succesefull=(parseFloat(30)+parseFloat(3)*stack)/100;
					var success="突破成功！　潜在7→8";
				}else if(senzai==8){
					var succesefull=(parseFloat(20)+parseFloat(2)*stack)/100;
					var success="突破成功！　潜在8→9";
				}else if(senzai==9){
					var succesefull=(parseFloat(15)+parseFloat(1.5)*stack)/100;
					var success="突破成功！　潜在9→10";
				}else if(senzai==10){
					var succesefull=(parseFloat(12.5)+parseFloat(1.25)*stack)/100;
					var success="突破成功！　潜在10→11";
				}else if(senzai==11){
					var succesefull=(parseFloat(10)+parseFloat(0.75)*stack)/100;
					var success="突破成功！　潜在11→12";
				}else if(senzai==12){
					var succesefull=(parseFloat(7.5)+parseFloat(0.63)*stack)/100;
					var success="突破成功！　潜在12→13";
				}else if(senzai==13){
					var succesefull=(parseFloat(5)+parseFloat(0.5)*stack)/100;
					var success="突破成功！　潜在13→14";
				}else if(senzai==14){
					var succesefull=(parseFloat(2.5)+parseFloat(0.5)*stack)/100;
					var success="突破成功！　潜在14→15";
				}else if(senzai==15){
					//ここから真潜在突破
					var succesefull=(parseFloat(15)+parseFloat(1.5)*stack)/100;
					var success="突破成功！　潜在15→真Ⅰ";
					var count_inner=count+0;
					var count_trueinner=count_true+1;
					var taikyu_inner=taikyu-10;
					var stack_inner=stack+2;
					if(clon==true){
						//クロン石を使う場合、スタックは増えない
						var stack_inner=stack+0;
					}
				}else if(senzai==16){
					var succesefull=(parseFloat(7.5)+parseFloat(0.75)*stack)/100;
					var success="突破成功！　潜在真Ⅰ→真Ⅱ";
					var count_inner=count+0;
					var count_trueinner=count_true+1;
					var taikyu_inner=taikyu-10;
					var stack_inner=stack+3;
					if(clon==true){
						//クロン石を使う場合、スタックは増えない
						var stack_inner=stack+0;
					}
				}else if(senzai==17){
					var succesefull=(parseFloat(5)+parseFloat(0.5)*stack)/100;
					var success="突破成功！　潜在真Ⅱ→真Ⅲ";
					var count_inner=count+0;
					var count_trueinner=count_true+1;
					var taikyu_inner=taikyu-10;
					var stack_inner=stack+4;
					var through=failed_alert=1;
					if(clon==true){
						//クロン石を使う場合、スタックは増えない
						var stack_inner=stack+0;
						var failed="突破失敗・・・　(潜在力は低下しません)";
					}else{
						var failed="突破失敗・・・　潜在力低下　真Ⅱ→真Ⅰ";
						//失敗時一時停止と失敗アラートの表示
						var low=1;
					}
				}else if(senzai==18){
					var succesefull=(parseFloat(2.5)+parseFloat(0.25)*stack)/100;
					var success="突破成功！　潜在真Ⅲ→真Ⅳ";
					var count_inner=count+0;
					var count_trueinner=count_true+1;
					var taikyu_inner=taikyu-10;
					var stack_inner=stack+5;
					var through=failed_alert=1;
					if(clon==true){
						//クロン石を使う場合、スタックは増えない
						var stack_inner=stack+0;
						var failed="突破失敗・・・　(潜在力は低下しません)";
						//失敗時一時停止と失敗アラートの表示
					}else{
						var failed="突破失敗・・・　潜在力低下　真Ⅲ→真Ⅱ";
						//失敗時一時停止と失敗アラートの表示
						var low=1;
					}
				}else if(senzai==19){
					var succesefull=(parseFloat(1.5)+parseFloat(0.15)*stack)/100;
					var success="突破成功！　潜在真Ⅲ→真Ⅳ";
					var count_inner=count+0;
					var count_trueinner=count_true+1;
					var taikyu_inner=taikyu-10;
					var stack_inner=stack+6;
					var through=failed_alert=1;
					
					//失敗時一時停止と失敗アラートの表示
					if(clon==true){
						//クロン石を使う場合、スタックは増えない
						var stack_inner=stack+0;
						var failed="突破失敗・・・　(潜在力は低下しません)";
						//失敗時一時停止と失敗アラートの表示
					}else{
						var failed="突破失敗・・・　潜在力低下　真Ⅳ→真Ⅲ";
						var low=1;
					}
				}else{
					alert("真Ⅴでも満足できんのか！これ以上は無理だ！アキラメロン！")
					break;
				
				}
		}else if(item_kind!="weapon" && item_kind!="sub_weapon" && force==true){
				if(senzai==5){
					var count_inner=count+2;
					var taikyu_inner=taikyu-10;
					var success="突破成功！　潜在5→6";
				}else if(senzai==6){
					var count_inner=count+3;
					var taikyu_inner=taikyu-10;
					var success="突破成功！　潜在7→8";
				}else if(senzai==7){
					var count_inner=count+4;
					var taikyu_inner=taikyu-10;
					var success="突破成功！　潜在7→8";
				}else if(senzai==8){
					var count_inner=count+5;
					var taikyu_inner=taikyu-20;
					var success="突破成功！　潜在7→8";
				}else if(senzai==9){
					var count_inner=count+7;
					var taikyu_inner=taikyu-30;
					var success="突破成功！　潜在9→10";
				}else if(senzai==10){
					var count_inner=count+9;
					var taikyu_inner=taikyu-40;
					var success="突破成功！　潜在10→11";
				}else if(senzai==11){
					var count_inner=count+11;
					var taikyu_inner=taikyu-50;
					var success="突破成功！　潜在11→12";
				}else if(senzai==12){
					var count_inner=count+17;
					var taikyu_inner=taikyu-60;
					var success="突破成功！　潜在12→13";
				}else if(senzai==13){
					var count_inner=count+23;
					var taikyu_inner=taikyu-70;
					var success="突破成功！　潜在13→14";
				}else if(senzai==14){
					var count_inner=count+29;
					var taikyu_inner=taikyu-100;
					var success="突破成功！　潜在14→15";
				}
				
			
		}else{
				if (senzai<5){
					var through=0;
					//特に条件はない
				}else if(senzai==5){
					//ここからが本番。確率論の世界
					var succesefull=(parseFloat(50)+parseFloat(5)*stack)/100;
					var success="突破成功！　潜在5→6";
				}else if(senzai==6){
					var succesefull=(parseFloat(40)+parseFloat(4)*stack)/100;
					var success="突破成功！　潜在7→8";
				}else if(senzai==7){
					//ここからが本番。確率論の世界
					var succesefull=(parseFloat(30)+parseFloat(3)*stack)/100;
					var success="突破成功！　潜在7→8";
				}else if(senzai==8){
					var succesefull=(parseFloat(20)+parseFloat(2)*stack)/100;
					var success="突破成功！　潜在8→9";
				}else if(senzai==9){
					var succesefull=(parseFloat(15)+parseFloat(1.5)*stack)/100;
					var success="突破成功！　潜在9→10";
				}else if(senzai==10){
					var succesefull=(parseFloat(12.5)+parseFloat(1.25)*stack)/100;
					var success="突破成功！　潜在10→11";
				}else if(senzai==11){
					var succesefull=(parseFloat(10)+parseFloat(0.75)*stack)/100;
					var success="突破成功！　潜在11→12";
				}else if(senzai==12){
					var succesefull=(parseFloat(7.5)+parseFloat(0.63)*stack)/100;
					var success="突破成功！　潜在12→13";
				}else if(senzai==13){
					var succesefull=(parseFloat(5)+parseFloat(0.5)*stack)/100;
					var success="突破成功！　潜在13→14";
				}else if(senzai==14){
					var succesefull=(parseFloat(2.5)+parseFloat(0.5)*stack)/100;
					var success="突破成功！　潜在14→15";
				}else if(senzai==15){
					//ここから真潜在突破
					var succesefull=(parseFloat(15)+parseFloat(1.5)*stack)/100;
					var success="突破成功！　潜在15→真Ⅰ";
					var count_inner=count+0;
					var count_trueinner=count_true+1;
					var taikyu_inner=taikyu-10;
					var stack_inner=stack+2;
					if(clon==true){
						//クロン石を使う場合、スタックは増えない
						var stack_inner=stack+0;
					}
				}else if(senzai==16){
					var succesefull=(parseFloat(7.5)+parseFloat(0.75)*stack)/100;
					var success="突破成功！　潜在真Ⅰ→真Ⅱ";
					var count_inner=count+0;
					var count_trueinner=count_true+1;
					var taikyu_inner=taikyu-10;
					var stack_inner=stack+3;
					if(clon==true){
						//クロン石を使う場合、スタックは増えない
						var stack_inner=stack+0;
					}
				}else if(senzai==17){
					var succesefull=(parseFloat(5)+parseFloat(0.5)*stack)/100;
					var success="突破成功！　潜在真Ⅱ→真Ⅲ";
					var count_inner=count+0;
					var count_trueinner=count_true+1;
					var taikyu_inner=taikyu-10;
					var stack_inner=stack+4;
					var through=failed_alert=1;
					if(clon==true){
						//クロン石を使う場合、スタックは増えない
						var stack_inner=stack+0;
						var failed="突破失敗・・・　(潜在力は低下しません)";
					}else{
						var failed="突破失敗・・・　潜在力低下　真Ⅱ→真Ⅰ";
						//失敗時一時停止と失敗アラートの表示
						var low=1;
					}
				}else if(senzai==18){
					var succesefull=(parseFloat(2.5)+parseFloat(0.25)*stack)/100;
					var success="突破成功！　潜在真Ⅲ→真Ⅳ";
					var count_inner=count+0;
					var count_trueinner=count_true+1;
					var taikyu_inner=taikyu-10;
					var stack_inner=stack+5;
					var through=failed_alert=1;
					if(clon==true){
						//クロン石を使う場合、スタックは増えない
						var stack_inner=stack+0;
						var failed="突破失敗・・・　(潜在力は低下しません)";
						//失敗時一時停止と失敗アラートの表示
					}else{
						var failed="突破失敗・・・　潜在力低下　真Ⅲ→真Ⅱ";
						//失敗時一時停止と失敗アラートの表示
						var low=1;
					}
				}else if(senzai==19){
					var succesefull=(parseFloat(1.5)+parseFloat(0.15)*stack)/100;
					var success="突破成功！　潜在真Ⅲ→真Ⅳ";
					var count_inner=count+0;
					var count_trueinner=count_true+1;
					var taikyu_inner=taikyu-10;
					var stack_inner=stack+6;
					var through=failed_alert=1;
					
					//失敗時一時停止と失敗アラートの表示
					if(clon==true){
						//クロン石を使う場合、スタックは増えない
						var stack_inner=stack+0;
						var failed="突破失敗・・・　(潜在力は低下しません)";
						//失敗時一時停止と失敗アラートの表示
					}else{
						var failed="突破失敗・・・　潜在力低下　真Ⅳ→真Ⅲ";
						var low=1;
					}
				}else{
					alert("真Ⅴでも満足できんのか！これ以上は無理だ！アキラメロン！")
					break;
				}
			
		}
		if(0>taikyu_inner){
				alert("耐久が低すぎます！修理してください(あと"+taikyu_inner*-1+"必要です)")
				break;
				//強制停止
			
			}
		if(toppa<succesefull){//実際の計算
							
			clicked(through);
			if(senzai<6){
				//アラートなし
			}else if(senzai<7 && item_kind=="weapon" || senzai<8 && item_kind=="sub_weapon"){
				//アラートなし
			}else{
				alert(success);
				var stack=0;
			}
			var count=count_inner;
			//普通
			var count_true=count_true_inner;
			//真の場合
			senzai++;
			
		}else{
			clicked(through);
			//普通
			var count=count_inner;
			//普通
			var count_true=count_true_inner;
			//真の場合
			var taikyu=taikyu_inner;
			var stack=stack_inner;
			if(failed_alert==1){
				alert(failed);
			}
			if (low==1){
				senzai--;
			
			}
		
		}
		$("#stack_data").val(stack)
		$("#taikyu_data").val(taikyu)
		$("#senzai_data").val(senzai)
		$("#count_data").val(count)
		$("#coutn_true_data").val(count_true)
		//スタックと耐久を記録
			
	result();
	//表示を適応する
	
		if(tatake==false){//叩き続けるのでなければループを抜ける
			break;
		}else if(tatake==true && toppa<succesefull){
			break;
		}
	}

}

function btnDisable(){ //①
  document.getElementById("toppa").disabled = true;
  clearInterval(statusDis);
}

function btnAble(){  //②
  document.getElementById("toppa").disabled = false;
  clearInterval(statusAble);
}


function clicked(through){ //① + ②
	var nofreeze=$("[name=freeze]").prop("checked")
	//一時停止しない場合、処理せず戻る
	if (nofreeze==true || through==0){
		//何もしない
	}else{
 		 statusDis  = setInterval(btnDisable , 1); //ボタンを押した直後に①を呼び出し
 		 statusAble = setInterval(btnAble , 1000); //ボタンを押して三秒後に②を呼び出し
 	}
}

function syokisenzai(){
	senzai=parseFloat($("#senzai").val());
}


