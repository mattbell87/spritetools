/***************************
	Day countdown object
***************************/
spritetools.counterImage = "counter.gif";
spritetools.counterCharset = "0123456789.:$- ";
spritetools.counterCharSize = "32x48";

spritetools.dayCounter = function(UL)
{
	this.spritemap = new spritetools.map(UL);	
	this.spritemap.image = spritetools.counterImage;
	this.spritemap.charset = spritetools.counterCharset;
	this.spritemap.charsize = spritetools.counterCharSize;
	
	this.targetdate = new Date();
	
	this.getDays = function()
	{
		return Math.ceil(( this.targetdate - (new Date()) )/(1000*60*60*24)).toString();
	}
	
	var counterobj = this;
	var interval = 10*1000; //10sec
	
	this.render = function(TargetDate)
	{
		this.targetdate = TargetDate || "";
		this.targetdate = this.targetdate.split('/');
		this.targetdate = new Date(this.targetdate[0], this.targetdate[1]-1, this.targetdate[2]);
	
		this.spritemap.render(this.getDays());	
		this.timer = setTimeout(function()
		{
			//update the counter
			counterobj.render(TargetDate);
		}, interval);
	}
}
