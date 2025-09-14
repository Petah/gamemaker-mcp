---
title: "Built-In Instance Variables"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/Instance_Variables.htm"
converted: "2025-09-14T03:59:33.447Z"
---

# Built-In Instance Variables

When you create a new object, it will come with certain variables already initialised with default values. These variables we call **instance variables**, since they will be created for every instance you place of the object in your game rooms, and once an instance is created the values of these variables are unique to that instance and _only_ that instance. Some of these variables you will use a lot, like [x](x.md) and [y](y.md), while others are required less depending on what you want to do, but in general they are very useful and where possible you should be looking to use them rather than creating your own custom variables.

Most instance variables can be set as well as read, permitting you to change the properties and behaviour of an instance simply by tweaking the value of a certain variable - you can prevent an instance from drawing, for example, by simply setting the [visible](visible.md) built-in variable to false. Below you can find the different variables that are initialised for all instances of all objects in your game.

IMPORTANT If an instance is in a [sequence](../../../../../The_Asset_Editors/Sequences.md) then some of these variables - like [image\_xscale](../../Sprites/Sprite_Instance_Variables/image_xscale.md) / [image\_yscale](../../Sprites/Sprite_Instance_Variables/image_yscale.md) / [image\_angle](../../Sprites/Sprite_Instance_Variables/image_angle.md) / [x](x.md) / [y](y.md) - will be overwritten when the sequence updates each step after starting to be played.

## General Variables

These variables deal with general instance properties:

-   [id](id.md)
-   [visible](visible.md)
-   [solid](solid.md)
-   [persistent](persistent.md)
-   [depth](../../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/depth.md)
-   [layer](layer.md)
-   [on\_ui\_layer](on_ui_layer.md)
-   [alarm](alarm.md)

Instances also have one general variable, or rather [method](../../../../GML_Overview/Method_Variables.md), that can be defined to change how this instance is converted to [string](../../../Strings/Strings.md):


-   [toString() Method](../../../Strings/Strings.htm#tostring_method)

## Movement And Position

These variables deal with the instance position and movement:

-   [direction](direction.md)
-   [friction](friction.md)
-   [gravity](gravity.md)
-   [gravity\_direction](gravity_direction.md)
-   [hspeed](hspeed.md)
-   [vspeed](vspeed.md)
-   [speed](speed.md)
-   [xstart](xstart.md)
-   [ystart](ystart.md)
-   [x](x.md)
-   [y](y.md)
-   [xprevious](xprevious.md)
-   [yprevious](yprevious.md)

## Object Properties

The following variable holds a reference to the object that the instance was created from:

-   [object\_index](../../Objects/object_index.md)

## Sprite Properties

These variables are all related to the sprite assigned to the instance and can be used to change what is drawn and how:

-   [sprite\_index](../../Sprites/Sprite_Instance_Variables/sprite_index.md)
-   [sprite\_width](../../Sprites/Sprite_Instance_Variables/sprite_width.md)
-   [sprite\_height](../../Sprites/Sprite_Instance_Variables/sprite_height.md)
-   [sprite\_xoffset](../../Sprites/Sprite_Instance_Variables/sprite_xoffset.md)
-   [sprite\_yoffset](../../Sprites/Sprite_Instance_Variables/sprite_yoffset.md)
-   [image\_alpha](../../Sprites/Sprite_Instance_Variables/image_alpha.md)
-   [image\_angle](../../Sprites/Sprite_Instance_Variables/image_angle.md)
-   [image\_blend](../../Sprites/Sprite_Instance_Variables/image_blend.md)
-   [image\_index](../../Sprites/Sprite_Instance_Variables/image_index.md)
-   [image\_number](../../Sprites/Sprite_Instance_Variables/image_number.md)
-   [image\_speed](../../Sprites/Sprite_Instance_Variables/image_speed.md)
-   [image\_xscale](../../Sprites/Sprite_Instance_Variables/image_xscale.md)
-   [image\_yscale](../../Sprites/Sprite_Instance_Variables/image_yscale.md)

## Mask And Bounding Box

These variables deal with the collision mask:

-   [mask\_index](../../Sprites/Sprite_Instance_Variables/mask_index.md)
-   [bbox\_bottom](../../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/bbox_bottom.md)
-   [bbox\_left](../../Sprites/Sprite_Instance_Variables/bbox_left.md)
-   [bbox\_right](../../Sprites/Sprite_Instance_Variables/bbox_right.md)
-   [bbox\_top](../../Sprites/Sprite_Instance_Variables/bbox_top.md)

## Paths

These variables are related to paths and how the instance interacts with one, if assigned:

-   [path\_index](../../Paths/Path_Variables/path_index.md)
-   [path\_position](../../Paths/Path_Variables/path_position.md)
-   [path\_positionprevious](../../Paths/Path_Variables/path_positionprevious.md)
-   [path\_speed](../../Paths/Path_Variables/path_speed.md)
-   [path\_scale](../../Paths/Path_Variables/path_scale.md)
-   [path\_orientation](../../Paths/Path_Variables/path_orientation.md)
-   [path\_endaction](../../Paths/Path_Variables/path_endaction.md)

## Timelines

These variables are for setting an instance to use a timeline:

-   [timeline\_index](../../Timelines/timeline_index.md)
-   [timeline\_running](../../Timelines/timeline_running.md)
-   [timeline\_speed](../../Timelines/timeline_speed.md)
-   [timeline\_position](../../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Timelines/timeline_position.md)
-   [timeline\_loop](../../Timelines/timeline_loop.md)

## Sequences

The following variables store information regarding the Sequence that may be controlling the instance at any given time:

-   [in\_sequence](../../Sequences/in_sequence.md)
-   [sequence\_instance](../../Sequences/sequence_instance.md)

## Physics

There are a great number of built-in variables for use with the physics functions of GameMaker, and so to keep things clearer, they can be found in the section of the manual that covers everything related to the physics simulation:

-   [Physics](../../../Physics/Physics.md)