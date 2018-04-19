
function createform_Momi(){
	Momi_form.innerHTML='すでに終了した回数';
	var select0=document.createElement("select");
	select0.name="select0";
	select0.id="select0";
	select0.onchange=Momi_block;
	Momi_form.appendChild(select0);
	
	
		for(var i=0; i<11; i++){
			var option0=document.createElement("option");
			option0.value=i;
			option0.text=i;
		select0.appendChild(option0);
	
		}
	for(var k=1; k<11; k++){	

	var ol=document.createElement("ul");
	var Momi_list=document.getElementById("Momi_form");
	Momi_list.appendChild(ol);

	var li=document.createElement("li");
	ol.appendChild(li);

		var select1=document.createElement("select");
		select1.name="Kind_list"+k;
		select1.id="Kind_list"+k;
		select1.innerHTML="<option value='mujyaki'>"+"無邪気"+"</option>"+"<option value='goblin'>"+"ゴブリン"+"</option>"+"<option value='human'>"+"人間"+"</option>"+"<option value='giant'>"+"ジャイアント"+"</option>";

		var select2=document.createElement("select");
	
		select2.name="Toukyu_list"+k;
		select2.id="Toukyu_list"+k;
		select2.style="width:100px"
		select2.innerHTML="<option value='fake'>"+"ふぇいく"+"</option>"

		li.innerHTML='No.'+k+'<input type="text"style="width:40px" id="Momi_second" value="0">'+'分'+'<input type="text" style="width:40px" id="Momi_minute" value="0">'+'秒';
	

	var inputMin=document.getElementById("Momi_minute");
	var inputSec=document.getElementById("Momi_second");
	inputMin.id="Momi_minute"+k;
	inputSec.id="Momi_second"+k;
	inputMin.name="Momi_minute"+k;
	inputSec.name="Momi_second"+k;
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

}

