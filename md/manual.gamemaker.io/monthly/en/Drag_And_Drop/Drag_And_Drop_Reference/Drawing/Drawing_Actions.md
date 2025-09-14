---
title: "Drawing Actions"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Drawing/Drawing_Actions.htm"
converted: "2025-09-14T03:59:25.238Z"
---

# Drawing Action Library

![Drawing Action Library](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/Lib_Drawing.png)The **Drawing** action library is where you can find the actions required to draw sprites, text or shapes as well as set certain draw properties. Most of these actions are **only for use in the various [Draw Events](../../../The_Asset_Editors/Object_Properties/Draw_Events.md)** of an object, and may not work if used outside of the Draw Event. The exceptions to this are the _Set_ actions, which can be added to any event and will affect all drawing for all instances afterwards.

It is important to note that if you add any actions into the main **Draw Event** of an object, then it will _not_ draw the sprite that has been assigned to the instance unless you explicitly tell GameMaker to draw it, using an action like [Draw Self](Draw_Self.md). Basically, GameMaker will default draw any sprite assigned to an instance, only if there is _nothing_ else in the Draw Event.

The Draw actions available are as follows:

|  | Draw Self |
| --- | --- |
|  | Draw Value |
|  | Draw Transformed Value |
|  | Draw Sprite |
|  | Draw Sprite Transformed |
|  | Draw Stacked Sprites |
|  | Draw Rectangle |
|  | Draw Gradient Rectangle |
|  | Draw Ellipse |
|  | Draw Gradient Ellipse |
|  | Draw Line |
|  | Draw Healthbar |
|  | Draw Instance Score |
|  | Draw Instance Health |
|  | Draw Instance Lives |
|  | Set Draw Colour |
|  | Get Draw Colour |
|  | Set Draw Alpha |
|  | Get Draw Alpha |
|  | Set Font |
|  | Get Draw Font |
|  | Set Text Alignment |
|  | Get Text Alignment |