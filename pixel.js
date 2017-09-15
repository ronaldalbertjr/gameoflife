var pixel = function(x, y, size, on)
{
    this.x = x;
    this.y = y;
    this.size = size;
    this.on = on;
    this.newOn = on;
    
    this.update = function(pixels)
    {
        var pixelsAround = 0;
        for(var i in pixels)
        {
            if(pixels[i].x - this.size == x && pixels[i].y == y && pixels[i].on)
            {
                pixelsAround++;
            }
            else if(pixels[i].x + this.size == x && pixels[i].y == y && pixels[i].on)
            {
                pixelsAround++;
            }
            else if(pixels[i].x == x && pixels[i].y - this.size == y && pixels[i].on)
            {
                pixelsAround++;
            }
            else if(pixels[i].x == x && pixels[i].y + this.size == y && pixels[i].on)
            {
                pixelsAround++;
            }
            else if(pixels[i].x - this.size == x && pixels[i].y - this.size == y && pixels[i].on)
            {
                pixelsAround++;
            }
            else if(pixels[i].x - this.size == x && pixels[i].y + this.size == y && pixels[i].on)
            {
                pixelsAround++;
            }
            else if(pixels[i].x + this.size == x && pixels[i].y - this.size == y && pixels[i].on)
            {
                pixelsAround++;
            }
            else if(pixels[i].x + this.size == x && pixels[i].y + this.size == y && pixels[i].on)
            {
                pixelsAround++;
            }
        }
        
        if((pixelsAround < 2 || pixelsAround > 3) && this.on)
        {
            this.newOn = false;
        }
        
        else if(pixelsAround == 3 && !this.on)
        {
            this.newOn = true;
        }
    }
    
    this.updateOn = function()
    {
        this.on = this.newOn;    
    }
    
    this.draw = function(ctx)
    {
        if(this.on)
        {
            ctx.fillStyle = "BLACK";
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }
    }
}