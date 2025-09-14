---
title: "depth"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/depth.htm"
converted: "2025-09-14T03:59:33.478Z"
---

# depth

When you create an object you can assign it an initial _depth_ which defines how the instances of that object will be drawn in the room when the game is being played and this variable can be used to get and to change that depth value while the game is running. You would normally not need to use this variable as you should be setting instances to be added to discreet [layers](layer.md), which in turn are set to a specific depth, but it may be that you want to change the depth of an instance using this value, in which case a "temporary layer" will be created specifically for the instance at the given depth. Note that when no instances are on the same depth then this temporary layer will be removed from memory (unlike regular layers which will remain even if they have nothing on them).

IMPORTANT When you modify the depth variable and GameMaker manages the layers, the built-in [layer](layer.md) variable will hold an invalid layer handle (\-1) instead of a valid one, since managed layers cannot be manipulated through code.

NOTE Depth values are approximate. If you try to draw things at depth values close to the maximum depth and minimum depth, they may not be drawn due to inaccuracies introduced by the calculations.

In GameMaker the lower the depth value for an instance, the "closer to the camera" that instance will be drawn, while a higher depth value means that the instance will be drawn "further away from the camera", i.e.: -1000 is drawn on top of -100, which is drawn on top of 0, and so on.

![Depth sorting example image](../../../../../assets/Images/Scripting_Reference/GML/Reference/Instances/depth_image.png)Note that instances that have the **same** depth may be drawn **above _or_ below one another** regardless of how it appears in [The Room Editor](../../../../../../../../The_Asset_Editors/Rooms.md). This is not guaranteed to be consistent between target platforms as it will depend on the graphics device in use. If you want to guarantee that something is drawn over or under everything else, you should always set the depth (or layer) explicitly.

Also note that there is a minimum (\-16000) and maximum (16000) depth value outside of which instances will not be drawn, although they will still exist and process events.

IMPORTANT The minimum and maximum depth values are approximate. As a result, when you set the draw depth to a value close to these limits, what you're drawing might not be drawn.

NOTE You **cannot** set the depth of an instance in its Draw event (all other events are fine). You can, however, set the depth at which to draw things in the Draw event using [gpu\_set\_depth](../../../Drawing/GPU_Control/gpu_set_depth.md).

Keep in mind that modifying the depth of an instance may change which [Filters & Effects](../../../../../../../../The_Asset_Editors/Room_Properties/Filters_and_Effects.md) are applied on it, as changing the depth to be lower than an FX layer's depth will no longer apply its effect on the instance.

#### Syntax:

depth

#### Returns:

[Real](../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) (single precision floating point value)

#### Example:

if (y != yprevious)
{
    depth = -y;
}

The above code will check to see if the y position has changed and if it has then the depth will also be set to correspond to it.