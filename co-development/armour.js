function protecter_select(){
	var RC=document.getElementById("item").getElementsByTagName("option");
		for(var i=RC.length-1; i>=0; -- i){
			var parent=RC[i].parentNode;
			parent.removeChild(RC[i]);
		}

		document.getElementById("item").innerHTML="<option value='azeri'>"+"�A�[���A�[�i"+"</option>"+"<option value='glnil'>"+"�O���j��"+"</option>"+"<option value='zales'>"+"�U���X"+"</option>"+"<option value='taris'>"+"�^���X"+"</option>"+"<option value='talotas'>"+"�^���^�X"+"</option>"+"<option value='febo'>"+"�t�B�[�{"+"</option>"+"<option value='foltoona'>"+"�t�H���g�D�[�i"+"</option>"+"<option value='hercules'>"+"�w���N���X"+"</option>"+"<option value='reblas'>"+"���u���X"+"</option>"+"<option value='locaba'>"+"���J�o"+"</option>";
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
			elem.id="maskna";
			document.getElementById("item").appendChild(elem);
			document.getElementById("maskan").innerHTML="�}�X�J��";
		}
result();
}

function weapon_select(){
	var RC=document.getElementById("item").getElementsByTagName("option");
		for(var i=RC.length-1; i>=0; -- i){
			var parent=RC[i].parentNode;
			parent.removeChild(RC[i]);
		}

		document.getElementById("item").innerHTML="<option value='eine'>"+"�A�C��"+"</option>"+"<option value='ceres'>"+"�Z���X"+"</option>"+"<option value='elsh'>"+"�G���V��"+"</option>"+"<option value='aswel'>"+"�A�Y�E�F��"+"</option>"+"<option value='kallis'>"+"�J���X"+"</option>"+"<option value='bales'>"+"�o���X"+"</option>"+"<option value='yuria'>"+"�����A"+"</option>"+"<option value='kurea'>"+"�N���A"+"</option>"+"<option value='ribelt'>"+"���x���g"+"</option>"+"<option value='kuzaka'>"+"�N�U�J"+"</option>";
		

result();
}

