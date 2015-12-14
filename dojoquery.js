function $Dojo(id) {
	this.myId = document.getElementById(id);
	this.click = function(call) {
		this.myId.addEventListener("click", call);
		return this;
	};
	this.hover = function(hoverOver, hoverOut) {
		this.myId.addEventListener("mouseover", hoverOver);
		this.myId.addEventListener("mouseout", hoverOut);
		return this;
	}
}