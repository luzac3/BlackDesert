function result(){
	var item_kind=$("[name=item_kind]:checked").val()
	//���W�I�{�^���̃A�C�e����ނ��`�F�b�N
	var character_class=$("#character_class").val()
	//�L�����N�^�[�N���X���`�F�b�N
	var item=$("#item option:selected").text();
	//item�̖��O���`�F�b�N(�N�U�J�Ȃ�)
		var stack=$("#stack_data").val()
		var taikyu=$("#taikyu_data").val()
		var senzai=$("#senzai_data").val()
		var count=$("#count_data").val()
		var count_true=$("#count_true_data").val()
		var memory=$("#memory_data").val()
		var vol=$("#volcs_count_data").val()
		var same=$("#same_data").val()
	if(senzai<6 || item_kind=="weapon" && senzai<8 || item_kind=="sub_weapon" && senzai<8){
		document.getElementById("force").disabled=true;
			//�����˔j�ł���悤��
	}else{
		document.getElementById("force").disabled=false;
	
	}
		//�������牺�A�l�i���͈ʒu
			var bs_ds=270000;
			var bs_ds_c=[bs_ds].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
			var bs_dts=3500000;
			var bs_dts_c=[bs_dts].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
			var bs_ws=27000;
			var bs_ws_c=[bs_ws].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
			var bs_wts=7800000;
			var bs_wts_c=[bs_wts].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
			var memory_s=750000;
			var memory_s_c=[bs_ds].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
			var same_s=0;//�������ł��B�Ȃ񂩍l����
			//���̂܂܌v�Z���Ă��܂������킯���Ȃ��̂ŁA���v�l��ʂɊ֐��C�����Ă�������
		
			var bs_ds_all=0;
			var bs_dts_all=0;
			var bs_ws_all=0;
			var bs_wts_all=0;
			var memory_s_all=0;
			//�Ƃ肠�����S��0�ɂ��Ă����B
		//�����܂�
		
		//�e��f�[�^��ǂݍ���
		if(senzai==0){
			var senzai_appear="";
		}else if(senzai<6 || item_kind=="weapon" && senzai<8 || item_kind=="sub_weapon" && senzai<8){
			var senzai_appear="�{"+senzai;
			document.getElementById("force").disabled=true;
			//�����˔j�ł��Ȃ��悤��
		}else if(senzai==15){
			var senzai_appear="�{"+senzai;
			document.getElementById("force").disabled=true;
			//�����˔j�ł��Ȃ��悤��
			document.getElementById("tatake").disabled=false;
			//��������܂Œ@���͉̂\��
		}else if(senzai==16){
			var senzai_appear="�^�T";
			document.getElementById("force").disabled=true;
			//�����˔j�ł��Ȃ��悤��
			document.getElementById("tatake").disabled=false;
			//��������܂Œ@���͉̂\��
		}else if(senzai==17){
			var senzai_appear="�^�U";
			document.getElementById("force").disabled=true;
			//�����˔j�ł��Ȃ��悤��
			document.getElementById("tatake").disabled=true;
			//��������܂Œ@���͎̂��s�����エ�������Ȃ�̂ŕs��
		}else if(senzai==18){
			var senzai_appear="�^�V";
			document.getElementById("force").disabled=true;
			//�����˔j�ł��Ȃ��悤��
			document.getElementById("tatake").disabled=true;
			//��������܂Œ@���͎̂��s�����エ�������Ȃ�̂ŕs��
		}else if(senzai==19){
			var senzai_appear="�^�W";
			document.getElementById("force").disabled=true;
			//�����˔j�ł��Ȃ��悤��
			document.getElementById("tatake").disabled=true;
			//��������܂Œ@���͎̂��s�����エ�������Ȃ�̂ŕs��
		}else if(senzai==20){
			var senzai_appear="�^�X";
			document.getElementById("force").disabled=true;
			//�����˔j�ł��Ȃ��悤��
			document.getElementById("tatake").disabled=true;
			//��������܂Œ@���͎̂��s�����エ�������Ȃ�̂ŕs��
		}else{
			var senzai_appear="�{"+senzai;
			document.getElementById("force").disabled=false;
			document.getElementById("tatake").disabled=false;
			//�ǂ�����J��
		}
		document.getElementById("result_stack").innerHTML="���݂̃X�^�b�N���F"+stack;
		document.getElementById("result_taikyu").innerHTML="�ϋv�l�F"+taikyu+"/100";
		
	
	if(item_kind=="weapon"){
	//����̏ꍇ�A�A�C�e���͌Œ�A�{�L�����N�^�[�N���X���Ƃ̕��햼�ŕ\��
		if(character_class=="warrior" || character_class=="valkyrie"){
			document.getElementById("item_name").innerHTML=senzai_appear+item+"�\�[�h";
		}else if(character_class=="ranger"){
				document.getElementById("item_name").innerHTML=senzai_appear+item+"�����O�{�E";
		}else if(character_class=="sorceress"){
			document.getElementById("item_name").innerHTML=senzai_appear+item+"�아";
		}else if(character_class=="giant"){
			document.getElementById("item_name").innerHTML=senzai_appear+item+"�A�b�N�X";
		}else if(character_class=="little_summoner" || character_class=="kunoichi" || character_class=="ninja"){
			
				document.getElementById("item_name").innerHTML=senzai_appear+item+"����";
		}else if(character_class=="blader" || character_class=="tsubaki"){
				document.getElementById("item_name").innerHTML=senzai_appear+item+"����";
		}else if(character_class=="wiz"){
				document.getElementById("item_name").innerHTML=senzai_appear+item+"�X�^�b�t";
		}
		var bs_ws_all=bs_ws*count;
		var bs_wts_all=bs_wts*count_true;
		var bs_ws_all_c=[bs_ws_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		var bs_wts_all_c=[bs_wts_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		document.getElementById("bs_w").innerHTML="����������("+bs_ws_c+")�F"+count+"��="+bs_ws_all_c+"S";
		document.getElementById("bs_tw").innerHTML="������^�����("+bs_wts_c+")�F"+count_true+"��="+bs_wts_all_c+"S";
		
	
	}else if(item_kind=="sub_weapon"){
		if(character_class=="warrior" || character_class=="valkyrie"){
			if(item=="�~�`" ||item=="����"){
				document.getElementById("item_name").innerHTML=senzai_appear+item+"�̏�";
			}else{
				document.getElementById("item_name").innerHTML=senzai_appear+item+"�V�[���h";
			}
		}else if(character_class=="ranger" || character_class=="wiz"){
			if(item=="�_�K�["){
				document.getElementById("item_name").innerHTML=senzai_appear+item+"";
			}else{
				document.getElementById("item_name").innerHTML=senzai_appear+item+"�_�K�[";
			}
		}else if(character_class=="sorceress"){
			document.getElementById("item_name").innerHTML=senzai_appear+item+"�^���X�}��";
		}else if(character_class=="giant"){
			document.getElementById("item_name").innerHTML=senzai_appear+item+"�g�ݎ�����";
		}else if(character_class=="little_summoner"){
			if(item=="���g��"){
				document.getElementById("item_name").innerHTML=senzai_appear+item+"";
			}else{
				document.getElementById("item_name").innerHTML=senzai_appear+item+"���g��";
			}
		}else if(character_class=="blader" || character_class=="tsubaki"){
			if(item=="�N���A"){
				document.getElementById("item_name").innerHTML=senzai_appear+item+"�R�|";
			}else{
				document.getElementById("item_name").innerHTML=senzai_appear+item+"�|";
			}
		}else if(character_class=="kunoichi" || character_class=="ninja"){
			
				document.getElementById("item_name").innerHTML=senzai_appear+item+"�ꖳ/�藠��";
		}
		
		var bs_ws_all=bs_ws*count;
		var bs_wts_all=bs_wts*count_true;
		var bs_ws_all_c=[bs_ws_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		var bs_wts_all_c=[bs_wts_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		document.getElementById("bs_w").innerHTML="����������("+bs_ws_c+")�F"+count+"��="+bs_ws_all_c+"S";
		document.getElementById("bs_tw").innerHTML="������^�����("+bs_wts_c+")�F"+count_true+"��="+bs_wts_all_c+"S";
	
	}else if(item_kind=="helm"){
		if(item=="�t�B�[�{"){
			document.getElementById("item_name").innerHTML=senzai_appear+"�t�B�[�{�̃X�^�~�i�w����";
		}else if(item=="�t�H���g�D�[�i"){
			document.getElementById("item_name").innerHTML=senzai_appear+"�t�H���g�D�[�i�̍K�^�w����";
		}else if(item=="�w���N���X"){
			document.getElementById("item_name").innerHTML=senzai_appear+"�w���N���X�̃I�[���w����";
		}else if(item=="�M�A�X"){
			document.getElementById("item_name").innerHTML=senzai_appear+"�M�A�X�̃w����";
		}else{
			document.getElementById("item_name").innerHTML=senzai_appear+item+"�w����";
		}
		var bs_ds_all=bs_ds*count;
		var bs_dts_all=bs_dts*count_true;
		var bs_ds_all_c=[bs_ws_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		var bs_dts_all_c=[bs_wts_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		document.getElementById("bs_d").innerHTML="������h���("+bs_ds_c+")�F"+count+"��="+bs_ds_all_c+"S";
		document.getElementById("bs_td").innerHTML="������^�h���("+bs_dts_c+")�F"+count_true+"��="+bs_dts_all_c+"S";
	}else if(item_kind=="armour"){
		if(item=="�t�B�[�{"){
			document.getElementById("item_name").innerHTML=senzai_appear+"�t�B�[�{�̃X�^�~�i�A�[�}�[";
		}else if(item=="�t�H���g�D�[�i"){
			document.getElementById("item_name").innerHTML=senzai_appear+"�t�H���g�D�[�i�̍K�^�A�[�}�[";
		}else if(item=="�w���N���X"){
			document.getElementById("item_name").innerHTML=senzai_appear+"�w���N���X�̃I�[���A�[�}�[";
		}else if(item=="���b�h�m�[�Y"){
			document.getElementById("item_name").innerHTML=senzai_appear+"���b�h�m�[�Y�̃A�[�}�[";
		}else if(item=="��݂Ȗ؂̐���"){
			document.getElementById("item_name").innerHTML=senzai_appear+"��݂Ȗ؂̐���̊Z";
		}else{
			document.getElementById("item_name").innerHTML=senzai_appear+item+"�A�[�}�[";
		}
		
		var bs_ds_all=bs_ds*count;
		var bs_dts_all=bs_dts*count;
		var bs_ds_all_c=[bs_ws_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		var bs_dts_all_c=[bs_wts_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		document.getElementById("bs_d").innerHTML="������h���("+bs_ds_c+")�F"+count+"��="+bs_ds_all_c*+"S";
		document.getElementById("bs_td").innerHTML="������^�h���("+bs_dts_c+")�F"+count_true+"��="+bs_dts_all_c+"S";
	}else if(item_kind=="globe"){
		if(item=="�t�B�[�{"){
			document.getElementById("item_name").innerHTML=senzai_appear+"�t�B�[�{�̃X�^�~�i�O���[�u";
		}else if(item=="�t�H���g�D�[�i"){
			document.getElementById("item_name").innerHTML=senzai_appear+"�t�H���g�D�[�i�̍K�^�O���[�u";
		}else if(item=="�w���N���X"){
			document.getElementById("item_name").innerHTML=senzai_appear+"�w���N���X�̃I�[���O���[�u";
		}else if(item=="�x�O"){
			document.getElementById("item_name").innerHTML=senzai_appear+"�x�O�̃O���[�u";
		}else{
			document.getElementById("item_name").innerHTML=senzai_appear+item+"�O���[�u";
		}
		var bs_ds_all=bs_ds*count;
		var bs_dts_all=bs_dts*count_true;
		var bs_ds_all_c=[bs_ws_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		var bs_dts_all_c=[bs_wts_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		document.getElementById("bs_d").innerHTML="������h���("+bs_ds_c+")�F"+count+"��="+bs_ds_all_c+"S";
		document.getElementById("bs_td").innerHTML="������^�h���("+bs_dts_c+")�F"+count_true+"��="+bs_dts_all_c+"S";
	}else if(item_kind=="shoose"){
		if(item=="�t�B�[�{"){
			document.getElementById("item_name").innerHTML=senzai_appear+"�t�B�[�{�̃X�^�~�i�V���[�Y";
		}else if(item=="�t�H���g�D�[�i"){
			document.getElementById("item_name").innerHTML=senzai_appear+"�t�H���g�D�[�i�̍K�^�V���[�Y";
		}else if(item=="�w���N���X"){
			document.getElementById("item_name").innerHTML=senzai_appear+"�w���N���X�̃I�[���V���[�Y";
		}else if(item=="�}�X�J��"){
			document.getElementById("item_name").innerHTML=senzai_appear+"�}�X�J���̃V���[�Y";
		}else{
			document.getElementById("item_name").innerHTML=senzai_appear+item+"�V���[�Y";
		}
		var bs_ds_all=bs_ds*count;
		var bs_dts_all=bs_dts*count_true;
		var bs_ds_all_c=[bs_ws_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		var bs_dts_all_c=[bs_wts_all].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
		document.getElementById("bs_d").innerHTML="������h���("+bs_ds_c+")�F"+count+"��="+bs_ds_all_c+"S";
		document.getElementById("bs_td").innerHTML="������^�h���("+bs_dts_c+")�F"+count_true+"��="+bs_dts_all_c+"S";
	}
	var memory_s_all=memory_s*memory;
	var all_silver=bs_ds_all+bs_dts_all+bs_ws_all+bs_wts_all+memory_s_all;
	var all_silver_c=[all_silver].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
	var sale=all_silver*0.7;
	var sale_c=[sale].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
	var plemium=sale*1.25;
	var plemium_c=[plemium].toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
	
	document.getElementById("used_memory").innerHTML="������L���̌���("+memory_s+")�F"+memory+"="+memory_s_all+"S";
	document.getElementById("used_vol").innerHTML="��������H���N�X�̋��сF"+vol;
	document.getElementById("used_same").innerHTML="���������A�C�e��"+same;
	document.getElementById("all_silver").innerHTML="���z�F"+all_silver_c+"S";
	document.getElementById("sale").innerHTML="�E�����A�C�e���𔄂��Ă�����F"+sale_c+"S";
	document.getElementById("plemium").innerHTML="�v���p�P�K�p�ŁF"+plemium_c+"S";
	

}


