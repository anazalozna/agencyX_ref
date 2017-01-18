(function(){
	//"use strict";
	var // the images (all of them), the heading, the subheading, the season text, appliedClass
	images = document.querySelectorAll(".image-holder"),
	heading = document.querySelector(".heading"),
	subHeading = document.querySelector(".main-copy h2"),
	seasonText = document.querySelector("p"),
	appliedClass;

	function changeElements(){
		//debugger;
		//console.log(appliedClass);
		if(appliedClass){
			heading.classList.remove(appliedClass);
			subHeading.classList.remove(appliedClass);		
		}
		
		appliedClass = this.id;

		heading.classList.add(this.id);
		subHeading.classList.add(this.id);
		
		subHeading.firstChild.nodeValue = dynamicContent[this.id].headline;
		seasonText.firstChild.nodeValue = dynamicContent[this.id].text;
	}

	[].forEach.call(images, function(image){
		image.addEventListener("click", changeElements, true);
	});
	images[0].click();
	// subHeading.firstChild.nodeValue = dynamicContent["spring"].headline;
	// seasonText.firstChild.nodeValue = dynamicContent["spring"].text;
	// heading.classList.add("spring");
})();