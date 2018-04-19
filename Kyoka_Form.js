function createform_Kyoka(){
	Kyoka_form.innerHTML='すでに終了した回数';
	var select0=document.createElement("select");
	select0.name="select01";
	select0.id="select01";
	select0.onchange=Kyoka_block;
	Kyoka_form.appendChild(select0);
		for(var k=0; k<2; k++){
			var option0=document.createElement("option");
			option0.value=k;
			option0.text=k;
			select0.appendChild(option0);
		}

	var ol=document.createElement("ul");
	var Kyoka_list=document.getElementById("Kyoka_form");
	Kyoka_list.appendChild(ol);

	var li=document.createElement("li");
	ol.appendChild(li);

		var k=0;
		
		var select1=document.createElement("select");
		select1.name="Kind_list"+k;
		select1.id="Kind_list"+k;
		select1.innerHTML="<option value='mujyaki'>"+"無邪気"+"</option>"+"<option value='goblin'>"+"ゴブリン"+"</option>"+"<option value='human'>"+"人間"+"</option>"+"<option value='giant'>"+"ジャイアント"+"</option>";

		var select2=document.createElement("select");
	
		select2.name="Toukyu_list"+k;
		select2.id="Toukyu_list"+k;
		select2.style="width:100px"
		select2.innerHTML="<option value='fake'>"+"ふぇいく"+"</option>"

		li.innerHTML='No.'+k+'<input type="text"style="width:40px" id="second" value="0">'+'分'+'<input type="text" style="width:40px" id="minute" value="0">'+'秒';
	

	var inputMin=document.getElementById("minute");
	var inputSec=document.getElementById("second");
	inputMin.id="minute"+k;
	inputSec.id="second"+k;
	inputMin.name="minute"+k;
	inputSec.name="second"+k;
	li.insertBefore(select1,inputSec);
	li.insertBefore(select2,inputSec);

		var select3=document.createElement("select");
		li.appendChild(select3);
		select3.name="AP"+k;
		select3.id="AP"+k;

	select1.onchange=function(){List_set(this)};
	select2.onchange=function(){List_set2(this)};
	
	first_list(k);

}

function Kyoka_block(){
var count=parseInt(document.getElementById("select01").value);

		var Kind0=document.getElementById("Kind_list0");
		var Toukyu0=document.getElementById("Toukyu_list0");
		var AP0=document.getElementById("AP0");
		var inputMin0=document.getElementById("minute0");
		var inputSec0=document.getElementById("second0");

		if(count==0){
		Kind0.disabled=false;
		Toukyu0.disabled=false;
		AP0.disabled=false;
		inputMin0.disabled=false;
		inputSec0.disabled=false;
		
		}else{
		Kind0.disabled=true;
		Toukyu0.disabled=true;
		AP0.disabled=true;
		inputMin0.disabled=true;
		inputSec0.disabled=true;
		}
}

function Kyoka_culculate(){
	function Kyoka_close(){
	var K0t=parseInt(document.getElementById("second0").value)*60+parseInt(document.getElementById("minute0").value);

	Kyoka_Final_time=K0t;

var KFh=Math.floor(K0t/3600);
var KFs = Math.floor((K0t-KFh*3600)/60);
var KFm = Math.floor((K0t-KFh*3600)%60);

	Final_Kyoka_Kind=document.getElementById("Kind_list0").options[document.getElementById("Kind_list0").selectedIndex].text;
	Final_Kyoka_Toukyu=document.getElementById("Toukyu_list0").options[document.getElementById("Toukyu_list0").selectedIndex].text;
	
if(KFs==0 && KFm==0){
alert("許可証が製作されていません！")
		
}else if(KFh<=0){
document.getElementById("Alpha").innerHTML=("かかる時間は"+KFs+"分"+KFm+"秒です");
}else {
document.getElementById("Alpha").innerHTML=("かかる時間は"+KFh+"時間"+KFs+"分"+KFm+"秒です");
}

	}
	Kyoka_close();
}		