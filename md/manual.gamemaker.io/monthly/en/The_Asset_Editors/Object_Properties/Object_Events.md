---
title: "Object Events"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Object_Properties/Object_Events.htm"
converted: "2025-09-14T04:00:15.856Z"
---

# Object Events

So, what are Object Events? Basically, these are discreet moments in the game loop where things are made to happen based on what you have programmed for them. GameMaker works with cycles of these events - from the moment a room is started to the moment it is finished there is a game loop running where every **step** a series of events are run or checked, and you can choose to place GML Code or GML Visual actions in your objects that respond to these events (a step is a moment in game time, governed by the [Game Frames Per Second](../../Settings/Game_Options.md) setting, and can also be called a **frame**).

Let's look at a typical object setup with events and code:

![Object Editor Events View](../../assets/Images/Asset_Editors/Editor_Objects_Events.png)As you can see in our example object there are a number of events listed that it should respond to, but initially when you create an object this list is empty and you must decide which events you need and what instances of that object should do when those events are triggered. To add events into the object, you press the **Add Event** button found at the bottom of the events list which will bring up the following window:

![Object Editor Events List](../../assets/Images/Asset_Editors/Editor_Objects_EventList.png)This is the list of all the basic events and event categories which an object can respond to, and within each category are sub events to further refine behaviours. For example, if you click on the **K****ey Press** ![Key Press Icon](../../assets/Images/Icons/Icon_KeyboardPress.png) event category you will then get a further window popping up with the events that allow you to select _which_ key the object should respond to.

Once you have selected your event, the event's editor window will be chained to it and open up on the right.

At this point, you may be asked to choose between GML Visual and GML Code. See [GameMaker Language](../../GameMaker_Language.md) for more information.

You can now edit the GML Code (or blocks) to give your object a specific behaviour or reaction to that event.

You can click the right mouse button ![RMB Icon](../../assets/Images/Icons/Icon_RMB.png) on any event that has been added to an object to get the following menu options:

![Object Editor Events Menu](../../assets/Images/Asset_Editors/Editor_Objects_RMBMenu.png)These options are:

-   **Add Event** - Add a new event from the event list.
-   **Show Parent Event** - View the inherited event from the parent in a read-only mode.
-   **Open Parent Event** - Open the inherited event in the parent object.
-   **Cut** / **Copy** / **Paste Events** - Cut, copy or paste the selected event. You can use the standard keyboard shortcuts too: ![CTRL Icon](../../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../../assets/Images/Icons/Icon_Cmd.png) + X, ![CTRL Icon](../../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../../assets/Images/Icons/Icon_Cmd.png) + C, and ![CTRL Icon](../../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../../assets/Images/Icons/Icon_Cmd.png) + V.
-   **Duplicate Event** - Duplicate the chosen event. This will take the contents of the chosen event and duplicate them in another event that you specify.
-   **Change Event** - Change the event. This will prompt you to choose another event category and once selected the contents of the current event will be changed to the new event (removing the original event in the process).
-   **Convert To GML Visual / Code** - Object events will be created using the method chosen when you created the project, either using GML Code or GML Visual actions. With this option you can convert from one to the other, regardless of the project type.
-   **Delete Event** - Delete the event (or events).

When removing events, you can use ![Shift Icon](../../assets/Images/Icons/Icon_Shift.png) + ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) to select multiple events and then delete them all together. Each object you create has its own discreet list of events which are added into it from [The Object Editor](../Objects.md). These events fall into two categories:

-   those that run every single game step
-   those that are "triggered" by a game event, like the instance reaching the room edge or a keyboard or mouse press.

The full list of events is given below:

