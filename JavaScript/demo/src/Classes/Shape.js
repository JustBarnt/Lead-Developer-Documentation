const zim = window.zim;

/**
* @description Shape Class that creates a shape and can hold text.
* @author Brent Williams <brent.williams@ddincmail.org> (https://www.github.com/DDincBrent)
* @Class Shape
*/
class Shape
{
    /**
	* @constructor
	* @param {String} shape name of the shape you want to create. i.e Circle or Rectangle
	* @param {Object} properties
	*				  {
	*					width: width of shape (This is used for the radius with circle)
	*					height: height of the shape.(Ignored for circle)
	*					x: x position
	*					y: y position
	*					scaleX: x scale of the shape
	*					scaleY: y scale of the shape
	*					regX: x registration point of the shape
	*					regY: y registration point of the shape
	*				  }
	* @param {Object} text
	*				  {
	*					name: width of shape (This is used for the radius with circle)
	*					size: height of the shape.(Ignored for circle)
	*					color: x position
	*				  }
	*/
    constructor(shape, properties, text)
    {
        //Circle, rectangle, square - Mandatory
        this.shape = shape;

        //x,x,width, height - Mandatory | scaleX, scaleY, regX, regY - Optional
        this.properties = properties;

        //Text label to be centered inside the circle - Optional.
        this.text = text;

        switch(shape.toLowerCase())
        {
            case 'circle':
                new Circle();
                break;
        }
    }
}