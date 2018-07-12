function person() {
	var name = "andrew"
	var getName = function(){
		return name;
	}
}

var me = new person();

me.getName;