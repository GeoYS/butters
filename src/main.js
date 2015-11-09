function myFunction(){ 
	var george= document.getElementById('myImage');
	george.style.position = 'relative';
	george.style.left = '0px';
	console.log("hello");
	george.style.left = parseInt(george.style.left) + 100 + 'px';
}
