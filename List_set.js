function first_list(k){
			var Kind=document.getElementById("Kind_list"+k);
			var Toukyu=document.getElementById("Toukyu_list"+k);
			

		var child;
		while(child=Toukyu.firstChild){
		Toukyu.removeChild(child);
		}//�{�b�N�X���̏�����
			
	Kind.options[1].selected=true;
		Toukyu.options[0]=new Option("����(��)","green");
		Toukyu.options[1]=new Option("�n��(��)","blue");
		Toukyu.options[2]=new Option("���(��)","yellow");
		Toukyu.options[3]=new Option("�E�l(��)","olange");
		Toukyu.options[3].selected=true;
	AP(k);
}

function List_set(obj){
	obj=obj.getAttribute("Id");
	for(var k=0; k<56; k++){
		if(obj=="Kind_list"+k){
			var Kind=document.getElementById("Kind_list"+k);
			var Toukyu=document.getElementById("Toukyu_list"+k);
			break;
		}
	}
				
		if(Kind.value=="mujyaki"){
			var child;
			while(child=Toukyu.firstChild){
			Toukyu.removeChild(child);
			}//�{�b�N�X���̏�����
			Toukyu.options[0]=new Option("�Ȃ�");

	}else if(Kind.value=="goblin"){
			var child;
			while(child=Toukyu.firstChild){
			Toukyu.removeChild(child);
			}//�{�b�N�X���̏�����
			Toukyu.options[0]=new Option("����(��)","green");
			Toukyu.options[1]=new Option("�n��(��)","blue");
			Toukyu.options[2]=new Option("���(��)","yellow");
			Toukyu.options[3]=new Option("�E�l(��)","olange");
			Toukyu.options[3].selected=true;
	}else if(Kind.value=="human"){
			var child;
			while(child=Toukyu.firstChild){
			Toukyu.removeChild(child);
			}//�{�b�N�X���̏�����
			Toukyu.options[0]=new Option("����(��)","green");
			Toukyu.options[1]=new Option("�n��(��)","blue");
			Toukyu.options[2]=new Option("���(��)","yellow");
			Toukyu.options[3]=new Option("�E�l(��)","olange");
			Toukyu.options[3].selected=true;
	}else{
			var child;
			while(child=Toukyu.firstChild){
			Toukyu.removeChild(child);
			}//�{�b�N�X���̏�����
			Toukyu.options[0]=new Option("����(��)","green");
			Toukyu.options[1]=new Option("�n��(��)","blue");
			Toukyu.options[2]=new Option("���(��)","yellow");
			Toukyu.options[3]=new Option("�E�l(��)","olange");
			Toukyu.options[3].selected=true;
	}
	AP(k);
}

function List_set2(obj){
	obj=obj.getAttribute("Id");
	for(var k=0; k<56; k++){
		if(obj=="Toukyu_list"+k){
			var Kind=document.getElementById("Kind_list"+k);
			var Toukyu=document.getElementById("Toukyu_list"+k);
			break;
		}
	}	

	AP(k);
}


