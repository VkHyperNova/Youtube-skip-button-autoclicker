
document.addEventListener("DOMContentLoaded", YoutubeBtnSkipper, false);
			
function YoutubeBtnSkipper(event){


	var timer = setInterval(ClickBtn, 100);

	var buttonYt = document.getElementsByClassName('ytp-ad-skip-button ytp-button');

	function ClickBtn(){ 

    	if(buttonYt.length > 0){
    		buttonYt[0].click();
			console.log("Youtube Ad skipped");
    	}

    	
  	
	}

}








