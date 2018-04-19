function createform_Konpou(){
	Konpou_form.innerHTML='すでに終了した回数';
	var select0=document.createElement("select");
	select0.name="select05";
	select0.id="select05";
	select0.onchange=Konpou_block;
	Konpou_form.appendChild(select0);
	
	
		for(var i=0; i<26; i++){
			var option0=document.createElement("option");
			option0.value=i;
			option0.text=i;
		select0.appendChild(option0);
	
		}
	for(var k=31; k<56; k++){	
	var ol=document.createElement("ul");
	var Konpou_list=document.getElementById("Konpou_form");
	Konpou_list.appendChild(ol);

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


function Konpou_block(){
var count=document.getElementById("select05").value;
		for(var k=31; k<56; k++){


			eval("var Kind"+k+"=document.getElementById('Kind_list'+"+k+");");
			eval("var Toukyu"+k+"=document.getElementById('Toukyu_list'+"+k+");");
			eval("var AP"+k+"=document.getElementById('AP'+"+k+");");
			eval("var inputMin"+k+"=document.getElementById('Momi_minute'+"+k+");");
			eval("var inputSec"+k+"=document.getElementById('Momi_second'+"+k+");");
		}
		for(var i=1; i<26-count; i++){
			eval("Kind"+i+".disabled=false;");
			eval("Toukyu"+i+".disabled=false;");
			eval("AP"+i+".disabled=false;");
			eval("inputMin"+i+".disabled=false;");
			eval("inputSec"+i+".disabled=false;");		
		}		
	
		for(var i=26-count; i<26; i++){
			eval("Kind"+i+".disabled=true;");
			eval("Toukyu"+i+".disabled=true;");
			eval("AP"+i+".disabled=true;");
			eval("inputMin"+i+".disabled=true;");
			eval("inputSec"+i+".disabled=true;");
		
		}




}


function Konpou_culculate(){
var m=1;

for (var i=31; i<56; i++){
	
	
	
	eval("var K"+m+"t= eval(\"parseInt(document.getElementById('second'+\"+i+\").value)\")*60+eval(\"parseInt(document.getElementById('minute'+\"+i+\").value);\");");
	eval('var AP'+i+ '=parseInt(document.getElementById("AP"+'+i+').value);');
	eval("var K"+m+"c=0;");
	eval("var K"+m+"t_cst=K"+m+"t;");
	//直接加算するとまずいので、要素をカウント用と分離。
	m++;
		
}
var Konpou_count=0;
var first_count=parseInt(document.getElementById("select05").value);

var array=[]
var z=1;
for(var x=0; x<25; x++){
	eval("array["+x+"]=K"+z+"t_cst;")
	z++;

}
while(Konpou_count<25){
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
for(var z=1; z<26; z++){
eval("if(K"+z+"t !=0 && K"+z+"t !=null && !isNaN(K"+z+"t) && K"+z+"c<1){var K"+z

+"c=1;}")
}

if(K1c+K2c+K3c+K4c+K5c+K6c+K7c+K8c+K9c+K10c+K11c+K12c+K13c+K14c+K15c+K16c+K17c+K18c+K19c+K20c+K21c+K22c+K23c+K24c+K25c+first_count >=25){break;}

if(min==K1t_cst){

		if(K1c==AP31){
			array[0]=0;
		}else{
			K1c++;
			var K1t_cst = K1t*K1c;
			array[0]=K1t_cst;
		}

	}else if(min==K2t_cst){
		if(K2c==AP32){
			array[1]=0;
		}else{
			K2c++;
			var K2t_cst = K2t*K2c;
			array[1]=K2t_cst;
		}

	}else if(min==K3t_cst){
		if(K3c==AP33){
			array[2]=0;
		}else{
			K3c++;
			var K3t_cst = K3t*K3c;
			array[2]=K3t_cst;
		}
	}else if(min==K4t_cst){
		if(K4c==AP34){
			array[3]="null";
		}else{
			K4c++;
			var K4t_cst = K4t*K4c;
			array[3]=K4t_cst;
		}
	}else if(min==K5t_cst){
		if(K5c==AP35){
			array[4]=0;
		}else{
			K5c++;
			var K5t_cst = K5t*K5c;
			array[4]=K5t_cst;
		}
	}else if(min==K6t_cst){
		if(K6c==AP36){
			array[5]=0;
		}else{
			K6c++;
			var K6t_cst = K6t*K6c;
			array[5]=K6t_cst;
		}
	}else if(min==K7t_cst){
		if(K7c==AP37){
			array[6]=0;
		}else{
			K7c++;
			var K7t_cst = K7t*K7c;
			array[6]=K7t_cst;
		}
	}else if(min==K8t_cst){
		if(K8c==AP38){
			array[7]=0;
		}else{
			K8c++;
			var K8t_cst = K8t*K8c;
			array[7]=K7t_cst;
		}
	}else if(min==K9t_cst){
		if(K9c==AP39){
			array[8]=0;
		}else{
			K9c++;
			var K9t_cst = K9t*K9c;
			array[8]=K9t_cst;
		}
	}else if(min==K10t_cst){
		if(K10c==AP40){
			array[9]=0;
		}else{
			K10c++;
			var K10t_cst = K10t*K10c;
			array[9]=K10t_cst;
		}
	}else if(min==K11t_cst){
		if(K11c==AP41){
			array[10]=0;
		}else{
			K11c++;
			var K11t_cst = K11t*K11c;
			array[10]=K11t_cst;
		}

	}else if(min==K12t_cst){
		if(K12c==AP42){
			array[11]=0;
		}else{
			K12c++;
			var K12t_cst = K12t*K12c;
			array[11]=K12t_cst;
		}
	}else if(min==K13t_cst){
		if(K13c==AP43){
			array[12]="null";
		}else{
			K13c++;
			var K13t_cst = K13t*K13c;
			array[12]=K13t_cst;
		}
	}else if(min==K14t_cst){
		if(K14c==AP44){
			array[13]="null";
		}else{
			K14c++;
			var K14t_cst = K14t*K14c;
			array[13]=K14t_cst;
		}
	}else if(min==K15t_cst){
		if(K15c==AP45){
			array[14]=0;
		}else{
			K15c++;
			var K15t_cst = K15t*K15c;
			array[14]=K15t_cst;
		}
	}else if(min==K16t_cst){
		if(K16c==AP46){
			array[15]=0;
		}else{
			K16c++;
			var K16t_cst = K16t*K16c;
			array[15]=K16t_cst;
		}
	}else if(min==K17t_cst){
		if(K17c==AP47){
			array[16]=0;
		}else{
			K17c++;
			var K17t_cst = K17t*K17c;
			array[16]=K17t_cst;
		}
	}else if(min==K18t_cst){
		if(K18c==AP48){
			array[17]=0;
		}else{
			K18c++;
			var K18t_cst = K18t*K18c;
			array[17]=K17t_cst;
		}
	}else if(min==K19t_cst){
		if(K19c==AP49){
			array[18]=0;
		}else{
			K19c++;
			var K19t_cst = K19t*K19c;
			array[18]=K19t_cst;
		}
	}else if(min==K20t_cst){
		if(K20c==AP30){
			array[19]=0;
		}else{
			K20c++;
			var K20t_cst = K20t*K20c;
			array[19]=K20t_cst;
		}
	}else if(K21c==AP51){
		if(K21c==AP51){
			array[20]=0;
		}else{
			K21c++;
			var K21t_cst = K21t*K21c;
			array[20]=K21t_cst;
		}

	}else if(min==K22t_cst){
		if(K22c==AP52){
			array[21]=0;
		}else{
			K22c++;
			var K22t_cst = K22t*K22c;
			array[21]=K22t_cst;
		}

	}else if(min==K23t_cst){
		if(K23c==AP53){
			array[22]=0;
		}else{
			K23c++;
			var K23t_cst = K23t*K23c;
			array[22]=K23t_cst;
		}
	}else if(min==K24t_cst){
		if(K24c==AP54){
			array[23]="null";
		}else{
			K24c++;
			var K24t_cst = K24t*K24c;
			array[23]=K24t_cst;
		}
	}else if(min==K25t_cst){
		if(K25c==AP55){
			array[24]=0;
		}else{
			K25c++;
			var K25t_cst = K25t*K25c;
			array[24]=K25t_cst;
		}
	}else{
		
		break;	
	
	}
	var Konpou_count=K1c+K2c+K3c+K4c+K5c+K6c+K7c+K8c+K9c+K10c+K11c+K12c+K13c+K14c+K15c+K16c+K17c+K18c+K19c+K20c+K21c+K22c+K23c+K24c+K25c+first_count;
}


if(Konpou_count != 25){
	var KC=25-Konpou_count;
	alert("梱包材の製作が完了していません！　あと"+KC+"回");

}
var array=[]
var z=1;
for(var x=0; x<25; x++){
	eval("array["+x+"]=K"+z+"t_cst;")
	z++;

}

var Konpou_F_t;
for (var i=0,l=array.length; i<l; i++){
	var n2=array[i]
	if(n2 !=0 && n2 !=null && !isNaN(n2)){
		if (Konpou_F_t){
			Konpou_F_t=Math.max(Konpou_F_t,n2);
		}else{
			Konpou_F_t=n2;
		}
	}
}
Konpou_Final_time=Konpou_F_t;
Konpou_Final_count = Math.max(K1c+K2c+K3c+K4c+K5c+K6c+K7c+K8c+K9c+K10c+K11c+K12c+K13c+K14c+K15c+K16c+K17c+K18c+K19c+K20c+K21c+K22c+K23c+K24c+K25c);
Konpou_Fhour = Math.floor(Konpou_F_t/3600);
Konpou_Fsecond = Math.floor((Konpou_F_t-Konpou_Fhour*3600)/60);
Konpou_Fminute = Math.floor((Konpou_F_t-Konpou_Fhour*3600)%60);

if (Konpou_F_t==K1t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list31").options[document.getElementById("Kind_list31").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list31").options[document.getElementById("Toukyu_list31").selectedIndex].text;
	Last_Konpou_number=1;
}else if(Konpou_F_t==K2t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list32").options[document.getElementById("Kind_list32").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list32").options[document.getElementById("Toukyu_list32").selectedIndex].text;
	Last_Konpou_number=2;
}else if(Konpou_F_t==K3t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list33").options[document.getElementById("Kind_list33").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list33").options[document.getElementById("Toukyu_list33").selectedIndex].text;
	Last_Konpou_number=3;
}else if(Konpou_F_t==K4t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list34").options[document.getElementById("Kind_list34").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list34").options[document.getElementById("Toukyu_list34").selectedIndex].text;
	Last_Konpou_number=4;
}else if(Konpou_F_t==K5t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list35").options[document.getElementById("Kind_list35").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list35").options[document.getElementById("Toukyu_list35").selectedIndex].text;
	Last_Konpou_number=5;
}else if(Konpou_F_t==K6t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list36").options[document.getElementById("Kind_list36").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list36").options[document.getElementById("Toukyu_list36").selectedIndex].text;
	Last_Konpou_number=6;
}else if(Konpou_F_t==K7t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list37").options[document.getElementById("Kind_list37").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list37").options[document.getElementById("Toukyu_list37").selectedIndex].text;
	Last_Konpou_number=7;
}else if(Konpou_F_t==K8t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list38").options[document.getElementById("Kind_list38").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list38").options[document.getElementById("Toukyu_list38").selectedIndex].text;
	Last_Konpou_number=8;
}else if(Konpou_F_t==K9t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list39").options[document.getElementById("Kind_list39").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list39").options[document.getElementById("Toukyu_list39").selectedIndex].text;
	Last_Konpou_number=9;
}else if(Konpou_F_t==K10t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list40").options[document.getElementById("Kind_list40").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list40").options[document.getElementById("Toukyu_list40").selectedIndex].text;
	Last_Konpou_number=10;
}else if (Konpou_F_t==K11t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list41").options[document.getElementById("Kind_list41").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list41").options[document.getElementById("Toukyu_list41").selectedIndex].text;
	Last_Konpou_number=11;
}else if(Konpou_F_t==K12t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list42").options[document.getElementById("Kind_list42").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list42").options[document.getElementById("Toukyu_list42").selectedIndex].text;
	Last_Konpou_number=12;
}else if(Konpou_F_t==K13t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list43").options[document.getElementById("Kind_list43").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list43").options[document.getElementById("Toukyu_list43").selectedIndex].text;
	Last_Konpou_number=13;
}else if(Konpou_F_t==K14t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list44").options[document.getElementById("Kind_list44").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list44").options[document.getElementById("Toukyu_list44").selectedIndex].text;
	Last_Konpou_number=14;
}else if(Konpou_F_t==K15t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list45").options[document.getElementById("Kind_list45").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list45").options[document.getElementById("Toukyu_list45").selectedIndex].text;
	Last_Konpou_number=15;
}else if(Konpou_F_t==K16t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list46").options[document.getElementById("Kind_list46").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list46").options[document.getElementById("Toukyu_list46").selectedIndex].text;
	Last_Konpou_number=16;
}else if(Konpou_F_t==K17t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list47").options[document.getElementById("Kind_list47").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list47").options[document.getElementById("Toukyu_list47").selectedIndex].text;
	Last_Konpou_number=17;
}else if(Konpou_F_t==K18t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list48").options[document.getElementById("Kind_list48").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list48").options[document.getElementById("Toukyu_list48").selectedIndex].text;
	Last_Konpou_number=18;
}else if(Konpou_F_t==K19t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list49").options[document.getElementById("Kind_list49").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list49").options[document.getElementById("Toukyu_list49").selectedIndex].text;
	Last_Konpou_number=19;
}else if(Konpou_F_t==K20t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list50").options[document.getElementById("Kind_list50").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list50").options[document.getElementById("Toukyu_list50").selectedIndex].text;
	Last_Konpou_number=20;
}else if (Konpou_F_t==K21t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list51").options[document.getElementById("Kind_list51").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list51").options[document.getElementById("Toukyu_list51").selectedIndex].text;
	Last_Konpou_number=21;
}else if(Konpou_F_t==K22t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list52").options[document.getElementById("Kind_list52").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list52").options[document.getElementById("Toukyu_list52").selectedIndex].text;
	Last_Konpou_number=22;
}else if(Konpou_F_t==K23t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list53").options[document.getElementById("Kind_list53").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list53").options[document.getElementById("Toukyu_list53").selectedIndex].text;
	Last_Konpou_number=23;
}else if(Konpou_F_t==K24t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list54").options[document.getElementById("Kind_list54").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list54").options[document.getElementById("Toukyu_list54").selectedIndex].text;
	Last_Konpou_number=24;
}else if(Konpou_F_t==K25t_cst){
	Final_Konpou_Kind=document.getElementById("Kind_list55").options[document.getElementById("Kind_list55").selectedIndex].text;
	Final_Konpou_Toukyu=document.getElementById("Toukyu_list55").options[document.getElementById("Toukyu_list55").selectedIndex].text;
	Last_Konpou_number=25;
}


if(Konpou_F_t==0){
	var KC=25-Konpou_count;
	alert("梱包材の製作が完了していません！　あと"+KC+"回");
}else if(Konpou_Fhour<=0){
	document.getElementById("Epsilon").innerHTML=("かかる時間は"+Konpou_Fsecond+"分"+Konpou_Fminute+"秒で、<br>一番多い回数は"+Konpou_Final_count+"、最終作業者は"+Last_Konpou_number+"番の"+Final_Konpou_Toukyu+Final_Konpou_Kind+"労働者です");
}else{
	document.getElementById("Epsilon").innerHTML=("かかる時間は"+Konpou_Fhour+"時間"+Konpou_Fsecond+"分"+Konpou_Fminute+"秒で、<br>一番多い回数は"+Konpou_Final_count+"、最終作業者は"+Last_Konpou_number+"番の"+Final_Konpou_Toukyu+Final_Konpou_Kind+"労働者です");}
}
