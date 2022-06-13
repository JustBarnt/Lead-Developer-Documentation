<p align="center"><img src="./assets/ddinc-logo-white.svg" style="width: 33vw"></p>

# Lead Developer Documentation

###### The purpose of this documentation website is to help Designing Digitally in the transition of my leave from the company. I have been the Lead Developer for 3 years and in turn, I have consistently changed how I work and what I use. This document will contain all the information about my current workflow and what I use. 

----

# Table of Contents

###### Table of Contents includes the separate pages, GitHub, JavaScript, Storyline, and VSCode. But will also contain items in this document as well.

1. [Programming Style](#Programming)
2. [GitHub & Git SCM (Source Code Management)](./GitHub/GitHub-README.md)
3. [JavaScript](./JavaScript/JavaScript-README.md)
4. [Articulate Storyline](./Storyline/Storyline-README.md)
5. [Visual Studio Code](./Visual-Studio-Code/VSCode-README.md)
6. [Technologies](#Technologies)
7. [Resources](#Resources)

---

## Programming Paradigm <a name="Programming"></a>

<details>
<summary>Object-Oriented Programming VS. Functional Programming</summary>
	
**_I will briefly explain the programming paradigms[^1] I follow_**.
	
**_I will not be explaining the differences between these two models that I use, but I will link resources for you to read as both paradigms are not something that can be summarized and still make sense._**
	
I typically follow an [Object-Oriented Programming](https://en.wikipedia.org/wiki/Object-oriented_programming) methodology. Meaning a majority of the time my code uses reusable objects. This method is generally used for full-scale projects.
	
Whereas with [Functional Programming](https://en.wikipedia.org/wiki/Functional_programming) it is a polar opposite, code is not reusable- nor is the data used in functional programming muatble. I will use functional programming for quick turn-around demos, or small projects with tight deadlines.
	
> _There is no right or wrong paradigm to follow. I will create a table below that lists some of the pros/cons between the two. Commonly used in this field of programming._
>
<details>
	<summary> OOP vs FP Pros & Cons </summary>
	
| Object-Oriented Programming | Pros | Cons |  Functional Programming | Pros | Cons |
| --- | --- | --- |  --- | --- | --- |
| Allows Parallel Developement | :heavy_check_mark: | :x: |  Logical | :heavy_check_mark: | :x: |
| Modular Classes which are reusable | :heavy_check_mark: | :x: |  Debugging is easier | :heavy_check_mark: | :x: |
| Coding base is easier to maintain and document | :heavy_check_mark: | :x: | Lazy evaluation | :heavy_check_mark: | :x: |
| It can be inefficient | :x: | :heavy_check_mark: | Combining pure functions | :x: | :heavy_check_mark: |
| It can be too scalable[^2] | :x: | :heavy_check_mark: | Recursion[^3] | :x: | :heavy_check_mark: |
| It can cause duplication | :x: | :heavy_check_mark: | Mathematical terminology | :x: | :heavy_check_mark: |
	
</details>
	
</details>


[^1]: I only reference two Paradigms for programming. There are several and there are 4 major programming paradigms that are usually followed. So far in my career in web you mostly see functional and OOP which is why I only mention these two.
[^2]: Because OOP is so modular it can very quickly become overbloated for whats needed.
[^3]: Recursion is a form of iteration that gets used when you don't have access to using anykind of loop, it is harder concept to understand which is why it is a con.

---

## Technologies <a name="Technologies"></a>

###### Lists of technologies I use. This includes frameworks, APIs, and libraries, as well as programs.


### Tools
1. [Git SCM (Source Code Management)](#gitscm)
2. [Terminal (Windows 10 Command Line Application)](#terminal)
3. [ESLint](https://eslint.org)
4. [Webpack (Module bundler)](https://webpack.js.org/)
5. [NPM (Node Package Manager)](https://www.npmjs.com/)

### Programs
1. [Visual Studio Code (Text Editor)](https://code.visualstudio.com/)
2. [Articulate Storyline (eLearning Authoring Tool)](#storyline)

### Frameworks, APIs, Libraries
1. [NodeJS (A Javascript Runtime Environment)](https://nodejs.org/en/)
2. [ZimJS (Canvas Framework)](https://zimjs.com/)

---

## Resources <a name="Resources"></a>

###### List of resources I find valuable that I have used in my process of learning.

### <u>[JavaScript](https://www.javascript.com/)</u>

#### Coding Train
<details>
<summary>More Information</summary>

Coding Train is a website built by Programmer and Professor [Daniel Shiffman](https://GitHub.com/Shiffman)
	
He teaches several different subjects related to programming. But his [youtube](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw) channel offers some incredible tutorials ranging from absolute beginner-level introductions to building out functional projects.

</details> 

### <u>[Articulate Storyline](https://articulate.com/360)<a name="storyline" ></a></u>

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

### <u>[Git SCM](https://git-scm.com/)<a name="gitscm"></a></u>

<details>
<summary>More Information</summary>

Git SCM is a command-line Source Code Management tool. I will go into more detail in the [GitHub README](./GitHub/GitHub-README.md) file. But I will list resources here I found useful for learning Git SCM.

1. [Git SCM Documentation](https://git-scm.com/docs)
2. [Official Git Tutorial](https://git-scm.com/docs/gittutorial)
3. [Everyday Git](https://git-scm.com/docs/giteveryday)
4. [Git Immersion](https://gitimmersion.com/)
5. [Backlog Git Tutorial](https://backlog.com/git-tutorial/)
</details>