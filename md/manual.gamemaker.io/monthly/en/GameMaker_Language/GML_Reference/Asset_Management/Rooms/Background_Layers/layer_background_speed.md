---
title: "layer_background_speed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Background_Layers/layer_background_speed.htm"
converted: "2025-09-14T03:59:35.572Z"
---

# layer\_background\_speed

This function can be used to set the speed of an animating sprite that has been assigned to a background element. You give the background element ID (which you get when you create a background element using [layer\_background\_create()](layer_background_create.md) or when you use the function [layer\_background\_get\_id()](layer_background_get_id.md)), and then set the animation speed. If the IDE has set the animation speed for the sprite used to be calculated as Frames Per Game Frame, then the speed value given is a _multiplier_, with 1 being the default value, and setting it to 0.5 will half the animation speed, while setting it to 2 will double it. However, if the IDE has set the animation speed for the sprite used to be calculated as Frames Per Second, then the speed value given is a literal frames per second value, so setting this to 5, for example, will set the animation to loop 5 frames every second that the game runs. If the background element has no sprite attached or the sprite used has no sub-images, this function will have no effect.

#### Syntax:

layer\_background\_speed(background\_element\_id, speed);

| Argument | Type | Description |
| --- | --- | --- |
| background_element_id | Background Element ID | The unique ID value of the background element to change |
| speed | Real | The speed multiplier/value to use for the element |

#### Returns:

N/A

#### Example:

var lay\_id = layer\_get\_id("Background\_water");
var back\_id = layer\_background\_get\_id(lay\_id);
layer\_background\_speed(back\_id, 0.5);

The above code will get the layer handle for the layer named "Background\_water" and then use that to get the ID of the background element on that layer. This ID is then used to change the element image speed.