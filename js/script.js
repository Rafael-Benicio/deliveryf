window.addEventListener('resize', function(){
	var idal=window.innerHeight
	var esp=619
	if(idal<esp){
		var im=document.getElementById('im')
		im.style.visibility="hidden"
	}else{
		var im=document.getElementById('im')
		im.style.visibility="visible"
	}
});

window.addEventListener('resize', function(){
	var idal=window.innerWidth;
	var esp=1039
	if(idal<esp){
		var u=document.getElementById('u')
		var i=document.getElementById('i')
		var p=document.getElementById('p')
		u.style.visibility="hidden"
		i.style.visibility="hidden"
		p.style.visibility="hidden"
	}else{
		var u=document.getElementById('u')
		var i=document.getElementById('i')
		var p=document.getElementById('p')
		u.style.visibility="visible"
		i.style.visibility="visible"
		p.style.visibility="visible"
	}
})

