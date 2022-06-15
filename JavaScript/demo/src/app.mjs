//Library imports
//Only way to import libraries that don't offer NPM packages. Load it as a script in the index page and create a variable equal to the window instance.
const createjs = window.createjs; 
import { gsap } from 'gsap';

document.body.onload = StageLoad();

let stage;

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
}