function AP(k){
				var Kind=document.getElementById("Kind_list"+k);
				var Toukyu=document.getElementById("Toukyu_list"+k);
				var AP=document.getElementById("AP"+k);
				

		if(Kind.value=="goblin" && Toukyu.value=="green"){
			var i=0;
				var child;
				while(child=AP.firstChild){
					AP.removeChild(child);
				}//�{�b�N�X���̏�������AP�Ăяo��
			for (var i=1; i<=8; i++)//�ő�AP��8
			{
				var option =document.createElement("option");
				option.value = i;
				option.text = i;
			AP.appendChild(option);
			}
		}else if(Kind.value=="goblin" && Toukyu.value=="blue"){
			var i=0;
				var child;
				while(child=AP.firstChild){
				AP.removeChild(child);
				}//�{�b�N�X���̏�������AP�Ăяo��
			for (var i=1; i<=8; i++)//�ő�AP��5
			{
				var option =document.createElement("option");
				option.value = i;
				option.text = i;
			AP.appendChild(option);
			}
		}else if(Kind.value=="goblin" && Toukyu.value=="yellow"){
			var i=0;
				var child;
				while(child=AP.firstChild){
				AP.removeChild(child);
				}//�{�b�N�X���̏�������AP�Ăяo��
			for (var i=1; i<=10; i++)//�ő�AP��5
			{
				var option =document.createElement("option");
				option.value = i;
				option.text = i;
			AP.appendChild(option);
			}
		}else if(Kind.value=="goblin" && Toukyu.value=="olange"){
			var i=0;
				var child;
				while(child=AP.firstChild){
				AP.removeChild(child);
				}//�{�b�N�X���̏�������AP�Ăяo��
			for (var i=1; i<=15; i++)//�ő�AP��5
			{
				var option =document.createElement("option");
				option.value = i;
				option.text = i;
			AP.appendChild(option);
			}
		}else if(Kind.value=="human" && Toukyu.value=="green"){
			var i=0;
				var child;
				while(child=AP.firstChild){
					AP.removeChild(child);
				}//�{�b�N�X���̏�������AP�Ăяo��
			for (var i=1; i<=17; i++)//�ő�AP��5
			{
				var option =document.createElement("option");
				option.value = i;
				option.text = i;
			AP.appendChild(option);
			}
		}else if(Kind.value=="human" && Toukyu.value=="blue"){
			var i=0;
				var child;
				while(child=AP.firstChild){
				AP.removeChild(child);
				}//�{�b�N�X���̏�������AP�Ăяo��
			for (var i=1; i<=17; i++)//�ő�AP��5
			{
				var option =document.createElement("option");
				option.value = i;
				option.text = i;
			AP.appendChild(option);
			}
		}else if(Kind.value=="human" && Toukyu.value=="yellow"){
			var i=0;
				var child;
				while(child=AP.firstChild){
				AP.removeChild(child);
				}//�{�b�N�X���̏�������AP�Ăяo��
			for (var i=1; i<=20; i++)//�ő�AP��5
			{
				var option =document.createElement("option");
				option.value = i;
				option.text = i;
			AP.appendChild(option);
			}
		}else if(Kind.value=="human" && Toukyu.value=="olange"){
			var i=0;
				var child;
				while(child=AP.firstChild){
				AP.removeChild(child);
				}//�{�b�N�X���̏�������AP�Ăяo��
			for (var i=1; i<=23; i++)//�ő�AP��5
			{
				var option =document.createElement("option");
				option.value = i;
				option.text = i;
			AP.appendChild(option);
			}
		}else if(Kind.value=="giant" && Toukyu.value=="green"){
			var i=0;
			var AP=document.getElementById("AP");
				var child;
				while(child=AP.firstChild){
					AP.removeChild(child);
				}//�{�b�N�X���̏�������AP�Ăяo��
			for (var i=1; i<=25; i++)//�ő�AP��5
			{
				var option =document.createElement("option");
				option.value = i;
				option.text = i;
			AP.appendChild(option);
			}
		}else if(Kind.value=="giant" && Toukyu.value=="blue"){
			var i=0;
				var child;
				while(child=AP.firstChild){
				AP.removeChild(child);
				}//�{�b�N�X���̏�������AP�Ăяo��
			for (var i=1; i<=25; i++)//�ő�AP��5
			{
				var option =document.createElement("option");
				option.value = i;
				option.text = i;
			AP.appendChild(option);
			}
		}else if(Kind.value=="giant" && Toukyu.value=="yellow"){
			var i=0;
				var child;
				while(child=AP.firstChild){
				AP.removeChild(child);
				}//�{�b�N�X���̏�������AP�Ăяo��
			for (var i=1; i<=30; i++)//�ő�AP��5
			{
				var option =document.createElement("option");
				option.value = i;
				option.text = i;
			AP.appendChild(option);
			}
		}else if(Kind.value=="giant" && Toukyu.value=="olange"){
			var i=0;
				var child;
				while(child=AP.firstChild){
				AP.removeChild(child);
				}//�{�b�N�X���̏�������AP�Ăяo��
			for (var i=1; i<=35; i++)//�ő�AP��5
			{
				var option =document.createElement("option");
				option.value = i;
				option.text = i;
			AP.appendChild(option);
			}
		}else{
			var i=0;
				var child;
				while(child=AP.firstChild){
				AP.removeChild(child);
				}//�{�b�N�X���̏�������AP�Ăяo��
			for (var i=1; i<=10; i++)//�ő�AP��5
			{
				var option =document.createElement("option");
				option.value = i;
				option.text = i;
			AP.appendChild(option);
			}
		}
	AP.options[i-2].selected=true;
}
