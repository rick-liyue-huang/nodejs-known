	
	function toDouble(n) {
		return n<10?'0'+n:''+n;
	}  

	 module.exports = {

	 	time2date: function(timestamp) {
	 		let oDate = new Date();
	 		oDate.setTime(timestamp*1000);

	 		return  oDate.getFullYear()+ '-' 
			 		+ toDouble(oDate.getMonth()+1)+ '-' 
			 		+ toDouble(oDate.getDate()) + ' ' 
			 		+ toDouble(oDate.getHours()) + ':'
			 		+ toDouble(oDate.getMinutes()) + ':'
			 		+ toDouble(oDate.getSeconds());
	 	}
	 };