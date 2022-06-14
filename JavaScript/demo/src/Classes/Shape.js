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

    //Private variables. Cannot be accessed from outside this class.
    #shape;      //Private variable that will hold the shape created.
    #properties; //Private variable that will hold the properties
    #text;       //Private variable that will hold all text information.

    constructor(shape, properties, text)
    {
        switch(shape.toLowerCase())
        {
            case 'circle':
            case 'c':
                this.#shape = shape; 
                this.#CreateCircle(properties, text);
                break;
            case 'rect':
            case 'rectangle':
            case 'square':
            case 'r':
            case 's':
                this.#shape = shape;
                this.#CreateRect(properties, text);
                break;
            default:
                alert(`This class only creates circles or rectangles. You passed ${shape}`);
                break;
        }
    }

    #CreateCircle(props, txt)
    {
        this.Properties(props);
        new Circle();
    }

    #CreateRect(props, txt)
    {
        new Rectangle();
    }

    set Properties(props)
    {
        const obj = new Object();

        for(let [key, value] of Object.entries(props))
        {
            switch(key)
            {
                case 'width':
                case 'height':
                case 'x':
                case 'y':
                    {
                        if(typeof value != 'string' || typeof value != 'number')
                            throw new Error(`Shape properties MUST contain a width, height, x, and y as either a string or number. Property was typeof: ${typeof value}`);
                    }
                    break;
            }
            //Converting value to string.
            value = parseInt(value);
        }

        obj.width = props.width;
        obj.height = props.height;
        obj.x = props.x;
        obj.y = props.y;

        //Optional properties to use. `?.` is an optional chaining operator, this allows us to still use object `.` notation
        //If the property doesn't exist it returns null which is a falsey value. So we use the Ternary operator to create a quick conditional check
        //if property exists {use property} else {its set to the default we specified}
        obj.scaleX = props?.scaleX ? parseInt(props.scaleX) : 1;
        obj.scaleY = props?.scaleY ? parseInt(props.scaleY) : 1;
        obj.regX = props?.regX ? parseInt(props.regX) : 0;
        obj.regY = props?.regY ? parseInt(props.regY) : 0;

        this.#properties = obj;
    }
}