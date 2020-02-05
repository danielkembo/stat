document.addEventListener("DOMContentLoaded",function(){
	this.querySelector(".icon").addEventListener("click",function(){
		let waitClass = "waiting",
			runClass = "running",
			cl = this.classList;

		if (!cl.contains(waitClass) && !cl.contains(runClass)) {
			cl.add(waitClass);
			setTimeout(function(){
				cl.remove(waitClass);
				setTimeout(function(){
					cl.add(runClass);
					setTimeout(function(){
						cl.remove(runClass);
					}, 8000);
				}, 400);
			}, 3600);
		}
	});
});
document.addEventListener("DOMContentLoaded",function(){
	this.querySelector(".icon2").addEventListener("click",function(){
		let waitClass = "waiting",
			runClass = "running",
			cl = this.classList;

		if (!cl.contains(waitClass) && !cl.contains(runClass)) {
			cl.add(waitClass);
			setTimeout(function(){
				cl.remove(waitClass);
				setTimeout(function(){
					cl.add(runClass);
					setTimeout(function(){
						cl.remove(runClass);
					}, 8000);
				}, 400);
			}, 3600);
		}
	});
});
document.addEventListener("DOMContentLoaded",function(){
	this.querySelector(".icon3").addEventListener("click",function(){
		let waitClass = "waiting",
			runClass = "running",
			cl = this.classList;

		if (!cl.contains(waitClass) && !cl.contains(runClass)) {
			cl.add(waitClass);
			setTimeout(function(){
				cl.remove(waitClass);
				setTimeout(function(){
					cl.add(runClass);
					setTimeout(function(){
						cl.remove(runClass);
					}, 8000);
				}, 400);
			}, 3600);
		}
	});
});
document.addEventListener("DOMContentLoaded",function(){
	this.querySelector(".icon4").addEventListener("click",function(){
		let waitClass = "waiting",
			runClass = "running",
			cl = this.classList;

		if (!cl.contains(waitClass) && !cl.contains(runClass)) {
			cl.add(waitClass);
			setTimeout(function(){
				cl.remove(waitClass);
				setTimeout(function(){
					cl.add(runClass);
					setTimeout(function(){
						cl.remove(runClass);
					}, 8000);
				}, 400);
			}, 3600);
		}
	});
});
document.addEventListener("DOMContentLoaded",function(){
	this.querySelector(".icon5").addEventListener("click",function(){
		let waitClass = "waiting",
			runClass = "running",
			cl = this.classList;

		if (!cl.contains(waitClass) && !cl.contains(runClass)) {
			cl.add(waitClass);
			setTimeout(function(){
				cl.remove(waitClass);
				setTimeout(function(){
					cl.add(runClass);
					setTimeout(function(){
						cl.remove(runClass);
					}, 8000);
				}, 400);
			}, 3600);
		}
	});
});