function repair(){
	var taikyu=$("#taikyu_data").val()
	//�ϋv���`�F�b�N
	var successive_repair=$("[name=successive_repair]").prop("checked")
	//�A���C����L���ɂ��Ă��邩�ǂ����`�F�b�N
	var repair_count=$("#max").val()
	//�A���C���̐ݒ�ϋv���`�F�b�N
	var memory=$("#memory_data").val();
	//�f�[�^�̈悩��L���f�[�^��ǂݏo��
	var same=$("#same_data").val()
	//���������������Ȃ肻���Ȃ̂�Same���ꏏ�ɓǂݏo��
	if(successive_repair==true){
	//�A���C�����L���ȏꍇ�A�I�[�g���y�A���Ăяo��
		auto_repair(taikyu,repair_count);
	}else{
	//�A���C�����L���łȂ��ꍇ
		var item=$("#item").val()
		//�A�C�e�����`�F�b�N�B�񕜗ʂ��Ⴄ�̂�
		var repair=$("[name=repair]:checked").val()
		//�ϋv�񕜗p�A�C�e���̃`�F�b�N
		if(repair=="memory" && item=="�N�U�J"){
		//�L����I��
			taikyu++;
			memory++;
			//�ϋv�ƋL���̎g�p�ʂ��v���X���ďI��
		}else if(repair=="memory" && item=="���x���g"){
			var taikyu=taikyu+5;
			memory++;
		}else if(repair=="memory" && item !="���x���g"&& item!="�N�U�J"){
			var taikyu=taikyu+10;
			memory++;
		}else{
			var taikyu=taikyu+10;
			same++;
		}
	}
	if(taikyu>100){
		var taikyu=100;
		//�ϋv��100���傫���Ȃ�Ȃ�
	}
$("#taikyu_data").val(taikyu)
$("#memory_data").val(memory)
$("#same_data").val(same)
}
function auto_repair(taikyu,repair_count){
	var item=$("#item").val()
	//�A�C�e�����`�F�b�N�B�񕜗ʂ��Ⴄ�̂�
	var repair=$("[name=repair]:checked").val()
	//�ϋv�񕜗p�A�C�e���̃`�F�b�N
	var memory=$("#memory_data").val()
	//�f�[�^�̈悩��L���f�[�^��ǂݏo��
	var same=$("#same_data").val()
	//���������������Ȃ肻���Ȃ̂�Same���ꏏ�ɓǂݏo��
	//��`���Ă����Ȃ��ƕϐ���F�����Ȃ����
	if(repair=="memory" && item=="�N�U�J"){
		//�L����I��
		while(taikyu<repair_count){
			taikyu++;
			memory++;
		}
	}else if(repair=="memory" && item=="���x���g"){
		while(taikyu<repair_count){
			var taikyu=taikyu+5;
			memory++;
		}
	}else if(repair=="memory" && item!="���x���g" && item!="�N�U�J"){
		while(taikyu<repair_count){
			var taikyu=taikyu+10;
			memory++;
		}
	}else{
		while(taikyu<repair_count){
			var taikyu=taikyu+10;
			same++;
		}
	}
	
	if(taikyu>100){
		var taikyu=100;
		//�ϋv��100���傫���Ȃ�Ȃ�
	}
$("#taikyu_data").val(taikyu)
$("#memory_data").val(memory)
$("#same_data").val(same)
}
function calculate(){

	var item_kind=$("[name=item_kind]:checked").val()
	//���W�I�{�^���̃A�C�e����ނ��`�F�b�N
	var character_class=$("#character_class").val()
	//�L�����N�^�[�N���X���`�F�b�N
	var item=$("#item").val()
	//item�̖��O���`�F�b�N(�N�U�J�Ȃ�)
	var stack=parseInt($("#stack_data").val())//�X�^�b�N
	var taikyu=parseInt($("#taikyu_data").val())//�ϋv
	var auto_repair_v=$("[name=auto_repair]").prop("checked")
	//�I�[�g���y�A�̃`�F�b�N���m�F
	var successive_repair=$("[name=successive_repair]").prop("checked")
	//�A���C���̃`�F�b�N���m�F
	var repair_count=parseInt($("#max").val())
	//�A���C���̐ݒ�ϋv���`�F�b�N
	var senzai=parseInt($("#senzai_data").val())
	//���ݒl���m�F
	var count=parseInt($("#count_data").val())
	var count_true=parseInt($("#count_true_data").val())
	//�񐔂��L�^
	
	var clon=$("[name=clon]").prop("checked")
	var force=$("[name=force]").prop("checked")
	var tatake=$("[name=tatake]").prop("checked")
	if ($("[id=vol]").prop("checked")){
		var vol=$("#vol").val()
	}
	//�N�����΁A��������܂Œ@���̓��ꕔ���`�F�b�N
	//�����˔j�ɂ͋����p�֐����g�p���A�u���C�N����B
	
	while(taikyu>0){
		if(taikyu<repair_count && auto_repair_v==true && successive_repair==true){
			//�I�[�g���y�A�ƘA���C���̗����Ƀ`�F�b�N������A�ϋv���ݒ萔�l�ȉ�
			auto_repair(taikyu,repair_count);
			var taikyu=parseInt($("#taikyu_data").val())//�ϋv
		}else if(taikyu<20 && auto_repair_v==true && successive_repair==false){
			//�I�[�g���y�A�̂݃`�F�b�N����Ă���B
			auto_repair(taikyu,20);
			var taikyu=parseInt($("#taikyu_data").val())//�ϋv
		}else if(taikyu>19){
			//�������Ȃ�
		}else{
			//�I�[�g���y�A�Ȃ��A�ϋv��20����
			alert("�ϋv���Ⴗ���܂��I�C�����Ă�������")
			break;
			//������~
		}
		var count_inner=count+1;
		var count_true_inner=count_true+0;
		var stack_inner=stack+1;
		var taikyu_inner=taikyu-5;
		//�����l�p�̕ϐ���p�ӁB�����łȂ��Ɩ���L�^����Ă��܂��B
		var through=0;
		var toppa=Math.random();
		var succesefull=1;
		//�������l�̐ݒ�B����E�����͊m��
		var low=0;
		var failed_alert=0;
		//�ቺ�p�̓������l�B�t���O�ɋ߂�
		if(clon==true){
			//�N�����΂��g���ꍇ�A�X�^�b�N�͑����Ȃ�
			var stack_inner=stack+0;
		}
		if(force==true && item_kind=="weapon" || force==true && item_kind=="sub_weapon"){
		
				if(senzai==7){
					var count_inner=count+2;
					var taikyu_inner=taikyu-10;
					var success="�˔j�����I�@����7��8";
				}else if(senzai==8){
					var count_inner=count+3;
					var taikyu_inner=taikyu-20;
					var success="�˔j�����I�@����8��9";
				}else if(senzai==9){
					var count_inner=count+5;
					var taikyu_inner=taikyu-30;
					var success="�˔j�����I�@����9��10";
				}else if(senzai==10){
					var count_inner=count+7;
					var taikyu_inner=taikyu-40;
					var success="�˔j�����I�@����10��11";
				}else if(senzai==11){
					var count_inner=count+11;
					var taikyu_inner=taikyu-50;
					var success="�˔j�����I�@����11��12";
				}else if(senzai==12){
					var count_inner=count+17;
					var taikyu_inner=taikyu-60;
					var success="�˔j�����I�@����12��13";
				}else if(senzai==13){
					var count_inner=count+27;
					var taikyu_inner=taikyu-70;
					var success="�˔j�����I�@����13��14";
				}else if(senzai==14){
					var count_inner=count+29;
					var taikyu_inner=taikyu-100;
					var success="�˔j�����I�@����14��15";
				}
			
		
		}else if (item_kind=="weapon" || item_kind=="sub_weapon"){
				//�����l���Ⴄ����ˁB�����ŕ��򂳂���
					if (senzai<7){
					var through=0;
					//���ɏ����͂Ȃ�
				}else if(senzai==7){
					//�������炪�{�ԁB�m���_�̐��E
					var succesefull=(parseFloat(30)+parseFloat(3)*stack)/100;
					var success="�˔j�����I�@����7��8";
				}else if(senzai==8){
					var succesefull=(parseFloat(20)+parseFloat(2)*stack)/100;
					var success="�˔j�����I�@����8��9";
				}else if(senzai==9){
					var succesefull=(parseFloat(15)+parseFloat(1.5)*stack)/100;
					var success="�˔j�����I�@����9��10";
				}else if(senzai==10){
					var succesefull=(parseFloat(12.5)+parseFloat(1.25)*stack)/100;
					var success="�˔j�����I�@����10��11";
				}else if(senzai==11){
					var succesefull=(parseFloat(10)+parseFloat(0.75)*stack)/100;
					var success="�˔j�����I�@����11��12";
				}else if(senzai==12){
					var succesefull=(parseFloat(7.5)+parseFloat(0.63)*stack)/100;
					var success="�˔j�����I�@����12��13";
				}else if(senzai==13){
					var succesefull=(parseFloat(5)+parseFloat(0.5)*stack)/100;
					var success="�˔j�����I�@����13��14";
				}else if(senzai==14){
					var succesefull=(parseFloat(2.5)+parseFloat(0.5)*stack)/100;
					var success="�˔j�����I�@����14��15";
				}else if(senzai==15){
					//��������^���ݓ˔j
					var succesefull=(parseFloat(15)+parseFloat(1.5)*stack)/100;
					var success="�˔j�����I�@����15���^�T";
					var count_inner=count+0;
					var count_trueinner=count_true+1;
					var taikyu_inner=taikyu-10;
					var stack_inner=stack+2;
					if(clon==true){
						//�N�����΂��g���ꍇ�A�X�^�b�N�͑����Ȃ�
						var stack_inner=stack+0;
					}
				}else if(senzai==16){
					var succesefull=(parseFloat(7.5)+parseFloat(0.75)*stack)/100;
					var success="�˔j�����I�@���ݐ^�T���^�U";
					var count_inner=count+0;
					var count_trueinner=count_true+1;
					var taikyu_inner=taikyu-10;
					var stack_inner=stack+3;
					if(clon==true){
						//�N�����΂��g���ꍇ�A�X�^�b�N�͑����Ȃ�
						var stack_inner=stack+0;
					}
				}else if(senzai==17){
					var succesefull=(parseFloat(5)+parseFloat(0.5)*stack)/100;
					var success="�˔j�����I�@���ݐ^�U���^�V";
					var count_inner=count+0;
					var count_trueinner=count_true+1;
					var taikyu_inner=taikyu-10;
					var stack_inner=stack+4;
					var through=failed_alert=1;
					if(clon==true){
						//�N�����΂��g���ꍇ�A�X�^�b�N�͑����Ȃ�
						var stack_inner=stack+0;
						var failed="�˔j���s�E�E�E�@(���ݗ͂͒ቺ���܂���)";
					}else{
						var failed="�˔j���s�E�E�E�@���ݗ͒ቺ�@�^�U���^�T";
						//���s���ꎞ��~�Ǝ��s�A���[�g�̕\��
						var low=1;
					}
				}else if(senzai==18){
					var succesefull=(parseFloat(2.5)+parseFloat(0.25)*stack)/100;
					var success="�˔j�����I�@���ݐ^�V���^�W";
					var count_inner=count+0;
					var count_trueinner=count_true+1;
					var taikyu_inner=taikyu-10;
					var stack_inner=stack+5;
					var through=failed_alert=1;
					if(clon==true){
						//�N�����΂��g���ꍇ�A�X�^�b�N�͑����Ȃ�
						var stack_inner=stack+0;
						var failed="�˔j���s�E�E�E�@(���ݗ͂͒ቺ���܂���)";
						//���s���ꎞ��~�Ǝ��s�A���[�g�̕\��
					}else{
						var failed="�˔j���s�E�E�E�@���ݗ͒ቺ�@�^�V���^�U";
						//���s���ꎞ��~�Ǝ��s�A���[�g�̕\��
						var low=1;
					}
				}else if(senzai==19){
					var succesefull=(parseFloat(1.5)+parseFloat(0.15)*stack)/100;
					var success="�˔j�����I�@���ݐ^�V���^�W";
					var count_inner=count+0;
					var count_trueinner=count_true+1;
					var taikyu_inner=taikyu-10;
					var stack_inner=stack+6;
					var through=failed_alert=1;
					
					//���s���ꎞ��~�Ǝ��s�A���[�g�̕\��
					if(clon==true){
						//�N�����΂��g���ꍇ�A�X�^�b�N�͑����Ȃ�
						var stack_inner=stack+0;
						var failed="�˔j���s�E�E�E�@(���ݗ͂͒ቺ���܂���)";
						//���s���ꎞ��~�Ǝ��s�A���[�g�̕\��
					}else{
						var failed="�˔j���s�E�E�E�@���ݗ͒ቺ�@�^�W���^�V";
						var low=1;
					}
				}else{
					alert("�^�X�ł������ł���̂��I����ȏ�͖������I�A�L���������I")
					break;
				
				}
		}else if(item_kind!="weapon" && item_kind!="sub_weapon" && force==true){
				if(senzai==5){
					var count_inner=count+2;
					var taikyu_inner=taikyu-10;
					var success="�˔j�����I�@����5��6";
				}else if(senzai==6){
					var count_inner=count+3;
					var taikyu_inner=taikyu-10;
					var success="�˔j�����I�@����7��8";
				}else if(senzai==7){
					var count_inner=count+4;
					var taikyu_inner=taikyu-10;
					var success="�˔j�����I�@����7��8";
				}else if(senzai==8){
					var count_inner=count+5;
					var taikyu_inner=taikyu-20;
					var success="�˔j�����I�@����7��8";
				}else if(senzai==9){
					var count_inner=count+7;
					var taikyu_inner=taikyu-30;
					var success="�˔j�����I�@����9��10";
				}else if(senzai==10){
					var count_inner=count+9;
					var taikyu_inner=taikyu-40;
					var success="�˔j�����I�@����10��11";
				}else if(senzai==11){
					var count_inner=count+11;
					var taikyu_inner=taikyu-50;
					var success="�˔j�����I�@����11��12";
				}else if(senzai==12){
					var count_inner=count+17;
					var taikyu_inner=taikyu-60;
					var success="�˔j�����I�@����12��13";
				}else if(senzai==13){
					var count_inner=count+23;
					var taikyu_inner=taikyu-70;
					var success="�˔j�����I�@����13��14";
				}else if(senzai==14){
					var count_inner=count+29;
					var taikyu_inner=taikyu-100;
					var success="�˔j�����I�@����14��15";
				}
				
			
		}else{
				if (senzai<5){
					var through=0;
					//���ɏ����͂Ȃ�
				}else if(senzai==5){
					//�������炪�{�ԁB�m���_�̐��E
					var succesefull=(parseFloat(50)+parseFloat(5)*stack)/100;
					var success="�˔j�����I�@����5��6";
				}else if(senzai==6){
					var succesefull=(parseFloat(40)+parseFloat(4)*stack)/100;
					var success="�˔j�����I�@����7��8";
				}else if(senzai==7){
					//�������炪�{�ԁB�m���_�̐��E
					var succesefull=(parseFloat(30)+parseFloat(3)*stack)/100;
					var success="�˔j�����I�@����7��8";
				}else if(senzai==8){
					var succesefull=(parseFloat(20)+parseFloat(2)*stack)/100;
					var success="�˔j�����I�@����8��9";
				}else if(senzai==9){
					var succesefull=(parseFloat(15)+parseFloat(1.5)*stack)/100;
					var success="�˔j�����I�@����9��10";
				}else if(senzai==10){
					var succesefull=(parseFloat(12.5)+parseFloat(1.25)*stack)/100;
					var success="�˔j�����I�@����10��11";
				}else if(senzai==11){
					var succesefull=(parseFloat(10)+parseFloat(0.75)*stack)/100;
					var success="�˔j�����I�@����11��12";
				}else if(senzai==12){
					var succesefull=(parseFloat(7.5)+parseFloat(0.63)*stack)/100;
					var success="�˔j�����I�@����12��13";
				}else if(senzai==13){
					var succesefull=(parseFloat(5)+parseFloat(0.5)*stack)/100;
					var success="�˔j�����I�@����13��14";
				}else if(senzai==14){
					var succesefull=(parseFloat(2.5)+parseFloat(0.5)*stack)/100;
					var success="�˔j�����I�@����14��15";
				}else if(senzai==15){
					//��������^���ݓ˔j
					var succesefull=(parseFloat(15)+parseFloat(1.5)*stack)/100;
					var success="�˔j�����I�@����15���^�T";
					var count_inner=count+0;
					var count_trueinner=count_true+1;
					var taikyu_inner=taikyu-10;
					var stack_inner=stack+2;
					if(clon==true){
						//�N�����΂��g���ꍇ�A�X�^�b�N�͑����Ȃ�
						var stack_inner=stack+0;
					}
				}else if(senzai==16){
					var succesefull=(parseFloat(7.5)+parseFloat(0.75)*stack)/100;
					var success="�˔j�����I�@���ݐ^�T���^�U";
					var count_inner=count+0;
					var count_trueinner=count_true+1;
					var taikyu_inner=taikyu-10;
					var stack_inner=stack+3;
					if(clon==true){
						//�N�����΂��g���ꍇ�A�X�^�b�N�͑����Ȃ�
						var stack_inner=stack+0;
					}
				}else if(senzai==17){
					var succesefull=(parseFloat(5)+parseFloat(0.5)*stack)/100;
					var success="�˔j�����I�@���ݐ^�U���^�V";
					var count_inner=count+0;
					var count_trueinner=count_true+1;
					var taikyu_inner=taikyu-10;
					var stack_inner=stack+4;
					var through=failed_alert=1;
					if(clon==true){
						//�N�����΂��g���ꍇ�A�X�^�b�N�͑����Ȃ�
						var stack_inner=stack+0;
						var failed="�˔j���s�E�E�E�@(���ݗ͂͒ቺ���܂���)";
					}else{
						var failed="�˔j���s�E�E�E�@���ݗ͒ቺ�@�^�U���^�T";
						//���s���ꎞ��~�Ǝ��s�A���[�g�̕\��
						var low=1;
					}
				}else if(senzai==18){
					var succesefull=(parseFloat(2.5)+parseFloat(0.25)*stack)/100;
					var success="�˔j�����I�@���ݐ^�V���^�W";
					var count_inner=count+0;
					var count_trueinner=count_true+1;
					var taikyu_inner=taikyu-10;
					var stack_inner=stack+5;
					var through=failed_alert=1;
					if(clon==true){
						//�N�����΂��g���ꍇ�A�X�^�b�N�͑����Ȃ�
						var stack_inner=stack+0;
						var failed="�˔j���s�E�E�E�@(���ݗ͂͒ቺ���܂���)";
						//���s���ꎞ��~�Ǝ��s�A���[�g�̕\��
					}else{
						var failed="�˔j���s�E�E�E�@���ݗ͒ቺ�@�^�V���^�U";
						//���s���ꎞ��~�Ǝ��s�A���[�g�̕\��
						var low=1;
					}
				}else if(senzai==19){
					var succesefull=(parseFloat(1.5)+parseFloat(0.15)*stack)/100;
					var success="�˔j�����I�@���ݐ^�V���^�W";
					var count_inner=count+0;
					var count_trueinner=count_true+1;
					var taikyu_inner=taikyu-10;
					var stack_inner=stack+6;
					var through=failed_alert=1;
					
					//���s���ꎞ��~�Ǝ��s�A���[�g�̕\��
					if(clon==true){
						//�N�����΂��g���ꍇ�A�X�^�b�N�͑����Ȃ�
						var stack_inner=stack+0;
						var failed="�˔j���s�E�E�E�@(���ݗ͂͒ቺ���܂���)";
						//���s���ꎞ��~�Ǝ��s�A���[�g�̕\��
					}else{
						var failed="�˔j���s�E�E�E�@���ݗ͒ቺ�@�^�W���^�V";
						var low=1;
					}
				}else{
					alert("�^�X�ł������ł���̂��I����ȏ�͖������I�A�L���������I")
					break;
				}
			
		}
		if(0>taikyu_inner){
				alert("�ϋv���Ⴗ���܂��I�C�����Ă�������(����"+taikyu_inner*-1+"�K�v�ł�)")
				break;
				//������~
			
			}
		if(toppa<succesefull){//���ۂ̌v�Z
							
			clicked(through);
			if(senzai<6){
				//�A���[�g�Ȃ�
			}else if(senzai<7 && item_kind=="weapon" || senzai<8 && item_kind=="sub_weapon"){
				//�A���[�g�Ȃ�
			}else{
				alert(success);
				var stack=0;
			}
			var count=count_inner;
			//����
			var count_true=count_true_inner;
			//�^�̏ꍇ
			senzai++;
			
		}else{
			clicked(through);
			//����
			var count=count_inner;
			//����
			var count_true=count_true_inner;
			//�^�̏ꍇ
			var taikyu=taikyu_inner;
			var stack=stack_inner;
			if(failed_alert==1){
				alert(failed);
			}
			if (low==1){
				senzai--;
			
			}
		
		}
		$("#stack_data").val(stack)
		$("#taikyu_data").val(taikyu)
		$("#senzai_data").val(senzai)
		$("#count_data").val(count)
		$("#coutn_true_data").val(count_true)
		//�X�^�b�N�Ƒϋv���L�^
			
	result();
	//�\����K������
	
		if(tatake==false){//�@��������̂łȂ���΃��[�v�𔲂���
			break;
		}else if(tatake==true && toppa<succesefull){
			break;
		}
	}

}

function btnDisable(){ //�@
  document.getElementById("toppa").disabled = true;
  clearInterval(statusDis);
}

function btnAble(){  //�A
  document.getElementById("toppa").disabled = false;
  clearInterval(statusAble);
}


function clicked(through){ //�@ + �A
	var nofreeze=$("[name=freeze]").prop("checked")
	//�ꎞ��~���Ȃ��ꍇ�A���������߂�
	if (nofreeze==true || through==0){
		//�������Ȃ�
	}else{
 		 statusDis  = setInterval(btnDisable , 1); //�{�^��������������ɇ@���Ăяo��
 		 statusAble = setInterval(btnAble , 1000); //�{�^���������ĎO�b��ɇA���Ăяo��
 	}
}

function syokisenzai(){
	senzai=parseFloat($("#senzai").val());
}


