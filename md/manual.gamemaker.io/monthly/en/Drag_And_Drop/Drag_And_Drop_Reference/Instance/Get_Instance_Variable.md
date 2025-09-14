---
title: "Get Instance Variable"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Instance/Get_Instance_Variable.htm"
converted: "2025-09-14T03:59:26.000Z"
---

# ![Get INstance Variable Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/i_Instance_Get_Instance_Variable.png) Get Instance Variable

With this action you can get any of the listed **built-in** instance variables. All instances of all objects have a number of variables already created within them to hold essential information like the current x/y position, the speed, the direction, visibility and many other things. The instance variables that you can get the values of are:

-   [X Coordinate](../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/x.md)\- The position along the x axis in the room.
-   [Y Coordinate](../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/y.md) - The position along the y axis in the room.
-   [Direction](../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/direction.md) - The direction of movement for the instance (default is 0, where right is 0°, up is 90°, left is 180° and down is 270°).
-   [Speed](../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/speed.md) - The speed (in pixels per game frame) that the instance is moving at.
-   [Horizontal Speed](../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/hspeed.md) - The horizontal speed (in pixels per game frame) that the instance is moving at. A negative speed means it is moving left, a positive speed is right and the default is 0.
-   [Vertical Speed](../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/vspeed.md) - The vertical speed (in pixels per game frame) that the instance is moving at. A negative speed means it is moving up, a positive speed is down and the default is 0.
-   [Visible](../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/visible.md) - The visibility toggle variable (default is true unless set otherwise in [The Object Editor](../../../The_Asset_Editors/Objects.md), set to false to make invisible). Note that an invisible instance still runs all its events, _except_ the Draw Event.
-   [Persistent](../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/persistent.md) - The persistence toggle variable (default is false unless set otherwise in [The Object Editor](../../../The_Asset_Editors/Objects.md), set to true to make persistent). This will make an instance "persist" from room to room, i.e.: the instance will not be cleaned up on room end but instead will be carried over to the next room. Note that when an instance is persisted it will _not_ call its Create nor Destroy event, but will call the Clean Up, Room End, and Room Start events.
-   [Layer](../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/layer.md) - The layer that the instance has been assigned to.
-   [Depth](../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/depth.md) - The depth value assigned to the layer.
-   [Sprite](../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/sprite_index.md) - The sprite asset assigned to the instance.
-   [Image Index](../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_index.md) - The image index of the sprite assigned. This value sets the frame of the sprite assigned to the instance, and if the value is greater than the number of frames in the animation it will "loop" such that a sprite with 5 frames if set to frame 7 will actually show frame 2.
-   [Image Angle](../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_angle.md) - The angle that the instance should be set to (default is 0, where right is 0°, up is 90°, left is 180° and down is 270°).
-   [Image Alpha](../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_alpha.md) - The alpha value for the instance (default is 1) from 0 to 1, where 0 is full transparent and 1 is fully opaque.
-   [Image Blend](../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_blend.md) - The colour to be blended with the instance sprite (default is white).
-   [Image Speed](../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_speed.md) - The animation speed for the instance.
-   [In Sequence](../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_speed.md) - This variable will be set to true if the instance is currently included in a sequence, and false otherwise.
-   [Horizontal Scale](../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_xscale.md) - The horizontal scale at which the instance sprite should be drawn (this will also affect the instance bounding box and collisions). A scale of 1 indicates no scaling (1:1), smaller values will scale down (0.5, for example, will half the width of the sprite), larger values will scale up and negative values will mirror the sprite _and_ scale it unless the value used is exactly -1 (in which case the sprite is just mirrored along the y-axis with no scaling).
-   [Vertical Scale](../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_yscale.md) - The vertical scale at which the instance sprite should be drawn (this will also affect the instance bounding box and collisions). A scale of 1 indicates no scaling (1:1), smaller values will scale down (0.5, for example, will half the height of the sprite), larger values will scale up and negative values will flip the sprite _and_ scale it unless the value used is exactly -1 (in which case the sprite is just flipped along the y-axis with no scaling).
-   [Mask](../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/mask_index.md) - The mask sprite for the instance. The default value is an invalid handle (-1) (which means the instance will use the collision mask for the currently assigned sprite), but if set to any other sprite, the collision mask for that instance will be used instead of the sprite assigned to the sprite index.
-   [Friction](../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/friction.md) - The friction to use each game frame of the game to slow down the instance. This value will simply be deducted from the current speed value each game frame (or added if the speed value is negative).
-   [Gravity](../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/gravity.md) - Gravity will apply a constant force in the gravity direction (see below) of the instance, influencing its speed (default is 0). Note that gravity is a cumulative force and will accelerate the object if you choose not to cap the final speed.
-   [Gravity Direction](../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/gravity_direction.md)\- This can be used to set the direction of movement when the instances gravity is greater than 0 (default is 270). Note that directions in GameMaker are calculated as 0° being right, 90° being up, 180° being left and 270° being down.
-   [Score](../Instance_Vars/Set_Score.md) - Set the [score](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/score.md) variable.
-   [Lives](../Instance_Vars/Set_Lives.md) - Set the [lives](../../../../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/lives.md) variable.
-   [Health](../Instance_Vars/Set_Health.md) - Set the [health](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/health.md) variable.

Once you select the built-in variable to get, you then set the target variable to hold the returned value. If you flag this variable as a temporary variable then it will be created for you in the action and will be available only until the end of the event or action script. You can also retrieve the values of additional variables in the same action by clicking the plus icon ![Expand Arguments Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Icon_Expand_Arguments.png) beside the action, and selecting another instance variable and giving an accompanying variable to store the returned value.

#### Action Syntax:

![Get INstance Variable Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/a_Instance_Get_Instance_Variable.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Variable | The built-in variable to get |
| Target | The target variable to use to hold the returned value |

#### Example:

![Get Instance Variable Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/e_Instance_Set_Instance_Variable.png)

The above action block code gets the values for the previous x/y position and then compares them to the current x/y position. If they are not the same, then the sprite for the instance is changed and its image index is set to 0.