Number.prototype.toRoman = function() {

	// Array of roman characters that signify digits 1 and 5
	var oneArray = ["I", "X", "C", "M"];
	var fiveArray = ["V", "L", "D"];
	
	// First drop the decimal and any following digits
	var roundNum = Math.floor(this);
	var romanNum = "";
	
	// Check if number is 0 or negative
	if (roundNum <= 0) {
	   return "Your number cannot be zero or negative";
	}
	
	// Check if number is too high
	if (roundNum >= 4000) {
	   return "Your number cannot be higher than 3999";
	}
	
	function translateDigit() {
	   // Figure out which power of 10 the first digit is in
	   var charIndex = Math.floor(Math.log10(roundNum));
	   
	   // Figure out the first digit
	   var checkDigit = Math.floor(roundNum/Math.pow(10,charIndex));
	   
	   // Add appropriate characters if digit is 9, subtract that off
	   if (checkDigit == 9) {
	      romanNum += oneArray[charIndex] + oneArray[charIndex + 1];
	      roundNum = roundNum - 9*(Math.pow(10,charIndex));
	      checkDigit = 0;
	   }
	   
	   // Add appropriate character if digit is greater than 5, subtract that off
	   if (checkDigit >= 5) {
	      romanNum += fiveArray[charIndex];
	      roundNum = roundNum - 5*(Math.pow(10,charIndex));
	      checkDigit = checkDigit - 5;
	   }
	   
	   // Add appropriate character if digit is 4, subtract that off
	   if (checkDigit == 4) {
	      romanNum += oneArray[charIndex] + fiveArray[charIndex];
	      roundNum = roundNum - 4*(Math.pow(10,charIndex));
	   // Add appropriate characters if digit is 1-3, subtract that off
	   } else {
	      for (i=1; i<=checkDigit; i++) {
	         romanNum += oneArray[charIndex];
	      }
	      roundNum = roundNum - checkDigit*(Math.pow(10,charIndex));
	   }
	}
	
	// Run translateDigit() until number is below 10, and then run it once more
	while (roundNum >= 10) {
	   translateDigit();
	}
	translateDigit();
	
	return romanNum;

};
