---
title: "Movement And Controls"
source: "manual.gamemaker.io/monthly/en/Quick_Start_Guide/Movement_And_Controls.htm"
converted: "2025-09-14T04:00:13.101Z"
---

# Movement And Controls

The [previous section](Drawing.md) of this Quick Start Guide gave some examples for drawing things to the screen, but just drawing things isn't much good if you can't also move them around... so in this section we'll be giving you some examples of movement for your objects, as well as some basic control schemes for different types of games. All the examples are given using GML Visual as well as the GML Code, so you can use whichever you feel more comfortable with. Note that we won't be explaining things in too much depth here, as we want you to get started making stuff as quickly as possible, so we encourage you to explore any links as you go along and to use the "search" function of the manual to look for additional information on anything you aren't sure about.

Before going any further, you might want to make a new project (either GML Code or GML Visual) from the [Start Page](../Introduction/The_Start_Page.md), and add (or create) a few sprites as well as an object or two - as we'll be giving you some code that you can test using these - and make sure that the project has a room to place instances in. Don't worry too much about what the sprites you make look like, as even a simple white square will do, and once you've got everything ready you can start working on the examples listed below.

[Move Towards The MouseMove Towards The Mouse](Movement_And_Controls.htm#)

One of the simplest ways to get an object moving and interacting with the player is to use the mouse, and in this example we'll show you how to use some basic code to get an object to move towards wherever the user has clicked the left mouse button ![LMB Icon](../assets/Images/Icons/Icon_LMB.png).

To start with, open an object, assign it a sprite, and then give it a **Global Left Mouse Down event**:

![Adding The Mouse Left Button Down Event](../assets/Images/QS_Guide/QS_Add_GlobalLMBDownEvent.png)

We use the **global** mouse events because they detect a click anywhere in the room, while the regular mouse events will only detect a click if the mouse actually clicks within the instance bounding box. In this event we want to add these actions or code:

![GML VisualTo Move Instance Towards Mouse](../assets/Images/QS_Guide/QS_MovementExample_DnD_1_1.png)

move\_towards\_point(mouse\_x, mouse\_y, 2);

Here we are telling the instance to move towards a position on the screen, in this case the "mouse\_x" and "mouse\_y" position ("mouse\_x" and "mouse\_y" are **built-in** variables that always hold the current mouse cursor position). The GML Visual does this by setting the "direction" and " speed" [**Instance Variables**](../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/Instance_Variables.md), while the GML does this using the function [move\_towards\_point()](../../../../GameMaker_Language/GML_Reference/Movement_And_Collisions/Movement/move_towards_point.md) (this also sets the speed and direction variables, just in a single, easy to use function).

Place an instance of this object in a room and then hit the Play button ![Play Icon](../assets/Images/Icons/Icon_PlayGame.png), then click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) around the room to make the instance move towards the mouse:

![Animation Of Instance Moving Towards Mouse](../assets/Images/QS_Guide/QS_MovementExample_1_1.gif)Great! The instance of the object now moves towards where you clicked, and if you hold down the button, the instance will just keep following the mouse cursor. However, there is a problem... After you click once and release, the instance will keep on moving and eventually leave the room! There are a number of ways that we can fix this, and which one you choose will depend on what you want to do, but the easiest fix for now is to simply add a **Global Mouse Button Released** event, so add that now to the object and give it this code:

![GML VisualTo Set The Instance Speed](../assets/Images/QS_Guide/QS_MovementExample_DnD_1_2.png)

speed = 0;

With this, the instance will only follow the mouse cursor for as long as the mouse button is held down, and when you release the button it will stop moving. Press **Play** ![Play Icon](../assets/Images/Icons/Icon_PlayGame.png) and test it now.

Before we leave this example, there is one final issue that we need to resolve... If you click and _hold_ the mouse button, but don't move the cursor, then the instance will move towards the cursor and then "vibrate" around it. This is because the instance is moving faster than 1 pixel at a time and so "over-shoots" the position and then tries to move back, and then over-shoots again, etc. (make the movement speed 5 or something like that to see the issue if it's not immediately obvious).

![Animation Showing Instance Vibrating](../assets/Images/QS_Guide/QS_MovementExample_1_2.gif)To solve this we need to add a **Step Event** to the object with this code:

![GML VisualActions For The Step Event](../assets/Images/QS_Guide/QS_MovementExample_DnD_1_3.png)

