function createform_Momi(){
	Momi_form.innerHTML='すでに終了した回数';
	var select0=document.createElement("select");
	select0.name="select02";
	select0.id="select02";
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

}



function Momi_block(){
var count=document.getElementById("select02").value;
		for(var k=1; k<11; k++){


			eval("var Kind"+k+"=document.getElementById('Kind_list'+"+k+");");
			eval("var Toukyu"+k+"=document.getElementById('Toukyu_list'+"+k+");");
			eval("var AP"+k+"=document.getElementById('AP'+"+k+");");
			eval("var inputMin"+k+"=document.getElementById('minute'+"+k+");");
			eval("var inputSec"+k+"=document.getElementById('second'+"+k+");");
		}
		for(var i=1; i<11-count; i++){
			eval("Kind"+i+".disabled=false;");
			eval("Toukyu"+i+".disabled=false;");
			eval("AP"+i+".disabled=false;");
			eval("inputMin"+i+".disabled=false;");
			eval("inputSec"+i+".disabled=false;");		
		}		
	
		for(var i=11-count; i<11; i++){
			eval("Kind"+i+".disabled=true;");
			eval("Toukyu"+i+".disabled=true;");
			eval("AP"+i+".disabled=true;");
			eval("inputMin"+i+".disabled=true;");
			eval("inputSec"+i+".disabled=true;");
		
		}




}


