---
title: "Draw Events"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Object_Properties/Draw_Events.htm"
converted: "2025-09-14T04:00:15.781Z"
---

# Draw Events

![The Draw Event](../../assets/Images/Asset_Editors/Editor_Objects_Draw.png)The Draw event category is the one that has all the events that govern what you see on the screen when you run your game. It is split into various separate events to better handle the different drawing requirements for your game. The image below illustrates the order in which the events are performed:

![Object Editor Draw Diagram](../../assets/Images/Asset_Editors/Editor_Events_DrawOrder.png)The normal Draw event falls into three sub-types: The **Draw Begin**, the standard **Draw** and the **Draw End** events. In general, you will only need to use the standard Draw event and you should be aware that all instances in a room will have this event triggered each step of the game, so this event will always be called as long as the instance has the [visible](../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/visible.md) flag set to true. It is important to understand that even if you have defined nothing for this sub-event in the object properties (i.e.: no code nor actions), _if the object has a sprite assigned it will still have a Draw event which will be triggered_. This is because GameMaker has two ways to draw things in the Draw event:

-   The **default draw**, which is when you define the sprite in the object properties and place no actions or code in the normal Draw event. In this case GameMaker will draw the assigned sprite automatically, or nothing if you don't assign a sprite. Note that any changes you make in other events to e.g. [image\_xscale](../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_xscale.md), [image\_yscale](../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_yscale.md), [sprite\_index](../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/sprite_index.md), [image\_blend](../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_blend.md), etc., will be reflected too as long as the Draw event is empty.
-   The **custom draw**, which is when you place code or actions in the Draw event. This is telling GameMaker "_I want to control what you draw for instances of this object_" and it completely overrides the default drawing. This means that, for example, you can have an object with a sprite assigned, then set the Draw event to draw text and the text will be drawn on-screen, but the sprite will _not_ be drawn as you have not told GameMaker to draw it along with the text. To draw the instance as normal while using a Draw event, call [draw\_self](../../GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_self.md).

Either of the above two (the **default draw** or **custom draw**) will always draw to the space where the instance is present: either in the room (placed in an Instance layer) or in a [UI layer](../Room_Properties/UI_Layers.md). If placed in a UI layer, the Draw event will draw to either the viewport area or the GUI layer depending on the type of UI layer it is placed in.

The rest of the Draw events are explained in the sections listed below:

