function facto(value) {
	if(value <= 0 || isNaN(value)){
		return 1;
	} else {
		return value * facto(value-1);
	}
}
