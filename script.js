function handleClass (e){
	const buttons = e.parentNode.children
	
	for(let i =0 ; i< buttons.length; i++){
		buttons[i].classList.remove("active")
	}
	e.classList.add("active")
	console.log(e.classList)
}