var \_dist = point\_distance(x, y, mouse\_x, mouse\_y);

if (\_dist <= speed)
{
    speed = 0;
}

Here we just check the distance from the instance to the mouse position, and if it's the same as or less than the current speed, we set the speed to 0. This makes the instance stop when it's close enough to the mouse position, and we don't get that nasty "vibrating" issue.

[4-Way and 8-Way Movement With The Keyboard4-Way and 8-Way Movement With The Keyboard](Movement_And_Controls.htm#)

[Right at the start of this guide](What_Is_Programming_.md), we showed you the following action and code to move an instance to the right by two pixels every game step:

![GML VisualExample](../assets/Images/QS_Guide/QS_DnD_Example.png)

x = x + 2;

This type of movement is called **positional** movement, as we are essentially picking up the instance and placing it down again at a new position every time the code is run. What we're going to do in this example is show you how to use this type of movement to move an instance around in 4 directions: up, down, left and right.

To start with, open an object and assign it a sprite. Now, we could add in various **Keyboard Events** at this point, and in each one have the instance move in the desired direction, however, we only want the player to be able to move in one direction at a time and doing this with only the keyboard events is a bit more complicated than doing it using code. Instead we'll be using the **Step Event** - which you should add now to the object - with the following actions or code to use the Arrow Keys to move:

![GML VisualStep Event Movement Actions](../assets/Images/QS_Guide/QS_MovementExample_DnD_2_1.png)

if (keyboard\_check(vk\_left))
{
    x = x - 2;
}
else if (keyboard\_check(vk\_right))
{
    x = x + 2;
}
else if (keyboard\_check(vk\_up))
{
    y = y - 2;
}
else if (keyboard\_check(vk\_down))
{
    y = y + 2;
}

We are using an " if... else if... else if..." structure to ensure that the instance will only move in one direction at a time, and so the instance should only be able to move up, down, left or right, but not diagonally. Place an instance of the object in a room and press the **Play** button ![Play Icon](../assets/Images/Icons/Icon_PlayGame.png) to test it now! If all has gone correctly, you should have something like this:

![Animation Showing 4-Way Keyboard Movement](../assets/Images/QS_Guide/QS_MovementExample_2_1.gif)

We can modify this code to convert the 4-way movement into 8-way movement easily too... simply remove the "else" commands from the code blocks so that everything looks like this:

![GML VisualStep Event Movement Actions](../assets/Images/QS_Guide/QS_MovementExample_DnD_2_2.png)

if (keyboard\_check(vk\_left))
{
    x = x - 2;
}
if (keyboard\_check(vk\_right))
{
    x = x + 2;
}
if (keyboard\_check(vk\_up))
{
    y = y - 2;
}
if (keyboard\_check(vk\_down))
{
    y = y + 2;
}

Now when you press the **Play** button ![Play Icon](../assets/Images/Icons/Icon_PlayGame.png) it'll look something like this:

![Animation Showing 8-Way Keyboard Movement](../assets/Images/QS_Guide/QS_MovementExample_2_2.gif)

One final thing that's worth noting for users coding with GML... When using the GML Visual you can select the keyboard key that you want to use from a drop down list, but with GML it's not that simple. There are a number of [Keyboard Constants](../GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/Keyboard_Input.md) that you can use - like the arrow key constants shown in the code above - but there are _no_ constants for the alpha-numeric keys. These are handled slightly different, and require you to use the function [ord()](../GameMaker_Language/GML_Reference/Strings/ord.md). The code below shows you how this would work using WASD instead of the arrow keys:

if (keyboard\_check(ord("A")))
{
    x = x - 2;
}
if (keyboard\_check(ord("D")))
{
    x = x + 2;
}
if (keyboard\_check(ord("W")))
{
    y = y - 2;
}
if (keyboard\_check(ord("S")))
{
    y = y + 2;
}

[Gamepad MovementGamepad Movement](Movement_And_Controls.htm#)

We've covered mouse movement and keyboard movement, so that means it's time to cover **gamepad** movement, particularly using the left analog stick for movement.

To start with, we need to detect all gamepads that are connected, which we will store in an [array](../GameMaker_Language/GML_Overview/Arrays.md) called gamepads. Let's create it in the Create event first:

![](../assets/Images/QS_Guide/QS_MovementExample_3_1.png)

gamepads = \[\];

Now we can use the [Async System](../The_Asset_Editors/Object_Properties/Async_Events/System.md) event which runs when the game detects a connected gamepad (and also runs when a gamepad disconnects). We'll store all detected gamepads in the gamepads array and also remove them as they are disconnected. Later, we will make use of whichever gamepad is the first one in the array.

![](../assets/Images/QS_Guide/QS_MovementExample_3_2.png)

if (async\_load\[? "event\_type"\] == "gamepad discovered")
{
    var \_pad = async\_load\[? "pad\_index"\];
    gamepad\_set\_axis\_deadzone(\_pad, 0.2);
    array\_push(gamepads, \_pad);
}
else if (async\_load\[? "event\_type"\] == "gamepad lost")
{
    var \_pad = async\_load\[? "pad\_index"\];
    var \_index = array\_get\_index(gamepads, \_pad);
    array\_delete(gamepads, \_index, 1);
}

When a gamepad is discovered, it adds its index to the array, and when it's lost, its finds the gamepad index from the array and then deletes it.

Notice that in the above code we set the **deadzone** for the gamepad. This is because analog sticks on different makes of gamepads will have different sensibility, and sometimes they can be so sensitive that if you don't set a deadzone then they can cause unwanted movement in your games. So we set the deadzone to a value like 0.2 to tell GameMaker to ignore any gamepad stick values under that absolute value.

To add the actual movement, we'll need a **Step Event**, so add that now and give it the following GML Visual or GML Code:

![](../assets/Images/QS_Guide/QS_MovementExample_3_3.png)

if (array\_length(gamepads) > 0)
{
    var \_h = gamepad\_axis\_value(gamepads\[0\], gp\_axislh);
    var \_v = gamepad\_axis\_value(gamepads\[0\], gp\_axislv);
    x += \_h \* 4;
    y += \_v \* 4;
}

Here we are checking if the gamepads array has any elements, and if so we then check the _left_ stick for horizontal or vertical movement on the first gamepad, i.e. gamepads\[0\].

The axis functions return a value between -1 and 1, so for the horizontal axis -1 is left, 0 is not moving and 1 is right, and for the vertical axis it's -1 for up, 0 for not moving and 1 for down.

Note too that the values are _between_ \-1 and 1, so - for example - the horizontal axis could return a value of 0.5, meaning the stick is halfway between the "rest" position and fully pushed to the right. For that reason, we then multiply the value by 4 (you can multiply by any value really, depending on the speed you want the instance to move) - it means that the speed of the instance will vary depending on how much of a movement has been made on the stick axis.

Place an instance of this object in a room and pres the press **Play** button **![Play Icon](../assets/Images/Icons/Icon_PlayGame.png)**, then move around using the left stick of your connected gamepad. You should see something like this:

![Animation Showing Gamepad Movement](../assets/Images/QS_Guide/QS_MovementExample_3_1.gif)

You can check other buttons like the front facing buttons, shoulder butons and the D-Pad using [gamepad\_button\_check](../GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_button_check.md) or [If Gamepad Button Down](../Drag_And_Drop/Drag_And_Drop_Reference/Gamepad/If_Gamepad_Button_Down.md). There are more gamepad [functions](../GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/Gamepad_Input.md) and [actions](../Drag_And_Drop/Drag_And_Drop_Reference/Gamepad/Gamepad_Actions.md) that you can use as well.

[Advanced 8-Way MovementAdvanced 8-Way Movement](Movement_And_Controls.htm#)

In this final example, we're going to re-visit our 8-way movement code and address an issue it has, which is that diagonal movement is actually faster than up/down/left/right movement. This is simply because when moving diagonally, you are moving along the hypotenuse of a right-angled triangle created by the x/y movement values:

![Image Showing Why Diagonal Movement Is Faster](../assets/Images/QS_Guide/QS_MovementExample_4_1.png)

To make it clearer what's happening, let's remove all the text and sprites and simply show the same line of movement rotated 45° so it's horizontal:

![Simplified Image SHowing Diaginal Movement Is Faster](../assets/Images/QS_Guide/QS_MovementExample_4_2.png)

As you can see, the difference is pretty obvious, and if the instance moves more than 1 or 2 pixels per step, then it becomes very noticeable that diagonal movement is _much_ faster! So how do we limit this? There are a number of ways to go about this, but we're going to concentrate on just one of them, because it introduces a couple of functions and concepts that will be useful to you later on in your games.

To deal with this, we are going to have to store the input values from the keys pressed independently in variables, and then check them and move according to the combination of keys that have been pressed. So, for this you'll need an object with a sprite assigned, and you'll need to give it a **Step Event** with the following actions or code:

![GML VisualStep Event Actions To Define Movement Variables](../assets/Images/QS_Guide/QS_MovementExample_DnD_4_1.png)

NOTE We've split the Visual actions above over two columns to make it easier to visualise, but in the Visual editor, it will be placed consecutively.

var \_left = keyboard\_check(vk\_left);
var \_right = keyboard\_check(vk\_right);
var \_up = keyboard\_check(vk\_up);
var \_down = keyboard\_check(vk\_down);
var \_hspd = \_right - \_left;
var \_vspd = \_down - \_up;

We'll need to add some more code to actually move, but before we do, let's just explain this a bit. We want to convert left/right/up/down into equivalent horizontal and vertical speed values, so to do that we are getting the value of each key and then doing some basic maths on it to get the speed values. This works because if a key is being pressed then the check action or function will return "1", and if it's _not_ being pressed, then the function will return 0. So, if - for example - right is being pressed, you have "1 - 0 = 1" for the " \_hspd", and if left is being pressed you have "0 - 1 = -1" for the " \_hspd" (and if they both get pressed then it's "1 - 1 = 0", so the instance won't move). Remember, in a GameMaker room, to move right we add to the x position and to move left we subtract, so this code will give us a positive or negative value that we can add or subtract to move horizontally or vertically depending on the keyboard input.

Now we can add the code that actually moves the instance, so - still in the **Step Event**, and after the above code - add this:

![GML VisualStep Event Actions To Move The Instance](../assets/Images/QS_Guide/QS_MovementExample_DnD_4_2.png)

if (\_hspd != 0 || \_vspd != 0)
{
    var \_spd = 4;
    var \_dir = point\_direction(0, 0, \_hspd, \_vspd);
    var \_xadd = lengthdir\_x(\_spd, \_dir);
    var \_yadd = lengthdir\_y(\_spd, \_dir);
    x = x + \_xadd;
    y = y + \_yadd;
}

The above code first checks to see if one of two expressions is true, i.e.: if the horizontal or vertical speed variables are not 0. Note how the "if" GML check uses the symbol "||". This means "or" when programming, so - in plain language - you are checking

if the variable \_hspd does not equal zero
**or**
if the variable \_vspd does not equal zero

You can string multiple expressions together in "if" checks in this way, and there are multiple different ways those expressions can be evaluated (for more information please see the section on **Expressions** [here](../GameMaker_Language/GML_Overview/Expressions_And_Operators.md)).

The next section of code stores a value for the actual movement speed in a variable and then gets a direction using the \_hspd and \_vspd values, which can be -1, 0, or 1. The direction function checks from (0, 0) as we aren't using room coordinates, and instead we want it to evaluate as a direction from 0° to 360° based on the variable values. The following diagram illustrates what's happening better than trying to explain it in words:

![Example Image Showing Direction Around (0,0) Origin](../assets/Images/QS_Guide/QS_MovementExample_4_3.png)

NOTE Direction in GameMaker is calculated **counterclockwise**, so 0° and 360° are to the right, 90° is up, 180° is to the left and 270° is down.

Finally, we use the [lengthdir\_x()](../GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/lengthdir_x.md) and [lengthdir\_y()](../GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/lengthdir_y.md) functions to actually move the variable. These are **vector** functions that take a length (distance) and a direction and then calculate the new position on the given axis based on these values (see the function descriptions for a more in-depth explanation).

That's a lot to take in at once, and don't worry if you don't quite understand it all! You will in time! All that's left to do now is add an instance of this object to a room, and then press the **Play** button **![Play Icon](../assets/Images/Icons/Icon_PlayGame.png)**, and you should get silky-smooth 8 way movement without any of the issues related to moving diagonally:

![Animation Showing Improved 8-Way Keyboard Movement](../assets/Images/QS_Guide/QS_MovementExample_4_4.gif)

With these examples - and the previous ones for drawing - we hope that you've got enough of an understanding to start making your own projects! The last page of this Quick Start Guide contains a summary of some of the things you've learned as well as links to additional learning materials.