function Momi_culculate(){


for (var i=1; i<11; i++){
	
	eval("var M"+i+"t= eval(\"parseInt(document.getElementById('second'+\"+i+\").value)\")*60+eval(\"parseInt(document.getElementById('minute'+\"+i+\").value);\");");
	eval('var AP'+i+ '=parseInt(document.getElementById("AP"+'+i+').value);');
	eval("var M"+i+"c=0;");
	eval("var M"+i+"t_cst=M"+i+"t;");
	//直接加算するとまずいので、要素をカウント用と分離。

		
}
var Momi_count=0;
var first_count=parseInt(document.getElementById("select02").value);


var array=[M1t_cst,M2t_cst,M3t_cst,M4t_cst,M5t_cst,M6t_cst,M7t_cst,M8t_cst,M9t_cst,M10t_cst]
while(Momi_count<10){
var min=undefined;

for (var i=0,l=array.length; i<l; i++){
	var n=array[i]
	if(n !=0 && n !=null && !isNaN(n)){
		if (min){
			min=Math.min(min,n);
		}else{
			min=n;
		}
	}
}

if(M1t !=0 && M1t !=null && !isNaN(M1t) && M1c<1){var M1c=1;}
if(M2t !=0 && M2t !=null && !isNaN(M2t) && M2c<1){var M2c=1;}
if(M3t !=0 && M3t !=null && !isNaN(M3t) && M3c<1){var M3c=1;}
if(M4t !=0 && M4t !=null && !isNaN(M4t) && M4c<1){var M4c=1;}
if(M5t !=0 && M5t !=null && !isNaN(M5t) && M5c<1){var M5c=1;}
if(M6t !=0 && M6t !=null && !isNaN(M6t) && M6c<1){var M6c=1;}
if(M7t !=0 && M7t !=null && !isNaN(M7t) && M7c<1){var M7c=1;}
if(M8t !=0 && M8t !=null && !isNaN(M8t) && M8c<1){var M8c=1;}
if(M9t !=0 && M9t !=null && !isNaN(M9t) && M9c<1){var M9c=1;}
if(M10t !=0 && M10t !=null && !isNaN(M10t) && M10c<1){var M10c=1;}

if(M1c+M2c+M3c+M4c+M5c+M6c+M7c+M8c+M9c+M10c+first_count >=10){break;}

	if(min==M1t_cst){

		if(M1c==AP1){
			array[0]=0;
		}else{
			M1c++;
			var M1t_cst = M1t*M1c;
			array[0]=M1t_cst;
		}

	}else if(min==M2t_cst){
		if(M2c==AP2){
			array[1]=0;
		}else{
			M2c++;
			var M2t_cst = M2t*M2c;
			array[1]=M2t_cst;
		}

	}else if(min==M3t_cst){
		if(M3c==AP3){
			array[2]=0;
		}else{
			M3c++;
			var M3t_cst = M3t*M3c;
			array[2]=M3t_cst;
		}
	}else if(min==M4t_cst){
		if(M4c==AP4){
			array[3]="null";
		}else{
			M4c++;
			var M4t_cst = M4t*M4c;
			array[3]=M4t_cst;
		}
	}else if(min==M5t_cst){
		if(M5c==AP5){
			array[4]=0;
		}else{
			M5c++;
			var M5t_cst = M5t*M5c;
			array[4]=M5t_cst;
		}
	}else if(min==M6t_cst){
		if(M6c==AP6){
			array[5]=0;
		}else{
			M6c++;
			var M6t_cst = M6t*M6c;
			array[5]=M6t_cst;
		}
	}else if(min==M7t_cst){
		if(M7c==AP7){
			array[6]=0;
		}else{
			M7c++;
			var M7t_cst = M7t*M7c;
			array[6]=M7t_cst;
		}
	}else if(min==M8t_cst){
		if(M8c==AP8){
			array[7]=0;
		}else{
			M8c++;
			var M8t_cst = M8t*M8c;
			array[7]=M7t_cst;
		}
	}else if(min==M9t_cst){
		if(M9c==AP9){
			array[8]=0;
		}else{
			M9c++;
			var M9t_cst = M9t*M9c;
			array[8]=M9t_cst;
		}
	}else if(min==M10t_cst){
		if(M10c==AP10){
			array[9]=0;
		}else{
			M10c++;
			var M10t_cst = M10t*M10c;
			aray[9]=M10t_cst;
		}
	}else{
		
		break;	
	
	}
	var Momi_count=M1c+M2c+M3c+M4c+M5c+M6c+M7c+M8c+M9c+M10c+first_count;
}


if(Momi_count != 10){
	var MC=10-Momi_count;
	alert("梱包材の製作が完了していません！　あと"+MC+"回");
	}

var array=[M1t_cst,M2t_cst,M3t_cst,M4t_cst,M5t_cst,M6t_cst,M7t_cst,M8t_cst,M9t_cst,M10t_cst]
var Momi_F_t;
for (var i=0,l=array.length; i<l; i++){
	var n2=array[i]
	if(n2 !=0 && n2 !=null && !isNaN(n2)){
		if (Momi_F_t){
			Momi_F_t=Math.max(Momi_F_t,n2);
		}else{
			Momi_F_t=n2;
		}
	}
}

Momi_Final_time=Momi_F_t;
Momi_Final_count = Math.max(M1c,M2c,M3c,M4c,M5c,M6c,M7c,M8c,M9c,M10c);
Momi_Fhour = Math.floor(Momi_F_t/3600);
Momi_Fsecond = Math.floor((Momi_F_t-Momi_Fhour*3600)/60);
Momi_Fminute = Math.floor((Momi_F_t-Momi_Fhour*3600)%60);

if (Momi_F_t==M1t_cst){
	Final_Momi_Kind=document.getElementById("Kind_list1").options[document.getElementById("Kind_list1").selectedIndex].text;
	Final_Momi_Toukyu=document.getElementById("Toukyu_list1").options[document.getElementById("Toukyu_list1").selectedIndex].text;
	Last_Momi_number=1
}else if(Momi_F_t==M2t_cst){
	Final_Momi_Kind=document.getElementById("Kind_list2").options[document.getElementById("Kind_list2").selectedIndex].text;
	Final_Momi_Toukyu=document.getElementById("Toukyu_list2").options[document.getElementById("Toukyu_list2").selectedIndex].text;
	Last_Momi_number=2
}else if(Momi_F_t==M3t_cst){
	Final_Momi_Kind=document.getElementById("Kind_list3").options[document.getElementById("Kind_list3").selectedIndex].text;
	Final_Momi_Toukyu=document.getElementById("Toukyu_list3").options[document.getElementById("Toukyu_list3").selectedIndex].text;
	Last_Momi_number=3
}else if(Momi_F_t==M4t_cst){
	Final_Momi_Kind=document.getElementById("Kind_list4").options[document.getElementById("Kind_list4").selectedIndex].text;
	Final_Momi_Toukyu=document.getElementById("Toukyu_list4").options[document.getElementById("Toukyu_list4").selectedIndex].text;
	Last_Momi_number=4
}else if(Momi_F_t==M5t_cst){
	Final_Momi_Kind=document.getElementById("Kind_list5").options[document.getElementById("Kind_list5").selectedIndex].text;
	Final_Momi_Toukyu=document.getElementById("Toukyu_list5").options[document.getElementById("Toukyu_list5").selectedIndex].text;
	Last_Momi_number=5
}else if(Momi_F_t==M6t_cst){
	Final_Momi_Kind=document.getElementById("Kind_list6").options[document.getElementById("Kind_list6").selectedIndex].text;
	Final_Momi_Toukyu=document.getElementById("Toukyu_list6").options[document.getElementById("Toukyu_list6").selectedIndex].text;
	Last_Momi_number=6
}else if(Momi_F_t==M7t_cst){
	Final_Momi_Kind=document.getElementById("Kind_list7").options[document.getElementById("Kind_list7").selectedIndex].text;
	Final_Momi_Toukyu=document.getElementById("Toukyu_list7").options[document.getElementById("Toukyu_list7").selectedIndex].text;
	Last_Momi_number=7
}else if(Momi_F_t==M8t_cst){
	Final_Momi_Kind=document.getElementById("Kind_list8").options[document.getElementById("Kind_list8").selectedIndex].text;
	Final_Momi_Toukyu=document.getElementById("Toukyu_list8").options[document.getElementById("Toukyu_list8").selectedIndex].text;
	Last_Momi_number=8
}else if(Momi_F_t==M9t_cst){
	Final_Momi_Kind=document.getElementById("Kind_list9").options[document.getElementById("Kind_list9").selectedIndex].text;
	Final_Momi_Toukyu=document.getElementById("Toukyu_list9").options[document.getElementById("Toukyu_list9").selectedIndex].text;
	Last_Momi_number=9
}else if(Momi_F_t==M10t_cst){
	Final_Momi_Kind=document.getElementById("Kind_list10").options[document.getElementById("Kind_list10").selectedIndex].text;
	Final_Momi_Toukyu=document.getElementById("Toukyu_list10").options[document.getElementById("Toukyu_list10").selectedIndex].text;
	Last_Momi_number=10
}


if(Momi_F_t==0){
		var MC=10-Momi_count;
		alert("モミの製作が完了していません！　あと"+MC+"回");
}else if(Momi_Fhour<=0){
document.getElementById("Beta").innerHTML=("かかる時間は"+Momi_Fsecond+"分"+Momi_Fminute+"秒で、一番多い回数は"+Momi_Final_count+"、最終作業者は"+Last_Momi_number+"番の"+Final_Momi_Toukyu+Final_Momi_Kind+"労働者です");
}else {
document.getElementById("Beta").innerHTML=("かかる時間は"+Momi_Fhour+"時間"+Momi_Fsecond+"分"+Momi_Fminute+"秒で、一番多い回数は"+Momi_Final_count+"、最終作業者は"+Last_Momi_number+"番の"+Final_Momi_Toukyu+Final_Momi_Kind+"労働者です");}
}

