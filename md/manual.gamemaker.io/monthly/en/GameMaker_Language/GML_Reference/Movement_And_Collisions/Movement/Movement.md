---
title: "Movement"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Movement/Movement.htm"
converted: "2025-09-14T04:00:03.562Z"
---

# Movement

In any game, movement and position are of paramount importance and so GameMaker has a complete selection of functions to deal with every situation.

The two main ways of moving an instance is to either set the actual position or to set a speed/direction vector, and this can be done either using the built-in instance variables or to use specific movement functions. Both of these options are explained in the sections listed below.

## Instance Variables

The following variables are all included "built-in" to every instance and can be read and modified to change different behaviours when the instance is moving (they will affect the speed and direction vectors):

-   [direction](../../Asset_Management/Instances/Instance_Variables/direction.md)
-   [friction](../../Asset_Management/Instances/Instance_Variables/friction.md)
-   [gravity](../../Asset_Management/Instances/Instance_Variables/gravity.md)
-   [gravity\_direction](../../Asset_Management/Instances/Instance_Variables/gravity_direction.md)
-   [hspeed](../../Asset_Management/Instances/Instance_Variables/hspeed.md)
-   [vspeed](../../Asset_Management/Instances/Instance_Variables/vspeed.md)
-   [speed](../../Asset_Management/Instances/Instance_Variables/speed.md)

Other than those variables mentioned above you can also set the instance position directly using the following:

-   [x](../../Asset_Management/Instances/Instance_Variables/x.md)
-   [y](../../Asset_Management/Instances/Instance_Variables/y.md)
-   [xprevious](../../Asset_Management/Instances/Instance_Variables/xprevious.md)
-   [yprevious](../../Asset_Management/Instances/Instance_Variables/yprevious.md)
-   [xstart](../../Asset_Management/Instances/Instance_Variables/xstart.md)
-   [ystart](../../Asset_Management/Instances/Instance_Variables/ystart.md)

## Functions

The following functions can all be used to move an instance in some way, with some affecting the speed/direction vectors and others affecting the actual x/y position within the room directly:

-   [motion\_add](motion_add.md)
-   [motion\_set](motion_set.md)
-   [move\_towards\_point](move_towards_point.md)
-   [move\_bounce\_all](move_bounce_all.md)
-   [move\_bounce\_solid](move_bounce_solid.md)
-   [move\_contact\_all](move_contact_all.md)
-   [move\_contact\_solid](move_contact_solid.md)
-   [move\_outside\_all](move_outside_all.md)
-   [move\_outside\_solid](move_outside_solid.md)
-   [move\_random](move_random.md)
-   [move\_snap](move_snap.md)
-   [move\_wrap](move_wrap.md)
-   [place\_snapped](place_snapped.md)
-   [move\_and\_collide](move_and_collide.md)