![Create Event Icon](../../assets/Images/Icons/Icon_Create.png)[CreateCreate](Object_Events.htm#)

This event happens when an instance of the object is first created, and is the very first thing that happens within an instance placed in the room through the Room Editor when a room is entered. This means that this event is the ideal place to initialise variables, start [Timelines](../Timelines.md), set [Paths,](../Paths.md) etc. and do anything else that generally only needs to be done once or only when an instance is first created in the room. If your object has any **Object Variables** or **Instance Variables** added in either the Object Editor or the Room Editor, then these variables will be initialised first and then the **Create Event** will be run.

Remember that you can modify anything you set up in the Create event from the [Instance Creation Code](../Room_Properties/Layer_Properties.md) in the Room Editor, as that is run directly after the Create event for the instance and can be used to create **Instance Variables** or to override any variables added as Object Variables or in the actual Create event.

NOTE Instances in a room are created in a certain [order](../Room_Properties/Room_Properties.htm#creation_order), and their Create events are also executed as they are created one-by-one. This means that you must be careful when reading variables from other instances in the Create event, as that other instance may not have run its Create event yet!

For example: let's say **ObjectA** is created before **ObjectB**, and you have the following code in those objects' Create events:

**ObjectA** Create - myValue = objectB.myValue;
**ObjectB** Create - myValue = 10;

ObjectA is created first and its Create event runs, which then crashes the game:

_**"Variable objectB.myValue(100003, -2147483648) not set before reading it."**_

That's simply because ObjectB has not even been created yet, so any variables initialised in its Create event do not yet exist. This is why you must take caution when referencing other instances like this in the Create event, including any code run inside [with()](../../GameMaker_Language/GML_Overview/Language_Features/with.md) blocks.

![Destroy Event Icon](../../assets/Images/Icons/Icon_Destroy.png)[DestroyDestroy](Object_Events.htm#)

This event is the event to be executed when an instance is destroyed. It is often overlooked when adding behaviours to objects, but it can be very useful, for example by creating explosion or particle effects when an enemy is killed, or for respawning a new instance of the object in another part of the room, or even for adding points to a score.

![Clean Up Event Icon](../../assets/Images/Icons/Icon_Destroy.png)[Clean UpClean Up](Object_Events.htm#)

This event will be called after any event that removes an instance of the object from the room. So, it will be triggered if:

-   the instance is destroyed
-   the room ends
-   the game ends

It is designed for you to use to "clean up" any dynamic resources that you may have in your game (like surfaces, data structures, etc.) or to perform any task that you need performed _once_ when the instance is removed from the game in any way.

Note that this event will be called _instantly_ after the event that triggered it, but the instance will not actually be removed from the game **until the end of the current event**. For example, if you call [instance\_destroy](../../GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_destroy.md) in the Step Event, then the Destroy Event will be called, then the Clean Up Event, and then _the rest of the Step Event will finish running_. This means that any code you have after the call to instance\_destroy() will still be run and be a potential cause for errors if you've cleaned up a data structure or some other resource that the code requires, so care must be taken when using this event.

Also note that, because of how GameMaker works internally, any events that you call in this event (with the exception of the inherited event), will run only if this event was triggered by the instance being destroyed, not when the room ends or when the game ends. See [Generating Object Events](../../GameMaker_Language/GML_Reference/Asset_Management/Objects/Object_Events/Generating_Object_Events.md).

![Alarm Event Icon](../../assets/Images/Icons/Icon_Alarm.png)[AlarmAlarm](Object_Events.htm#)

The alarm category is split into 12 events, one for each of the possible alarms that can be set in an instance. So, when you click on the _Add Alarm_ category you are presented with this window:

![Object Editor Alarm Events](../../assets/Images/Asset_Editors/Editor_Objects_AlarmEvents.png)Here you select the alarm that you wish to create and, once that is done, you will see that it has been added to the event window allowing you to add code to it as normal. But what is an alarm? Well, it is a special event that does nothing unless the alarm has been previously set, and then it will wait until that alarm has counted down to 0 before running the actions or code that you have added into it.

Once the alarm has reached 0 and run the code, it will then count down to -1, where it will remain until set again (meaning you can check the value of an alarm to see if it is greater than -1, which will tell you if it's running or not). So, say you set alarm\[0\] in the Create event of the object to 30, this means that GameMaker will count down 30 game steps before it runs the actions or code that are placed in the alarm\[0\] event. Note that setting an alarm to 0 will _not_ run the alarm code, as the event is triggered, but the alarm is set to -1 immediately, so the code is skipped. If you need an alarm to run the very next step, then you should set it to 1.

This can be very useful as it allows you to set things in motion at precise moments, and you can even have them repeat as there is nothing to stop you setting an alarm in its own event. Imagine you have a monster and you want it to turn right every three seconds... well, you would set an alarm in its Create event to the game speed \* 3 (if the game speed is 30, that's 30 steps per second, so multiply that by 3 and you get 3 seconds!) and then in the Alarm event you would have the code or action to set its direction, as well as the action (or code) to set its alarm to game speed \* 3 again. In this way, you can set up simple game loops where things only happen at specific intervals.

It is worth noting that an alarm with no actions or code in it in it will _not_ count down. However, even with just a comment and no code or actions, then the alarm will continue to count down and can be set and checked as you would normally.

![Step Event Icon](../../assets/Images/Icons/Icon_Step.png)[StepStep](Object_Events.htm#)

GameMaker splits time into **steps** with the game speed defining how many of these steps there are supposed to be per second (a step can also be called a **frame**). A single step, is basically the loop that runs constantly with all the events being checked and triggered as necessary while the game runs, so as you can imagine, the **Step Event** is an event that is checked every single step of the game while the instance exists.

The step event is actually comprised of three sub events that are outlined below:

![Object Editor Step Events](../../assets/Images/Asset_Editors/Editor_Objects_Step.png)

NOTE First, all instances run their **Begin Step** event. Then, all instances run their **Step** event. After that, all instances run their **End Step** event.

For most things the standard Step event will be fine to use, but sometimes you want a bit more control over what code runs and at what time, so for that you are provided with the **Begin** and **End S**tep events. All three are checked every step, but their order will never vary even if future updates to the GameMaker engine change other events, which means that this is the only reliable method of making sure that something always happens before something else.

What can the Step event be used for? Well, it can be used for actions or code that needs to be executed continuously. For example, if one object should follow another, here you can adapt the direction of motion towards the object we are following to keep it moving smoothly behind. Be careful with this event though, and don't put many complicated actions in the Step event of objects, especially if you are planning on having lots of instances of the object in your game room, as this might slow the game down. Many things can be placed into alarms, or set to trigger using some of the **Other** events, rather than happening all the time.

![Collision Event Icon](../../assets/Images/Icons/Icon_Collision.png)[CollisionCollision](Object_Events.htm#)

Obviously when making a game, it is very important that you know when two (or more) instances of an object have collided, and for that we have the **Collision Event**. This is an event that you place in an object and then specify against which other object you should be checking for collisions.

NOTE Collision checks are limited to the space that the checking instance is placed in, so e.g. an instance on a Display UI layer cannot collide with instances placed on a room layer or a Viewport UI layer. This applies to both the Collision events and [Collision functions](../../GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/Collisions.md).

When you don't have physics turned on, these collisions will be calculated based on the mask of the two objects (the mask is defined within the sprite properties, or can be assigned independently in the object properties) and whether they overlap or not. Note, that if one or the other instances in the collision does not have a mask assigned (or the sprite mask is set to nothing), _even if it is drawing something_ no collisions will be detected.

If you have **Physics** on, then the collision will be based on the type of **collision shape** (_Fixture_) that you have defined for the object in its physics properties, as will its reaction to the collision. This means you may not need any code to deal with the collision, but this event will still _need to have at least a comment in it_ for the collisions to be detected.

Finally, it should be noted that all collisions will be calculated once per game step before the collision event is triggered, such that when the collision event runs, all collisions will have been calculated already and pre-assigned. This means that if you create an instance in this event and then try to check for a collision with it, the collision wont be detected or resolved until the next iteration of the game loop.

![Keyboard Icon](../../assets/Images/Icons/Icon_Keyboard.png)[Keyboard,Keyboard,](Object_Events.htm#)   ![Keyboard Press Icon](../../assets/Images/Icons/Icon_KeyboardPress.png)[Keyboard Press,Keyboard Press,](Object_Events.htm#)  ![Keyboard Release Icon](../../assets/Images/Icons/Icon_KeyboardRelease.png) [Keyboard ReleaseKeyboard Release](Object_Events.htm#)

Letting the player control the different aspects of your game is very important, and to that end GameMaker provides you with a very comprehensive list of keyboard events that can be used in any of the three main keyboard categories. For the general Keyboard category, it is triggered continuously every step for as long as the selected key is pressed down, while the Press and Release category events will only be triggered once when the key is initially pressed down or released.

It should be noted that keyboard events are actually triggered in all active instances in a room whenever a key is used, but only those that have an event defined for that particular key will respond and you can create multiple keyboard events in any object and the instances of that object will respond to all of them while the game is running.

When you add any keyboard event to an object, you will be presented with the keyboard sub event menu where you can specify the key you are to be checking for:

![Object Editor Keyboard Events](../../assets/Images/Asset_Editors/Editor_Objects_Keyboard.png)Most of them are fairly obvious, but let's just go through the sections briefly - at the top we have the arrow keys, followed by the most used modifier keys, then the rest of the keyboard (split into further sub-sections so you can get the exact key required like ![Escape Icon](../../assets/Images/Icons/Icon_Escape.png) or ![Insert Icon](../../assets/Images/Icons/Icon_Insert.png)) and finally two very special sub events, **No Key** and **Any Key**. As their names imply, these are sub events that check for when _no_ key is pressed or for when _any_ key is pressed. Please note that the keys on the numeric keypad only produce the corresponding events when **Number Lock** is enabled.

The **Press** and **Release** events for the keyboard are almost exactly the same as the regular keyboard event, except that instead of being triggered continuously, they are triggered once only. When the keyboard first registers that a key has been pressed it will generate a **Keyboard Pressed** event (as well as a regular Keyboard event), and the first time after that where a key is no longer being detected as pressed it will trigger a single **Keyboard Release** event.

IMPORTANT GameMaker won't perform keyboard and mouse events when [The Debug Overlay](../../GameMaker_Language/GML_Reference/Debugging/The_Debug_Overlay.md) is open and has taken over keyboard and/or mouse input. [Simulating Keypresses](../../GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/Keyboard_Input.htm#simulating_keypresses) will also not execute events. You can, however, still use the [Keyboard Input](../../GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/Keyboard_Input.md) and [Mouse Input](../../GameMaker_Language/GML_Reference/Game_Input/Mouse_Input/Mouse_Input.md) functions in the Step event, for example, to check for input. You can also still perform an event's code using the [event\_perform](../../GameMaker_Language/GML_Reference/Asset_Management/Objects/Object_Events/event_perform.md) function and its relatives.

![ Mouse Icon](../../assets/Images/Icons/Icon_MouseEvent.png)[MouseMouse](Object_Events.htm#)

The Mouse category is separated into a series of events that can be selected to give you a more precise control over what is happening in your game. Here you can see exactly what these events are:

![Object Editor Mouse Events](../../assets/Images/Asset_Editors/Editor_Objects_Mouse.png)The left ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png), right ![RMB Icon](../../assets/Images/Icons/Icon_RMB.png) and middle ![MMB Icon](../../assets/Images/Icons/Icon_MMB.png) button events (whether **held down**, **pressed** or **released**) all work on the mask of the instance that has the event. What this means is that GameMaker will check the position of the mouse in the room when those buttons are used against the collision masks of the instances that have a mouse event. If there is a "collision" with the instance bounding box then the event will be triggered, so make sure that any instance with these events has a sprite with a valid collision mask or that the object has a mask sprite selected in the object properties. As their names imply, these events will be triggered either once when the chosen mouse button is first pressed or released, or continuously each step while the button is maintained.

The "No Mouse Input" event will run while the mouse is on the collision mask of the instance but no mouse button is being pressed.

The mouse enter and leave events are similar to the button events in that they too rely on the mask of the instance to work, but this time they are triggered when the mouse first "enters" (touches) the instance or when the mouse "leaves" (stops touching) the instance. These events are not continuous however, and are triggered only once for each time the mouse enters or leaves the object - so they are an ideal method for creating, for example, buttons that need to change as the mouse hovers over them before going back to normal when the mouse is removed.

The mouse wheel events are triggered as the wheel is scrolled up or down. These are not tied to the collision mask of the instance and will trigger regardless of the position of the mouse cursor.

Finally we have another section to the mouse events which is called the **Global Mouse**. In this sub-menu you will find a selection of events that are for recording mouse events in instances even when the mouse is not over them or even near them. These are events that are generated for _all_ instances and if there are actions or code defined for the specified event then it will be run, regardless of the position of the mouse within the game room.

NOTE On mobile or touch-screen devices the left mouse button ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) can also be used to check for a finger tab on a touch screen, and the right mouse button ![RMB Icon](../../assets/Images/Icons/Icon_RMB.png) is triggered by a double tap on the screen (this behaviour can be changed using code).

IMPORTANT GameMaker won't perform keyboard and mouse events when [The Debug Overlay](../../GameMaker_Language/GML_Reference/Debugging/The_Debug_Overlay.md) is open and has taken over keyboard and/or mouse input. [Simulating Keypresses](../../GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/Keyboard_Input.htm#simulating_keypresses) will also not execute events. You can, however, still use the [Keyboard Input](../../GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/Keyboard_Input.md) and [Mouse Input](../../GameMaker_Language/GML_Reference/Game_Input/Mouse_Input/Mouse_Input.md) functions in the Step event, for example, to check for input. You can also still perform an event's code using the [event\_perform](../../GameMaker_Language/GML_Reference/Asset_Management/Objects/Object_Events/event_perform.md) function and its relatives.

![Gestures Icon](../../assets/Images/Icons/Icon_Gesture.png)[GesturesGestures](Object_Events.htm#)

This event is the one that will be triggered by the user touching the screen (on mobile) or clicking and moving the mouse (on all other platforms). These events are similar to the mouse events, in that you have regular versions and _global_ versions. The regular versions of these events will only be triggered when the touches occur on an instance that has a sprite (or a mask) and the touches occur within its bounding box. The global versions of these events, however, will be triggered by the user touching _anywhere_ on the screen.

The gesture events detect the following:

-   ![Tap Icon](../../assets/Images/Icons/Icon_Tap.png) **taps** \- when a user clicks/touches and releases quickly
-   ![Drag Icon](../../assets/Images/Icons/Icon_Drag.png) **drags** \- when a user touches/clicks and maintains it then moves their finger/cursor
-   ![Flick Icon](../../assets/Images/Icons/Icon_Flick.png) **flicks** \- when the user moves and releases a touch/click in one movement
-   ![Pinch Icon](../../assets/Images/Icons/Icon_Pinch.png) **pinches** \- when the user has two fingers on the screen and then moves them together/apart
-   ![Rotate Icon](../../assets/Images/Icons/Icon_Rotate.png) **rotates** \- when the user has two fingers on the screen and then rotates them around a point

![Object Editor Gesture Events](../../assets/Images/Asset_Editors/Editor_Objects_Gesture.png)The different events will always contain a DS Map called the "event\_data" map, which will contain a number of key/value pairs with data on the touch/click position and movement. For full details on all the available sub-events and how they work, please see the following section:

-   [The Gesture Event](../../../../../The_Asset_Editors/Object_Properties/Gesture_Events.md)

![Other Icon](../../assets/Images/Icons/Icon_Other.png)[OtherOther](Object_Events.htm#)

There are a number of special events for use when making games with GameMaker and they are mostly grouped together under the Other event and can be selected from the pop up menu of sub events that comes up when you select this. Here is an image of all these other events:

![Object Editor Other Events](../../assets/Images/Asset_Editors/Editor_Objects_OtherEvents.png)For more information on each of the events listed in the image above, please see the following section:

-   [The Other Events](Other_Events.md)

![Draw Event](../../assets/Images/Icons/Icon_Draw.png)[DrawDraw](Object_Events.htm#)

This event category is the one that governs what you see on the screen when you run your game, and is split into various discreet events:

![Draw Events](../../assets/Images/Asset_Editors/Editor_Objects_Draw.png)As you can see, the draw event category has multiple different event types. **Draw Begin**, **Draw** and **Draw End** are the "standard" draw events which you will probably use most. By default the main Draw event is always called for every instance, regardless of whether it has a sprite or not, although if you flag the instance as invisible, the event will not be triggered (so keep this in mind if you have any game logic in the draw event of an invisible object, as it won't run). The main draw event is also where GameMaker default draws the instance sprite when there is no code nor actions in the event (ie: you haven't added it into the event list for the object). Default drawing uses the sprite associated with the instance and will draw that with any transforms set in code or actions applied.

The standard draw events draw _before_ the **Draw GUI** events and _between_ the **Pre Draw** and **Post Draw** events, meaning that everything that is drawn in this event is drawn beneath that of the **Draw GUI** event, regardless of the layer (ie: anything drawn in the Draw GUI event will always be drawn over anything drawn in the normal draw event, regardless of layer order).

Note that the above is simply an overview of how the Draw Events work, but for full details on all the available sub-events, please see the following section:

-   [The Draw Event](Draw_Events.md)

![Async Event](../../assets/Images/Icons/Icon_Async.png)[AsynchronousAsynchronous](Object_Events.htm#)

This event category is special in that the events it contains are not triggered by default by GameMaker, but rather by the end of some other action, like the loading of a file, or the reply from a web server. The category is split into the following events:

![Object Editor Asynchronous Events](../../assets/Images/Asset_Editors/Editor_Objects_Async.png)

So, say you want to add an image file to GameMaker. Well, you would code this in another event (maybe the Create Event) of an object and then have that object draw a loading bar while waiting (for example), polling the appropriate asynchronous event until the callback that tells GameMaker the file has loaded. You can then use the data returned in this event to do other things, like change room, or purchase an item.

Note that the above is simply an overview of how the Asynchronous Event works, but for full details on all the available sub-events, please see the following section:

-   [Asynchronous Events List](Async_Events.md)

You should also note that you can name events, or at least give them a short descriptive text that will be shown beside them in the Event Editor. To do this, simply add the following into the very first line of the code editor for the event (when using GML Code):

/// @description Your text here

So, you could have something like this in - for example - an **Alarm** event:

/// @description This is the AI Fight alarm

And now in your Event Editor you'll see this:

![Object Editor Named Events](../../assets/Images/Asset_Editors/Editor_Objects_NamedEvents.png)

For GML Visual users, adding a comment requires the use of the **Execute Code** action, which should be placed at the very top of the actions for the event, before everything else. When you add this action, you then give it the same line of code that is shown above to name the event, e.g.:

![Naming An Event In DnD](../../assets/Images/Asset_Editors/Editor_Object_DnD_NamedEvents.png)For additional information on some of the above events and general event running order, please see the following sections:

-   [Event Order](Event_Order.md)
-   [The Other Events](Other_Events.md)
-   [The Draw Events](Draw_Events.md)
-   [The Async Events](Async_Events.md)
-   [The Gesture Events](../../../../../The_Asset_Editors/Object_Properties/Gesture_Events.md)