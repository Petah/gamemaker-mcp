---
title: "Do Effect"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Particles/Do_Effect.htm"
converted: "2025-09-14T03:59:27.137Z"
---

# ![Do Effect Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/i_Particles_Do_Effect.png) Do Effect

This action will create a built-in particle effect, either above or below the layers being drawn in your game room. You choose the type of effect to create from the drop down list (shown in the image below), and then set the position (which can be relative to the position of the instance) and select a size - small, medium, or large - for the effect. You can also set the colour to be used - the alpha value will be ignored - and decide whether you want the effect to be created beneath all the layers in the room, or above all the layers in the room. Note that if you choose to use the rain or snow effects, then the position and size values will not be taken into account as the effect is designed to be visible across the full screen.

![Built In Effects Examples](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/BuiltIn_Effects.png)

#### Action Syntax:

![Do Effect Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/a_Particles_Do_Effect.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Type | The type of particle effect to create (see image above) |
| Where | Whether the particles should be created above or below the room layers |
| Size | The size of the effect (small, medium or large) |
| X | The x position within the room to create the effect (in pixels) |
| Y | The y position within the room to create the effect (in pixels) |
| Colour | The colour of the effect (alpha will be ignored) |

#### Example:

![Do Effect Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/e_Particles_Do_Effect.png)The above action block code will check for a mouse click and if one is detected it will create a small effect at the mouse position.