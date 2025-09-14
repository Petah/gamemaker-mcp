---
title: "Room Properties"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Room_Properties/Room_Properties.htm"
converted: "2025-09-14T04:00:16.366Z"
---

# Room Properties

![Room Editor Properties](https://manual.gamemaker.io/monthly/en/assets/Images/Asset_Editors/Editor_Room_RoomSettings.png)The Room Properties section is where you can set the inheritance toggle for the settings, change options such as persistency, the room's size and manage viewports. This is shown in [The Inspector](../../IDE_Tools/The_Inspector.md) when you select a room asset in [The Asset Browser](../../Introduction/The_Asset_Browser.md).

## Persistent

Normally, when you leave a room and return to the same room later, that room is reset to its initial settings. This is usually fine for most games but it may not be what you want in, for example, an RPG or any non-linear game, where you want to come and go between rooms and have them be the way you left it the last time. Checking the box labelled **Persistent** will do exactly that. The room status will be remembered and when you return to it later, it will be exactly the same as you left it, with it only being reset to the start state when the game is restarted. Note that there is _one_ exception to this - if you marked certain objects as being persistent, instances of this object will _not_ stay in the room but move to the next room.

## Clear Display Buffer

After that you have the option to **Clear Display Buffer**. This option, when checked, pre-fills the display buffer with a colour before drawing anything else for a particular frame. If you know that your views are going to be covering the whole screen at all times or that you have a fullscreen, opaque background being drawn, then you can un-check this, which saves a redraw and so helps optimise your game.

However if you have multiple views that, when on-screen leave open spaces, or your background has transparent parts - you can check this so any empty areas are filled in with the draw colour of your choice. Currently this colour can only be set through code using [window\_set\_colour()](../../GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_set_colour.md).

For clearing views, please see [Clear Viewport Background](Room_Properties.htm#clear_view).

NOTE If you are using automatic aspect ratio correction (as set in the [Game Options](../../Settings/Game_Options.md)), then you should **always** have this checked otherwise you can get odd effects over the "letterbox" that your game is drawn in. If you do not use this option then you can un-check this and get a small boost to your games performance (especially noticeable on Android and other mobile platforms).

## Width, Height & Creation Code

A room has to have a size and this is defined by the values that you input for its width and height in pixels.

You can then add the **Room Creation Code**, should you require it. Creation code is added from the button at the bottom (along with the inherit toggle to say whether the room should inherit its creation code or not), and if you click it you will open a code or visual editor. This editor allows you to input functions/actions and code that will be run at the _start_ of the room, after the Create event of all instances but before their Room Start event (for more information on event order, please see [Event Order](../Object_Properties/Event_Order.md)). This code will run every time you enter the room, unless the room is flagged as persistent, in which case it will only be run once when the room is first entered, but not on subsequent visits to the room.

## Instance Creation Order

The final button in the Room Properties permits you to open the **Instance Creation Order** window:

![Instance Creation Order Window](../../assets/Images/Asset_Editors/Editor_Room_CreationOrder.png)This window lists all the instances in the room in the order that they will be created (from top to bottom of the list). By default, this corresponds to the order in which you add the instances to the room in the Room Editor, as new instances are added to the end of this list. Should you require a specific instance to be created before any other, you can simply click ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) and drag it to the position you require.

IMPORTANT Instance creation order doesn't guarantee execution order within the same event. For example, if one instance is created before another one it may not mean it runs its Step event, Draw event, etc., before the other instance as well.

If this is the ![](../../assets/Images/Icons/icon_RoomManager_Home.png) first room set to open in-game as defined in [The Room Manager](../../Settings/The_Room_Manager.md), this list will display any Object instances from [UI Layers](UI_Layers.md) as well. You also have buttons in the bottom-right to move all UI layer instances to the top or bottom of the list.

NOTE Instances in a room are created in a certain [order](Room_Properties.htm#creation_order), and their Create events are also executed as they are created one-by-one. This means that you must be careful when reading variables from other instances in the Create event, as that other instance may not have run its Create event yet!

For example: let's say **ObjectA** is created before **ObjectB**, and you have the following code in those objects' Create events:

**ObjectA** Create - myValue = objectB.myValue;
**ObjectB** Create - myValue = 10;

ObjectA is created first and its Create event runs, which then crashes the game:

_**"Variable objectB.myValue(100003, -2147483648) not set before reading it."**_

That's simply because ObjectB has not even been created yet, so any variables initialised in its Create event do not yet exist. This is why you must take caution when referencing other instances like this in the Create event, including any code run inside [with()](../../GameMaker_Language/GML_Overview/Language_Features/with.md) blocks.

# Cameras And Viewports

The next set of properties for the room that you can define are those relating to the room **Camera** and **Viewports**. Camera views give a mechanism for drawing different parts of your room at different places on the screen, or for drawing just a part of your room to cover the whole screen. For example, in most platform games, the camera view follows the main character, as, if you could see the whole level on the screen, your character would be too small to see and there would be no surprises for the player. Camera views can also be used in multi-player games or co-op games, as they permit you to create a split-screen setup in which in one part of the screen you see one player and in another part you see the other player. This can all be easily achieved in GameMaker using camera views.

![Camera And Viewport Properties](../../assets/Images/Asset_Editors/Editor_Room_RoomViews.png)At the top of the view properties there is a box labeled **Enable Viewports**. This _must be flagged_ before any of the camera views can be used in your game.

NOTE You can toggle inheritance on or off for the three main viewport settings, and then you can toggle inheritance on or off for each individual camera view.

The next checkbox is the one that says **Clear Viewport Background**, which is similar to the [Clear Display Buffer](Room_Properties.htm#clear_display_buffer) option given above but for viewports specifically. When enabled, it clears the application surface with the window colour before drawing each frame. This ensures that you don't see any unintended graphics through transparent areas in your background, such as the contents of any previous frames. It's important to enable this option (along with "**Enable Viewports**") if your background contains any transparency.

### Cameras, Views and View Ports

A camera view is defined by two different sets of values, the camera view itself and the port on the screen where this view is to be drawn. This can sometimes cause confusion so let's explain this a bit before explaining how we define each of them:

-   **The Camera**: A point within the room that will be used to set how the room is displayed on screen (this is an abstract point in the room editor and its position is set automatically based on the view and view port settings)
-   **The View**: What the camera sees, based on the position, projection and rotation of the camera
-   **The View Port**: The area of the physical screen where the camera view will be displayed

![Camera View Example](../../assets/Images/Asset_Editors/Camera_Example.png)So, for example, this means that you can have a 640x480 camera view into your room, and then set the port to 320x240, which will display the view scaled down to that sized port on the screen, and you can also do the same and set the view to a smaller value and the port to larger making the image scale up to fit the port size and be shown on the screen larger than it is. In this way you can maintain a screen (port) size while changing the camera view to display more or less of the room in the same area of the screen.

### Camera and View Port Properties

The camera view is always defined as a rectangular area in the room, where you specify the position of the top-left corner, the width and the height of this area. Then you must specify where this area is shown in the window on the screen by defining the view port, where again you specify the position of the top-left corner and the size (note that anything other than 0, 0 for the top left corner can give strange results). You can have more than one port and they can overlap, in which case they are drawn in the indicated order one on top of the other.

Please realise that the overall screen area is _always defined as a rectangular area_, so your ports, even when offset, will form a rectangle, with any empty spaces being filled in by the window colour of the display buffer, meaning that in these circumstances you should always have **Clear Display Buffer** checked or else you will get odd artefacts drawn in the spaces between ports. The image below illustrates this, where there are two offset view ports visible, yet they make a square window, and "underneath" there are lines being drawn to the display buffer:

![Object Editor Post Draw](../../assets/Images/Asset_Editors/Editor_Object_PostDraw.png)

### Object Following

Cameras also have the **Object Following** option. This is for when you want the camera to "follow" (i.e. maintain the view focused on) a certain object. To do this you must click ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) on the menu icon and select an object from the list that pops up (if there are multiple instances of this object in the room, only one of them is followed by the camera). The camera will now keep track of the x and y position of that instance to follow it.

The normal behaviour for a camera is to only move when the instance being followed gets too close to a "buffer" zone that makes an invisible boundary around the edge of the view. This zone can be defined by you using the **Horizontal Border** and **Vertical Border** values, so - for example - setting these values to 64 will mean that the view will not start to move and follow the character until it reaches 64 pixels from the edge of the view. The exact point that is checked against this buffer zone is the point at the [x](../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/x.md) and [y](../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/y.md) position for the instance being followed, and it does not make use of its [mask](../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/mask_index.md).

Finally you can indicate the **horizontal** and **vertical speed** at which the camera moves when the character has reached the buffer zone, and this has a default value of -1. This default value is basically "instantaneous" and means that the moment the follow instance is outside the horizontal border or vertical border buffer zone, the view will move. Now, this is not always what you want and so you can set the vertical and horizontal scrolling speed for the camera by setting the values to something other than -1. Note that a value of 0 will cause the view to not move at all, and any other positive value is how many pixels it will move in any frame, so setting the horizontal speed to 5 will have the view follow the object at 5 pixels per frame horizontally.

# Room Physics

Before you can use the built-in physics functions in your games, you must tell GameMaker that the room is a physics room. To do this, you must tick the option to **Enable Physics** at the top of the _Room Physics_ section (you can also toggle the inheritance of this section independently of the rest of the room settings). Once you have done that you can then continue on to set up the physics world properties, which are some basic properties that you must have pre-defined before your room will allow physics instances to work as such. For a more precise control over the world you can use code (see the [Physics Functions](../../GameMaker_Language/GML_Reference/Physics/Physics.md) for more information).

![Room Physics Properties](../../assets/Images/Asset_Editors/Editor_Room_RoomPhysics.png)The next thing you must do is set up the **Gravity** of the world. The strength and direction of this is calculated as a vector of the x/y position that you set around a (0, 0) point. So, an x of 0 and a y of 1 will set the gravity direction as being _down_ with a force of 1 meter per second (for a more detailed explanation see - [The Physics World](../../GameMaker_Language/GML_Reference/Physics/The_Physics_World/The_Physics_World.md)).

Finally you must set the ratio of **Pixels To Meters** for GameMaker to use as a base for all its physics calculations. This is because the physics functions work on real-world measurements, which is why we must set this value, and you'll want to adjust this setting until the average pixel size of the objects you are using translates roughly into simulated physics objects of an appropriate size.

It should be noted that enabling physics in a room means that all physics enabled instances in the room _must use the physics functions and variables to move_. Basically, you have "traditional" movement, where you can set the X/Y position of an instance or set its speed and direction, and then you have the "physics" movement, which requires physical forces and impulses to move around. These systems are **mutually exclusive**, and you cannot move a physics instance using non-physics functions and you cannot move a non-physics instance using the physics functions.