[Draw Begin And Draw EndDraw Begin And Draw End](Draw_Events.htm#)

Apart from the main Draw event, you also have a **Draw Begin** and a **Draw End** event too. These act exactly the same as a standard Draw event (i.e.: they will draw whatever you put in them every step of the game and for all viewports), but they do not "default draw" anything if they have not been explicitly added to an object, and they will always run before/after the standard Draw event. So, when the game is running you will _always_ have the Draw Begin event for all instances, then the Draw event for all instances, then finally the Draw End event for all instances.

In this way, you can draw things or set draw properties in the Draw Begin step in one instance and be sure that all instances with a standard Draw event or Draw End event will use these properties or draw over what the first instance has drawn. Basically it's a sure fire way to guarantee that certain things are drawn at certain times, much like the **Begin Step** and **End Step** events do.

There are a few things to note when drawing things in GameMaker, whether it's a sprite you are drawing or a shader, or a 3D model stored in a vertex buffer:

-   The Draw event is a very intensive event, in that it's one of the events that takes up most time and resources... To that end it is never a good idea to do anything in the Draw event other than drawing. So save your large code or complex actions for the Step event or Alarms or whatever other event fits, but leave the Draw event clear for the drawing as that's what it does best.
-   If your object has had the visible parameter set to _off_ (so that the instances of the object are not drawn) then **all Draw events are skipped** (except for the **Resize** event). This means that making an instance invisible will stop all code placed in any of these events from running, so don't put essential code in the Draw events if they are not going to be visible.
-   What you draw has nothing to do with the collision engine you choose (traditional or physics) as that is defined by the object properties and the sprite (or mask) that the object has been given.

[Draw GUIDraw GUI](Draw_Events.htm#)

The Draw GUI event type falls under the Draw Event category and is specifically designed for drawing GUI elements that are not affected by the view camera scale or rotation. This means that you can have an instance draw all the elements for your HUD or user interface without having to base all the positioning of the elements on the instance position within the room or the position of the current camera view.

All contents of [UI Layers](../Room_Properties/UI_Layers.md) are drawn to the GUI layer however they are drawn before any of the Draw GUI events are run.

When drawing in these events it is important that you understand that the draw coordinates do not change even when camera views are active and (0,0) is _always_ the top left hand corner of either the application surface or the display (see the note at the bottom of this section), and the default width and height are 1:1 with the application surface. Depth ordering is still maintained between different instances on different layers (so an instance on a higher layer will be drawn under one at a lower layer) and also within the events themselves, as the **Draw GUI Begin** event will draw for all instances first, then the standard **Draw GUI** will draw for all instances over that, and finally the **Draw GUI End** event is triggered.

In this way, you can draw things or set draw properties in the Draw GUI Begin in one instance and be sure that all instances with a standard Draw GUI or Draw GUI End event will use these properties or draw over what the first instance has drawn. Basically it's a sure fire way to guarantee that certain things are drawn at certain times, much like the **Begin Step** and **End Step** events do.

These events can also be used in conjunction with the normal Draw events (which will be affected by the camera view position, scale and rotation as normal). If you have no Draw Event but you do have a Draw GUI Event, then GameMaker will still default draw the sprite for the instance (if it has one) as normal.

With relation to the other draw events, the Draw GUI events will always draw over anything drawn in the normal draw events. So, if you have an instance on a lower layer with a Draw GUI event, it will draw over the instance that is on a higher layer with a regular Draw event. If both instances have a Draw GUI event, then the layer order will be respected.

NOTE This event will, by default, draw 1:1 with the application surface size, which is normally the size of the room or the view port. This means that when you have **Aspect Ratio Correction** on in the [Game Options](../../Settings/Game_Options.md) the GUI is not going to be drawn over the black bars that "letterbox" the game. This behavior can be switched off using the [display\_set\_gui\_maximise](../../GameMaker_Language/GML_Reference/Cameras_And_Display/display_set_gui_maximise.md) function, and you can also lock the GUI event to a specific size which will then be scaled to fit the display or application surface dimensions automatically by using the function [display\_set\_gui\_size](../../GameMaker_Language/GML_Reference/Cameras_And_Display/display_set_gui_size.md).

[Pre-Draw And Post-DrawPre-Draw And Post-Draw](Draw_Events.htm#)

The **Pre-Draw** and **Post-Draw** events are part of the Draw Event category. However, unlike the other Draw events these draw _directly_ to the display buffer, which will be the size of the combined screen space for all viewports currently visible, _or_ the window size if only using one viewport or none at all. The image below illustrates this:

![Object Editor Post Draw](../../assets/Images/Asset_Editors/Editor_Object_PostDraw.png)So, if you are using the **Pre-Draw** or **Post-Draw** events, you are drawing to the full screen render target (display buffer) which will have the same size as the window to which all viewports are made to fit. If you have no viewports active, this is instead set to the size of the window itself.

The Pre-Draw event is triggered before any other Draw event, and in it you can set values, set draw properties and even draw things without worrying about the viewports or the size of the GUI layer (the GUI layer size may be the same as the screen buffer, but it may not be since you can set the GUI resolution in code).

It is worth noting that this event happens _before_ the display buffer is cleared for regular drawing, meaning that if you do not switch off view clearing in [The Room Editor](../Rooms.md) then nothing that is drawn in the Pre-Draw event will be seen, as the first viewport draw will clear it. If you want to be able to see through the viewports themselves, or you are not using viewports at all, then you should also have set the background colour to have an alpha of 0 in [The Room Editor](../Rooms.md).

**NOTE** If you switch off these options, you may notice unwanted artefacts being drawn on the screen when the game is tested (like "trails" from instances). This is because you are drawing directly over the previous frame of the display buffer without it being cleared. However you can use [draw\_clear\_alpha](../../GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/draw_clear_alpha.md) to do this yourself.

The Post-Draw event is triggered _after_ all the standard Draw events, but _before_ the Draw GUI events. Like the Pre-Draw event, it is based on the size of the display buffer, and is placed before the Draw GUI events to enable you to perform post-processing effects and other things on a full screen basis simply and easily without interfering with any HUD/ GUI elements that you may have in your game.

[Window ResizeWindow Resize](Draw_Events.htm#) HTML5

This event type falls under the Draw Event category, and although it doesn't actually draw anything, it reacts to changes in the display buffer on HTML5.

On HTML5 it is important that you catch any resizing of the canvas. This event will do just that and is triggered every time the canvas is resized, permitting you to add custom code here that will resize the view or re-position HUD elements as necessary. This function is provided as a convenient way to avoid having Step event code that checks for these things all the time.

**NOTE** You cannot draw in this event! It is triggered by resizing the canvas and is only for catching this change. Any drawing that should be done still must be in one of the other Draw events.