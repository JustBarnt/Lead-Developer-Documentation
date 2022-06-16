//Library imports
//Only way to import libraries that don't offer NPM packages. Load it as a script in the index page and create a variable equal to the window instance.
const createjs = window.createjs; 
import { gsap } from 'gsap';

let stage;
const maxItems = 10;
let color = '#fff000';

document.body.onload = StageLoad();

/**
* @description Creates the stage and sets the ticker.
* @author Brent Williams <brent.williams@ddincmail.org> (https://www.github.com/DDincBrent)
* @function StageLoad
*/
function StageLoad()
{
    //Application Start
    stage = new createjs.Stage('myCanvas');
    createjs.Ticker.addEventListener('tick', handleTick);

    function handleTick(event)
    {
        stage.update();
    }

    Start();
}

function Start()
{
    for(let i = 0; i <= maxItems; i++)
    {
        let sizeDiff = 10*i;
        let offset = 20*i;
        const graphic = new createjs.Graphics().beginFill(color).drawRect(0, 0, (25+sizeDiff), (25+sizeDiff));
        const shape = new createjs.Shape(graphic);

        gsap.to(shape, { duration: 0.5, x: offset, y: offset, ease: 'Back.easeInOut(1.2)' });

        stage.addChild(shape);
    }
}