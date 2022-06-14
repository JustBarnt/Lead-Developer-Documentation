//Imports
import gsap from 'gsap';
const zim = window.zim;

//Theme
const colors = { purple:'#471448', orange:'#F8993B', gray:'#504e4e' };

//Zim Frame Creation
const frame = new Frame(FILL, 1280, 720, colors.purple);

let stage, stageW, stageH;

TIME = 'milliseconds';
frame.on('ready', () => 
{
    stage = frame.stage;
    stageW = frame.width;
    stageH = frame.height;

    stage.update();

    StartApplication();
});

//Application Development after frame is ready and setup.
function StartApplication()
{

    //Code Here

    //Start with classes- Because I don't like how ZimJS creates objects. No OOP enough for me.

    //1. Classes to customize squares/circles.

    //2. Conditionals to show either shows circles or squares.
	
    //3. Loops to create squares and animate them.

    //4. Using JSON to manipulate the squares/circles position(s),colors, and label.

    stage.update();
}