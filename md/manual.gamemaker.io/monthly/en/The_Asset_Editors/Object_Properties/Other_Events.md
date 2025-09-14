---
title: "Other Events"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Object_Properties/Other_Events.htm"
converted: "2025-09-14T04:00:15.908Z"
---

# The Other Events

![The Other Events](../../assets/Images/Asset_Editors/Editor_Objects_OtherEvents.png)

This page explains each of the different events that are collected under the **Other** events category in [The Object Editor](../Objects.md):

[Outside RoomOutside Room](Other_Events.htm#)

This event is triggered when an instance goes outside the room, and is based on a check done against the assigned sprite (and its properties) of the instance, so that even if you have set the image x or y scale to a value other than one, this event will only be triggered when the whole sprite would be out the screen. If the instance has no sprite, then the position of the instance is used and the moment its x or y position is outside of the room then it will trigger the event too. This event is typically used for things like bullets, where they are destroyed once they leave the room so you don't end up with millions of bullets flying away infinitely and causing your game to slow down. Note that this event is only triggered once when the instance leaves the room initially.

[Intersect BoundaryIntersect Boundary](Other_Events.htm#)

This event is triggered when an instance "touches" the inside edge of the room, and, like the outside room event, is based on a check done against the assigned sprite of the instance, so that even if you have set the image x or y scale to a value other than one, this event still be triggered the moment a part of the sprite intersects the room boundary. If the instance has _no_ sprite, then the position of the instance is used and the moment its x or y position intersects the room boundary then it will trigger the event too. You can use this event to do things like tell an instance to "bounce" back in towards the room again rather than go outside.

[ViewsViews](Other_Events.htm#)

Camera views are normally defined in the room editor and used to show only a small area of a large room at any one time. This event category has two seperate sub-categories (**Outside View** and **Intersect Boundary**), with eight different events in each corresponding to the eight available view ports. These two categories function exactly the same as the respective room events, only taking the boundary of the camera view as the thing for the instance to check against rather than the room.

[Game StartGame Start](Other_Events.htm#)

This special event is triggered only once in the whole game and only for those instances with actions or code placed in the event. These instances must be present in the first room of the game and have been placed there in the room editor, rather than have been created dynamically using code or actions. It should be noted that this event happens _after_ the create event of all instances and so can contain code or actions with variables that have been previously defined in that event. This event is typically defined in only one "controller" object and is typically used to initialize global variables, start music, read from files and any other thing that is usually only done once at the start of a game.

[Game EndGame End](Other_Events.htm#)

Similar to the above mentioned Game Start event, this event is only triggered once in the whole game and that is just before the game window actually closes. Again, for an instance with this event to actually do anything it has to be in the room as the game is closed. Please note that this event is really only viable for **Windows**, **Ubuntu** (Linux) and **macOS** games as mobile devices may just close the game without giving GameMaker the chance to call this event. For browser games made with the HTML5 module, this event should work when the game tab or browser is closed, but not all browsers support this feature (Firefox, Chrome and Safari do at the time of writing) so care must be taken when using it. Typically you would use this event to save data.

[Room StartRoom Start](Other_Events.htm#)

This event happens for all instances initially in a room when the room starts. Please note that it happens _after_ the Create event and so can depend on variables and things defined previously in that event.

[Room EndRoom End](Other_Events.htm#)

This event happens to all instances that are in the room when the room ends. This event is very useful for "cleaning up" after a level has ended, for example you can delete loaded resources here, remove a particle system to prevent memory leaks, etc.

[Animation EndAnimation End](Other_Events.htm#)

In GameMaker sprites are not static things as they can have sub-images and be animated at different speeds. Each frame of an animation (called a sub-image) has its own number, starting at 0, which can be checked in code or through actions, but sometimes all you really need to know is when the animation has ended. That's when this event is triggered, right at the end of the animation when the sub image index shows that the last frame has been reached. This event is really useful for many things, for example an explosion object where you can set the instance to destroy itself when the last frame of the animation is reached.

[Animation UpdateAnimation Update](Other_Events.htm#)

This event is designed only for use with the [Skeletal Animation Functions](../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Skeletal_Animation.md). It's triggered in an object which has a skeletal animation sprite assigned to it, whenever that sprite is drawn in that object. It allows you to make changes to the skeletal sprite (e.g. bone orientations) before it is drawn.

[Animation EventAnimation Event](Other_Events.htm#)

This event is designed only for use with the [Skeletal Animation Functions](../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Skeletal_Animation.md). It'is triggered in an object which has a skeletal animation sprite assigned to it, and where the object is using the default draw for the assigned sprite, or the sprite is being drawn via draw\_self(). It won't trigger on skeleton animation sprites drawn any other way. The event is designed to capture and transmit data that has been assigned to particular events in the sprite animation as defined in the editor used to make them.

When the Animation Event is triggered, a special [DS Map](../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/DS_Maps.md) will be created called the event\_data map (much the same as we have the async\_load map for an async event). This map will have all of the following key/value pairs that you can parse to get information about the event:

-   "name": the name of the event (as defined in the animation program)
-   "track": the index of the track the animation is playing on (default is 0)
-   "integer": an integer value associated with the event (as defined in the animation program, default is 0)
-   "float": a float value associated with the event (as defined in the animation program, default is 0.0)
-   "string": a string value associated with the event (as defined in the animation program, default is an empty string "")

[Path EndedPath Ended](Other_Events.htm#)

[Paths](../Paths.md) can be an important part of making any game, whether it is for a tower defence type game, or a shoot-em-up or whatever, and it's often really important that an instance does some particular action when it reaches the end of its path. This event detects this and is triggered when it happens allowing you to add in code or actions to deal with the circumstances, for example in a tower defence game you would use this to destroy the instance and remove a health point from the goal object.

[User EventsUser Events](Other_Events.htm#)

These are special events that are not triggered by GameMaker automatically, but have to be _implicitly_ called by you using code or actions while the game is running. There are 16 user events in total and they can contain code or actions and they can be called at any time in the game loop, making them very useful for creating your own events that happen when _you_ decide.

[Broadcast MessageBroadcast Message](Other_Events.htm#)

This event is triggered whenever a sprite or a sequence generates a broadcast message string. For more information please see the page on [Broadcast Messages](../Sequence_Properties/Broadcast_Messages.md).

[Wallpaper EventsWallpaper Events](Other_Events.htm#)

Wallpaper events are triggered by the Wallpaper Companion App. For more information, see the page on the [Wallpaper Events](Wallpaper_Config_Event.md).