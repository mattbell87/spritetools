// Define spritetools namespace
var spritetools = spritetools || {}

/**************************
	Sprite map object
***************************/
spritetools.map = function(target, str)
{
	this.image = "";
	this.charset = [];
	this.charsize = "32x48"
	this.target = target || null;
	this.text = str || "";
	this.charwidth = 0;
	this.charheight = 0;
	
	this.renderChar = function(char)
	{
		var LI = document.createElement("LI");		
		for (lineindex in this.charset)
		{
			var line = this.charset[lineindex];
			for (var index = 0, len = line.length; index < len; index++)
			{
				if (line.charAt(index) == char)
				{
					LI.style.backgroundImage = "url("+this.image+")";
					LI.style.backgroundPosition = "-" + (this.charwidth * index) + "px -" + (this.charheight * lineindex) + "px";
					LI.style.height = this.charheight + "px";
					LI.style.width = this.charwidth + "px";
				}
			}
		}
		
		return LI;
	}
	
	this.render = function(text)
	{
		//Return a UL containing the spritemap
		if (!this.target)
			this.target = document.createElement("UL");
			
		this.target.innerHTML = "";
		var Size = this.charsize;
		Size = Size.split('x');
		this.charwidth = Number(Size[0]);
		this.charheight = Number(Size[1]);
			
		this.text = text || this.text;
		
		if( typeof this.charset === 'string' ) 
			this.charset = this.charset.split("\n");
		
		for (var i = 0, len = this.text.length; i < len; i++)
		{
			var LI = this.renderChar(this.text.charAt(i));
			if (LI)
				this.target.appendChild(LI);
		}
		
		if (typeof this.srText == 'undefined')
		{
			this.srText = document.createElement("SPAN");	
			this.srText.className = "visuallyhidden";	
			this.target.parentNode.insertBefore(this.srText, this.target.nextSibling);
		}
		
		this.target.setAttribute('title', this.text);
		
		this.srText.innerHTML = this.text;
		
		return this.target;
	}
}
