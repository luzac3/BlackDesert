function createform_Suzu(){
	Suzu_form.innerHTML='すでに終了した回数';
	var select0=document.createElement("select");
	select0.name="select03";
	select0.id="select03";
	select0.onchange=Suzu_block;
	Suzu_form.appendChild(select0);
	
	
		for(var i=0; i<11; i++){
			var option0=document.createElement("option");
			option0.value=i;
			option0.text=i;
		select0.appendChild(option0);
	
		}
	for(var k=11; k<21; k++){	
	var ol=document.createElement("ul");
	var Suzu_list=document.getElementById("Suzu_form");
	Suzu_list.appendChild(ol);

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


function Suzu_block(){
var count=document.getElementById("select03").value;
		for(var k=11; k<21; k++){


			eval("var Kind"+k+"=document.getElementById('Kind_list'+"+k+");");
			eval("var Toukyu"+k+"=document.getElementById('Toukyu_list'+"+k+");");
			eval("var AP"+k+"=document.getElementById('AP'+"+k+");");
			eval("var inputMin"+k+"=document.getElementById('minute'+"+k+");");
			eval("var inputSec"+k+"=document.getElementById('second'+"+k+");");
		}
		for(var i=11; i<21-count; i++){
			eval("Kind"+i+".disabled=false;");
			eval("Toukyu"+i+".disabled=false;");
			eval("AP"+i+".disabled=false;");
			eval("inputMin"+i+".disabled=false;");
			eval("inputSec"+i+".disabled=false;");		
		}		
	
		for(var i=21-count; i<21; i++){
			eval("Kind"+i+".disabled=true;");
			eval("Toukyu"+i+".disabled=true;");
			eval("AP"+i+".disabled=true;");
			eval("inputMin"+i+".disabled=true;");
			eval("inputSec"+i+".disabled=true;");
		
		}




}


function Suzu_culculate(){
var m=1;

for (var i=11; i<21; i++){
	
	
	
	eval("var S"+m+"t= eval(\"parseInt(document.getElementById('second'+\"+i+\").value)\")*60+eval(\"parseInt(document.getElementById('minute'+\"+i+\").value);\");");
	eval('var AP'+i+ '=parseInt(document.getElementById("AP"+'+i+').value);');
	eval("var S"+m+"c=0;");
	eval("var S"+m+"t_cst=S"+m+"t;");
	//直接加算するとまずいので、要素をカウント用と分離。
	m++;
		
}
var Suzu_count=0;
var first_count=parseInt(document.getElementById("select03").value);

var array=[]
var z=1;
for(var x=0; x<10; x++){
	eval("array["+x+"]=S"+z+"t_cst;")
	z++;

}
while(Suzu_count<10){
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
for(var z=1; z<11; z++){
eval("if(S"+z+"t !=0 && S"+z+"t !=null && !isNaN(S"+z+"t) && S"+z+"c<1){var S"+z

+"c=1;}")
}

if(S1c+S2c+S3c+S4c+S5c+S6c+S7c+S8c+S9c+S10c+first_count >=10){break;}

if(min==S1t_cst){

		if(min==AP11){
			array[0]=0;
		}else{
			S1c++;
			var S1t_cst = S1t*S1c;
			array[0]=S1t_cst;
		}

	}else if(min==S2t_cst){
		if(S2c==AP12){
			array[1]=0;
		}else{
			S2c++;
			var S2t_cst = S2t*S2c;
			array[1]=S2t_cst;
		}

	}else if(min==S3t_cst){
		if(S3c==AP13){
			array[2]=0;
		}else{
			S3c++;
			var S3t_cst = S3t*S3c;
			array[2]=S3t_cst;
		}
	}else if(min==S4t_cst){
		if(S4c==AP14){
			array[3]="null";
		}else{
			S4c++;
			var S4t_cst = S4t*S4c;
			array[3]=S4t_cst;
		}
	}else if(min==S5t_cst){
		if(S5c==AP15){
			array[4]=0;
		}else{
			S5c++;
			var S5t_cst = S5t*S5c;
			array[4]=S5t_cst;
		}
	}else if(min==S6t_cst){
		if(S6c==AP16){
			array[5]=0;
		}else{
			S6c++;
			var S6t_cst = S6t*S6c;
			array[5]=S6t_cst;
		}
	}else if(min==S7t_cst){
		if(S7c==AP17){
			array[6]=0;
		}else{
			S7c++;
			var S7t_cst = S7t*S7c;
			array[6]=S7t_cst;
		}
	}else if(min==S8t_cst){
		if(S8c==AP18){
			array[7]=0;
		}else{
			S8c++;
			var S8t_cst = S8t*S8c;
			array[7]=S7t_cst;
		}
	}else if(min==S9t_cst){
		if(S9c==AP19){
			array[8]=0;
		}else{
			S9c++;
			var S9t_cst = S9t*S9c;
			array[8]=S9t_cst;
		}
	}else if(min==S10t_cst){
		if(S10c==AP20){
			array[9]=0;
		}else{
			S10c++;
			var S10t_cst = S10t*S10c;
			aray[9]=S10t_cst;
		}
	}else{
		
		break;	
	
	}
	var Suzu_count=S1c+S2c+S3c+S4c+S5c+S6c+S7c+S8c+S9c+S10c+first_count;
}

if(Suzu_count != 10){
	var SC=10-Suzu_count;
	alert("梱包材の製作が完了していません！　あと"+SC+"回");
	}

var array=[]
var z=1;
for(var x=0; x<10; x++){
	eval("array["+x+"]=S"+z+"t_cst;")
	z++;

}

var Suzu_F_t;
for (var i=0,l=array.length; i<l; i++){
	var n2=array[i]
	if(n2 !=0 && n2 !=null && !isNaN(n2)){
		if (Suzu_F_t){
			Suzu_F_t=Math.max(Suzu_F_t,n2);
		}else{
			Suzu_F_t=n2;
		}
	}
}
 Suzu_Final_time=Suzu_F_t;
 Suzu_Final_count = Math.max(S1c+S2c+S3c+S4c+S5c+S6c+S7c+S8c+S9c+S10c);
 Suzu_Fhour = Math.floor(Suzu_F_t/3600);
 Suzu_Fsecond = Math.floor((Suzu_F_t-Suzu_Fhour*3600)/60);
 Suzu_Fminute = Math.floor((Suzu_F_t-Suzu_Fhour*3600)%60);

if (Suzu_F_t==S1t_cst){
	Final_Suzu_Kind=document.getElementById("Kind_list11").options[document.getElementById("Kind_list11").selectedIndex].text;
	Final_Suzu_Toukyu=document.getElementById("Toukyu_list11").options[document.getElementById("Toukyu_list11").selectedIndex].text;
	Last_Suzu_number=1;
}else if(Suzu_F_t==S2t_cst){
	Final_Suzu_Kind=document.getElementById("Kind_list12").options[document.getElementById("Kind_list12").selectedIndex].text;
	Final_Suzu_Toukyu=document.getElementById("Toukyu_list12").options[document.getElementById("Toukyu_list12").selectedIndex].text;
	Last_Suzu_number=2;
}else if(Suzu_F_t==S3t_cst){
	Final_Suzu_Kind=document.getElementById("Kind_list13").options[document.getElementById("Kind_list13").selectedIndex].text;
	Final_Suzu_Toukyu=document.getElementById("Toukyu_list13").options[document.getElementById("Toukyu_list13").selectedIndex].text;
	Last_Suzu_number=3;
}else if(Suzu_F_t==S4t_cst){
	Final_Suzu_Kind=document.getElementById("Kind_list14").options[document.getElementById("Kind_list14").selectedIndex].text;
	Final_Suzu_Toukyu=document.getElementById("Toukyu_list14").options[document.getElementById("Toukyu_list14").selectedIndex].text;
	Last_Suzu_number=4;
}else if(Suzu_F_t==S5t_cst){
	Final_Suzu_Kind=document.getElementById("Kind_list15").options[document.getElementById("Kind_list15").selectedIndex].text;
	Final_Suzu_Toukyu=document.getElementById("Toukyu_list15").options[document.getElementById("Toukyu_list15").selectedIndex].text;
	Last_Suzu_number=5;
}else if(Suzu_F_t==S6t_cst){
	Final_Suzu_Kind=document.getElementById("Kind_list16").options[document.getElementById("Kind_list16").selectedIndex].text;
	Final_Suzu_Toukyu=document.getElementById("Toukyu_list16").options[document.getElementById("Toukyu_list16").selectedIndex].text;
	Last_Suzu_number=6;
}else if(Suzu_F_t==S7t_cst){
	Final_Suzu_Kind=document.getElementById("Kind_list17").options[document.getElementById("Kind_list17").selectedIndex].text;
	Final_Suzu_Toukyu=document.getElementById("Toukyu_list17").options[document.getElementById("Toukyu_list17").selectedIndex].text;
	Last_Suzu_number=7;
}else if(Suzu_F_t==S8t_cst){
	Final_Suzu_Kind=document.getElementById("Kind_list18").options[document.getElementById("Kind_list18").selectedIndex].text;
	Final_Suzu_Toukyu=document.getElementById("Toukyu_list18").options[document.getElementById("Toukyu_list18").selectedIndex].text;
	Last_Suzu_number=8;
}else if(Suzu_F_t==S9t_cst){
	Final_Suzu_Kind=document.getElementById("Kind_list19").options[document.getElementById("Kind_list19").selectedIndex].text;
	Final_Suzu_Toukyu=document.getElementById("Toukyu_list19").options[document.getElementById("Toukyu_list19").selectedIndex].text;
	Last_Suzu_number=9;
}else if(Suzu_F_t==S10t_cst){
	Final_Suzu_Kind=document.getElementById("Kind_list20").options[document.getElementById("Kind_list20").selectedIndex].text;
	Final_Suzu_Toukyu=document.getElementById("Toukyu_list20").options[document.getElementById("Toukyu_list20").selectedIndex].text;
	Last_Suzu_number=10;
}
if(Suzu_F_t==0){
		var SC=10-Suzu_count;
		alert("錫の製作が完了していません！　あと"+SC+"回");
}else if(Suzu_Fhour<=0){
document.getElementById("Gmma").innerHTML=("かかる時間は"+Suzu_Fsecond+"分"+Suzu_Fminute+"秒で、一番多い回数は"+Suzu_Final_count+"、最終作業者は"+Last_Suzu_number+"番の"+Final_Suzu_Toukyu+Final_Suzu_Kind+"労働者です");
}else {
document.getElementById("Gamma").innerHTML=("かかる時間は"+Suzu_Fhour+"時間"+Suzu_Fsecond+"分"+Suzu_Fminute+"秒で、一番多い回数は"+Suzu_Final_count+"、最終作業者は"+Last_Suzu_number+"番の"+Final_Suzu_Toukyu+Final_Suzu_Kind+"労働者です");}
}
