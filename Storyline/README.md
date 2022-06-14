<p align="center"><img src="../assets/ddinc-logo-white.svg" style="width: 33vw"></p>

# Storyline

###### The purpose of this documentation website is to help Designing Digitally in the transition of my leave from the company. I have been the Lead Developer for 3 years and in turn, I have consistently changed how I work and what I use. This document will contain all the information about my current workflow and what I use. 

----

# Table of Contents

1. [Articulate Storyline Resources](#storyline)
2. [Workflow](#workflow)
3. [JavaScript](#JavaScript)

---

## Articulate Storyline Resources <a name="storyline" ></a>

#### Devlin Peck
<details>
<summary>More Information</summary>

Devlin Peck is a popular Articulate Storyline developer, he has a [website](https://www.devlinpeck.com/tutorials) with several useful tutorials.

</details>

#### E-Learning Heroes
<details>
<summary>More Information</summary>

E-Learning Heroes is the community built around Articulate Storyline. There are always good forums of people asking for help with valuable answers being provided. There is also a weekly [Storyline challenge](https://community.articulate.com/hubs/e-learning-challenges) where a challenge is posted and the community will post there submissions, its a great way to see new ways one how someone would do something.

</details>

#### ELearning Designer
<details>
<summary>More Information</summary>

[E-Learning Designer](https://elearningdesigner.com/) is another Storyline Developer who uploads templates, their completed E-Learning Hero Challenges and a few other things.

</details>

## Workflow <a name="workflow"></a>
1. Shell Creation
	- Shell creation takes place on the master slide and includes
	- UI Creation (CC, Menus, Feedback Masters)
	- Variable Creation - CC, Menu, Next/Back, Play/Pause, Replay, Slide Completion, Slide title, Module title, etc.
	- Trigger creation - Show/Hide: CC, Menu, Resources etc. Setting current slide, highest slide, max slide, progress. Slide movement, slide completion when slide has been viewed, setting slide title to scene.slidetitle.
2. Import all assets for the module into the Asset Previewer. 
3. Create blank slides for each StoryBoard slide and name them accordingly.
4. Fill all CC text for each slide.
5. Add all assets to the slides.
6. Add all onscreen text and format each slide to the approved layout(s).
7. Finish functionality for interactions
8. Test and fix any issues

## JavaScript <a name="JavaScript"></a>
Recent updates to Storyline have made it easier to use JavaScript to manipulate slide objects. 

Here are the steps to do so.

1. Select you object in Storyline and hit `ctrl + shift + enter` this will open the accessibility prompt, give it a name- If you wanting to animate multiple objects in a uniform fashion I would name following somethign like this `object-number` where object is the type of thing it is and number is a number starting with 0.
2. Next you will create a trigger that executes JavaScript.
	-	You will then use the code below to obtain reference to the item and then animate it with GSAP a JavaScript animation library that Storyline uses as well.
```JavaScript
// Reference to the Storyline player, used to get or set a storyline variable.
const player = GetPlayer(); 

 // This will get the name of the variable. IT IS CASE SENSITIVE so I recommend you copy it from the variables panel.
const SL_VAR = player.GetVar('NAME OF VARIABLE');

//This sets a SL variable to a value you specify. Storyline now will auto depict the variable type you are setting and if it translatable it will translate it to the correct type. Ex: SL_VARIABLE is string but you pass a number of 120- That can be translated into a string. 
player.SetVar('NAME OF VARIABLE', value); 

//querySelector is a JavaScript method that looks for an HTML Node with the value you passed as a parameter. In this case we are looking for the property data-acc-text which is a value that is set when the accessibility text is filled. So we now have access to the item we wanted.
const itemToAnimate = document.querySelector("[data-acc-text='Object-0']"); 

//Next just animate the item using the variable you used for storing reference. You can visit GSAP's documentation to get a better understanding of what all you can do. 
gsap.to(itemToAnimate, {duration: 0.5, scaleX: 0.5, scaleY: 0.5, opacity: 1});
```