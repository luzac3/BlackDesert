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
				'azeri' : '�A�[���A�[�i',
				'glnil' : '�O���j��',
				'zales' : '�U���X',
				'taris' : '�^���X',
				'talotas' : '�^���^�X',
				'febo' : '�t�B�[�{',
				'foltoona' : '�t�H���g�D�[�i',
				'hercules' : '�w���N���X',
				'reblas' : '���u���X',
				'locaba' : '���J�o',
		};
				
		for (var i in item){
			var option=document.createElement('option')
			option.setAttribute('value',i);
			option.innerHTML=item[i];				
			
			select.appendChild(option);
		}

		var item_kind=$("[name=item_kind]:checked").val()
		//���W�I�{�^���̃A�C�e����ނ��`�F�b�N
		if(item_kind=="helm"){
			var elem=document.createElement("option");
			elem.value="gias";
			elem.id="gias";
			document.getElementById("item").appendChild(elem);
			document.getElementById("gias").innerHTML="�M�A�X";
		}else if(item_kind=="armour"){
			var elem=document.createElement("option");
			elem.value="nose";
			elem.id="nose";
			document.getElementById("item").appendChild(elem);
			document.getElementById("nose").innerHTML="���b�h�m�[�Y";
			
			var elem=document.createElement("option");
			elem.value="gudon";
			elem.id="gudon";
			document.getElementById("item").appendChild(elem);
			document.getElementById("gudon").innerHTML="��݂Ȗ؂̐���";
		}else if(item_kind=="globe"){
			var elem=document.createElement("option");
			elem.value="beg";
			elem.id="beg";
			document.getElementById("item").appendChild(elem);
			document.getElementById("beg").innerHTML="�x�O";
		}else if(item_kind=="shoose"){
			var elem=document.createElement("option");
			elem.value="maskan";
			elem.id="maskan";
			document.getElementById("item").appendChild(elem);
			document.getElementById("maskan").innerHTML="�}�X�J��";
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
				'eine' : '�A�C��',
				'ceres' : '�Z���X',
				'elsh' : '�G���V��',
				'aswel' : '�A�Y�E�F��',
				'kallis' : '�J���X',
				'bales' : '�o���X',
				'yuria' : '�����A',
				'kurea' : '�N���A',
				'ribelt' : '���x���g',
				'kuzaka' : '�N�U�J',
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
				'round' : '�~�`',
				'militia' : '����',
				'bengats' : '�x���K�b�c',
				'eccion' : '�G�N�V�I��',
				'kyte' : '�J�C�g',
				
		};
				
		for (var i in item){
			var option=document.createElement('option')
			option.setAttribute('value',i);
			option.innerHTML=item[i];				
			
			select.appendChild(option);
		}
		
			}else if(character_class=="ranger" || character_class=="wiz"){
			
			
				var item={
				'dagger' : '�_�K�[',
				'militia' : '����',
				'iron' : '�|�S',
				'pelin' : '�y����',
				
		};
				
		for (var i in item){
			var option=document.createElement('option')
			option.setAttribute('value',i);
			option.innerHTML=item[i];				
			
			select.appendChild(option);
		}
				
			}else if(character_class=="sorceress"){
			
				var item={
				'cule' : '�L���[��',
				'militia' : '����',
				'herick' : '���b�N',
				'juvle' : '�W������',
				'lick' : '���b�N',
				
		};
				
		for (var i in item){
			var option=document.createElement('option')
			option.setAttribute('value',i);
			option.innerHTML=item[i];				
			
			select.appendChild(option);
		}
			
			}else if(character_class=="giant"){
			
				var item={
					'cloth' : '�z',
					'militia' : '����',
					'seya' : '�Z�C��',
					'olos' : '�I���X',
					'teos' : '�e�I�X',
				
				};
				
		for (var i in item){
			var option=document.createElement('option')
			option.setAttribute('value',i);
			option.innerHTML=item[i];				
			
			select.appendChild(option);
		}
				
			}else if(character_class=="little_summoner"){
			
				var item={
					'normal' : '���g��',
					'asa' : '��',
					'kaori' : '���蔠',
					'bag' : '�Q��',
					'long' : '����',
				
				};
				
		for (var i in item){
			var option=document.createElement('option')
			option.setAttribute('value',i);
			option.innerHTML=item[i];				
			
			select.appendChild(option);
		}
				
			}else if(character_class=="blader" || character_class=="tsubaki"){
			
				var item={
					'horn' : '�p�|',
					'black' : '��',
					'whitearm' : '���p�R',
					'white' : '��',
					'blackarm' : '���p',
				
				};
				
		for (var i in item){
			var option=document.createElement('option')
			option.setAttribute('value',i);
			option.innerHTML=item[i];				
			
			select.appendChild(option);
		}
				
			}else{
				var item={
					'old' : '�Â�',
					'asa' : '��',
					'militia' : '����',
					'quiter' : '�N�C�^�[',
					'esteeq' : '�G�X�e�B�[�N',
					'tade' : '�^�f',
				
				};
				
		for (var i in item){
			var option=document.createElement('option')
			option.setAttribute('value',i);
			option.innerHTML=item[i];				
			
			select.appendChild(option);
		}
				
			
			}
			
		var item={
					'clea' : '�N���A',
					'rosal' : '���T��',
					'nubel' : '�k�[�x��',
				
				};
				
		for (var i in item){
			var option=document.createElement('option')
			option.setAttribute('value',i);
			option.innerHTML=item[i];				
			
			select.appendChild(option);
		}
		
		

result();
}

function change_stack(){//�X�^�b�N�l���ύX���ꂽ�Ƃ��ɋN��
	var stack_data=parseInt($("#stack").val())
	$("#stack_data").val(stack_data)
	//�f�[�^�i�[�̈�̃X�^�b�Nval��ύX�����X�^�b�N�l�ɏ�������
	result();
	//�\���̈�ɓK��
}	

function change_taikyu(){//�ϋv���ύX���ꂽ��N��
	var taikyu_data=parseInt($("#taikyu").val())
	$("#taikyu_data").val(taikyu_data)
	result();
}

function change_senzai(){//���݂��ύX���ꂽ��N��
	var senzai_data=parseInt($("#senzai").val())
	$("#senzai_data").val(senzai_data)
	result();
}
function force(){
	var force=$("[name=force]").prop("checked")
	if(force==true){
			document.getElementById("tatake").disabled=true;
			//��������܂Œ@���K�v�͂Ȃ��̂ŏ���
	
	}else{
		document.getElementById("tatake").disabled=false;
			//�͂�������J�������悤��
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
		'16' : '�^�T',
		'17' : '�^�U',
		'18' : '�^�V',
		'19' : '�^�W',
		'20' : '�^�X',
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
	//������ԂŃ��H���N�X�͕s�g�p�ł�




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
	
//�O���[�o���֐����g�킸�A�f�[�^�i�[�p��div������đΉ�����

}

function go_volcs(){
//���H���N�X�̋��т��g�p�\�ɂ��܂�
	var vol=$("[name=vol]").prop("checked")
	
		if(vol==true){
			document.getElementById("vol").disabled=false;
		}else{
			document.getElementById("vol").disabled=true;
		}


}


