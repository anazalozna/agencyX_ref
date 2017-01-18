(function(){
	//"use strict";
	var // the images (all of them), the heading, the subheading, the season text, appliedClass
	images = document.querySelectorAll(".image-holder"),
	heading = document.querySelector(".heading"),
	subHeading = document.querySelector(".main-copy h2"),
	seasonText = document.querySelector(".main-copy p"),
	appliedClass;

	var
	$images = $(".image-holder"),
	$heading = $(".heading"),
	$subHeading = $(".main-copy h2"),
	$seasonText = $(".main-copy p");

	function changeElements(){
		//debugger;
		//console.log(appliedClass);
		if(appliedClass){
			// heading.classList.remove(appliedClass);
			// subHeading.classList.remove(appliedClass);		
			$heading.removeClass(appliedClass);
			$subHeading.removeClass(appliedClass);		
		}

		appliedClass = event.currentTarget.id;

		// heading.classList.add(this.id);
		// subHeading.classList.add(this.id);
		$heading.addClass(event.currentTarget.id);
		$subHeading.addClass(event.currentTarget.id);
		
		// subHeading.firstChild.nodeValue = dynamicContent[this.id].headline;
		// seasonText.firstChild.nodeValue = dynamicContent[this.id].text;
		$subHeading.text(dynamicContent[event.currentTarget.id].headline);
		$seasonText.text(dynamicContent[event.currentTarget.id].text);
	}

	// [].forEach.call(images, function(image){
	// 	image.addEventListener("click", changeElements, true);
	// });
	
	$images.click(function(){
		changeElements();
	});

	//$images[0].click();
	$subHeading.text(dynamicContent["spring"].headline);
	$seasonText.text(dynamicContent["spring"].text);
	$heading.addClass("spring");
	//images[0].click();
	// subHeading.firstChild.nodeValue = dynamicContent["spring"].headline;
	// seasonText.firstChild.nodeValue = dynamicContent["spring"].text;
	// heading.classList.add("spring");
})();