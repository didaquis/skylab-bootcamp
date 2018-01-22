describe("Shuffle method", function() {
	var originalArray;
	var newArray;

	beforeEach(function() {
		originalArray = new Array( 1,2,3,'a','b','c','NyanCat' );
	});




	function arraysAreNotTheSame(){
		newArray = originalArray.shuffle();
		if(originalArray.length <= 1){
			expect( newArray ).toEqual( originalArray );
		}else{
			expect( newArray ).not.toEqual( originalArray );
		}
	}

	it("arrays are not the same", arraysAreNotTheSame);




	function newArrayIsShuffle(){
		if(originalArray.length <= 1){
			newArray = originalArray.shuffle();
			expect( newArray ).toEqual( originalArray );
		}else{
			// This loop prevent "false positive" on result test if "originalArray" length is not enought length, for solve we iterate one hundred times and test if one or more times the arrays haven different value.
			var maxCount = 100;
			var shuffled = false;
			while(maxCount--){
				newArray = originalArray.shuffle();

				var newArrayToText = JSON.stringify(newArray);
				var originalArrayToText = JSON.stringify(originalArray);

				if( newArrayToText !== originalArrayToText ){
					shuffled = true;
					break;
				}
			}
			expect( shuffled ).toBeTruthy();
		}
	}

	it("new array is shuffle", newArrayIsShuffle);



	it("result contains correct all items from orginal array", function() {
		newArray = originalArray.shuffle();

		/*
		expect(newArray).toContain(1);
		expect(newArray).toContain(2);
		expect(newArray).toContain(3);
		expect(newArray).toContain('a');
		expect(newArray).toContain('b');
		expect(newArray).toContain('c');
		expect(newArray).toContain('NyanCat');
		*/

		for(var val in originalArray){
			expect(newArray).toContain(originalArray[val]);
		}

		expect(newArray).not.toContain('anything else');
	});
});
