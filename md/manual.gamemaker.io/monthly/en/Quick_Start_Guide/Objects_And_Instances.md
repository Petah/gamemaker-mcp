---
title: "Objects And Instances"
source: "manual.gamemaker.io/monthly/en/Quick_Start_Guide/Objects_And_Instances.htm"
converted: "2025-09-14T04:00:13.124Z"
---

# Objects And Instances

With the assets you have seen so far you can add some nice images and sounds to your game's asset browser, but they don't do anything in the game itself yet! For that we need the most important asset of all in GameMaker, the **Object** asset.

Objects are a special asset that we use to control aspects of a game and to do specific things. Most of the time they have a sprite associated with them so that you can see them in the game rooms, but sometimes they are used as a "behind the scenes" **controller** objects to do things like track stats, or set timings for cutscenes, etc... Objects can be given behaviours and they can react to certain events as well as to each other, and most of the things you see in a game are based on objects and their interactions with the user and each other.

## Instances

Now, we can't talk about Objects without talking about **Instances**. In a game made with GameMaker, the characters, monsters, balls, walls, etc... that you see in the game are actually all considered as being **instances**.

An instance is essentially a "copy" of an object that is placed in a room (think of objects as **templates** for instances). So when we talk about something affecting or changing an instance, we mean that one particular copy of an object in a room is being affected while all the rest are not, but when we talk about affecting or changing an object we mean that anything we do to it will be reflected in all the instances created from that point on too.

So, **the object is the template for the instance, and the instance is what we place in a room to make our game**.

NOTE The detailed differences between objects and instances at runtime are described on [Objects vs. Instances](../Additional_Information/Objects_vs_Instances.md).

## Object Editor

To create a new object asset, it's the same as for every other asset as you simply right click ![Icon RMB](../assets/Images/Icons/Icon_RMB.png) anywhere in the Asset Browser and select **Create -> Object**.

![The Object Editor](../assets/Images/QS_Guide/QS_ObjectEditor.png)

This is the [Object Editor](../The_Asset_Editors/Objects.md) window and shows the current object properties, and the first thing you should do is name the object, again using a prefix like "obj\_" or some other identifier.

In general, for an object to draw anything and register collisions with instances of other objects, it needs to have a sprite assigned to it, which is added using the ![Add Sprite Icon ](../assets/Images/Icons/Icon_AddSound.png) button. This will open the **Asset Explorer** where you can select the sprite to use (you can also drag sprites from the Asset Browser and drop them onto the Object Editor to assign them):

![The Asset Explorer](../assets/Images/QS_Guide/QS_AssetExplorer.png)

If you do not have an appropriate sprite yet, you can click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on the _New Sprite_ button ![New Sprite Icon](../assets/Images/Icons/Icon_NewSprite.png) to create a new sprite asset and edit it as you wish, just as if you had created the asset through the standard sprite create options, only now it will automatically be assigned to the object that you had open when you started to create it.

Once you select a sprite for the object, you can click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on the _Edit Sprite_ ![Edit Sprite Icon](../assets/Images/Icons/Icon_EditSprite.png) or _Edit Image_ ![Edit Image Icon](../assets/Images/Icons/Icon_EditImage.png) buttons to edit either the sprite asset's properties, or the images inside the sprite, respectively. This can be faster than first finding the sprite in the Asset Browser and then indicating you want to edit it.

Once you have added a sprite, you can change a few other object properties like whether it should be **visible** or not, or what kind of **collision mask** it should have. For simple games you probably don't need to change anything here and can now go on to add **Events** to the object.

## Events

Events are discrete moments in the game loop where things are made to happen by programming them. GameMaker works with cycles of these events - from the moment a room is started to the moment it is finished, there is a game loop running where every step (frame), a series of events are run, and you can choose to place GML Code or GML Visual actions in your instances that respond to these events (a **step** is a moment in game time, usually 60 per second, which is governed by the [game speed setting](../Settings/Game_Options.md)).

To add an event you click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on the **Add Event** button:

![The Object Editor Events](../assets/Images/QS_Guide/QS_ObjectEditor_Events.png)

Above you can see all the different **Event Categories**, some of which contain other sub-categories. We won't go through all the events here, but we will cover the five most important ones briefly:

|  | Create Event | This event happens when an instance of the object is first created, and is the very first thing that happens within an instance that has been placed in the room through the room editor when a room is entered (or when an instance is created at runtime). This means that this event is the ideal place to initialise variables, create functions, set paths etc... and do anything else that generally only needs to be done once or only when an instance first appears in the room. |
| --- | --- | --- |
|  | Step Event | GameMaker splits game time into steps with the game speed defining how many of these steps there are supposed to be per second. A step is basically the loop that runs constantly with all the events being checked and triggered as necessary while the game runs, so as you can imagine, the Step Event is an event that is checked every single step of the game while the instance exists. Note that the Step Event category has three sub-categories to "fine tune" timing within the instance, but in general you will use the main Step Event most. |
|  | Collision Event | Obviously when making a game, it is very important that you know when two (or more) instances of an object have collided, and for that we have the collision event. This is an event that you place in an object and then specify against which other object you should be checking for collisions. Once you have added the event and chosen the object to check for, you can add GML Code or GML Visual to resolve the collision. |
|  | Draw Event | There are different Draw Events within the draw event category, but the one you use most is the one at the top simply called "Draw". This general draw event will be called, like the step event, every game frame, but it works in two different ways. The first is when you don't add this event to the object... When there is no specified Draw Event, then GameMaker will default to drawing the sprite assigned to the object, using any transforms that have been applied elsewhere in the object (like to change its size or alpha blending), so even when no Draw Event is listed in the Events list, it is still being run and will still draw to the screen when an instance is placed in a room. The second way it works is when you add the event itself and include any GML Code or GML Visual in it. Adding something to the event tells GameMaker "I want to control what you draw for instances of this object" and it completely overrides the default draw. This means that you can have an object with a sprite assigned, then set the draw event to draw text and the sprite will not be drawn as you have not told GameMaker to draw it, although the text will be. |
|  | Destroy Event | This event is the very last event to be executed when an instance is destroyed. It is often overlooked when adding behaviours to objects, but it can be very useful - for example, for creating explosion or particle effects when an enemy is killed, or for re-spawning a new instance of the object in another part of the room, or even for adding points onto a score. |

For further information on all the different events, please see [here](../The_Asset_Editors/Object_Properties/Object_Events.md).

You can click on an event in the list to add it to the object.

At this point, you may be asked to choose between GML Visual and GML Code. See [GameMaker Language](../GameMaker_Language.md) for more information.

Adding an event will open either the GML Code or GML Visual editor, depending what type of event you are creating. In this window you can now add the code or actions that you wish to be performed each time that event is triggered within the game loop.

![Object Editor Chained Windows](../assets/Images/QS_Guide/QS_ObjectEditor_Chain.png)

You can find more information about using GML in your object events from the two pages given below:

-   [GML Visual](../Drag_And_Drop/Drag_And_Drop_Index.md)
-   [GML Code](../GameMaker_Language/GameMaker_Language_Index.md)

And you can find a full explanation of all the different parts of the Object Editor here:

-   [Editors: The Object Editor](../The_Asset_Editors/Objects.md)

The next part of this guide will look at one more resource type, **Sequences**...