function sub_weapon_select(){
	var RC=document.getElementById("item").getElementsByTagName("option");
		for(var i=RC.length-1; i>=0; -- i){
			var parent=RC[i].parentNode;
			parent.removeChild(RC[i]);
		}

		var character_class=$("#character_class").val()
		
		
			if(character_class=="warrior" || character_class=="valkyrie"){
				document.getElementById("item").innerHTML="<option value='round'>"+"�~�`"+"</option>"+"<option value='militia'>"+"����"+"</option>"+"<option value='bengats'>"+"�x���K�b�c"+"</option>"+"<option value='eccion'>"+"�G�N�V�I��"+"</option>"+"<option value='kyte'>"+"�J�C�g"+"</option>";
		
			}else if(character_class=="ranger" || character_class=="wiz"){
				document.getElementById("item").innerHTML="<option value='dagger'>"+"�_�K�["+"</option>"+"<option value='militia'>"+"����"+"</option>"+"<option value='iron'>"+"�|�S"+"</option>"+"<option value='pelin'>"+"�y����"+"</option>";
			}else if(character_class=="sorceress"){
				document.getElementById("item").innerHTML="<option value='cule'>"+"�L���[��"+"</option>"+"<option value='militia'>"+"����"+"</option>"+"<option value='herick'>"+"�փ��b�N"+"</option>"+"<option value='juvle'>"+"�W������"+"<option value='lick'>"+"���b�N"+"</option>";
			}else if(character_class=="giant"){
				document.getElementById("item").innerHTML="<option value='cloth'>"+"�z"+"</option>"+"<option value='militia'>"+"����"+"</option>"+"<option value='seya'>"+"�Z�C��"+"</option>"+"<option value='olos'>"+"�I���X"+"<option value='teos'>"+"�e�I�X"+"</option>";
			}else if(character_class=="little_summoner"){
				document.getElementById("item").innerHTML="<option value='normal'>"+"���g��"+"</option>"+"<option value='asa'>"+"��"+"</option>"+"<option value='kaori'>"+"���蔠"+"</option>"+"<option value='bag'>"+"�Q��"+"<option value='long'>"+"����"+"</option>";
			}else if(character_class=="blader" || character_class=="tsubaki"){
				document.getElementById("item").innerHTML="<option value='horn'>"+"�p�|"+"</option>"+"<option value='black'>"+"��"+"</option>"+"<option value='whitearm'>"+"���p�R"+"</option>"+"<option value='white'>"+"��"+"<option value='blackarm'>"+"���p"+"</option>";
			}else{
				document.getElementById("item").innerHTML="<option value='old'>"+"�Â�"+"</option>"+"<option value='asa'>"+"��"+"</option>"+"<option value='militia'>"+"����"+"</option>"+"<option value='quiter'>"+"�N�C�^�["+"<option value='esteeq'>"+"�G�X�e�B�[�N"+"</option>"+"<option value='tade'>"+"�^�f"+"</option>";
			
			}
		var elem=document.createElement("option");
		elem.value="clea";
		elem.id="clea";
		document.getElementById("item").appendChild(elem);
		document.getElementById("clea").innerHTML="�N���A";
		
		var elem=document.createElement("option");
		elem.value="rosal";
		elem.id="rosal";
		document.getElementById("item").appendChild(elem);
		document.getElementById("rosal").innerHTML="���T��";
		
		var elem=document.createElement("option");
		elem.value="nubel";
		elem.id="nubel";
		document.getElementById("item").appendChild(elem);
		document.getElementById("nubel").innerHTML="�k�[�x��";

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
function set_number(){
var RC=document.getElementById("senzai").getElementsByTagName("option");
		for(var i=RC.length-1; i>=0; -- i){
			var parent=RC[i].parentNode;
			parent.removeChild(RC[i]);
		}
	var elem=document.createElement("option")
	for(var i=0; i<200; i++){
		var elem=document.createElement("option")
		elem.value=i;
		elem.innerHTML=i;
		document.getElementById("senzai").appendChild(elem);
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


	var elem=document.createElement("div");
	elem.value=0;
	elem.id="stack_data";
	document.getElementById("data_store").appendChild(elem);
	//�f�[�^�i�[�p�̃X�y�[�X�ɃX�^�b�N�l����荞�ށB���g�͂Ȃ��B�K�v�ɉ����ēǂݏo��
	//�ǂݍ��񂾂Ƃ��͂O
	var elem=document.createElement("div");
	elem.value=0;
	elem.id="kyoukati_data";
	document.getElementById("data_store").appendChild(elem);
	//�����l
	var elem=document.createElement("div");
	elem.value=0;
	elem.id="count_data";
	document.getElementById("data_store").appendChild(elem);
	//���������񐔂̋L�^
	var elem=document.createElement("div");
	elem.value=0;
	elem.id="count_true_data";
	document.getElementById("data_store").appendChild(elem);
	//�^���������񐔂̋L�^
	var elem=document.createElement("div");
	elem.value=0;
	elem.id="senzai_data";
	document.getElementById("data_store").appendChild(elem);
	//���݂̌��ݒl�A�ǂݍ��񂾂Ƃ���0
	var elem=document.createElement("div");
	elem.value=0;
	elem.id="volcs_count_data";
	document.getElementById("data_store").appendChild(elem);
	//���H���N�X�̋��уf�[�^�B������Ԃł͎g�p���Ȃ��̂�0
	var elem=document.createElement("div");
	elem.value=100;
	elem.id="taikyu_data";
	document.getElementById("data_store").appendChild(elem);
	//�܂����̑ϋv�����Y��ł���B
	var elem=document.createElement("div");
	elem.value=0;
	elem.id="memory_data";
	document.getElementById("data_store").appendChild(elem);
	//�L���̌��Ђ��g�������B���R������0
	var elem=document.createElement("div");
	elem.value=0;
	elem.id="same_data";
	document.getElementById("data_store").appendChild(elem);
	//���A�C�e���ŏC���������B����
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


