
var isQuit = false;
function Update () {
}

function OnMouseOver () {
	renderer.material.color = Color.red;
	
}

function OnMouseExit () {
	renderer.material.color = Color.white;
	
}

function OnMouseDown () {
	if(isQuit){
		Application.Quit();
	}
	else {
		Application.LoadLevel(1);
	}	
}