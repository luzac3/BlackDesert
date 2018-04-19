function createform_Sekitan(){
	Sekitan_form.innerHTML='すでに終了した回数';
	var select0=document.createElement("select");
	select0.name="select04";
	select0.id="select04";
	select0.onchange=Sekitan_block;
	Sekitan_form.appendChild(select0);
	
	
		for(var i=0; i<11; i++){
			var option0=document.createElement("option");
			option0.value=i;
			option0.text=i;
		select0.appendChild(option0);
	
		}
	for(var k=21; k<31; k++){	
	var ol=document.createElement("ul");
	var Sekitan_list=document.getElementById("Sekitan_form");
	Sekitan_list.appendChild(ol);

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


function Sekitan_block(){
var count=document.getElementById("select04").value;
		for(var k=21; k<31; k++){


			eval("var Kind"+k+"=document.getElementById('Kind_list'+"+k+");");
			eval("var Toukyu"+k+"=document.getElementById('Toukyu_list'+"+k+");");
			eval("var AP"+k+"=document.getElementById('AP'+"+k+");");
			eval("var inputMin"+k+"=document.getElementById('minute'+"+k+");");
			eval("var inputSec"+k+"=document.getElementById('second'+"+k+");");
		}
		for(var i=21; i<31-count; i++){
			eval("Kind"+i+".disabled=false;");
			eval("Toukyu"+i+".disabled=false;");
			eval("AP"+i+".disabled=false;");
			eval("inputMin"+i+".disabled=false;");
			eval("inputSec"+i+".disabled=false;");		
		}		
	
		for(var i=31-count; i<31; i++){
			eval("Kind"+i+".disabled=true;");
			eval("Toukyu"+i+".disabled=true;");
			eval("AP"+i+".disabled=true;");
			eval("inputMin"+i+".disabled=true;");
			eval("inputSec"+i+".disabled=true;");
		
		}




}


function Sekitan_culculate(){
var m=1;

for (var i=21; i<31; i++){
	
	
	
	eval("var Se"+m+"t= eval(\"parseInt(document.getElementById('second'+\"+i+\").value)\")*60+eval(\"parseInt(document.getElementById('minute'+\"+i+\").value);\");");
	eval('var AP'+i+ '=parseInt(document.getElementById("AP"+'+i+').value);');
	eval("var Se"+m+"c=0;");
	eval("var Se"+m+"t_cst=Se"+m+"t;");
	//直接加算するとまずいので、要素をカウント用と分離。
	m++;
		
}
var Sekitan_count=0;
var first_count=parseInt(document.getElementById("select03").value);

var array=[]
var z=1;
for(var x=0; x<10; x++){
	eval("array["+x+"]=Se"+z+"t_cst;")
	z++;

}
while(Sekitan_count<10){
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
eval("if(Se"+z+"t !=0 && Se"+z+"t !=null && !isNaN(Se"+z+"t) && Se"+z+"c<1){var Se"+z

+"c=1;}")
}

if(Se1c+Se2c+Se3c+Se4c+Se5c+Se6c+Se7c+Se8c+Se9c+Se10c+first_count >=10){break;}

if(min==Se1t_cst){

		if(min==AP21){
			array[0]=0;
		}else{
			Se1c++;
			var Se1t_cst = Se1t*Se1c;
			array[0]=Se1t_cst;
		}

	}else if(min==Se2t_cst){
		if(Se2c==AP22){
			array[1]=0;
		}else{
			Se2c++;
			var Se2t_cst = Se2t*Se2c;
			array[1]=Se2t_cst;
		}

	}else if(min==Se3t_cst){
		if(Se3c==AP23){
			array[2]=0;
		}else{
			Se3c++;
			var Se3t_cst = Se3t*Se3c;
			array[2]=Se3t_cst;
		}
	}else if(min==Se4t_cst){
		if(Se4c==AP24){
			array[3]="null";
		}else{
			Se4c++;
			var Se4t_cst = Se4t*Se4c;
			array[3]=Se4t_cst;
		}
	}else if(min==Se5t_cst){
		if(Se5c==AP25){
			array[4]=0;
		}else{
			Se5c++;
			var Se5t_cst = Se5t*Se5c;
			array[4]=Se5t_cst;
		}
	}else if(min==Se6t_cst){
		if(Se6c==AP26){
			array[5]=0;
		}else{
			Se6c++;
			var Se6t_cst = Se6t*Se6c;
			array[5]=Se6t_cst;
		}
	}else if(min==Se7t_cst){
		if(Se7c==AP27){
			array[6]=0;
		}else{
			Se7c++;
			var Se7t_cst = Se7t*Se7c;
			array[6]=Se7t_cst;
		}
	}else if(min==Se8t_cst){
		if(Se8c==AP28){
			array[7]=0;
		}else{
			Se8c++;
			var Se8t_cst = Se8t*Se8c;
			array[7]=Se7t_cst;
		}
	}else if(min==Se9t_cst){
		if(Se9c==AP29){
			array[8]=0;
		}else{
			Se9c++;
			var Se9t_cst = Se9t*Se9c;
			array[8]=Se9t_cst;
		}
	}else if(min==Se10t_cst){
		if(Se10c==AP30){
			array[9]=0;
		}else{
			Se10c++;
			var Se10t_cst = Se10t*Se10c;
			aray[9]=Se10t_cst;
		}
	}else{
		break;	
	
	}
	var Sekitan_count=Se1c+Se2c+Se3c+Se4c+Se5c+Se6c+Se7c+Se8c+Se9c+Se10c+first_count;
}



if(Sekitan_count != 10){
	var SeC=10-Sekitan_count;
	alert("石炭の製作が完了していません！　あと"+SeC+"回");
	}

var array=[]
var z=1;
for(var x=0; x<10; x++){
	eval("array["+x+"]=Se"+z+"t_cst;")
	z++;

}

var Sekitan_F_t;
for (var i=0,l=array.length; i<l; i++){
	var n2=array[i]
	if(n2 !=0 && n2 !=null && !isNaN(n2)){
		if (Sekitan_F_t){
			Sekitan_F_t=Math.max(Sekitan_F_t,n2);
		}else{
			Sekitan_F_t=n2;
		}
	}
}
 Sekitan_Final_time=Sekitan_F_t;
 Sekitan_Final_count = Math.max(Se1c+Se2c+Se3c+Se4c+Se5c+Se6c+Se7c+Se8c+Se9c+Se10c);
 Sekitan_Fhour = Math.floor(Sekitan_F_t/3600);
 Sekitan_Fsecond = Math.floor((Sekitan_F_t-Sekitan_Fhour*3600)/60);
 Sekitan_Fminute = Math.floor((Sekitan_F_t-Sekitan_Fhour*3600)%60);

if (Sekitan_F_t==Se1t_cst){
	Final_Sekitan_Kind=document.getElementById("Kind_list21").options[document.getElementById("Kind_list21").selectedIndex].text;
	Final_Sekitan_Toukyu=document.getElementById("Toukyu_list21").options[document.getElementById("Toukyu_list21").selectedIndex].text;
	Last_Sekitan_number=1;
}else if(Sekitan_F_t==Se2t_cst){
	Final_Sekitan_Kind=document.getElementById("Kind_list22").options[document.getElementById("Kind_list22").selectedIndex].text;
	Final_Sekitan_Toukyu=document.getElementById("Toukyu_list22").options[document.getElementById("Toukyu_list22").selectedIndex].text;
	Last_Sekitan_number=2;
}else if(Sekitan_F_t==Se3t_cst){
	Final_Sekitan_Kind=document.getElementById("Kind_list23").options[document.getElementById("Kind_list23").selectedIndex].text;
	Final_Sekitan_Toukyu=document.getElementById("Toukyu_list23").options[document.getElementById("Toukyu_list23").selectedIndex].text;
	Last_Sekitan_number=3;
}else if(Sekitan_F_t==Se4t_cst){
	Final_Sekitan_Kind=document.getElementById("Kind_list24").options[document.getElementById("Kind_list24").selectedIndex].text;
	Final_Sekitan_Toukyu=document.getElementById("Toukyu_list24").options[document.getElementById("Toukyu_list24").selectedIndex].text;
	Last_Sekitan_number=4;
}else if(Sekitan_F_t==Se5t_cst){
	Final_Sekitan_Kind=document.getElementById("Kind_list25").options[document.getElementById("Kind_list25").selectedIndex].text;
	Final_Sekitan_Toukyu=document.getElementById("Toukyu_list25").options[document.getElementById("Toukyu_list25").selectedIndex].text;
	Last_Sekitan_number=5;
}else if(Sekitan_F_t==Se6t_cst){
	Final_Sekitan_Kind=document.getElementById("Kind_list26").options[document.getElementById("Kind_list26").selectedIndex].text;
	Final_Sekitan_Toukyu=document.getElementById("Toukyu_list26").options[document.getElementById("Toukyu_list26").selectedIndex].text;
	Last_Sekitan_number=6;
}else if(Sekitan_F_t==Se7t_cst){
	Final_Sekitan_Kind=document.getElementById("Kind_list27").options[document.getElementById("Kind_list27").selectedIndex].text;
	Final_Sekitan_Toukyu=document.getElementById("Toukyu_list27").options[document.getElementById("Toukyu_list27").selectedIndex].text;
	Last_Sekitan_number=7;
}else if(Sekitan_F_t==Se8t_cst){
	Final_Sekitan_Kind=document.getElementById("Kind_list28").options[document.getElementById("Kind_list28").selectedIndex].text;
	Final_Sekitan_Toukyu=document.getElementById("Toukyu_list28").options[document.getElementById("Toukyu_list28").selectedIndex].text;
	Last_Sekitan_number=8;
}else if(Sekitan_F_t==Se9t_cst){
	Final_Sekitan_Kind=document.getElementById("Kind_list29").options[document.getElementById("Kind_list29").selectedIndex].text;
	Final_Sekitan_Toukyu=document.getElementById("Toukyu_list29").options[document.getElementById("Toukyu_list29").selectedIndex].text;
	Last_Sekitan_number=9;
}else if(Sekitan_F_t==Se10t_cst){
	Final_Sekitan_Kind=document.getElementById("Kind_list30").options[document.getElementById("Kind_list30").selectedIndex].text;
	Final_Sekitan_Toukyu=document.getElementById("Toukyu_list30").options[document.getElementById("Toukyu_list30").selectedIndex].text;
	Last_Sekitan_number=10;
}

if(Sekitan_F_t==0){
		var SeC=10-Sekitan_count;
		alert("石炭の製作が完了していません！　あと"+SeC+"回");
}else if(Sekitan_Fhour<=0){
document.getElementById("Delta").innerHTML=("かかる時間は"+Sekitan_Fsecond+"分"+Sekitan_Fminute+"秒で、一番多い回数は"+Sekitan_Final_count+"、最終作業者は"+Last_Sekitan_number+"番の"+Final_Sekitan_Toukyu+Final_Sekitan_Kind+"労働者です");
}else {
document.getElementById("Delta").innerHTML=("かかる時間は"+Sekitan_Fhour+"時間"+Sekitan_Fsecond+"分"+Sekitan_Fminute+"秒で、一番多い回数は"+Sekitan_Final_count+"、最終作業者は"+Last_Sekitan_number+"番の"+Final_Sekitan_Toukyu+Final_Sekitan_Kind+"労働者です");}
}
