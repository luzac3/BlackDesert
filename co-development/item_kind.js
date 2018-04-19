function create_item1(){
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

function create_item2(){
	var item_kind=$("[name=item_kind]:checked").val()
	var character_class=$("#character_class").val()
	if(item_kind=="weapon"){
		weapon_select();
	
	}else{
		sub_weapon_select();
	}
	


}
