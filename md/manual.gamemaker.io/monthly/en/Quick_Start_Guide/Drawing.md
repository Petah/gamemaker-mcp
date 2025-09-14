---
title: "Drawing"
source: "manual.gamemaker.io/monthly/en/Quick_Start_Guide/Drawing.htm"
converted: "2025-09-14T04:00:13.056Z"
---

# Drawing

This section, and the following section on [Movement and Controls](Movement_And_Controls.md), are aimed at giving you practical examples of GML Code or GML Visual, to get you started making your first game projects. We won't be explaining things in too much depth as we want you to get started making stuff as quickly as possible, so we encourage you to explore any links as you go along and to use the "search" function of the manual to look for additional information on anything you aren't sure about.

In this section we're going to draw information to the screen, both text and images, and also explain a bit more about the different **Draw Events**, specifically, the main **Draw** event and the **Draw GUI** event (note that in some of the examples you will be required to add other events, but we'll explain these as we come to them).

![The Draw Events](../assets/Images/QS_Guide/QS_DrawEvents.png)

Before going any further, you might want to make a new project from the [Start Page](../Introduction/The_Start_Page.md), and add (or create) a few sprites as well as an object or two, as we'll be giving you some code that you can test using these. Even a white square will work for now as the sprite for our object!

Now, as mentioned in the section on [Objects And Instances](Objects_And_Instances.md), if you don't add a Draw Event to the object, then GameMaker will default draw, meaning that if the object has a sprite assigned to it this sprite will be drawn, complete with any transforms that have been added.

What do we mean by transforms? Well, each object has a number of built-in variables that will control how an instance of the object draws its sprite when default drawing, and you can change these variables as the game runs to change the way the sprite is drawn.

**NOTE** You can find a list of all the built-in variables that can be used for transforming instance sprites [here](../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/Sprite_Instance_Variables.md). GML Visual users have some dedicated actions that affect these variables, which you can find [here](../Drag_And_Drop/Drag_And_Drop_Reference/Instance/Instance_Actions_Library.md), and you can also use the actual variables themselves along with the [Get Instance Variable](../Drag_And_Drop/Drag_And_Drop_Reference/Instance/Get_Instance_Variable.md), [Set Instance Variable](../Drag_And_Drop/Drag_And_Drop_Reference/Instance/Set_Instance_Variable.md) and [Assign Variable](../Drag_And_Drop/Drag_And_Drop_Reference/Common/Assign_Variable.md) actions.

Let's look at some examples:

[Changing Alpha (Transparency)Changing Alpha (Transparency)](Drawing.htm#)

The **alpha** value is what controls the transparency of what's being drawn, and in GameMaker, you can use the image\_alpha built-in variable to change how transparent the assigned sprite is. To see how this works, open (or create) an object, assign it a sprite, and then give the object a **Create Event**. In the Create Event, simply add the following GML Visual or GML Code:

![GML VisualDraw Example For Transparency](../assets/Images/QS_Guide/QS_DrawExample_DnD_1.png)

var \_val = random(1);
image\_alpha = \_val;

Image alpha is calculated as a value from 0 to 1, where 0 is fully transparent and 1 is fully opaque (by default it's set to 1). So in this example, all we're doing is setting the image alpha to a random decimal value from 0 to 1. Place a few instances of this object in a room, and then click the **Play** button ![Play Icon](../assets/Images/Icons/Icon_PlayGame.png) at the top of the IDE.

You should see that each instance of the object draws its sprite with a different transparency:

![Example Of Sprites Drawn With Different Alpha Values](../assets/Images/QS_Guide/QS_DrawExample_1.png)

[Changing Colour Blend (Tinting)Changing Colour Blend (Tinting)](Drawing.htm#)

When your object is default drawing a sprite, this sprite is actually being drawn **blended** (or **tinted**) with a colour, and this colour value is stored in the image\_blend built-in variable. By default this colour is white, which essentially means that no colour will be added to the sprite when it is shown on the screen. However, you can use other colours to achieve special effects, for example, use red to show the instance has received some damage.

In this example, we're going to blend different colours with the sprite while a key is pressed and held down, and so you'll need to open (or create) an object, assign it a sprite, and then give the object a **Key Down <Space> Event**.

![Add Key Down Event](../assets/Images/QS_Guide/QS_Add_SpaceKeyPressEvent.png)

In this Key Down Event, add the following GML Visual or GML Code:

![GML VisualExample Using Key Down Event](../assets/Images/QS_Guide/QS_DrawExample_DnD_2.png)

var \_col = choose(c\_red, c\_green, c\_blue, c\_yellow, c\_fuchsia, c\_orange);
image\_blend = \_col;

Place a few instances of this object in a room, and then click the Play button ![Play Icon](../assets/Images/Icons/Icon_PlayGame.png) at the top of the IDE, and test holding down and releasing the _Space_ key. You should see that each instance will change its colour rapidly while the key is held down, and stop changing when it is released:

![Example Showing Colour Blending](../assets/Images/QS_Guide/QS_DrawExample_2.png)

[Changing ScaleChanging Scale](Drawing.htm#)

Another pair of the properties that we can change for our sprite is the **scale** value, permitting us to draw it bigger or smaller whenever we want. Scale is calculated independently along the X and Y axis by two seperate variables, the image\_xscale variable and the image\_yscale variable. By default these are set to 1, and they act like **multipliers**, so a value of 0.5 would be half scale and a value of 2 would be double the scale.

**IMPORTANT** Changing the assigned sprite scale using these variables **will also change the size of the collision mask (bounding box) to match**, which means that the collision detection area for the sprite will also scale. To avoid this, create your own variables for the X and Y scale, and use them in the Draw event to draw your sprite manually with [draw\_sprite\_ext](../GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_ext.md).

In this example, we're going to use some simple maths to make an instance scale the sprite up and down in a loop. To start with, open (or create) an object, assign it a sprite, and then give the object a **Create Event**. In this event add the following:

![GML VisualSet Variable Example](../assets/Images/QS_Guide/QS_DrawExample_DnD_3_1.png)

timer = 0;

Now add a **Step Event** to the object with this:

![GML VisualActions To Change Sprite Scale](../assets/Images/QS_Guide/QS_DrawExample_DnD_3_2.png)

timer = timer + 1;
var \_val = dsin(timer);
image\_xscale = 1 + \_val;
image\_yscale = 1 + \_val;

Here we're using the maths function [dsin()](../GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/dsin.md) to generate a value between -1 and 1 using the timer variable, and then applying that to the scale variables (**1 + \_val**). After placing some instances into a room and pressing the **Play** button ![Play Icon](../assets/Images/Icons/Icon_PlayGame.png), you should see how the instances scale up and down from a scale of 0 (**1 - 1**) to a scale of 2 (**1 + 1**) and then back again.

![](../assets/Images/QS_Guide/QS_DrawExample_3.gif "Animation Showing Sprite Scaling")

One last thing... change the "image\_yscale" assignment (or "**Vertical**" field in GML Visual) to "1 - \_val" (change + to \-) and see what happens!

The above examples illustrate just some of the many ways that you can manipulate the object sprite when GameMaker is default drawing, but what about if you want to draw more than one thing for an object? In those cases you need to use the **Draw Event** to explicitly tell GameMaker what to draw, which is what we'll do in the following examples.

[Drawing Two (or more) Sprites TogetherDrawing Two (or more) Sprites Together](Drawing.htm#)

For this example, you'll need two sprites and one object. Call the sprites "spr\_One" and "spr\_Two", and then set the "spr\_One" origin to the center and for "spr\_Two" set its origin to the middle-left:

![Show Origins For Sprites](../assets/Images/QS_Guide/QS_DrawExample_4_1.png)Assign the first sprite ("spr\_One" with the center origin) to the object you have created and then add a **Create Even**t. In the Create Event add the following GML Visual or GML:

![Set Draw Angle Variable In DnD](../assets/Images/QS_Guide/QS_DrawExample_DnD_4_1.png)

draw\_angle = 0;

We are going to use this custom variable to rotate "spr\_Two" over time, and draw it overlayed on the sprite assigned to the object (" spr\_One").

To do this we need to add a **Draw Event** to the object. By doing this we are telling GameMaker that we want to take over what the instance draws, which means that our code will include a call to the [draw\_self()](../GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_self.md) function or [**Draw Self**](../Drag_And_Drop/Drag_And_Drop_Reference/Drawing/Draw_Self.md) action. This action simply replicates what the object does when no Draw Event is present and it is default drawing the assigned sprite.

We'll then draw the second sprite that we want to use as the overlay sprite that is rotating. The GML Visual and GML Code looks like this:

![Draw Two Sprites With DnD](../assets/Images/QS_Guide/QS_DrawExample_DnD_4_2.png)

draw\_self();
draw\_angle = draw\_angle + 0.5;
draw\_sprite\_ext(spr\_Two, 0, x, y, 1, 1, draw\_angle, c\_red, 1);

This uses an additional function ([draw\_sprite\_ext](../GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_ext.md)) or action ([Draw Sprite Transformed](../Drag_And_Drop/Drag_And_Drop_Reference/Drawing/Draw_Sprite_Transformed.md)) to draw the second sprite ("spr\_Two") using the "draw\_angle" value as the rotation, with a red blend colour.

Add a number of instances of the object into the room editor and then press the **Play** button ![Play Icon](../assets/Images/Icons/Icon_PlayGame.png) at the top of the IDE. If all has gone correctly you should see something like this now:

![Animation Drawing Two Sprites Together](../assets/Images/QS_Guide/QS_DrawExample_4_2.gif)

Before we leave this example, let's just tweak it a little bit and instead of having "spr\_Two" simply rotate, we'll make it point towards the mouse position. For that we need to change the Draw Event GML Visual or GML Code to look like this:

![Edited Draw Code For Drawing Two Sprites With DnD](../assets/Images/QS_Guide/QS_DrawExample_DnD_4_3.png)

draw\_self();
draw\_angle = point\_direction(x, y, mouse\_x, mouse\_y);
draw\_sprite\_ext(spr\_Two, 0, x, y, 1, 1, draw\_angle, c\_red, 1);

Here we set the "draw\_angle" variable to the direction from the instance's position (x, y) toward the mouse position ([mouse\_x](../GameMaker_Language/GML_Reference/Game_Input/Mouse_Input/mouse_x.md), [mouse\_y](../../../../GameMaker_Language/GML_Reference/Game_Input/Mouse_Input/mouse_y.md)).

Run the project again and this time you'll see something very different!

![Animation Drawing Two Sprites Pointing At Mouse](../assets/Images/QS_Guide/QS_DrawExample_4_3.gif)The sprite now points towards the mouse regardless of where you move it to! As you can see, layering sprites is a great way to add details to an object or to have something move independently of the "base" sprite assigned to the object, and it's a powerful tool that you'll probably use a lot in your own projects.

Now for the simplicity of this example, the calculation of the "draw\_angle" value was included within the Draw event, however ideally you should have it in the Step event as Draw events should only contain statements required for drawing things, with per-frame calculations kept to the Step event.

[Drawing Things Other Than SpritesDrawing Things Other Than Sprites](Drawing.htm#)

You can also draw things in the Draw Event that are not sprites, like text or shapes. In this example, we'll use the draw\_self() function to draw the object sprite, but we'll also draw some other stuff, starting with some **text**. For this example, you'll need a sprite and an object (with the sprite assigned to it). In the object, first add a **Create Event** with this GML Visual or GML:

![Setting Variables Using DnD](../assets/Images/QS_Guide/QS_DrawExample_DnD_5_1_1.png)

name = choose("Fred", "Jonas", "Sharon", "Kate", "Frank", "John", "Monica", "Amanda");
number = irandom(100);

All this does is tell GameMaker to choose one of the listed names randomly and assign it to a variable, as well as generate a random number from 0 to 100 for each instance of the object. We want to draw these values to the screen, and so for that you need to now add a **Draw Event** and in it add the following GML Visual or GML:

![Drawing Text Using DnD](../assets/Images/QS_Guide/QS_DrawExample_DnD_5_1.png)

draw\_self();
draw\_set\_halign(fa\_center);
draw\_text(x, y + 32, "My name is " + name);
draw\_text(x, y + 48, "My number is " + string(number));

You'll notice in the above code that we use the [string()](../GameMaker_Language/GML_Reference/Strings/string.md) function or [**Number To String**](../Drag_And_Drop/Drag_And_Drop_Reference/Data_Types/Number_To_String.md) action on the "number" variable that we want to draw. This is because all text has to be made up of _characters_, not actual number values, and so we need to use this function/action to convert the number value into those characters that we want to draw.

In this case we are taking the random number we generated and turning it into a "string" of characters that can be drawn. Also note that we set the text **alignment**. This simply tells GameMaker where to start drawing the text relative to the given position, and in this case we want the text to be centered along the x-axis.

Add a number of instances of the object into the room editor and then press the Play button ![Play Icon](../assets/Images/Icons/Icon_PlayGame.png) at the top of the IDE. You should see something like this:

![Sprites Being Drawn Along With Text](../assets/Images/QS_Guide/QS_DrawExample_5_1.png)

In all the examples so far we've been drawing the sprite assigned to the instance, but that doesn't always have to be the case. **You can draw anything you want** in the draw event, regardless of the sprite assigned. To illustrate this point, we'll change the code that we have currently by removing the draw\_self() call and replace with a function to draw a coloured ellipse, like this:

![Drawing Shapes Along With Text Using DnD](../assets/Images/QS_Guide/QS_DrawExample_DnD_5_2.png)

draw\_ellipse\_colour(x - 50, y - 32, x + 50, y + 32, c\_fuchsia, c\_lime, false);
draw\_set\_halign(fa\_center);
draw\_text(x, y + 32, "My name is " + name);
draw\_text(x, y + 48, "My number is " + string(number));

Run the project again and you should see this:

![Example Of Drawing Shapes And Text Together](../assets/Images/QS_Guide/QS_DrawExample_5_2.png)

One important thing to note about this, is that even though we aren't drawing the assigned sprite, **it will still be used for collision detection**. So, while you may be drawing one thing, collisions will still be calculated based on the assigned sprite even if it's not visible. This is quite handy actually, as it means you can draw different sprites, but maintain a single **collision mask** based on the assigned sprite. Also note that you can still apply the different transforms like X/Y scale, and collisions will be based on the changed size, even though there is nothing being drawn to show this.

You can also do the opposite, where you change the [sprite](../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/sprite_index.md) assigned to the instance, but keep one mask by applying a sprite to the [mask\_index](../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/mask_index.md) variable.

# The GUI Layer

We mentioned at the top of the page that we'd be talking about the **Draw GUI Event** as well as the Draw Event, so let's look at that now.

The Draw GUI Event works on something called the **GUI Layer**, which is a special drawing layer of a fixed width and height that is drawn over the contents of the room. The great thing about the GUI layer is that _it doesn't move with the room's [camera](../GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/Cameras_And_View_Ports.md)_, so it's the ideal place to add static GUI (or HUD) items, like scores, healthbars and other information that your game requires to communicate to the user. You can find out more information on the GUI layer from the [Draw Events](../The_Asset_Editors/Object_Properties/Draw_Events.md) section of the manual.

**NOTE** Rooms can be larger than the screen size, so you can have large levels for the player to move around in. This means that in the Room Editor (or in code) you need to define a [camera](../GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/Cameras_And_View_Ports.md) that follows the action of your game. This is basically a way of setting up a fixed area of the screen to display different parts of the larger room based on - for example - the player position in the room, and is used in a lot of games. Think of the way that the view always follows the main character in classic games like Mario or Zelda. That's done with cameras. For information on setting up cameras, see [Cameras And Viewports](../The_Asset_Editors/Room_Properties/Room_Properties.htm#h).

The following examples are all going to be using the **Draw GUI** event, so you'll need to create an object and add that event to it. Note that the object doesn't need a sprite assigned, as we are not wanting to default draw anything, nor do we need it to detect collisions. Objects like this, that are only designed for drawing things or controlling certain aspects of the game are often called **Controller Objects**. Also note that we will be using the same object for all the examples, so we recommend that you go through these one after the other (although this is not strictly necessary).

![Draw GUI Event In An Object](../assets/Images/QS_Guide/QS_DrawGUIObject.png) [Drawing TextDrawing Text](Drawing.htm#)

When drawing to the GUI layer, the top-left corner of the window is the origin position (0, 0), and to the right is +X and down is +Y. This makes positioning text and graphics very easy, as you'll see in this example.

All we're going to do here is draw a value that represents the player's score, so in our object we'll need to add a **Create Event** to initialise a variable to hold this value, like this:

![Defining A Variable Using DnD](../assets/Images/QS_Guide/QS_DrawExample_DnD_6_1.png)

player\_score = 0;

We also want to add a **Keyboard Down <Space> Event** to the object, as we'll be using that to increment the score while you hold the Space key.

![Adding A Space Key Pressed Event](../assets/Images/QS_Guide/QS_Add_SpaceKeyPressEvent.png)

In this event add the following:

![GML VisualActions In The Space Key Event](../assets/Images/QS_Guide/QS_DrawExample_DnD_6_2.png)

var \_val = irandom(100);
player\_score = player\_score + \_val;

This generates a random number from 0 to 100 and _adds_ that to the "player\_score" variable (in GML Visual, "**Relative**" is marked, making it an addition operation instead of assignment).

Finally, let's draw the score value in the Draw GUI event, like this:

![Drawing Text To The GUI Layer Using DnD](../assets/Images/QS_Guide/QS_DrawExample_DnD_6_3.png)

draw\_set\_halign(fa\_left);
draw\_set\_colour(c\_yellow);
draw\_text(32, 32, "SCORE:");
draw\_set\_colour(c\_white);
var \_str = string(player\_score);
draw\_text\_transformed(32, 48, \_str, 2, 2, 0);

You'll notice how we've used hard-coded (or fixed) values for the x/y position of the text to be drawn, since we don't need it to be relative to any instance as we are drawing to the GUI layer. We've also used the "set colour" function to change the colour of the text, as well as the "transformed" fucntion to make the actual score value larger, which illustrates how you can go about customising text elements in your own games.

Add a single instance of this object to your room now and then press the **Play** button ![Play Icon](../assets/Images/Icons/Icon_PlayGame.png). When the game runs press the <Space> key and you should see the score value increase.

![Animation Showing Text Being Drawn To The GUI Layer](../assets/Images/QS_Guide/QS_DrawExample_6.gif)

[Drawing SpritesDrawing Sprites](Drawing.htm#)

In this example, we are going to use the GUI layer to draw some sprites. The most obvious use for this is to draw the players lives, so lets go ahead and do just that! You'll need a sprite for this example - which should be about 64x64 pixels - but it shouldn't be assigned to the object, as we'll be drawing it ourselves.

To start with, we need to add some new variables to the object in the **Create Event** (if you've done the previous example, add the following below what's already there):

![Defining Variables Using DnD](../assets/Images/QS_Guide/QS_DrawExample_DnD_7_1.png)

player\_lives = 3;
gui\_w = display\_get\_gui\_width();

In this code we initialise a variable for the player lives, but we also create a variable to hold the width of the GUI layer, so that we can position things correctly relative to the right edge of the screen.

We could just hardcode a value into the code and use that, but that would mean that if we make any changes to the size of the room or camera later, then we'd need to go through the code and change the value everywhere. Using the [display\_get\_gui\_width()](../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/display_get_gui_width.md) function instead means that we don't need to worry about any future changes like that as the code will adapt automatically to whatever size the GUI layer ends up being.

Next we want to add a **Keyboard Pressed <Enter> Event** to the object, as we'll be using that to change the number of lives every time the Enter key is hit:

![Adding An Enter Key Pressed Event](../assets/Images/QS_Guide/QS_Add_EnterKeyPressEvent.png)

In this event add the following:

![GML VisualIn The Enter Key Down Event](../assets/Images/QS_Guide/QS_DrawExample_DnD_7_2.png)

player\_lives = player\_lives - 1;

if (player\_lives < 0)
{
    player\_lives = 3;
}

This lowers the lives by 1 each time the key is hit, and when it goes below 0, it resets it to 3.

Finally, we need to draw the sprites to the display. For this we'll be using a "for" loop (information using GML [here](../GameMaker_Language/GML_Overview/Language_Features/for.md) and for GML Visual [here](../Drag_And_Drop/Drag_And_Drop_Reference/Loops/For.md)), along with the GUI width variable to position everything in the top right corner of the screen. So, add this into the Draw GUI Event (after any other actions that it may have from previous examples):

![GML VisualActions To Draw Sprites To The GUI Layer](../assets/Images/QS_Guide/QS_DrawExample_DnD_7_3.png)

for (var i = 0; i < player\_lives; i += 1)
{
    var \_xx = gui\_w - 48 - (i \* 70);
    draw\_sprite(spr\_Heart, 0, \_xx, 48);
}

If you haven't already added an instance of this object to a room, go ahead and add it now (only one!), then press the **Play** button ![Play Icon](../assets/Images/Icons/Icon_PlayGame.png). Once the game is running press the <Enter> key various times to see the lives change.

![Animation Drawing Sprites To The GUI Layer](../assets/Images/QS_Guide/QS_DrawExample_7.gif)

Before you leave this example, you should experiment with the number of lives and see what happens. At the moment it's set to 3, but change the Create Event and the Key Pressed event to set the value to 5, or 10... if you've done everything right, then the code should adapt and draw them all correctly!

[Drawing A HealthbarDrawing A Healthbar](Drawing.htm#)

This final example covers drawing a healthbar to the GUI layer. There are a number of ways that this can be done, but GameMaker has a built-in function specifically for doing healthbars, so that's what we'll be using here, although you can create your own using sprites or shapes too. To start with, as before, we need to initialise a varaible to hold the health value, so add the following GML Visual or GML into the **Create Event** of the object (after any other code that may already be there):

![Defining A Variable Using DnD](../assets/Images/QS_Guide/QS_DrawExample_DnD_8_1.png)

player\_health = 100;

We want to use the arrow keys to change the health value up or down depending on which arrow key is pressed, and we could do that by adding in two **Keyboard Pressed <Arrow>** events, however it's probably easier to use a **Step Event** and some code to check for the keys, so go ahead and add a **Step Event** now with the following GML Visual or GML:

![Step Event GML VisualActions](../assets/Images/QS_Guide/QS_DrawExample_DnD_8_2.png)

if (keyboard\_check(vk\_up))
{
    if (player\_health < 100)
    {
        player\_health = player\_health + 1;
    }
}

if (keyboard\_check(vk\_down))
{
    if (player\_health > 0)
    {
        player\_health = player\_health - 1;
    }
}

Try to think about what this does!

With that done, we can actually get around to drawing the healthbar, which is done in the Draw GUI event, adding the following (after anything else that is already there):

![GML VisualFor The Draw GUI Event To Draw A Healthbar](../assets/Images/QS_Guide/QS_DrawExample_DnD_8_3.png)

var \_xx = display\_get\_gui\_width() / 2;

draw\_healthbar(\_xx - 50, 24, \_xx + 50, 40, player\_health, c\_black, c\_red, c\_lime, 0, true, true);

Add an instance of this object to a room if you haven't already done so (only one, though!), and then press the **Play** button ![Play Icon](../assets/Images/Icons/Icon_PlayGame.png). Once the game is running press the <Up Arrow> and <Down Arrow> keys various times to see the health change.

![Animation Of Drawing A Healthbar](../assets/Images/QS_Guide/QS_DrawExample_8.gif)

We hope that after doing these examples you have a bit more confidence when using GameMaker and a bit more understanding of how it all works. The next section will explore how to get these things you've been drawing to move around the room as well as accept - and respond to - user input.